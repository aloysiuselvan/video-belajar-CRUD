import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Input from './Input';
import idFlag from '../../assets/flags/id.png';
import usFlag from '../../assets/flags/us.png';
import gbFlag from '../../assets/flags/gb.png';
import myFlag from '../../assets/flags/my.png';
import sgFlag from '../../assets/flags/sg.png';

const countries = [
    { code: '+62', name: 'Indonesia', flag: idFlag },
    { code: '+1', name: 'United States', flag: usFlag },
    { code: '+44', name: 'United Kingdom', flag: gbFlag },
    { code: '+60', name: 'Malaysia', flag: myFlag },
    { code: '+65', name: 'Singapore', flag: sgFlag },
];

const PhoneInput = ({ className = '', ...props }) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                    <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.code}
                        className="w-6 h-4 object-cover rounded shadow-sm"
                    />
                    <span className="text-slate-900 font-medium text-sm">{selectedCountry.code}</span>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1 z-30">
                        {countries.map((country) => (
                            <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                    setSelectedCountry(country);
                                    setIsOpen(false);
                                }}
                                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left group border-b border-gray-50 last:border-0"
                            >
                                <img
                                    src={country.flag}
                                    alt={country.code}
                                    className="w-6 h-4 object-cover rounded shadow-sm"
                                />
                                <span className="text-slate-900 font-medium text-sm">{country.code}</span>
                                <span className="text-slate-500 text-xs ml-auto">{country.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative w-full">
                <Input type="tel" placeholder="812-3456-7890" {...props} />
            </div>
        </div>
    );
};

export default PhoneInput;
