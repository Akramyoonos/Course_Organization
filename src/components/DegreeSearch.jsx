import React, { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DegreeSearch = () => {
    const [subject, setSubject] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for', subject, 'in', location);
        // Navigate to results page
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSearch}
            className="glass-panel"
            style={{
                padding: '0.75rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                maxWidth: '800px',
                margin: '0 auto',
                marginTop: '2rem'
            }}
        >
            <div className="input-group" style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0 1rem' }}>
                <FiSearch className="text-muted" style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }} />
                <input
                    type="text"
                    placeholder="What do you want to study?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '1rem',
                        width: '100%',
                        outline: 'none',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div className="input-group" style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0 1rem' }}>
                <FiMapPin className="text-muted" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }} />
                <input
                    type="text"
                    placeholder="Where? (e.g. UK, Canada)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '1rem',
                        width: '100%',
                        outline: 'none',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0 3rem', fontSize: '1.1rem' }}>
                Search
            </button>

            <style>{`
        ::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 600px) {
          .glass-panel {
            flex-direction: column;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          .input-group {
            background: var(--glass-bg) !important;
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(10px);
          }
          button {
            width: 100%;
          }
        }
      `}</style>
        </motion.form>
    );
};

export default DegreeSearch;
