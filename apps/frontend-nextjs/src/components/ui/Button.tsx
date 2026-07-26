'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'default' | 'ghost' | 'active' | 'primary' | 'secondary' | 'danger' | 'live' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

function Button({ 
    children, 
    onClick, 
    disabled = false, 
    variant = 'default', 
    size = 'md',
    className = '',
    ...props 
}: ButtonProps) {
    const baseClasses = 'font-medium rounded-lg transition-all duration-200';
    
    const variants: Record<ButtonVariant, string> = {
        default: 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white',
        ghost: 'bg-slate-500/40 text-slate-300 hover:bg-slate-700 hover:text-white',
        active: 'bg-sky-600 text-white',
        primary: 'bg-blue-700 text-white hover:bg-blue-600',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        live: 'bg-sky-700 text-white hover:bg-sky-600',
        glass: 'rounded-xl transition-all duration-300 group bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 p-4 shadow-lg hover:shadow-xl hover:scale-[1.02]'
    };
    
    const sizes: Record<ButtonSize, string> = {
        sm: 'px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm',
        md: 'px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:text-base',
        lg: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:text-lg'
    };
    
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;