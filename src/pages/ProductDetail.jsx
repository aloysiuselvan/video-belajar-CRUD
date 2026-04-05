import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CourseSidebar from '../features/courses/components/CourseSidebar';
import Accordion from '../components/ui/Accordion';
import { InstructorCard, ReviewCard } from '../features/courses/components/DetailCards';
import CourseCard from '../features/courses/components/CourseCard';
import { Star, Clock, Video } from 'lucide-react';

import heroBg from '../assets/hero_image.jpg';
import avatar1 from '../assets/profile_image/avatar-1.jpg';
import card1 from '../assets/card_image/card-1.jpg';
import card2 from '../assets/card_image/card-2.jpg';
import card3 from '../assets/card_image/card-3.jpg';

const ProductDetail = () => {
    const { id } = useParams();

    const curriculum = [
        {
            title: 'Introduction to Course 1: Foundations of User Experience Design',
            content: [
                { title: 'The basics of user experience design', duration: '12 Menit' },
                { title: 'Jobs in the field of user experience', duration: '12 Menit' },
                { title: 'The product development life cycle', duration: '12 Menit' },
            ]
        },
        { title: 'Universal design, inclusive design, and equity-focused design', content: [] },
        { title: 'Introduction to design sprints', content: [] },
        { title: 'Introduction to UX research', content: [] }
    ];

    const instructor = {
        name: 'Gregorius Edrik Lawanto',
        role: 'Senior Talent Acquisition at WingsGroup',
        description: 'Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.',
        avatar: avatar1
    };

    const relatedCourses = [
        { id: 1, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', instructorRole: 'Senior Accountant di Gojek', rating: 3.5, ratingCount: 86, price: 'Rp 300K', image: card1, avatar: avatar1 },
        { id: 2, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', instructorRole: 'Senior Accountant di Gojek', rating: 3.5, ratingCount: 86, price: 'Rp 300K', image: card2, avatar: avatar1 },
        { id: 3, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', instructorRole: 'Senior Accountant di Gojek', rating: 3.5, ratingCount: 86, price: 'Rp 300K', image: card3, avatar: avatar1 },
    ];

    return (
        <div className="bg-surface text-slate-900 font-sans min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-7xl mx-auto w-full px-4 md:px-12 py-4 text-sm text-slate-500">
                <Link to="/" className="hover:text-primary">Beranda</Link> / <Link to="/all-courses" className="hover:text-primary">Desain</Link> / <span className="text-slate-900 font-medium">Gapai Karier Impianmu...</span>
            </div>

            <section className="relative bg-slate-900 text-white py-16 px-4 md:px-12 overflow-hidden mb-12">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight max-w-3xl">
                        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl">
                        Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.
                    </p>
                    <div className="flex items-center gap-2 font-medium">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-400">3.5 (86)</span>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-12 pb-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="mb-12">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Deskripsi</h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                                Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Belajar bersama Tutor Profesional</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InstructorCard {...instructor} />
                                <InstructorCard {...instructor} />
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Kamu akan Mempelajari</h3>
                            <Accordion items={curriculum} />
                        </div>

                        <div className="mb-12">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Rating dan Review</h3>
                            <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 md:grid md:grid-cols-2">
                                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-w-[280px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src={avatar1} className="w-10 h-10 rounded-full" alt="User" />
                                        <div>
                                            <h4 className="font-bold text-sm">Gregorius Edrik Lawanto</h4>
                                            <p className="text-xs text-slate-500">Alumni Batch 2</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-2">Berkarier di bidang HR selama lebih dari 3 tahun...</p>
                                    <div className="flex text-yellow-400 text-xs">★★★★★ 5.0</div>
                                </div>
                                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-w-[280px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src={avatar1} className="w-10 h-10 rounded-full" alt="User" />
                                        <div>
                                            <h4 className="font-bold text-sm">Gregorius Edrik Lawanto</h4>
                                            <p className="text-xs text-slate-500">Alumni Batch 2</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-2">Berkarier di bidang HR selama lebih dari 3 tahun...</p>
                                    <div className="flex text-yellow-400 text-xs">★★★★★ 4.5</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-2">Video Pembelajaran Terkait Lainnya</h3>
                            <p className="text-slate-500 mb-6 text-sm">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedCourses.map(course => (
                                    <CourseCard key={course.id} {...course} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 shrink-0">
                        <CourseSidebar price="Rp 250K" originalPrice="Rp 500K" discountEnd={2} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetail;
