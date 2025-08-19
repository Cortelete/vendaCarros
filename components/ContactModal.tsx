
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface ContactModalProps {
    onClose: () => void;
    carName: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, carName }) => {
    const [name, setName] = useState('');
    const [offer, setOffer] = useState('');
    const [visitDay, setVisitDay] = useState('');
    const [tradeIn, setTradeIn] = useState('');
    const [question, setQuestion] = useState('');


    const handleSubmit = () => {
        let message = `Olá, meu nome é ${name}.\n\n`;
        message += `Tenho interesse no ${carName} e minha oferta é de ${offer}.\n`;
        message += `Gostaria de agendar uma visita, de preferência para ${visitDay}.\n\n`;
        
        if (tradeIn) {
            message += `Possuo um ${tradeIn} para avaliar em uma possível troca.\n`;
        }
        if (question) {
            message += `Minha principal dúvida é: ${question}\n`;
        }
        message += `\nAguardo seu contato. Obrigado!`;

        const whatsappUrl = `https://wa.me/5541999999999?text=${encodeURIComponent(message)}`;
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
        >
            <motion.div
                className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-1 text-center text-white">Faça sua Proposta</h2>
                <p className="text-center text-gray-300 mb-6 font-medium">{carName}</p>
                <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="offer" className="block text-gray-300 mb-2">Sua oferta</label>
                        <input type="text" id="offer" value={offer} onChange={(e) => setOffer(e.target.value)} required className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ex: R$ 88.000"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="visitDay" className="block text-gray-300 mb-2">Melhor dia para visita</label>
                        <input type="text" id="visitDay" value={visitDay} onChange={(e) => setVisitDay(e.target.value)} required className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ex: Sábado à tarde"/>
                    </div>
                     <div className="mb-4">
                        <label htmlFor="tradeIn" className="block text-gray-300 mb-2">Tem um carro na troca? (Opcional)</label>
                        <input type="text" id="tradeIn" value={tradeIn} onChange={(e) => setTradeIn(e.target.value)} className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ex: Honda Fit 2015" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="question" className="block text-gray-300 mb-2">Sua principal dúvida (Opcional)</label>
                        <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} rows={2} className="w-full bg-black/20 border border-white/30 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ex: O carro possui algum detalhe?"></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                        Enviar pelo WhatsApp
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ContactModal;
