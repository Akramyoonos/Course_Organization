import React from 'react';
import { FiVideo, FiUsers, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const VirtualFairs = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="glass-panel" style={{
                    background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '4rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Overlay for better text readability */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.85)', zIndex: 0 }}></div>

                    <div style={{ position: 'relative', zIndex: 1, flex: '1 1 400px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e11d48', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                            <span style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }} className="animate-pulse"></span>
                            UPCOMING EVENT
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Global Masters Virtual Fair</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Chat directly with admission officers from top universities in the US, UK, and Europe. No travel needed.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                <FiCalendar size={20} className="text-secondary" />
                                <span>Oct 24, 10:00 AM EST</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                <FiUsers size={20} className="text-secondary" />
                                <span>150+ Universities</span>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            Register for Free
                        </button>
                    </div>

                    <motion.div
                        style={{ position: 'relative', zIndex: 1, flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Abstract representation of a video call/chat */}
                        <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #f472b6, #818cf8)' }}></div>
                                <div>
                                    <div style={{ height: '10px', width: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }}></div>
                                    <div style={{ height: '8px', width: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', marginLeft: '2rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #38bdf8, #22d3ee)' }}></div>
                                <div>
                                    <div style={{ height: '10px', width: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }}></div>
                                    <div style={{ height: '8px', width: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <p style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <FiVideo /> Live Video Booths
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
       `}</style>
        </section>
    );
};

export default VirtualFairs;
