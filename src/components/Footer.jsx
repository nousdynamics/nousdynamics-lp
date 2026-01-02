import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-premium-gold/10 py-12 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                <img
                        src="assets/LOGO COMPLETA v2.png"
                        alt="Nous Dynamics"
                        className="w-23 h-full object-contain"
                    />
                    <span className="text-xs text-gray-400 ml-2">© 2024</span>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-light">
                    <a href="#" className="hover:text-premium-gold transition-colors break-words">Privacidade</a>
                    <a href="#" className="hover:text-premium-gold transition-colors break-words">Termos</a>
                    <a href="#" className="hover:text-premium-gold transition-colors break-words">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
