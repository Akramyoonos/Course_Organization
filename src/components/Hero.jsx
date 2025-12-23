import React from 'react';
import DegreeSearch from './DegreeSearch';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // For fixed navbar
        }}>
            {/* Dynamic Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                {/* Deep Blue Base */}
                <div style={{ position: 'absolute', inset: 0, background: '#0f172a' }}></div>

                {/* Animated Orbs */}
                <div className="orb orb-1" style={{ position: 'absolute', top: '20%', left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
                <div className="orb orb-2" style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
                <div className="orb orb-3" style={{ position: 'absolute', top: '40%', left: '60%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(129,140,248,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>

                {/* Grid pattern overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.5 }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        borderRadius: '2rem',
                        color: '#38bdf8',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem'
                    }}>
                        #1 Degree Search Engine
                    </span>
                    <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
                        Find Your Future <br />
                        <span className="text-gradient">Without Borders</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Search over 120,000+ Bachelor’s, Master’s, and PhD programs across 210+ countries.
                        Your journey to global education starts here.
                    </p>

                    <DegreeSearch />

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        {[
                            { num: '120k+', label: 'Programs' },
                            { num: '210+', label: 'Countries' },
                            { num: '$45k+', label: 'Scholarships' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>{stat.num}</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
          100% { transform: translate(0, 0); }
        }
        .orb-1 { animation: float 10s ease-in-out infinite; }
        .orb-2 { animation: float 15s ease-in-out infinite reverse; }
        .orb-3 { animation: float 12s ease-in-out infinite 2s; }
      `}</style>
        </section>
    );
};

export default Hero;
