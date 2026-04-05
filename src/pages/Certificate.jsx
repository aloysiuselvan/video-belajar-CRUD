import React from 'react';
import { ChevronLeft, Download, Share2, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Certificate = () => {
    const studentName = "Morgan Maxwell";
    const courseName = "Foundations of User Experience Design";
    const completionDate = "23 September 2023";
    const certificateId = "RSL-2023-UXD-001";

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 md:px-12 py-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                    <Link to="/" className="hover:text-slate-800">Beranda</Link>
                    <span>/</span>
                    <span>Desain</span>
                    <span>/</span>
                    <Link to="/my-courses" className="hover:text-slate-800">Gapai Kari...</Link>
                    <span>/</span>
                    <span className="font-medium text-slate-900">Sertifikat</span>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-12 flex flex-col items-center">

                    <div className="w-full max-w-4xl aspect-[1.4/1] bg-white border border-gray-200 shadow-lg relative p-6 md:p-16 flex flex-col items-center text-center overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-bl-full opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-tr-full opacity-20"></div>
                        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-orange-200"></div>

                        <div className="z-10 w-full h-full flex flex-col items-center justify-center border-4 border-double border-slate-200 p-4 md:p-8">
                            <img src="/src/assets/logo.png" alt="VideoBelajar Logo" className="h-8 md:h-10 mb-8" />

                            <h1 className="text-4xl md:text-6xl font-serif text-green-700 mb-4 font-bold tracking-wide">Certificate</h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 font-serif italic">of Completion</p>

                            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Proudly presented to</p>

                            <h2 className="text-3xl md:text-5xl font-script text-yellow-500 mb-8 font-bold" style={{ fontFamily: 'cursive' }}>{studentName}</h2>

                            <div className="w-24 h-1 bg-gray-200 mb-8"></div>

                            <p className="text-slate-600 mb-2 text-sm md:text-base">For successfully completing "{courseName}"</p>
                            <p className="text-xs text-slate-400">Given this {completionDate} | ID: {certificateId}</p>

                            <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between w-full max-w-lg px-4 md:px-12 gap-6 items-center">
                                <div className="text-center">
                                    <div className="font-script text-xl md:text-2xl text-slate-800 mb-2" style={{ fontFamily: 'cursive' }}>Teddy Yu</div>
                                    <div className="text-xs text-slate-500 border-t border-slate-300 pt-1 uppercase tracking-wider">Creative Producer</div>
                                </div>

                                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg relative">
                                    <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                                        ★
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="font-script text-xl md:text-2xl text-slate-800 mb-2" style={{ fontFamily: 'cursive' }}>Olivia Wilson</div>
                                    <div className="text-xs text-slate-500 border-t border-slate-300 pt-1 uppercase tracking-wider">Chief Executive</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl text-slate-900 mb-1">Big 4 Auditor Financial Analyst</h3>
                            <p className="text-slate-500 text-sm mb-4">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="w-10 h-10 rounded-full bg-pink-100 overflow-hidden">
                                    <img src="/src/assets/avatar-1.jpg" alt="Instructor" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-slate-900">Jenna Ortega</p>
                                    <p className="text-xs text-slate-500">Senior Accountant di Gojek</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4].map(i => <span key={i}>★</span>)}
                                    <span className="text-gray-300">★</span>
                                </div>
                                <span className="text-xs text-slate-500 underline">3.5 (86)</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="bg-white border-green-500 text-green-500 hover:bg-green-50 px-8 py-3 w-full md:w-auto flex items-center justify-center gap-2 shadow-sm font-bold"
                        >
                            <Download className="w-4 h-4" /> Download Sertifikat
                        </Button>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Certificate;
