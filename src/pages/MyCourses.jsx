import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import UserSidebar from '../layouts/UserSidebar';
import Button from '../components/ui/Button';
import { Search, BookOpen, Clock } from 'lucide-react';

const MyCourses = () => {
    const [activeTab, setActiveTab] = useState('Semua Kelas');

    const courses = [
        { id: 1, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', role: 'Senior Accountant di Gojek', avatar: '/src/assets/avatar-1.jpg', image: '/src/assets/card-1.jpg', modules: 12, duration: 360, progress: 100, status: 'Selesai' },
        { id: 2, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', role: 'Senior Accountant di Gojek', avatar: '/src/assets/avatar-1.jpg', image: '/src/assets/card-2.jpg', modules: 12, duration: 360, progress: 28, status: 'Sedang Berjalan' },
        { id: 3, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', role: 'Senior Accountant di Gojek', avatar: '/src/assets/avatar-1.jpg', image: '/src/assets/card-3.jpg', modules: 12, duration: 360, progress: 28, status: 'Sedang Berjalan' }
    ];

    const tabs = ['Semua Kelas', 'Sedang Berjalan', 'Selesai'];

    return (
        <div className="flex flex-col min-h-screen bg-surface font-sans">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-12 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <UserSidebar />

                    <div className="flex-1">
                        <h1 className="font-bold text-2xl text-slate-900 mb-2">Daftar Kelas</h1>
                        <p className="text-slate-500 text-sm mb-6 max-w-md">
                            Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!
                        </p>

                        <div className="bg-white rounded-xl border border-gray-100 p-2 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex gap-4 px-2 overflow-x-auto w-full md:w-auto">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-0 text-sm font-medium whitespace-nowrap transition-colors py-2 px-2 border-b-2 ${activeTab === tab
                                            ? 'border-orange-500 text-orange-500 font-bold'
                                            : 'border-transparent text-slate-500 hover:text-slate-700'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full md:w-64">
                                <input
                                    type="text"
                                    placeholder="Cari Kelas"
                                    className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary text-sm"
                                />
                                <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {courses.filter(c => activeTab === 'Semua Kelas' || c.status === activeTab).map((course, index) => (
                                <div key={index} className="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-xs font-bold text-slate-500">
                                            {course.progress === 100 ? `${course.modules} / ${course.modules}` : `2 / ${course.modules}`} Modul Terselesaikan
                                        </div>
                                        {course.progress === 100 ? (
                                            <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Selesai</div>
                                        ) : (
                                            <div className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded">Sedang Berjalan</div>
                                        )}
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-slate-900 mb-2">{course.title}</h3>
                                            <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                                                Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                                            </p>

                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-200">
                                                    <img src={course.avatar} alt={course.instructor} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-xs text-slate-900">{course.instructor}</p>
                                                    <p className="text-[10px] text-slate-500">{course.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 text-xs text-slate-500 mb-4">
                                                <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.modules} Modul</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration} Menit</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex-1 flex items-center gap-4">
                                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${course.progress === 100 ? 'bg-orange-500' : 'bg-orange-400'}`}
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Progres Kelas: {course.progress}%</span>
                                        </div>

                                        <div className="flex gap-3 justify-end">
                                            {course.progress === 100 ? (
                                                <>
                                                    <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 text-xs px-4 py-2">
                                                        Unduh Sertifikat
                                                    </Button>
                                                    <Button variant="primary" className="bg-green-500 hover:bg-green-600 shadow-green-200 text-xs px-4 py-2">
                                                        Lihat Detail Kelas
                                                    </Button>
                                                </>
                                            ) : (
                                                <Link to={`/course/${course.id}/learn`} className="w-full md:w-auto">
                                                    <Button variant="primary" className="bg-green-500 hover:bg-green-600 shadow-green-200 text-xs px-4 py-2 w-full">
                                                        Lanjutkan Pembelajaran
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end mt-8 gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-slate-500 hover:bg-gray-200 text-xs">{'<'}</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-400 text-white font-bold text-xs">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-500 hover:bg-gray-50 text-xs">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-500 hover:bg-gray-50 text-xs">3</button>
                            <span className="flex items-end px-1 text-slate-400">...</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-500 hover:bg-gray-50 text-xs">6</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-slate-500 hover:bg-gray-200 text-xs">{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyCourses;
