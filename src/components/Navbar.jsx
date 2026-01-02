import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-auto glass-nav flex gap-6 rounded-full p-1.5 pl-5 items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
                <div className="flex items-center gap-2">
                    <img
                        src="assets/Nous Dynamics-Favicon--dark.png"
                        alt="Nous Dynamics"
                        className="w-7 h-7 rounded-full object-cover"
                    />
                </div>

                <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-300">
                    <a href="#metodo" className="hover:text-white transition-colors">
                        Método
                    </a>
                    <a href="#quem-somos" className="hover:text-white transition-colors">
                        Para Quem É
                    </a>
                </div>

                <a
                    href="#contato"
                    className="bg-premium-gold text-premium-dark text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-premium-gold-light transition-all hover:scale-105"
                >
                    Agendar
                </a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
