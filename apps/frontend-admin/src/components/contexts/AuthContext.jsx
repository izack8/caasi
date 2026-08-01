// contexts/AuthContext.js
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { AUTH_ENDPOINTS } from '../../config';

const AuthContext = createContext();

const decodeTokenPayload = (token) => {
    try {
        const payload = token.split('.')[1];
        if (!payload) {
            return null;
        }

        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
        const paddedBase64 = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
        return JSON.parse(atob(paddedBase64));
    } catch {
        return null;
    }
};

const isTokenExpired = (token) => {
    const payload = decodeTokenPayload(token);
    if (!payload || typeof payload.exp !== 'number') {
        return true;
    }

    return payload.exp * 1000 <= Date.now();
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    }, []);

    useEffect(() => {
        const syncFromToken = (storedToken) => {
            if (!storedToken || isTokenExpired(storedToken)) {
                logout();
                return;
            }

            const payload = decodeTokenPayload(storedToken);
            setUser({ username: payload?.sub || 'admin' });
            setToken(storedToken);
        };

        syncFromToken(token);
        setLoading(false);

        const handleStorageChange = (event) => {
            if (event.key === 'token') {
                syncFromToken(event.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [token, logout]);

    useEffect(() => {
        if (!token) {
            return;
        }

        const payload = decodeTokenPayload(token);
        if (!payload || typeof payload.exp !== 'number') {
            logout();
            return;
        }

        const timeoutId = window.setTimeout(() => {
            logout();
        }, Math.max((payload.exp * 1000) - Date.now(), 0));

        return () => window.clearTimeout(timeoutId);
    }, [token, logout]);

    const login = async (username, password) => {
        try {
            const response = await fetch(AUTH_ENDPOINTS.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            setToken(data.access_token);
            setUser({ username });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};