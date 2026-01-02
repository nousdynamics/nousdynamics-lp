import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, ChevronDown, ArrowRight } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        phoneCode: '+55',
        site: '',
        googleAdsInvestment: '',
        employees: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Máscara de telefone brasileiro: (XX) XXXXX-XXXX (celular) ou (XX) XXXX-XXXX (fixo)
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        
        // Limita a 11 dígitos (DDD + 9 dígitos para celular)
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        // Aplica a máscara conforme o tamanho
        if (value.length === 0) {
            value = '';
        } else if (value.length <= 2) {
            value = value;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 10) {
            // Telefone fixo: (XX) XXXX-XXXX
            value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else {
            // Celular: (XX) 9XXXX-XXXX
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        }
        
        setFormData({ ...formData, phone: value });
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border uppercase border-premium-gold/20 bg-premium-gold/5 text-premium-gold text-[10px] md:text-[0.8em]   tracking-[0.2em] mb-6">
                                Contato Imediato
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif leading-tight mb-6">
                                Pronto para destravar sua <span className="text-premium-gold italic font-serif">próxima escala?</span>
                            </h2>
                            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-lg">
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
                                    <p className="text-sm text-gray-400">Nosso time entrará em contato via WhatsApp ou E-mail.</p>
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
                                    <p className="text-sm text-gray-400">Suas informações são tratadas com total sigilo estratégico.</p>
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
                            <div className="flex items-center gap-2 text-gray-400 text-xs font-light">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full border-2 border-premium-gold bg-gray-800 overflow-hidden">
                                    <img 
                                        src="assets/CASAL PEDIATRA.png" 
                                        alt="Casal Pediatra" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-6 h-6 rounded-full border-2 border-premium-gold bg-gray-800 overflow-hidden">
                                    <img 
                                        src="assets/YEVENT.png" 
                                        alt="Yevent" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-6 h-6 rounded-full border-2 border-premium-gold bg-gray-800 overflow-hidden">
                                    <img 
                                        src="assets/DR ROBERTA.png" 
                                        alt="Dra. Roberta" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                                <span>+50 empresas satisfeitas com o nosso trabalho</span>
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
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">Nome</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                        placeholder="Nome"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">E-mail</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                        placeholder="E-mail"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">DDD + Telefone</label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-shrink-0">
                                            <select
                                                name="phoneCode"
                                                value={formData.phoneCode}
                                                onChange={handleChange}
                                                className="w-20 px-3 py-3.5 rounded-xl input-premium text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="+55">🇧🇷 +55</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+34">🇪🇸 +34</option>
                                                <option value="+351">🇵🇹 +351</option>
                                            </select>
                                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold pointer-events-none opacity-60" />
                                        </div>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            type="tel"
                                            className="flex-1 px-5 py-3.5 rounded-xl input-premium text-sm"
                                            placeholder="(XX) XXXXX-XXXX"
                                            maxLength={15}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">Site (Não obrigatório)</label>
                                    <input
                                        name="site"
                                        value={formData.site}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-5 py-3.5 rounded-xl input-premium text-sm"
                                        placeholder="Site (Não obrigatório)"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">Quanto você investe/pretende investir por mês em Anúncios online?</label>
                                    <div className="relative">
                                        <select
                                            name="googleAdsInvestment"
                                            value={formData.googleAdsInvestment}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled>Selecione uma faixa</option>
                                            <option value="2000-3000">De R$ 2000,00 a R$ 3000,00 (mínimo)</option>
                                            <option value="3000-5000">De R$ 3000,00 a R$ 5000,00</option>
                                            <option value="5000-10000">De R$ 5000,00 a R$ 10000,00</option>
                                            <option value="10000-20000">De R$ 10000,00 a R$ 20000,00</option>
                                            <option value="acima-20000">Acima de R$ 20000,00</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold pointer-events-none opacity-60" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">Número de funcionários</label>
                                    <div className="relative">
                                        <select
                                            name="employees"
                                            value={formData.employees}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl input-premium text-sm appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled>Selecione uma opção</option>
                                            <option value="sozinho">Trabalho sozinho</option>
                                            <option value="1-5">1 a 5 funcionários</option>
                                            <option value="6-15">6 a 15 funcionários</option>
                                            <option value="16-50">16 a 50 funcionários</option>
                                            <option value="mais-50">Mais de 50 funcionários</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-gold pointer-events-none opacity-60" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-[0.8em] text-premium-gold    ml-1">Mensagem</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-5 py-3.5 rounded-xl input-premium text-sm resize-y"
                                        placeholder="Conte-me mais detalhes da sua empresa e seus objetivos com os anúncios."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full mt-4 btn-premium text-premium-dark font-bold py-4 rounded-xl shadow-xl shadow-premium-gold/10 text-xs  tracking-[0.2em] flex items-center justify-center gap-3 group"
                                >
                                    <span>CONSULTORIA GRATUITA</span>
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
