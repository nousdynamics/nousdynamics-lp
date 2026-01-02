import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    // Animação para partículas flutuantes
    const floatingParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
    }));

    return (
        <>
            <div className="premium-bg-container">
                <div className="premium-bg-lines"></div>
                <div className="premium-bg-glow"></div>
                <div className="noise-overlay"></div>
                
                {/* Partículas animadas */}
                {floatingParticles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-premium-gold/20 rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(particle.id) * 20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
            
            {/* Abstract Background Glow in Hero - Animado */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-premium-gold/10 rounded-[100%] blur-[120px] pointer-events-none"
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
                className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-premium-gold/5 rounded-[100%] blur-[100px] pointer-events-none"
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
