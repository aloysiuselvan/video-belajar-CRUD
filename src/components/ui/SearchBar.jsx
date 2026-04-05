import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = 'Search...', className = '', ...props }) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...props}
            />
        </div>
    );
};

export default SearchBar;
