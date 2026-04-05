import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import UserSidebar from '../layouts/UserSidebar';
import Button from '../components/ui/Button';
import { Search, ChevronDown } from 'lucide-react';

const MyOrders = () => {
    const [activeTab, setActiveTab] = useState('Semua Pesanan');

    const tabs = ['Semua Pesanan', 'Menunggu', 'Berhasil', 'Gagal'];

    const orders = [
        { invoice: 'HEL/VI/10062023', date: '10 Juni 2023, 14.17', status: 'Berhasil', title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula', price: 'Rp 300.000', total: 'Rp 300.000', image: '/src/assets/card-1.jpg' },
        { invoice: 'HEL/VI/10062023', date: '10 Juni 2023, 14.17', status: 'Gagal', title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula', price: 'Rp 300.000', total: 'Rp 300.000', image: '/src/assets/card-2.jpg' },
        { invoice: 'HEL/VI/10062023', date: '10 Juni 2023, 14.17', status: 'Menunggu', title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula', price: 'Rp 300.000', total: 'Rp 300.000', image: '/src/assets/card-3.jpg' },
        { invoice: 'HEL/VI/10062023', date: '10 Juni 2023, 14.17', status: 'Berhasil', title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula', price: 'Rp 300.000', total: 'Rp 300.000', image: '/src/assets/card-4.jpg' },
        { invoice: 'HEL/VI/10062023', date: '10 Juni 2023, 14.17', status: 'Berhasil', title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula', price: 'Rp 300.000', total: 'Rp 300.000', image: '/src/assets/card-5.jpg' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Berhasil': return 'bg-green-100 text-green-600';
            case 'Gagal': return 'bg-red-100 text-red-600';
            case 'Menunggu': return 'bg-yellow-100 text-yellow-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const getDisplayStatus = (status) => {
        if (status === 'Menunggu') return 'Belum Bayar';
        return status;
    };

    return (
        <div className="flex flex-col min-h-screen bg-surface font-sans">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-12 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <UserSidebar />

                    <div className="flex-1">
                        <h1 className="font-bold text-2xl text-slate-900 mb-6">Daftar Pesanan</h1>
                        <p className="text-slate-500 text-sm mb-6">Informasi terperinci mengenai pembelian</p>

                        <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
                            <div className="flex gap-6 border-b border-gray-100 mb-6 overflow-x-auto">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                                            ? 'border-red-500 text-red-500'
                                            : 'border-transparent text-slate-400 hover:text-slate-600'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Cari Kelas"
                                        className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-primary text-sm"
                                    />
                                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-slate-400" />
                                </div>

                                <div className="relative w-full md:w-40">
                                    <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-slate-600">
                                        Urutkan
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {orders.filter(o => activeTab === 'Semua Pesanan' || (activeTab === 'Menunggu' && o.status === 'Menunggu') || o.status === activeTab).map((order, index) => (
                                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                                    <div className={`px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${order.status === 'Berhasil' ? 'bg-green-50/50' :
                                        order.status === 'Gagal' ? 'bg-red-50/50' : 'bg-yellow-50/50'
                                        }`}>
                                        <div className="text-xs text-slate-600 space-y-1 md:space-y-0 md:space-x-4">
                                            <span>No. Invoice: <span className="font-bold text-blue-500 underline cursor-pointer">{order.invoice}</span></span>
                                            <span className="hidden md:inline text-slate-300">|</span>
                                            <span>Waktu Pembayaran: {order.date}</span>
                                        </div>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                                            {getDisplayStatus(order.status)}
                                        </span>
                                    </div>

                                    <div className="p-4 md:p-6">
                                        <div className="flex gap-4 mb-6">
                                            <div className="w-20 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                                <img src={order.image} alt={order.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-900 text-sm mb-1">{order.title}</h3>
                                                <p className="text-xs text-slate-500">Harga</p>
                                                <p className="font-bold text-sm text-slate-900">{order.price}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                                            <span className="text-xs text-slate-500">Total Pembayaran</span>
                                            <span className="font-bold text-primary text-base">{order.total}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MyOrders;
