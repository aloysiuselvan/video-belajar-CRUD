import React from 'react';
import Button from '../../../components/ui/Button';
import newsletterImage from '../../../assets/newsletter_image.jpg';

const Newsletter = () => {
    return (
        <section className="mt-12 mb-12 relative h-80 flex items-center justify-center bg-slate-900 overflow-hidden max-w-7xl mx-auto w-full rounded-lg">
            <div className="absolute inset-0 z-0">
                <img
                    src={newsletterImage}
                    alt="Newsletter"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="relative z-10 text-center max-w-xl mx-auto px-4 md:px-12">
                <h3 className="text-xl md:text-2xl font-medium text-gray-300 uppercase tracking-wider mb-2">
                    Newsletter
                </h3>
                <h2 className="text-3xl font-bold text-white mb-6">
                    Mau Belajar Lebih Banyak?
                </h2>
                <p className="text-gray-400 mb-8 text-sm">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
                </p>

                <div className="bg-white p-1.5 rounded-lg flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Masukan Emailmu"
                        className="flex-1 px-4 py-2 text-slate-900 outline-none rounded-md"
                    />
                    <Button variant="secondary" className="shrink-0">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
