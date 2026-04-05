import React, { useState, useRef, useEffect, useMemo } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import FilterSidebar from '../features/courses/components/FilterSidebar';
import CourseCard from '../features/courses/components/CourseCard';
import { ChevronDown, ChevronLeft, ChevronRight, Search, Check, Filter } from 'lucide-react';

import card1 from '../assets/card_image/card-1.jpg';
import card2 from '../assets/card_image/card-2.jpg';
import card3 from '../assets/card_image/card-3.jpg';
import card4 from '../assets/card_image/card-4.jpg';
import card5 from '../assets/card_image/card-5.jpg';
import card6 from '../assets/card_image/card-6.jpg';
import card7 from '../assets/card_image/card-7.jpg';
import card8 from '../assets/card_image/card-8.jpg';
import card9 from '../assets/card_image/card-9.jpg';

import avatar1 from '../assets/profile_image/avatar-1.jpg';
import avatar2 from '../assets/profile_image/avatar-2.jpg';
import avatar3 from '../assets/profile_image/avatar-3.jpg';
import avatar4 from '../assets/profile_image/avatar-4.jpg';
import avatar5 from '../assets/profile_image/avatar-5.jpg';
import avatar6 from '../assets/profile_image/avatar-6.jpg';
import avatar7 from '../assets/profile_image/avatar-7.jpg';
import avatar8 from '../assets/profile_image/avatar-8.jpg';
import avatar9 from '../assets/profile_image/avatar-9.jpg';

const AllCourses = () => {
    const allCourses = [
        { id: 1, title: 'Big 4 Auditor Financial Analyst', instructor: 'Jenna Ortega', instructorRole: 'Senior Accountant di Gojek', rating: 3.5, ratingCount: 86, price: 300000, priceDisplay: 'Rp 300K', image: card1, avatar: avatar1, category: 'Bisnis Manajemen', duration: '4 - 8 Jam' },
        { id: 2, title: 'Digital Marketing Strategy 2024', instructor: 'Adam Smith', instructorRole: 'CMO at Tokopedia', rating: 4.8, ratingCount: 120, price: 250000, priceDisplay: 'Rp 250K', image: card2, avatar: avatar2, category: 'Pemasaran', duration: 'Kurang dari 4 Jam' },
        { id: 3, title: 'UI/UX Design Mastery for Beginners', instructor: 'Sarah Tan', instructorRole: 'Product Designer at Traveloka', rating: 4.5, ratingCount: 200, price: 400000, priceDisplay: 'Rp 400K', image: card3, avatar: avatar3, category: 'Desain', duration: 'Lebih dari 8 Jam' },
        { id: 4, title: 'Financial Modeling for Startups', instructor: 'Michael Doe', instructorRole: 'CFO at Startup', rating: 4.2, ratingCount: 45, price: 350000, priceDisplay: 'Rp 350K', image: card4, avatar: avatar4, category: 'Bisnis Manajemen', duration: '4 - 8 Jam' },
        { id: 5, title: 'Mastering React & Tailwind CSS', instructor: 'John Code', instructorRole: 'Frontend Lead', rating: 4.9, ratingCount: 500, price: 500000, priceDisplay: 'Rp 500K', image: card5, avatar: avatar5, category: 'Digital & Teknologi', duration: 'Lebih dari 8 Jam' },
        { id: 6, title: 'Business Leadership Essentials', instructor: 'Emily Blunt', instructorRole: 'CEO', rating: 4.7, ratingCount: 88, price: 450000, priceDisplay: 'Rp 450K', image: card6, avatar: avatar6, category: 'Pengembangan Diri', duration: '4 - 8 Jam' },
        { id: 7, title: 'Graphic Design Fundamentals', instructor: 'Alex Art', instructorRole: 'Art Director', rating: 4.4, ratingCount: 156, price: 280000, priceDisplay: 'Rp 280K', image: card7, avatar: avatar7, category: 'Desain', duration: 'Kurang dari 4 Jam' },
        { id: 8, title: 'Data Science for Business', instructor: 'Dr. Data', instructorRole: 'Data Scientist', rating: 4.6, ratingCount: 92, price: 600000, priceDisplay: 'Rp 600K', image: card8, avatar: avatar8, category: 'Digital & Teknologi', duration: 'Lebih dari 8 Jam' },
        { id: 9, title: 'Personal Branding on Social Media', instructor: 'Lisa Social', instructorRole: 'Influencer', rating: 4.3, ratingCount: 300, price: 150000, priceDisplay: 'Rp 150K', image: card9, avatar: avatar9, category: 'Pemasaran', duration: 'Kurang dari 4 Jam' },
    ];

    const sortOptions = [
        "Harga Rendah",
        "Harga Tinggi",
        "A to Z",
        "Z to A",
        "Rating Tertinggi",
        "Rating Terendah"
    ];

    const [selectedSort, setSelectedSort] = useState("Urutkan");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [filters, setFilters] = useState({
        categories: [],
        prices: [],
        durations: []
    });

    const sortRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFilterChange = (type, value) => {
        if (type === 'reset') {
            setFilters({ categories: [], prices: [], durations: [] });
            return;
        }

        setFilters(prev => {
            const current = prev[type];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
        });
    };

    const processPriceFilter = (price, filterOptions) => {
        if (filterOptions.length === 0) return true;
        return filterOptions.some(option => {
            if (option === 'Gratis') return price === 0;
            if (option === 'Di bawah Rp 100K') return price < 100000;
            if (option === 'Rp 100K - Rp 500K') return price >= 100000 && price <= 500000;
            if (option === 'Di atas Rp 500K') return price > 500000;
            return false;
        });
    };

    const displayedCourses = useMemo(() => {
        let result = [...allCourses];

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(course =>
                course.title.toLowerCase().includes(query) ||
                course.instructor.toLowerCase().includes(query)
            );
        }

        if (filters.categories.length > 0) {
            result = result.filter(course => filters.categories.includes(course.category));
        }

        if (filters.durations.length > 0) {
            result = result.filter(course => filters.durations.includes(course.duration));
        }

        if (filters.prices.length > 0) {
            result = result.filter(course => processPriceFilter(course.price, filters.prices));
        }

        switch (selectedSort) {
            case "Harga Rendah":
                result.sort((a, b) => a.price - b.price);
                break;
            case "Harga Tinggi":
                result.sort((a, b) => b.price - a.price);
                break;
            case "A to Z":
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z to A":
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "Rating Tertinggi":
                result.sort((a, b) => b.rating - a.rating);
                break;
            case "Rating Terendah":
                result.sort((a, b) => a.rating - b.rating);
                break;
            default:
                break;
        }

        return result;
    }, [allCourses, filters, selectedSort, searchQuery]);

    return (
        <div className="bg-surface text-slate-900 font-sans min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-7xl mx-auto w-full px-4 md:px-12 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Koleksi Video Pembelajaran Unggulan</h2>
                    <p className="text-slate-500">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="shrink-0">
                        <FilterSidebar
                            isOpen={isMobileFilterOpen}
                            onClose={() => setIsMobileFilterOpen(false)}
                            filters={filters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row items-center mb-6 gap-4">

                            <button
                                onClick={() => setIsMobileFilterOpen(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 w-full md:w-auto justify-center"
                            >
                                <Filter className="w-4 h-4" />
                                Filter
                            </button>

                            <div className="relative w-full md:w-auto" ref={sortRef}>
                                <button
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                    className="flex items-center justify-between w-full md:w-[180px] px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                >
                                    <span>{selectedSort}</span>
                                    <ChevronDown className="w-4 h-4 text-slate-500" />
                                </button>

                                {isSortOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1 z-30">
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => {
                                                    setSelectedSort(option);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors flex items-center justify-between group ${selectedSort === option ? 'text-primary bg-green-50' : 'text-slate-700'}`}
                                            >
                                                <span>{option}</span>
                                                {selectedSort === option && <Check className="w-4 h-4 text-primary" />}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="relative w-full">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="w-5 h-5 text-slate-400" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Cari Kelas"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-2.5 pl-10 pr-4 border border-gray-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {displayedCourses.length > 0 ? (
                                displayedCourses.map((course) => (
                                    <CourseCard key={course.id} {...course} price={course.priceDisplay} />
                                ))
                            ) : (
                                <div className="col-span-full py-12 text-center text-slate-500">
                                    Tidak ada kelas yang cocok dengan filter Anda.
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center items-center gap-1 md:gap-2">
                            <button className="p-1.5 md:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-500 disabled:opacity-50">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary text-white font-medium">1</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-600 font-medium">2</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-600 font-medium">3</button>
                            <span className="text-slate-400">...</span>
                            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-600 font-medium">9</button>
                            <button className="p-1.5 md:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-500">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AllCourses;
