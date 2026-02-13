import SparkleText from '../animation/Sparkles';

function Button({ 
    children, 
    onClick, 
    disabled = false, 
    variant = 'default', 
    size = 'md',
    className = '',
    ...props 
}) {
    const baseClasses = 'font-medium rounded-lg transition-all duration-200';
    
    const variants = {
        default: 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white',
        ghost: 'bg-slate-500/40 text-slate-300 hover:bg-slate-700 hover:text-white',
        active: 'bg-sky-600 text-white',
        primary: 'bg-blue-700 text-white hover:bg-blue-600',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        live: 'bg-sky-700 text-white hover:bg-sky-600',
    };
    
    const sizes = {
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