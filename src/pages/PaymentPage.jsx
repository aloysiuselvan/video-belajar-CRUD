import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Copy, ShieldCheck, Video, FileText, Award, FileQuestion } from 'lucide-react';
import CheckoutNavbar from '../features/checkout/components/CheckoutNavbar';
import Button from '../components/ui/Button';

const InstructionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-primary"
            >
                <span className="font-bold text-slate-800 text-sm">{title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {isOpen && (
                <div className="pb-4 text-sm text-slate-600 space-y-2 pl-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const PaymentPage = () => {
    const initialTime = 50 * 60 + 55;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return {
            hrs: hrs.toString().padStart(2, '0'),
            mins: mins.toString().padStart(2, '0'),
            secs: secs.toString().padStart(2, '0')
        };
    };

    const time = formatTime(timeLeft);
    const [openInstruction, setOpenInstruction] = useState('ATM BCA');

    const handleCopy = () => {
        navigator.clipboard.writeText("11739081234567890");
        alert("Nomor Virtual Account berhasil disalin!");
    };

    return (
        <div className="bg-surface font-sans min-h-screen pb-12">
            <CheckoutNavbar step={2} />

            <div className="bg-orange-50 text-slate-900 border-b border-orange-100 py-3 px-4 md:px-6 text-center text-sm mt-[72px] md:mt-[80px]">
                Selesaikan pemesanan dalam <span className="inline-flex items-center gap-1 font-bold text-white bg-red-500 px-1.5 py-0.5 rounded ml-1">{time.hrs}</span> : <span className="inline-flex items-center gap-1 font-bold text-white bg-red-500 px-1.5 py-0.5 rounded">{time.mins}</span> : <span className="inline-flex items-center gap-1 font-bold text-white bg-red-500 px-1.5 py-0.5 rounded">{time.secs}</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h2 className="font-bold text-lg text-slate-900 mb-6">Metode Pembayaran</h2>

                    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8 text-center shadow-sm">
                        <div className="flex justify-center mb-4">
                            <div className="text-blue-700 font-bold text-2xl italic tracking-tighter">BCA</div>
                        </div>
                        <p className="text-slate-900 font-medium mb-2">Bayar Melalui Virtual Account BCA</p>
                        <div className="flex items-center justify-center gap-3 text-slate-600 mb-2">
                            <span className="font-bold text-lg tracking-wide">11739 081234567890</span>
                            <button onClick={handleCopy} className="text-red-500 font-bold text-sm hover:underline">Salin</button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">Ringkasan Pesanan</h3>
                        <div className="flex justify-between items-center mb-3 text-slate-600 text-sm">
                            <span>Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</span>
                            <span className="font-medium text-slate-900">Rp 767.500</span>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-slate-600 text-sm">
                            <span>Biaya Admin</span>
                            <span className="font-medium text-slate-900">Rp 7.000</span>
                        </div>
                        <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-6">
                            <span className="font-bold text-slate-900">Total Pembayaran</span>
                            <span className="font-bold text-primary text-xl">Rp 774.500</span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <Link to="/payment/change-method" className="flex-1">
                                <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
                                    Ganti Metode Pembayaran
                                </Button>
                            </Link>
                            <Link to="/payment/success" className="flex-1">
                                <Button variant="primary" className="w-full bg-green-500 hover:bg-green-600 shadow-green-200">
                                    Bayar Sekarang
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">Tata Cara Pembayaran</h3>
                        <InstructionItem
                            title="ATM BCA"
                            isOpen={openInstruction === 'ATM BCA'}
                            onClick={() => setOpenInstruction(openInstruction === 'ATM BCA' ? null : 'ATM BCA')}
                        >
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Masukkan kartu ATM dan PIN BCA Anda</li>
                                <li>Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"</li>
                                <li>Masukkan nomor Virtual Account</li>
                                <li>Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"</li>
                                <li>Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah</li>
                                <li>Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</li>
                            </ol>
                        </InstructionItem>
                        <InstructionItem
                            title="Mobile Banking BCA"
                            isOpen={openInstruction === 'Mobile Banking BCA'}
                            onClick={() => setOpenInstruction(openInstruction === 'Mobile Banking BCA' ? null : 'Mobile Banking BCA')}
                        >
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Buka Aplikasi BCA Mobile</li>
                                <li>Pilih "m-BCA", kemudian pilih "m-Transfer"</li>
                                <li>Pilih "BCA Virtual Account"</li>
                                <li>Masukkan nomor Virtual Account, lalu pilih "OK"</li>
                                <li>Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer</li>
                                <li>Klik "OK" untuk melanjutkan pembayaran</li>
                                <li>Masukkan PIN Anda untuk meng-otorisasi transaksi</li>
                                <li>Transaksi Anda telah selesai</li>
                            </ol>
                        </InstructionItem>
                        <InstructionItem
                            title="Internet Banking BCA"
                            isOpen={openInstruction === 'Internet Banking BCA'}
                            onClick={() => setOpenInstruction(openInstruction === 'Internet Banking BCA' ? null : 'Internet Banking BCA')}
                        >
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Login ke KlikBCA Individual</li>
                                <li>Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"</li>
                                <li>Masukkan nomor Virtual Account</li>
                                <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran</li>
                                <li>Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"</li>
                                <li>Pembayaran telah selesai</li>
                            </ol>
                        </InstructionItem>
                    </div>
                </div>

                <div className="lg:w-[400px] shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                        <div className="rounded-lg overflow-hidden h-40 mb-4 bg-gray-200">
                            <img src="/src/assets/hero_image.jpg" alt="Course" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">
                            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary font-bold">Rp 250K</span>
                            <span className="text-slate-400 text-sm line-through">Rp 500K</span>
                            <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded">Diskon 50%</span>
                        </div>

                        <div className="space-y-2 mb-4">
                            <p className="font-bold text-sm text-slate-900">Kelas Ini Sudah Termasuk</p>
                            <div className="grid grid-cols-2 gap-y-2 text-xs text-slate-500">
                                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Ujian Akhir</span>
                                <span className="flex items-center gap-2"><Video className="w-4 h-4" /> 49 Video</span>
                                <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> 7 Dokumen</span>
                                <span className="flex items-center gap-2"><Award className="w-4 h-4" /> Sertifikat</span>
                                <span className="flex items-center gap-2"><FileQuestion className="w-4 h-4" /> Pretest</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-slate-900 mb-1">Bahasa Pengantar</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">🌐 Bahasa Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
