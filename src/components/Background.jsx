import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="premium-bg-container">
                <div className="premium-bg-lines"></div>
                <div className="premium-bg-glow"></div>
                <div className="noise-overlay"></div>
            </div>
            
            {/* Abstract Background Glow in Hero - Animado */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] md:w-[800px] h-[400px] bg-premium-gold/20 rounded-[100%] blur-[120px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: ["-50%", "-45%", "-50%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Glow adicional animado */}
            <motion.div
                className="absolute top-1/3 right-0 w-[120%] md:w-[600px] h-[300px] bg-premium-gold/10 rounded-[100%] blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                    x: ["20%", "10%", "20%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
};

export default Background;
