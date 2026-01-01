import React from 'react';

const Background = () => {
    return (
        <>
            <div className="premium-bg-container">
                <div className="premium-bg-lines"></div>
                <div className="premium-bg-glow"></div>
                <div className="noise-overlay"></div>
            </div>
            {/* Abstract Background Glow in Hero */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-premium-gold/10 rounded-[100%] blur-[120px] pointer-events-none"
            ></div>
        </>
    );
};

export default Background;
