import React, { useState, useEffect } from 'react';
import { FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const megamenus = {
        Scholarships: {
            links: [
                "Masters in Europe", "PhD Funding", "USA Scholarships", "UK Chevening",
                "Erasmus+ Grants", "DAAD Scholarships", "Fulbright Program", "Australia Awards",
                "Canada Vanier", "Chinese Government", "Swiss Excellence", "Eiffel France",
                "Gates Cambridge", "Rhodes Scholarships", "Rotary Peace", "World Bank Grants"
            ],
            card: {
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Scholarship Guide 2026",
                desc: "Everything you need to know about applying for financial aid.",
                cta: "Read Guide"
            }
        },
        'Study Guides': {
            links: [
                "Computer Science", "Engineering Programs", "Business & Management", "Medicine & Health",
                "Art & Design", "Social Sciences", "Humanities", "Natural Sciences",
                "Law Programs", "Education & Training", "Agriculture", "Journalism & Media",
                "Hospitality & Tourism", "Architecture", "Data Science", "Psychology"
            ],
            card: {
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Program Explorer",
                desc: "Explore programs by major and degree type!",
                cta: "Find programs"
            }
        },
        'Virtual Fairs': {
            links: [
                "Global Masters Fair", "MBA Tour Europe", "USA College Day", "Canada Edu Fair",
                "UK Uni Connect", "Study in Germany", "Asia Grad Fair", "Nordic Days",
                "Design Portfolio Review", "STEM Career Fair", "Medical School Expo", "Law School Forum",
                "PhD Workstation", "High School Abroad", "Language School Fair", "Gap Year Expo"
            ],
            card: {
                image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Upcoming Events",
                desc: "Register now for the Spring 2026 Virtual Fair series.",
                cta: "Register Free"
            }
        },
        Webinars: {
            links: [
                "Admission Tips", "Writing a SOP", "Visa Procedures", "Scholarship Hacks",
                "CHOOSING A MAJOR", "Student Budgeting", "Part-time Jobs", "Post-grad Work",
                "Alumni Stories", "University Spotlights", "Q&A Sessions", "Career Paths",
                "Portfolio prep", "Exam Strategies", "Language Tests", "Pre-departure"
            ],
            card: {
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Live Sessions",
                desc: "Watch recordings of our most popular sessions.",
                cta: "Browse library"
            }
        }
    };

    const navLinks = [
        { name: 'Scholarships', path: '/scholarships' },
        { name: 'Study Guides', path: '/guides' },
        { name: 'Virtual Fairs', path: '/fairs' },
        { name: 'Webinars', path: '/webinars' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172ab0] backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
            onMouseLeave={() => setActiveMenu(null)}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                zIndex: 1000
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 20 }}>
                    <span className="text-gradient">EduGlobal</span>
                </Link>

                {/* Desktop Menu - Centered Links */}
                <div className="hidden-mobile" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2rem', height: '100%', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <div key={link.name} style={{ position: 'relative' }}>
                            <Link
                                to={link.path}
                                className="nav-link"
                                onMouseEnter={() => setActiveMenu(link.name)}
                                style={{ fontWeight: '500', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px', padding: '1rem 0' }}
                            >
                                {link.name} <FiChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeMenu === link.name ? 'rotate(180deg)' : 'rotate(0)' }} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Right Side - Auth & Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 20 }}>
                    <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/login" style={{ fontWeight: '600', fontSize: '0.95rem' }} className="nav-link">
                            Log In
                        </Link>
                        <Link to="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', fontSize: '1.5rem', background: 'none', color: 'white' }}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Megamenu Overlay */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                        style={{
                            position: 'absolute',
                            top: '80%',
                            left: 0,
                            width: '100%',
                            background: '#1a1a1a',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            padding: '3rem 0',
                            zIndex: 10,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="container" style={{ maxWidth: '1200px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) 1fr', gap: '4rem' }}>

                                {/* 3 Column Links - Box Grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                    {megamenus[activeMenu].links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            to={`/programs?q=${encodeURIComponent(link)}`}
                                            className="megamenu-box"
                                            onClick={() => setActiveMenu(null)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                color: '#e2e8f0'
                                            }}>
                                            {link}
                                        </Link>
                                    ))}
                                </div>

                                {/* Right Side Card */}
                                <div style={{
                                    background: '#e0f2fe',
                                    borderRadius: '0.75rem',
                                    overflow: 'hidden',
                                    color: '#0f172a'
                                }}>
                                    <div style={{ height: '160px', overflow: 'hidden' }}>
                                        <img
                                            src={megamenus[activeMenu].card.image}
                                            alt="Feature"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                            {megamenus[activeMenu].card.title}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5', color: '#334155' }}>
                                            {megamenus[activeMenu].card.desc}
                                        </p>
                                        <a href="#" style={{
                                            color: '#0369a1', /* Darker blue link */
                                            fontWeight: '600',
                                            fontSize: '0.95rem',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '4px'
                                        }}>
                                            {megamenus[activeMenu].card.cta}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        backdropFilter: 'blur(15px)',
                        padding: '2rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                                {link.name}
                            </Link>
                        ))}
                        <div style={{ padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '0.5rem' }}>
                            <Link to="/login" onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: '500', display: 'block', marginBottom: '1rem' }}>
                                Log In
                            </Link>
                            <Link to="/signup" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                Sign Up Free
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}

            <style>{`
        .nav-link { cursor: pointer; }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .megamenu-box {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 8px;
            padding: 0.75rem 1rem;
            transition: all 0.2s;
        }
        .megamenu-box:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-2px);
            border-color: var(--color-primary);
            color: white !important;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
