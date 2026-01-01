import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-premium-gold/10 py-12 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-serif tracking-wide text-white">Nous Dynamics</span>
                    <span className="text-xs text-slate-500 ml-2">© 2024</span>
                </div>
                <div className="flex gap-8 text-sm text-slate-500 font-light">
                    <a href="#" className="hover:text-premium-gold transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-premium-gold transition-colors">Termos</a>
                    <a href="#" className="hover:text-premium-gold transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
