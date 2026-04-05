import React, { useState } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import UserSidebar from '../layouts/UserSidebar';
import Button from '../components/ui/Button';

const UserProfile = () => {
    return (
        <div className="flex flex-col min-h-screen bg-surface font-sans">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-12 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <UserSidebar />

                    <div className="flex-1">
                        <div className="mb-6">
                            <h1 className="font-bold text-2xl text-slate-900 mb-2">Ubah Profil</h1>
                            <p className="text-slate-500 text-sm">Ubah data diri Anda</p>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
                            <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-4 mb-8 border border-slate-100">
                                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                                    <img src="/src/assets/profile_image/user.jpg" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-900">Jennie Ruby Jane</h3>
                                    <p className="text-slate-500 text-sm mb-1">rubyjane@gmail.com</p>
                                    <button className="text-xs font-bold text-orange-500 hover:underline">Ganti Foto Profil</button>
                                </div>
                            </div>

                            <div className="space-y-6 max-w-2xl">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue="Jennie Ruby Jane"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                                        />
                                        <div className="absolute top-0 left-2 -mt-2.5 bg-white px-1 text-xs text-green-500 font-medium">
                                            Nama Lengkap
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            defaultValue="rubyjane@gmail.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                                        />
                                        <div className="absolute top-0 left-2 -mt-2.5 bg-white px-1 text-xs text-slate-400">
                                            E-Mail
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">No. Hp</label>
                                    <div className="flex gap-4">
                                        <div className="w-24 relative">
                                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 appearance-none bg-white">
                                                <option>+62</option>
                                                <option>+1</option>
                                            </select>
                                        </div>
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                defaultValue="81234567890"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                                            />
                                            <div className="absolute top-0 left-2 -mt-2.5 bg-white px-1 text-xs text-slate-400">
                                                No. Hp
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Button variant="primary" className="bg-green-500 hover:bg-green-600 shadow-green-200 px-8">
                                        Simpan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;
