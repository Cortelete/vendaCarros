
import React from 'react';
import { motion, Variants } from 'framer-motion';
import PhotoCarousel from './PhotoCarousel';
import FeatureCard from './FeatureCard';
import AnimatedGradientText from './AnimatedGradientText';

interface HeroProps {
    onContactClick: () => void;
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);
const WrenchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.42m5.877 3.75l-5.877-5.877m0 0a3.375 3.375 0 014.773 0l2.472 2.472" />
    </svg>
);
const TurboIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
    </svg>
);
const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
);


const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
    const carFeatures = [
        { text: 'Único Dono', icon: <UserIcon /> },
        { text: 'Laudo Cautelar Aprovado', icon: <ShieldCheckIcon /> },
        { text: 'Revisões em Dia', icon: <WrenchIcon /> },
        { text: 'Motor 1.4 Turbo', icon: <TurboIcon /> },
        { text: 'Versão LTZ Completa', icon: <StarIcon /> },
        { text: 'Chave Reserva e Manual', icon: <KeyIcon /> },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' }
        },
    };

    return (
        <section className="pb-20 px-6 md:px-12 min-h-screen flex items-center">
            <motion.div 
                className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <AnimatedGradientText className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Chevrolet Cruze LTZ
                    </AnimatedGradientText>
                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
                        2018/2018 1.4 Turbo Sedan
                    </motion.h2>

                    <motion.div variants={itemVariants} className="mb-8">
                        <PhotoCarousel />
                    </motion.div>
                </motion.div>

                <div className="flex flex-col items-center lg:items-start">
                    <motion.div variants={itemVariants} className="mb-8 relative">
                        <AnimatedGradientText className="text-5xl md:text-7xl font-bold">
                            R$ 90.000
                        </AnimatedGradientText>
                    </motion.div>
                    
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 w-full"
                        variants={containerVariants}
                    >
                        {carFeatures.map((feature, index) => (
                            <FeatureCard key={index} text={feature.text} icon={feature.icon} />
                        ))}
                    </motion.div>

                    <motion.button
                        onClick={onContactClick}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(129, 140, 248, 0.7)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg transition-all duration-300"
                    >
                        Tenho Interesse
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;