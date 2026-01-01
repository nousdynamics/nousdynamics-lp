import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, ChevronDown, ArrowRight } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        whatsapp: '',
        site: '',
        revenue: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Obrigado! Entraremos em contato em breve.');
    };

    return (
        <section id="contato" className="py-32 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content: Value Prop */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-premium-gold/20 bg-premium-gold/5 text-premium-gold text-[10px] uppercase font-semibold tracking-[0.2em] mb-6">
                                Contato Imediato
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
                                Pronto para destravar sua <span className="text-premium-gold italic font-serif">próxima escala?</span>
                            </h2>
                            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                                Receba uma análise estratégica gratuita do seu marketing e entenda como podemos otimizar seu LTV hoje mesmo.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-4 items-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-premium-gold/10 border border-premium-gold/20 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-premium-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Resposta em até 24h</h4>
                                    <p className="text-sm text-slate-500">Nosso time entrará em contato via WhatsApp ou E-mail.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-4 items-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-premium-gold/10 border border-premium-gold/20 flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-premium-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Dados Protegidos</h4>
                                    <p className="text-sm text-slate-500">Suas informações são tratadas com total sigilo estratégico.</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="pt-4"
                        >
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-light">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-premium-dark bg-slate-800"></div>
                                    ))}
                                </div>
                                <span>+200 empresas já receberam nossa análise</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="form-container"
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-premium-gold/10 rounded-full blur-3xl"></div>

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">Nome Completo</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                            placeholder="Ex: Ryan Santiago"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">Sua Empresa</label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                            placeholder="Nome da empresa"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">E-mail Corporativo</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                        placeholder="seu@empresa.com"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">WhatsApp</label>
                                        <input
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            type="tel"
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                            placeholder="(DD) 99999-9999"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">Site / Instagram</label>
                                        <input
                                            name="site"
                                            value={formData.site}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                            placeholder="@suaempresa"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-premium-gold uppercase tracking-[0.15em] font-semibold ml-1">Faturamento Médio Mensal</label>
                                    <div className="relative">
                                        <select
                                            name="revenue"
                                            value={formData.revenue}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm appearance-none cursor-pointer scheme-dark"
                                            required
                                        >
                                            <option value="" disabled>Selecione uma faixa</option>
                                            <option value="ate-60">Até R$60 mil</option>
                                            <option value="60-100">Entre R$60 mil e R$100 mil</option>
                                            <option value="100-200">Entre R$100 mil e R$200 mil</option>
                                            <option value="acima-200">Acima de R$200 mil</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold pointer-events-none opacity-60" />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full mt-4 btn-premium text-premium-dark font-bold py-4 rounded-xl shadow-xl shadow-premium-gold/10 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group"
                                >
                                    <span>Solicitar Análise Estratégica</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
