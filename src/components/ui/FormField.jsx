import React from 'react';

const FormField = ({ label, required, error, children, className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-slate-900 font-medium mb-1.5 text-sm">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                {children}
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default FormField;
