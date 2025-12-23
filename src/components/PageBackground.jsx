import React from 'react';

const PageBackground = () => {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
            {/* Deep Blue Base */}
            <div style={{ position: 'absolute', inset: 0, background: '#0f172a' }}></div>

            {/* Animated Orbs */}
            <div className="orb orb-1" style={{ position: 'absolute', top: '20%', left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
            <div className="orb orb-2" style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>

            {/* Grid pattern overlay */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.5 }}></div>

            <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
          100% { transform: translate(0, 0); }
        }
        .orb-1 { animation: float 10s ease-in-out infinite; }
        .orb-2 { animation: float 15s ease-in-out infinite reverse; }
      `}</style>
        </div>
    );
};

export default PageBackground;
