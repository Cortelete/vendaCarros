
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FeatureCardProps {
    text: string;
    icon: React.ReactNode;
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    },
};


const FeatureCard: React.FC<FeatureCardProps> = ({ text, icon }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center shadow-lg flex flex-col items-center justify-center gap-2"
        >
            <div className="text-purple-300 w-8 h-8 flex items-center justify-center">{icon}</div>
            <span className="text-sm sm:text-base font-medium">{text}</span>
        </motion.div>
    );
};

export default FeatureCard;