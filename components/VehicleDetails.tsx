import React from 'react';
import { motion, Variants } from 'framer-motion';

const EngineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v1.586M12 11.253v1.586M12 16.253v1.586M7.5 6.253v1.586M7.5 11.253v1.586M7.5 16.253v1.586M16.5 6.253v1.586M16.5 11.253v1.586M16.5 16.253v1.586M3.75 8.25h16.5M3.75 12h16.5m-16.5 3.75h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 8.25V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25zM4.125 15.75a2.25 2.25 0 012.25-2.25h11.25a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H6.375a2.25 2.25 0 01-2.25-2.25V15.75z" />
    </svg>
);
const SpeedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V12" />
    </svg>
);
const TransmissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v1.5m0 3v1.5m0 3v1.5m3.75-6v1.5m3.75-3.75v1.5m-11.25-3.75v1.5m-3.75 3.75v1.5m1.5-1.5h9.75M4.5 9.75H12m0 0H19.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9.75a4.125 4.125 0 010 8.25H4.5a4.125 4.125 0 010-8.25H19.5z" />
    </svg>
);
const FuelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.415a.75.75 0 011.06 0l.415.415a1.875 1.875 0 010 2.65l-.415.415a.75.75 0 01-1.06 0l-.415-.415a1.875 1.875 0 010-2.65z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5l.415-.415a.75.75 0 011.06 0l.415.415a1.875 1.875 0 010 2.65l-.415.415a.75.75 0 01-1.06 0l-.415-.415a1.875 1.875 0 010-2.65z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25c-3.314 0-6-2.33-6-5.25s2.686-5.25 6-5.25 6 2.33 6 5.25-2.686 5.25-6 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25c-3.314 0-6-2.33-6-5.25s2.686-5.25 6-5.25 6 2.33 6 5.25-2.686 5.25-6 5.25zM9 12.75h6" />
    </svg>
);
const FeaturesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);
const DocumentCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 8.25L7.5 11.25 5.25 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
);


const details = [
    { icon: <EngineIcon />, title: 'Motorização', value: '1.4 Turbo Flex' },
    { icon: <SpeedIcon />, title: 'Potência Máxima', value: '153 cv (E) / 150 cv (G)' },
    { icon: <TransmissionIcon />, title: 'Câmbio', value: 'Automático de 6 Marchas' },
    { icon: <FuelIcon />, title: 'Consumo Urbano', value: '7.6 km/l (E) / 11.2 km/l (G)' },
    { icon: <FuelIcon />, title: 'Consumo Rodoviário', value: '9.6 km/l (E) / 14 km/l (G)' },
    { icon: <FeaturesIcon />, title: 'Destaques LTZ', value: 'Couro, MyLink, Start-Stop, Chave Presencial, Retrovisores Rebatíveis' },
    { icon: <DocumentCheckIcon />, title: 'Documentação', value: 'Sem restrições, Laudo Aprovado' },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};


const VehicleDetails: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-black/20">
            <div className="container mx-auto">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Detalhes que fazem a diferença
                </motion.h2>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {details.map((detail, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:border-purple-400/50 hover:-translate-y-2"
                        >
                            <div className="mb-4 text-purple-400">{detail.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-300 mb-1">{detail.title}</h3>
                            <p className="text-xl font-bold text-white">{detail.value}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default VehicleDetails;