import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowDown, TrendingUp, Target, Repeat2 } from 'lucide-react';

// --- COMPONENTES AUXILIARES DA ANIMAÇÃO ---

// 1. Círculo dos ícones
const Circle = ({ className = "", children }) => {
  return (
    <div
      className={
        "z-10 flex size-14 md:size-16 items-center justify-center rounded-full " +
        "border-2 border-premium-gold/80 bg-[#050505] " +
        "shadow-[0_0_25px_rgba(197,168,142,0.25)] " +
        className
      }
    >
      {children}
    </div>
  );
};

// 2. Caminho das linhas (SVG)
const TreePath = ({ className }) => {
  // Coordenadas para conectar o topo (50, 15) aos 3 pontos inferiores
  const pathCenter = "M 50 15 V 85"; 
  const pathLeft = "M 50 15 V 50 H 16.5 V 85";
  const pathRight = "M 50 15 V 50 H 83.5 V 85";

  return (
    <svg
      fill="none"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
    >
      {/* Linhas de base (escuras) */}
      <path d={pathCenter} stroke="rgba(197,168,142,0.15)" strokeWidth="0.5" />
      <path d={pathLeft} stroke="rgba(197,168,142,0.15)" strokeWidth="0.5" />
      <path d={pathRight} stroke="rgba(197,168,142,0.15)" strokeWidth="0.5" />

      {/* Feixes de luz animados */}
      <motion.path
        d={pathCenter}
        stroke="#C5A88E"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
      <motion.path
        d={pathLeft}
        stroke="#C5A88E"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
      />
      <motion.path
        d={pathRight}
        stroke="#C5A88E"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
      />
    </svg>
  );
};

// --- DADOS ---
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

// --- COMPONENTE PRINCIPAL ---
const WhoIsItFor = () => {
    return (
        <section id="quem-somos" className="py-24 bg-[#050505] relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    
                    {/* === COLUNA DA ESQUERDA (TEXTOS) === */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl text-white mb-8 leading-tight break-words hyphens-auto"
                        >
                            <span className="block">Esta solução é ideal</span>
                            <span className="block text-premium-gold italic font-serif">para você que:</span>
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
                                        <h4 className="text-white text-lg font-medium mb-1 break-words hyphens-auto">{reason.title}</h4>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed break-words hyphens-auto">{reason.description}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        
                        {/* CTA Actions */}
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-start"
                        >
                            <a
                            href="#contato"
                            className="group relative h-12 px-6 sm:px-12 flex items-center justify-center bg-premium-gold text-premium-dark text-xs sm:text-sm font-semibold rounded-full overflow-hidden transition-all hover:bg-[#E8D4C1] shadow-[0_0_30px_-10px_rgba(197,168,142,0.4)] whitespace-nowrap"
                            >
                                <span>Sim, essa solução é para mim</span>
                                <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1 flex-shrink-0" />
                            </a>
                        </motion.div>
                    </div>

                    {/* === COLUNA DA DIREITA (ANIMAÇÃO TREE PATH) === */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] md:h-[500px] w-full bg-[#080808] border border-premium-gold/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8"
                    >
                        {/* Fundo Grid */}
                        <div className="absolute inset-0 bg-lux-grid opacity-40"></div>

                        {/* Container da Animação */}
                        <div className="relative w-full h-full max-w-md flex flex-col justify-between py-6">
                            
                            {/* SVG das Linhas (Fundo) */}
                            <TreePath />

                            {/* 1. Logo no Topo */}
                            <div className="relative z-20 flex justify-center">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Circle className="size-20 md:size-20 border-4 bg-[#1a1a1a]">
                                        <img
                                            src="assets/Nous Dynamics-Favicon--dark.png"
                                            alt="Nous Dynamics"
                                            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                                        />
                                    </Circle>
                                </motion.div>
                            </div>

                            {/* 2. Ícones na Base */}
                            <div className="relative z-20 flex justify-between items-end w-full">
                                {/* Esquerda */}
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col items-center w-1/3 "
                                >
                                    <Circle>
                                    <img
                                            src="assets/Agenda cheia.png"
                                            alt="Nous Dynamics"
                                            className="w-6 h-6 md:w-8 md:h-8 object-contain "
                                        />
                                    </Circle>
                                </motion.div>

                                {/* Centro */}
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col items-center w-1/3"
                                >
                                    <Circle>
                                    <img
                                            src="assets/LTV.png"
                                            alt="Nous Dynamics"
                                            className="6 h-6 md:w-8 md:h-8 object-contain"
                                        />
                                    </Circle>
                                </motion.div>

                                {/* Direita */}
                                <motion.div 
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col items-center w-1/3"
                                >
                                    <Circle>
                                          <img
                                            src="assets/Fatura acima.png"
                                            alt="Nous Dynamics"
                                            className="6 h-6 md:w-8 md:h-8 object-contain"
                                          />
                                    </Circle>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;