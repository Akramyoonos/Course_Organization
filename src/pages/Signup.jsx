import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import PageBackground from '../components/PageBackground';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signup with:', formData);
    };

    const handleGoogleSignup = () => {
        console.log('Google Signup');
    };

    const inputStyle = {
        width: '100%',
        padding: '0.8rem 1rem 0.8rem 2.8rem',
        borderRadius: '0.5rem',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.05)',
        color: 'white',
        outline: 'none',
        fontSize: '1rem'
    };

    const iconStyle = {
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--color-text-muted)'
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <PageBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel"
                style={{ width: '100%', maxWidth: '500px', padding: '3rem 2rem' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Create Account</h2>
                    <p className="text-muted">Start your journey to global education today</p>
                </div>

                <form onSubmit={handleSignup}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Full Name</label>
                        <div className="input-with-icon" style={{ position: 'relative' }}>
                            <FiUser style={iconStyle} />
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email Address</label>
                        <div className="input-with-icon" style={{ position: 'relative' }}>
                            <FiMail style={iconStyle} />
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '180px' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Password</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <FiLock style={iconStyle} />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '180px' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Confirm Password</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <FiLock style={iconStyle} />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        Create Account <FiArrowRight />
                    </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Or sign up with</span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>

                <button
                    onClick={handleGoogleSignup}
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '0.5rem',
                        background: 'white',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.8rem',
                        fontWeight: '600',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <FcGoogle size={24} /> Sign up with Google
                </button>

                <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Sign in</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
