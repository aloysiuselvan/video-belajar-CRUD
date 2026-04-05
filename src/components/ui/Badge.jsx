import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

    const variants = {
        default: "bg-gray-100 text-gray-800",
        primary: "bg-green-100 text-green-800",
        secondary: "bg-yellow-100 text-yellow-800",
        outline: "border border-gray-200 text-slate-500"
    };

    return (
        <span
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
