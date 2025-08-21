
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    onDevContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onDevContactClick }) => {
    return (
        <footer className="bg-black/30 py-8 px-6 md:px-12 border-t border-white/10 mt-16">
            <div className="container mx-auto text-center text-gray-400">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                >
                    <p className="text-lg font-semibold mb-2 text-white">Quer um site incrível como este?</p>
                    <p className="mb-4 max-w-lg mx-auto">Transforme sua presença online com um design moderno e funcional.</p>
                    <motion.button
                        onClick={onDevContactClick}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(45, 212, 191, 0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-teal-400 to-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                    >
                        Fale com o desenvolvedor 🚀
                    </motion.button>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <a 
                        href="https://www.instagram.com/inteligenciarte.ia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors"
                    >
                        Desenvolvido por InteligenciArte.IA ✨
                    </a>
                    <p className="text-xs mt-4">&copy; {new Date().getFullYear()} Anúncio Particular. Todos os direitos reservados.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;