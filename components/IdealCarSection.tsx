
import React from 'react';
import { motion, Variants } from 'framer-motion';

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);
const SofaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
);
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.953 14.953 0 00-2.582-7.772M12 21a9 9 0 01-9-9 9 9 0 019-9m9 9a9 9 0 01-9 9M9 9.75h6m-6 4.5h6m-6 4.5h6" />
    </svg>
);
const DiamondIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375l3.625-7.25L12 3.875 8.375 11.125 12 18.375z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375L19.25 12 12 3.875 4.75 12 12 18.375z" />
    </svg>
);

const benefits = [
    { icon: <ShieldIcon />, title: 'Segurança Total para a Família', description: 'Equipado com múltiplos airbags e controle de estabilidade. Veículo com laudo cautelar aprovado para sua total tranquilidade.' },
    { icon: <SofaIcon />, title: 'Conforto e Tecnologia a Bordo', description: 'Interior com bancos de couro, MyLink e retrovisores rebatíveis para viagens mais agradáveis e conectadas.' },
    { icon: <RocketIcon />, title: 'Performance e Economia', description: 'Motor 1.4 Turbo com 153cv para ultrapassagens seguras e excelente consumo, combinando o melhor dos dois mundos.' },
    { icon: <DiamondIcon />, title: 'Estilo e Exclusividade LTZ', description: 'A versão topo de linha com acabamentos premium, chave presencial e sistema Start-Stop. Um carro que se destaca por onde passa.' },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const IdealCarSection: React.FC = () => {
    return (
        <section className="pt-32 pb-12 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-3xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Para você que procura um carro confiável e elegante para a família
                </motion.h2>
                <motion.p 
                    className="max-w-3xl mx-auto text-lg text-gray-300"
                     initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Este Chevrolet Cruze LTZ 2018 não é apenas um carro. É o sedan que combina a segurança e o conforto que sua família merece, com a performance que você deseja.
                </motion.p>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-2"
                        >
                            <div className="text-purple-400 mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IdealCarSection;