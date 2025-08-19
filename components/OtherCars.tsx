
import React from 'react';
import { motion, Variants } from 'framer-motion';

const cars = [
    { name: 'Volkswagen Jetta GLI 2020', price: 'R$ 155.000', image: 'https://picsum.photos/seed/jetta/600/400' },
    { name: 'Honda Civic Touring 2019', price: 'R$ 130.000', image: 'https://picsum.photos/seed/civic/600/400' },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

interface OtherCarsProps {
    onContactClick: (carName: string) => void;
}

const OtherCars: React.FC<OtherCarsProps> = ({ onContactClick }) => {
    return (
        <section className="py-20 px-6 md:px-12 bg-black/20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Outras Oportunidades</h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {cars.map((car) => (
                        <motion.div 
                            key={car.name}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col"
                        >
                            <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold">{car.name.split(' ').slice(0, -1).join(' ')}</h3>
                                <p className="text-gray-400 mb-4">{car.name.split(' ').slice(-1)[0]}</p>
                                <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-auto">{car.price}</p>
                                <motion.button
                                    onClick={() => onContactClick(car.name)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
                                >
                                    Tenho Interesse
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OtherCars;
