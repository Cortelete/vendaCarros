
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeaderProps {
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
    const navItems = ['Home', 'Carros', 'Contato'];

    const headerVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' }
        },
    };

    return (
        <motion.header 
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-black/20 backdrop-blur-lg border-b border-white/10"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Chevrolet Cruze
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </nav>
                <button 
                    onClick={onContactClick}
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                    WhatsApp
                </button>
            </div>
        </motion.header>
    );
};

export default Header;