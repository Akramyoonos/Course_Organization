import React from 'react';
import { FiMonitor, FiUserCheck, FiEdit3, FiArrowRight } from 'react-icons/fi';

const StudentSupport = () => {
    const supports = [
        {
            icon: <FiMonitor size={30} />,
            title: "Free Webinars",
            desc: "Watch live sessions on admission tips and university spotlights.",
            color: "#38bdf8"
        },
        {
            icon: <FiUserCheck size={30} />,
            title: "Student Stories",
            desc: "Read about the experiences of students who moved abroad.",
            color: "#f472b6"
        },
        {
            icon: <FiEdit3 size={30} />,
            title: "Expert Advice",
            desc: "Guides on writing motivation letters and choosing destinations.",
            color: "#a78bfa"
        }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ marginBottom: '3rem' }}>Student Support & Resources</h2>

                <div className="grid-cols-3">
                    {supports.map((item, index) => (
                        <div
                            key={index}
                            className="glass-panel"
                            style={{
                                padding: '2.5rem 2rem',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.1)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.color
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                            <a href="#" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: item.color, fontWeight: '600' }}>
                                Learn More <FiArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentSupport;
