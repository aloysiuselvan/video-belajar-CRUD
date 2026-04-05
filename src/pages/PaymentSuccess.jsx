import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutNavbar from '../features/checkout/components/CheckoutNavbar';
import Button from '../components/ui/Button';
import illustration from '../assets/hero_image.jpg';

const PaymentSuccess = () => {
    return (
        <div className="bg-surface font-sans min-h-screen pb-12">
            <CheckoutNavbar step={3} />

            <div className="max-w-xl mx-auto px-4 md:px-6 pt-32 text-center flex flex-col items-center">
                <div className="w-64 h-64 mb-8">
                    <img src={illustration} alt="Pembayaran Berhasil" className="w-full h-full object-cover rounded-xl opacity-80" />
                </div>

                <h2 className="font-bold text-2xl text-slate-900 mb-4">Pembayaran Berhasil!</h2>
                <p className="text-slate-600 mb-8 max-w-sm">
                    Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.
                </p>

                <Link to="/">
                    <Button variant="primary" className="bg-green-500 hover:bg-green-600 shadow-green-200 px-8">
                        Lihat Detail Pesanan
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
