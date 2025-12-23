import React from 'react';
import Hero from '../components/Hero';
import ScholarshipDirectory from '../components/ScholarshipDirectory';
import StudyGuides from '../components/StudyGuides';
import VirtualFairs from '../components/VirtualFairs';
import StudentSupport from '../components/StudentSupport';

const Home = () => {
    return (
        <main>
            <Hero />
            <ScholarshipDirectory />
            <StudyGuides />
            <VirtualFairs />
            <StudentSupport />
        </main>
    );
};

export default Home;
