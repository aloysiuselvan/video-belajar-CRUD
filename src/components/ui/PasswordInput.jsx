import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from './Input';

const PasswordInput = ({ className = '', ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input
                type={showPassword ? 'text' : 'password'}
                className={`pr-10 ${className}`}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
            >
                {showPassword ? (
                    <Eye className="w-5 h-5" />
                ) : (
                    <EyeOff className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default PasswordInput;
