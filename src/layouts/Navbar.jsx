import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import logo from '../assets/logo.png';
import userAvatar from '../assets/profile_image/user.jpg';

const Navbar = () => {
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
        <nav className="bg-white border-b border-gray-100 py-4 px-4 md:px-12 flex items-center justify-between sticky top-0 z-50 max-w-7xl mx-auto w-full shadow-lg">
            <Link to="/">
                <img src={logo} alt="Video Belajar Logo" className="h-10 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/all-courses" className="hover:text-secondary font-medium">Kategori</Link>

                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center focus:outline-none"
                    >
                        <img
                            src={userAvatar}
                            alt="User"
                            className="w-9 h-9 rounded-full bg-gray-200 hover:ring-2 hover:ring-secondary transition-all"
                        />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100 z-50">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-bold text-slate-900 leading-none">Jenna Ortega</p>
                                <p className="text-xs font-medium text-slate-500 truncate mt-1">jenna@videobelajar.id</p>
                            </div>
                            <Link to="/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 hover:text-primary">
                                Profil Saya
                            </Link>
                            <Link to="/my-courses" className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 hover:text-primary">
                                Kelas Saya
                            </Link>
                            <Link to="/my-orders" className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 hover:text-primary">
                                Pesanan Saya
                            </Link>
                            <div className="border-t border-gray-100 mt-1">
                                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2">
                                    Keluar <LogOut className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
