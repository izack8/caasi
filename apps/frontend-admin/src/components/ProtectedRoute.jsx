// components/ProtectedRoute.js
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user || !localStorage.getItem('token')) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;