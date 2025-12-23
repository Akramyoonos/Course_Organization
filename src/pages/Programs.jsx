import React, { useState } from 'react';
import { FiFilter, FiMapPin, FiClock, FiAward, FiHeart, FiChevronDown, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
    const [filters, setFilters] = useState({
        studies: [],
        level: [],
        location: []
    });

    // Mock Data
    const programs = [
        {
            id: 1,
            title: "Master in International Business",
            school: "Hult International Business School",
            location: "London, UK + 3 more",
            type: "Master",
            duration: "1 year",
            desc: "Gain the skills to tackle global business challenges. Study in multiple locations.",
            logo: "https://ui-avatars.com/api/?name=Hult&background=random&color=fff"
        },
        {
            id: 2,
            title: "BSc Computer Science",
            school: "University of Europe for Applied Sciences",
            location: "Berlin, Germany",
            type: "Bachelor",
            duration: "3 years",
            desc: "Learn software engineering, AI, and data science in the heart of Europe's tech hub.",
            logo: "https://ui-avatars.com/api/?name=UE&background=random&color=fff"
        },
        {
            id: 3,
            title: "Global MBA",
            school: "ESSEC Business School",
            location: "Paris, France / Singapore",
            type: "MBA",
            duration: "12 months",
            desc: "A top-ranked MBA focusing on luxury management and digital transformation.",
            logo: "https://ui-avatars.com/api/?name=ESSEC&background=random&color=fff"
        },
        {
            id: 4,
            title: "MSc in Data Analytics",
            school: "Arden University",
            location: "Online / Berlin",
            type: "Master",
            duration: "1-2 years",
            desc: "Master the tools of big data. Flexible study options available for working professionals.",
            logo: "https://ui-avatars.com/api/?name=Arden&background=random&color=fff"
        },
        {
            id: 5,
            title: "Bachelor in Fashion Design",
            school: "Polimoda",
            location: "Florence, Italy",
            type: "Bachelor",
            duration: "4 years",
            desc: "Immerse yourself in the fashion capital of the world. Hands-on creative projects.",
            logo: "https://ui-avatars.com/api/?name=Polimoda&background=random&color=fff"
        }
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '80px', color: '#334155' }}>

            {/* Header / Breadcrumb Area */}
            <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0' }}>
                <div className="container">
                    <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                        Home / Programs / Search Results
                    </div>
                    <h1 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: '700' }}>
                        Find your dream program
                    </h1>
                </div>
            </div>

            <div className="container" style={{ padding: '2rem 1rem', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem' }}>

                {/* Sidebar Filters */}
                <aside className="hidden-mobile" style={{ alignSelf: 'start' }}>
                    <div style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>Filters</h3>
                            <button style={{ fontSize: '0.85rem', color: 'var(--color-primary)', background: 'none' }}>Reset</button>
                        </div>

                        {/* Filter Group: Field of Study */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                Fields of Study <FiChevronDown />
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Business', 'Computer Science', 'Art & Design', 'Engineering', 'Medicine'].map(item => (
                                    <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} /> {item}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Filter Group: Location */}
                        <div style={{ marginBottom: '2rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                Location <FiChevronDown />
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                                <FiSearch color="#94a3b8" />
                                <input type="text" placeholder="Search country..." style={{ border: 'none', background: 'transparent', marginLeft: '0.5rem', width: '100%', outline: 'none', fontSize: '0.85rem' }} />
                            </div>
                        </div>

                        {/* Filter Group: Degree Type */}
                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                Degree Type <FiChevronDown />
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Bachelor', 'Master', 'PhD', 'MBA', 'Course'].map(item => (
                                    <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} /> {item}
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </aside>

                {/* Results List */}
                <main>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>{programs.length} programs found</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                            Sort by:
                            <select style={{ border: '1px solid #e2e8f0', borderRadius: '0.25rem', padding: '0.25rem' }}>
                                <option>Reasonance</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {programs.map(prog => (
                            <motion.div
                                key={prog.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -2, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                                style={{
                                    background: '#fff',
                                    borderRadius: '1rem',
                                    border: '1px solid #e2e8f0',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    gap: '1.5rem',
                                    position: 'relative'
                                }}
                            >
                                {/* Logo */}
                                <div style={{ flexShrink: 0 }}>
                                    <img src={prog.logo} alt={prog.school} style={{ width: '60px', height: '60px', borderRadius: '0.5rem', background: '#f1f5f9' }} />
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                        <div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase' }}>{prog.type}</span>
                                            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: '0.25rem 0' }}>{prog.title}</h2>
                                            <div style={{ fontSize: '1rem', color: '#475569' }}>{prog.school}</div>
                                        </div>
                                        <button style={{ background: '#f1f5f9', border: 'none', padding: '0.5rem', borderRadius: '50%', color: '#94a3b8', cursor: 'pointer' }}>
                                            <FiHeart />
                                        </button>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FiMapPin /> {prog.location}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FiClock /> {prog.duration}</div>
                                    </div>

                                    <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                                        {prog.desc}
                                    </p>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Request Info</button>
                                        <button className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', color: '#64748b', borderColor: '#e2e8f0' }}>Details</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <button className="btn btn-outline" style={{ borderColor: '#cbd5e1', color: '#475569' }}>Load More Programs</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Programs;
