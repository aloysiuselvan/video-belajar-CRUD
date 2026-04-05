import React from 'react';
import Navbar from '../layouts/Navbar';
import Hero from '../features/home/components/Hero';
import CourseSection from '../features/home/components/CourseSection';
import Newsletter from '../features/home/components/Newsletter';
import Footer from '../layouts/Footer';

const Home = ({ courses }) => {
    return (
        <div className="bg-surface text-slate-900 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <CourseSection courses={courses} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
