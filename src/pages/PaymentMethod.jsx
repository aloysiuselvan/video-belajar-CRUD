import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, CreditCard, Smartphone, Building } from 'lucide-react';
import CheckoutNavbar from '../features/checkout/components/CheckoutNavbar';
import Button from '../components/ui/Button';

const PaymentOption = ({ title, children, isOpen, onClick, icon: Icon }) => {
    return (
        <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors ${isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
            >
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isOpen ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                        <Icon className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-slate-500'}`} />
                    </div>
                    <span className="font-bold text-slate-800">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {isOpen && (
                <div className="bg-white p-4 border-t border-gray-100 space-y-3">
                    {children}
                </div>
            )}
        </div>
    );
};

const PaymentItem = ({ name, logo, selected, onSelect }) => (
    <div
        onClick={onSelect}
        className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${selected ? 'border-primary bg-green-50' : 'border-gray-200 hover:border-green-200'}`}
    >
        <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-white border border-gray-100 rounded flex items-center justify-center text-xs font-bold text-slate-600">
                {name.split(' ')[1] || name}
            </div>
            <span className="font-medium text-slate-900">{name}</span>
        </div>
        {selected && <CheckCircle className="w-5 h-5 text-primary fill-primary text-white" />}
    </div>
);

const PaymentMethod = () => {
    const [openSection, setOpenSection] = useState('Transfer Bank');
    const [selectedPayment, setSelectedPayment] = useState('Bank BCA');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="bg-surface font-sans min-h-screen pb-12">
            <CheckoutNavbar />

            <div className="max-w-7xl mx-auto px-4 md:px-12 pt-24 md:pt-32 flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                    <h2 className="font-bold text-xl text-slate-900 mb-6">Metode Pembayaran</h2>

                    <PaymentOption
                        title="Transfer Bank"
                        icon={Building}
                        isOpen={openSection === 'Transfer Bank'}
                        onClick={() => toggleSection('Transfer Bank')}
                    >
                        <PaymentItem name="Bank BCA" selected={selectedPayment === 'Bank BCA'} onSelect={() => setSelectedPayment('Bank BCA')} />
                        <PaymentItem name="Bank BNI" selected={selectedPayment === 'Bank BNI'} onSelect={() => setSelectedPayment('Bank BNI')} />
                        <PaymentItem name="Bank BRI" selected={selectedPayment === 'Bank BRI'} onSelect={() => setSelectedPayment('Bank BRI')} />
                        <PaymentItem name="Bank Mandiri" selected={selectedPayment === 'Bank Mandiri'} onSelect={() => setSelectedPayment('Bank Mandiri')} />
                    </PaymentOption>

                    <PaymentOption
                        title="E-Wallet"
                        icon={Smartphone}
                        isOpen={openSection === 'E-Wallet'}
                        onClick={() => toggleSection('E-Wallet')}
                    >
                        <PaymentItem name="Dana" selected={selectedPayment === 'Dana'} onSelect={() => setSelectedPayment('Dana')} />
                        <PaymentItem name="OVO" selected={selectedPayment === 'OVO'} onSelect={() => setSelectedPayment('OVO')} />
                        <PaymentItem name="LinkAja" selected={selectedPayment === 'LinkAja'} onSelect={() => setSelectedPayment('LinkAja')} />
                        <PaymentItem name="Shopee Pay" selected={selectedPayment === 'Shopee Pay'} onSelect={() => setSelectedPayment('Shopee Pay')} />
                    </PaymentOption>

                    <PaymentOption
                        title="Kartu Kredit/Debit"
                        icon={CreditCard}
                        isOpen={openSection === 'Kartu Kredit/Debit'}
                        onClick={() => toggleSection('Kartu Kredit/Debit')}
                    >
                        <PaymentItem name="Visa / Mastercard" selected={selectedPayment === 'Credit Card'} onSelect={() => setSelectedPayment('Credit Card')} />
                    </PaymentOption>
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
                                <span className="flex items-center gap-2">📄 Ujian Akhir</span>
                                <span className="flex items-center gap-2">🎥 49 Video</span>
                                <span className="flex items-center gap-2">📝 7 Dokumen</span>
                                <span className="flex items-center gap-2">🏆 Sertifikat</span>
                                <span className="flex items-center gap-2">✍️ Pretest</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-slate-900 mb-1">Bahasa Pengantar</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">🌐 Bahasa Indonesia</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">Ringkasan Pesanan</h3>
                        <div className="flex justify-between items-center mb-3 text-slate-600 text-sm">
                            <span>Video Learning: Gapai Karier...</span>
                            <span className="font-medium text-slate-900">Rp 767.500</span>
                        </div>
                        <div className="flex justify-between items-center mb-6 text-slate-600 text-sm">
                            <span>Biaya Admin</span>
                            <span className="font-medium text-slate-900">Rp 7.000</span>
                        </div>
                        <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-6">
                            <span className="font-bold text-slate-900">Total Pembayaran</span>
                            <span className="font-bold text-primary text-lg">Rp 774.500</span>
                        </div>
                        <Link to="/payment">
                            <Button variant="primary" className="w-full bg-green-500 hover:bg-green-600 shadow-green-200">
                                Beli Sekarang
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
