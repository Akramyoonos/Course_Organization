import React from 'react';
import { FiGlobe, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const StudyGuides = () => {
    const guides = [
        { type: 'Country', title: 'Study in United Kingdom', desc: 'Visa, Costs, Universities', gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' },
        { type: 'Country', title: 'Study in Canada', desc: 'Post-grad work permits explained', gradient: 'linear-gradient(135deg, #be123c, #fb7185)' },
        { type: 'Country', title: 'Study in Germany', desc: 'Free tuition universities', gradient: 'linear-gradient(135deg, #ca8a04, #facc15)' },
        { type: 'Subject', title: 'Computer Science', desc: 'Top programs & career paths', gradient: 'linear-gradient(135deg, #0f766e, #2dd4bf)' },
        { type: 'Subject', title: 'MBA', desc: 'Global rankings & ROI', gradient: 'linear-gradient(135deg, #7e22ce, #c084fc)' },
        { type: 'Subject', title: 'Engineering', desc: 'Mechanical, Civil, Electrical', gradient: 'linear-gradient(135deg, #c2410c, #fdba74)' },
    ];

    return (
        <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--color-bg), #020617)' }}>
            <div className="container">
                <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>Ultimate Study Guides</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                    Everything you need to know about visa requirements, living costs, and quality of education across 210+ countries.
                </p>

                <div className="grid-cols-3">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                border: 'none'
                            }}
                        >
                            <div style={{
                                height: '120px',
                                background: guide.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    {guide.type === 'Country' ? <FiGlobe size={32} color="white" /> : <FiBookOpen size={32} color="white" />}
                                </div>
                                <span style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.3)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.8rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>
                                    {guide.type}
                                </span>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{guide.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{guide.desc}</p>
                                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontWeight: 600, gap: '0.5rem' }}>
                                    Read Guide <FiArrowRight />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudyGuides;
