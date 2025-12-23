import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn, FaDiscord, FaPodcast } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '4rem 0', fontFamily: 'sans-serif' }}>
            <div className="container">

                {/* Logo Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <FiBox /> EduGlobal
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '1px', marginLeft: '2.2rem', textTransform: 'uppercase' }}>
                        Powered by Keystone
                    </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem' }}>

                    {/* Main Content */}
                    <div style={{ flex: '1 1 600px', maxWidth: '800px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>Where will your studies take you?</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '3rem' }}>
                            At EduGlobal, we believe that students who study abroad become the next generation of globally-minded
                            adventurers and leaders - and we want more of you to do it! Every year, our search engine helps over
                            8 million students connect with some of the best universities and schools around the world.
                        </p>

                        {/* Bottom Links */}
                        <ul style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            listStyle: 'none',
                            padding: 0,
                            fontSize: '0.9rem',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            <li><a href="#" className="footer-link">About us</a></li>
                            <li><a href="#" className="footer-link">Promote your program</a></li>
                            <li><a href="#" className="footer-link">Student network partnerships</a></li>
                            <li><a href="#" className="footer-link">Accessibility</a></li>
                            <li><a href="#" className="footer-link">Privacy policy</a></li>
                            <li><a href="#" className="footer-link">Terms and conditions</a></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <a href="#" className="social-icon"><FaInstagram size={24} /></a>
                        <a href="#" className="social-icon"><FaTiktok size={24} /></a>
                        <a href="#" className="social-icon"><FaYoutube size={24} /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn size={24} /></a>
                        <a href="#" className="social-icon"><FaDiscord size={24} /></a>
                        <a href="#" className="social-icon"><FaPodcast size={24} /></a>
                    </div>
                </div>

            </div>

            <style>{`
        .footer-link {
          text-decoration: none;
          color: inherit;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .footer-link:hover {
          border-bottom: 1px solid #fff;
        }
        .social-icon {
          color: #fff;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .social-icon:hover {
          opacity: 1;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
