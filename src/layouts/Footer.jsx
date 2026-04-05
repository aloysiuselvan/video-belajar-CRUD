import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 md:px-12 mt-auto max-w-7xl mx-auto w-full">
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
                <div className="max-w-xs mx-auto md:mx-0">
                    <img src={logo} alt="Video Belajar Logo" className="h-10 w-auto mb-4 mx-auto md:mx-0" />
                    <h2 className="font-bold text-slate-900 text-lg mb-4 leading-tight">
                        Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                    </h2>
                    <p className="text-slate-900 mb-2">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className="text-slate-900 mb-4">+62-877-7123-1234</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-slate-900">Kategori</h4>
                        <div className="flex flex-col gap-3 text-slate-500 text-sm">
                            <a href="#" className="hover:text-secondary">Digital & Teknologi</a>
                            <a href="#" className="hover:text-secondary">Pemasaran</a>
                            <a href="#" className="hover:text-secondary">Manajemen Bisnis</a>
                            <a href="#" className="hover:text-secondary">Pengembangan Diri</a>
                            <a href="#" className="hover:text-secondary">Desain</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-slate-900">Perusahaan</h4>
                        <div className="flex flex-col gap-3 text-slate-500 text-sm">
                            <a href="#" className="hover:text-secondary">Tentang Kami</a>
                            <a href="#" className="hover:text-secondary">FAQ</a>
                            <a href="#" className="hover:text-secondary">Kebijakan Privasi</a>
                            <a href="#" className="hover:text-secondary">Ketentuan Layanan</a>
                            <a href="#" className="hover:text-secondary">Bantuan</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-slate-900">Komunitas</h4>
                        <div className="flex flex-col gap-3 text-slate-500 text-sm">
                            <a href="#" className="hover:text-secondary">Tips Sukses</a>
                            <a href="#" className="hover:text-secondary">Blog</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm text-center md:text-left">© 2026 Aloysius Florian Elvan. All rights reserved.</p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="p-2 border border-gray-300 rounded-full text-slate-600 hover:text-white hover:bg-secondary hover:border-secondary transition-colors">
                        <Linkedin className="w-[18px] h-[18px]" />
                    </a>
                    <a href="#" className="p-2 border border-gray-300 rounded-full text-slate-600 hover:text-white hover:bg-secondary hover:border-secondary transition-colors">
                        <Facebook className="w-[18px] h-[18px]" />
                    </a>
                    <a href="#" className="p-2 border border-gray-300 rounded-full text-slate-600 hover:text-white hover:bg-secondary hover:border-secondary transition-colors">
                        <Instagram className="w-[18px] h-[18px]" />
                    </a>
                    <a href="#" className="p-2 border border-gray-300 rounded-full text-slate-600 hover:text-white hover:bg-secondary hover:border-secondary transition-colors">
                        <Twitter className="w-[18px] h-[18px]" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
