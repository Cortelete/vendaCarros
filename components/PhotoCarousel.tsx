
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "/cruze-frente.png",
    "/cruze-traseira.png",
    "/cruze-interior-1.png",
    "/cruze-interior-2.png",
];

const PhotoCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const variants = {
        enter: {
            opacity: 0,
            scale: 0.8,
        },
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1,
        },
        exit: {
            zIndex: 0,
            opacity: 0,
            scale: 1.2,
        },
    };

    return (
        <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-black/30">
            <AnimatePresence initial={false}>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Chevrolet Cruze - Imagem ${index + 1}`}
                    className="absolute h-full w-full object-cover"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                    }}
                />
            </AnimatePresence>
            <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10 hover:bg-black/50 transition" aria-label="Imagem Anterior">
                &#10094;
            </button>
            <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10 hover:bg-black/50 transition" aria-label="Próxima Imagem">
                &#10095;
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'}`} />
                ))}
            </div>
        </div>
    );
};

export default PhotoCarousel;