import React, { forwardRef } from 'react';

const Input = forwardRef(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`w-full py-2.5 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400 ${className}`}
            {...props}
        />
    );
});

Input.displayName = "Input";

export default Input;
