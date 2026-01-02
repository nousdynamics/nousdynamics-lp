import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <header className="lg:pt-48 lg:pb-32 min-h-[90vh] flex flex-col pt-32 pb-24 relative items-center justify-center bg-transparent overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-premium-gold/20 bg-premium-gold/5 text-premium-gold text-[10px] uppercase font-semibold tracking-[0.2em] mb-8"
                >
                    Escala & Lucro
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 leading-[1.05] break-words hyphens-auto"
                >
                    <span className="block md:inline">Sua agenda cheia,</span>{' '}
                    <span className="block md:inline">o lucro <span className="inline-block relative">
                        <span className="bg-clip-text italic text-transparent bg-linear-to-br from-[#DFBFA7] to-[#DFBFA7] z-10 pr-2 relative">
                            estagnado.
                        </span>
                    </span></span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-10 font-light tracking-wide break-words hyphens-auto px-2 sm:px-0"
                >
                    Transformamos clientes pontuais em receita recorrente. Aumente seu <strong>Lucro</strong> e escale seu
                    faturamento sem depender apenas de novos leads.
                </motion.p>

                {/* CTA Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    <a
                        href="#contato"
                        className="group relative h-12 px-6 sm:px-8 flex items-center justify-center bg-premium-gold text-premium-dark text-xs sm:text-sm font-semibold rounded-full overflow-hidden transition-all hover:bg-[#E8D4C1] shadow-[0_0_30px_-10px_rgba(197,168,142,0.4)] whitespace-nowrap"
                    >
                        <span className="mr-2">Agendar Análise Gratuita</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </a>
                    <a
                        href="#metodo"
                        className="h-12 px-8 flex items-center justify-center text-gray-300 text-sm hover:text-white transition-colors border border-transparent hover:border-premium-gold/20 rounded-full"
                    >
                        Conhecer Método
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
            >
                <ChevronDown className="w-6 h-6 text-premium-gold" />
            </motion.div>
        </header>
    );
};

export default Hero;
