
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface DeveloperContactModalProps {
    onClose: () => void;
}

const DeveloperContactModal: React.FC<DeveloperContactModalProps> = ({ onClose }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        const devPhoneNumber = '5541988710303';
        const message = `Olá, meu nome é ${name}. Vi o link no site de venda do Cruze e quero um site incrível como esse! 🚀`;
        const whatsappUrl = `https://wa.me/${devPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby="dev-modal-title"
        >
            <motion.div
                className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
                role="document"
            >
                <h2 id="dev-modal-title" className="text-2xl font-bold mb-2 text-center text-white">Fale com o Desenvolvedor</h2>
                <p className="text-center text-gray-300 mb-6">Vamos criar um site incrível para você!</p>
                <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                    <div className="mb-6">
                        <label htmlFor="dev-contact-name" className="block text-gray-300 mb-2">Seu nome</label>
                        <input 
                            type="text" 
                            id="dev-contact-name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                        Iniciar Conversa no WhatsApp
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default DeveloperContactModal;