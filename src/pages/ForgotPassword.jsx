import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageBackground from '../components/PageBackground';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reset password for:', email);
        setSubmitted(true);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <PageBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel"
                style={{ width: '100%', maxWidth: '450px', padding: '3rem 2rem' }}
            >
                {!submitted ? (
                    <>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Forgot Password?</h2>
                            <p className="text-muted">Enter your email and we'll send you a link to reset your password.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email Address</label>
                                <div className="input-with-icon" style={{ position: 'relative' }}>
                                    <FiMail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 1rem 0.8rem 2.8rem',
                                            borderRadius: '0.5rem',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            background: 'rgba(255,255,255,0.05)',
                                            color: 'white',
                                            outline: 'none',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                Send Reset Link <FiSend />
                            </button>
                        </form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(56, 189, 248, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#38bdf8' }}>
                            <FiSend size={30} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Check your email</h3>
                        <p className="text-muted" style={{ marginBottom: '2rem' }}>
                            We have sent a password reset link to <br />
                            <span style={{ color: 'white', fontWeight: '600' }}>{email}</span>
                        </p>
                        <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                            Try another email
                        </button>
                    </div>
                )}

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/login" style={{ color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                        <FiArrowLeft /> Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
