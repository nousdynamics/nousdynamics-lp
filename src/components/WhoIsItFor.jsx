import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowDown, TrendingUp } from 'lucide-react';

const reasons = [
    {
        title: "Agenda cheia, faturamento estagnado",
        description: "Você já atrai clientes, mas não consegue transformar volume em lucro real."
    },
    {
        title: "LTV (Lifetime Value) baixo",
        description: "Seus clientes vêm uma vez e somem, forçando gastos contínuos com novos leads."
    },
    {
        title: "Fatura acima de R$60.000/mês",
        description: "Já possui tração e precisa de um parceiro estratégico para romper a barreira."
    }
];

const WhoIsItFor = () => {
    return (
        <section id="quem-somos" className="py-24 bg-[#050505] relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl text-white mb-8 leading-tight"
                        >
                            Esta solução é ideal <br />
                            <span className="text-premium-gold italic font-serif">para você que:</span>
                        </motion.h2>

                        <ul className="space-y-6">
                            {reasons.map((reason, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-premium-gold/10 border border-premium-gold/30 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-premium-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-medium mb-1">{reason.title}</h4>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">{reason.description}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-10"
                        >
                            <a
                                href="#contato"
                                className="inline-flex items-center gap-2 text-white font-medium hover:text-premium-gold transition-colors group"
                            >
                                Sim, essa solução é para mim
                                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Abstract Visual Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full bg-[#080808] border border-premium-gold/10 rounded-2xl overflow-hidden flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-lux-grid opacity-50"></div>

                        {/* Orbiting element */}
                        <div className="relative w-64 h-64 border border-premium-gold/20 rounded-full animate-[spin_20s_linear_infinite]">
                            <div className="absolute inset-2 border border-premium-gold/10 rounded-full"></div>
                            <div className="absolute -top-2 left-1/2 w-4 h-4 bg-premium-gold rounded-full shadow-[0_0_15px_rgba(197,168,142,0.8)]"></div>
                        </div>

                        {/* Floating stat card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute glass-panel px-6 py-4 rounded-xl bottom-10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-premium-gold/20 rounded-full flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-premium-gold" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Crescimento Previsível</p>
                                    <p className="text-white font-serif text-lg">+145% LTV</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;
