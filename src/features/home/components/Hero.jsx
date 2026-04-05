import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import heroImage from '../../../assets/hero_image.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-[400px] md:h-[500px] h-auto py-16 flex items-center justify-center text-center px-4 md:px-12 overflow-hidden max-w-7xl mx-auto w-full mt-8 rounded-xl">
            <div className="absolute inset-0 z-0">
                <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </h2>
                <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                </p>
                <Link to="/all-courses">
                    <Button variant="primary" className="mx-auto">
                        Temukan Video Course untuk Dipelajari!
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
