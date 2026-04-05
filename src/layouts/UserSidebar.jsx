import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userAvatar from '../assets/profile_image/user.jpg';

const UserSidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-full md:w-64 shrink-0 space-y-2">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img src={userAvatar} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm">Jenna Ortega</p>
                        <p className="text-xs text-slate-500">jenna@videobelajar.id</p>
                    </div>
                </div>

                <Link
                    to="/profile"
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${isActive('/profile')
                        ? 'text-primary bg-yellow-50 border-l-4 border-yellow-500 font-bold'
                        : 'text-slate-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                >
                    Profil Saya
                </Link>
                <Link
                    to="/my-courses"
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${isActive('/my-courses')
                        ? 'text-primary bg-green-50 border-l-4 border-green-500 font-bold'
                        : 'text-slate-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                >
                    Kelas Saya
                </Link>
                <Link
                    to="/my-orders"
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive('/my-orders')
                        ? 'text-primary bg-green-50 border-l-4 border-green-500 font-bold'
                        : 'text-slate-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                >
                    Pesanan Saya
                </Link>
            </div>
        </div>
    );
};

export default UserSidebar;
