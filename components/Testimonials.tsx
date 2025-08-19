
import React from 'react';
import { motion, Variants } from 'framer-motion';

const testimonials = [
    { name: 'João P.', text: 'Negociação transparente e carro impecável. Recomendo!', avatar: 'https://picsum.photos/seed/avatar1/100/100' },
    { name: 'Maria F.', text: 'O carro estava exatamente como no anúncio, super bem cuidado. Adorei a compra.', avatar: 'https://picsum.photos/seed/avatar2/100/100' },
    { name: 'Carlos S.', text: 'Processo rápido e sem burocracia. Muito satisfeito com meu novo carro.', avatar: 'https://picsum.photos/seed/avatar3/100/100' },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que dizem os compradores</h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div 
                            key={testimonial.name}
                            variants={cardVariants}
                            className="relative bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg text-center"
                        >
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto -mt-12 mb-4 border-4 border-gray-800" />
                            <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                            <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;