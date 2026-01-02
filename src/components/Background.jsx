import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <>
            <div className="premium-bg-container overflow-x-hidden">
                <div className="premium-bg-lines"></div>
                <div className="premium-bg-glow"></div>
                <div className="noise-overlay"></div>
            </div>
            
            {/* Abstract Background Glow in Hero - Animado */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-premium-gold/30 rounded-[100%] blur-[120px] pointer-events-none overflow-hidden"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Glow adicional animado */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-full max-w-[600px] h-[300px] bg-premium-gold/5 rounded-[100%] blur-[100px] pointer-events-none overflow-hidden"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </>
    );
};

export default Background;
