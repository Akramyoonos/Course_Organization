import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import PageBackground from '../components/PageBackground';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login with:', email, password);
    };

    const handleGoogleLogin = () => {
        console.log('Google Login');
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
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
                    <p className="text-muted">Enter your details to access your account</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '1.5rem' }}>
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

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Password</label>
                            <Link to="/forgot-password" style={{ color: 'var(--color-primary)', fontSize: '0.85rem' }}>Forgot Password?</Link>
                        </div>
                        <div className="input-with-icon" style={{ position: 'relative' }}>
                            <FiLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
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
                        Sign In <FiArrowRight />
                    </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
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
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <FcGoogle size={24} /> Sign in with Google
                </button>

                <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Sign up</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
