import React from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CheckoutNavbar = ({ step = 1 }) => {
    const getStepClass = (currentStep) => {
        if (step > currentStep) return "bg-green-500 text-white border-green-500";
        if (step === currentStep) return "bg-primary text-white border-primary";
        return "bg-white border-gray-300 text-slate-400";
    };

    const getLineClass = (targetStep) => {
        return step >= targetStep ? "bg-green-500" : "bg-gray-200";
    }

    return (
        <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="Video Belajar Logo" className="h-8 md:h-10 w-auto" />
                </Link>

                <div className="flex items-center gap-2 md:gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${getStepClass(1)}`}>
                            {step > 1 ? <Check className="w-3 h-3" /> : 1}
                        </div>
                        <span className={step >= 1 ? "text-slate-900" : "text-slate-400"}>Pilih Metode</span>
                    </div>
                    <div className={`w-4 md:w-8 h-0.5 ${getLineClass(2)}`}></div>
                    <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${getStepClass(2)}`}>
                            {step > 2 ? <Check className="w-3 h-3" /> : 2}
                        </div>
                        <span className={step >= 2 ? "text-slate-900" : "text-slate-400"}>Bayar</span>
                    </div>
                    <div className={`w-4 md:w-8 h-0.5 ${getLineClass(3)}`}></div>
                    <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${getStepClass(3)}`}>
                            3
                        </div>
                        <span className={step >= 3 ? "text-slate-900" : "text-slate-400"}>Selesai</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CheckoutNavbar;
