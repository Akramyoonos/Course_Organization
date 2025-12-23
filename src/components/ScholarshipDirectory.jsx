import React from 'react';
import { FiAward, FiArrowRight, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ScholarshipDirectory = () => {
    const featuredScholarships = [
        {
            id: 1,
            title: "Study a Master’s in Europe",
            amount: "€5,000",
            deadline: "15 May 2026",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            title: "Study a Bachelor’s in the USA",
            amount: "$5,000",
            deadline: "30 June 2026",
            color: "from-pink-500 to-rose-400"
        }
    ];

    return (
        <section className="section-padding" style={{ position: 'relative' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px', background: 'var(--color-primary)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }}></div>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 className="text-gradient">Scholarships & Funding</h2>
                        <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            Discover our comprehensive directory of international scholarships.
                            We also award our own scholarships annually totaling over $45,000.
                        </p>
                    </div>
                    <button className="btn btn-outline hidden-mobile">
                        View All Scholarships
                    </button>
                </div>

                <div className="grid-cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {featuredScholarships.map((sch, index) => (
                        <motion.div
                            key={sch.id}
                            className="glass-panel"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: `linear-gradient(to right, var(--color-primary), var(--color-accent))` }}></div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%' }}>
                                    <FiAward style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
                                </div>
                                <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                                    {sch.amount}
                                </div>
                            </div>

                            <h3>{sch.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Automatic entry based on academic merit and motivation letter.</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Deadline: {sch.deadline}</span>
                                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    Apply Now <FiArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Looking for something else?</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {['PhD Funding', 'Sports Scholarships', 'Merit Based', 'Art & Design'].map(tag => (
                            <span key={tag} className="glass-panel" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipDirectory;
