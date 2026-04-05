import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-green-600",
        secondary: "bg-secondary text-white hover:bg-yellow-500",
        outline: "border border-gray-200 text-slate-700 hover:bg-gray-50 bg-white",
        ghost: "text-slate-700 hover:bg-gray-50 shadow-none hover:shadow-none",
        link: "text-slate-600 hover:text-slate-900 shadow-none hover:shadow-none px-0 py-0",
        muted: "bg-muted text-primary hover:bg-green-100"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
