import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, BarChart2, Gem, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "ETAPA 01",
        title: "Entendimento Estratégico",
        description: "Analisamos seu posicionamento, concorrentes e oferta para encontrar os públicos, mensagens e ângulos criativos com maior potencial de conversão.",
        icon: ArrowUpRight,
        highlight: false
    },
    {
        number: "ETAPA 02",
        title: "Máquina de Aquisição",
        description: "Criamos campanhas, anúncios e páginas de alta conversão que capturam o lead certo e entregam oportunidades qualificadas para o seu time comercial.",
        icon: Cpu,
        highlight: false
    },
    {
        number: "ETAPA 03",
        title: "Otimização Contínua",
        description: "Acompanhamo-s diariamente os indicadores, testando criativos, públicos e ofertas para reduzir o custo por lead e maximizar o ROI.",
        icon: BarChart2,
        highlight: false
    },
    {
        number: "ETAPA 04",
        title: "Escala & Retenção de LTV",
        description: "Implementamos programas de recompra, ascendentes de ticket e automações de relacionamento para aumentar o tempo de vida do cliente e o lucro por conta.",
        icon: Gem,
        highlight: true
    }
];

const Method = () => {
    return (
        <section id="metodo" className="py-24 border-y border-[#111]/80 bg-transparent z-10 relative">
            <div className="max-w-7xl mx-auto px-5">

                {/* Cabeçalho da seção */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight break-words hyphens-auto"
                    >
                        O Método Nous Leads
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:max-w-xl text-xs md:text-base text-gray-300 leading-relaxed font-light break-words hyphens-auto"
                    >
                        Um sistema em 4 etapas para construir previsibilidade de vendas, aumentar o LTV
                        e fazer sua empresa crescer sem depender apenas de novos leads frios.
                    </motion.p>
                </div>

                {/* Grid de etapas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {steps.map((step, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-xl border px-6 py-8 transition-all duration-300 hover:-translate-y-1.5 ${step.highlight
                                ? "border-premium-gold/70 bg-linear-to-b from-[#111] to-[#050403] shadow-[0_22px_50px_rgba(197,168,142,0.30)]"
                                : "border-[#181818] bg-linear-to-b from-[#070707] to-black shadow-[0_18px_40px_rgba(0,0,0,0.7)] hover:border-premium-gold/70"
                                }`}
                        >
                            <div className={`absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a2a] transition-colors ${step.highlight ? "bg-premium-gold text-black border-premium-gold-light/50" : "bg-black/60 text-gray-400 group-hover:text-premium-gold"
                                }`}>
                                <step.icon className="w-4 h-4" strokeWidth={1.7} />
                            </div>

                            <span className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-[0.2em] mb-5 transition-colors ${step.highlight ? "bg-premium-gold/10 border-premium-gold-light/60 text-premium-gold-light font-semibold" : "bg-black/70 border-[#2a2a2a] text-gray-400"
                                }`}>
                                {step.number}
                            </span>

                            <h3 className="text-lg md:text-xl font-medium text-white mb-3 break-words hyphens-auto">
                                {step.title}
                            </h3>
                            <p className={`text-sm leading-relaxed break-words hyphens-auto ${step.highlight ? "text-gray-200" : "text-gray-400"}`}>
                                {step.description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* CTA inferior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href="#contato"
                        className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/40 px-4 sm:px-6 py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-300 hover:border-premium-gold hover:text-white hover:bg-black/70 transition-all group text-center break-words"
                    >
                        <span className="whitespace-normal sm:whitespace-nowrap">Quero escalar meus resultados</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Method;
