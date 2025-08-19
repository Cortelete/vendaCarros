import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lista inicial com 15 imagens placeholder, buscando da pasta /public.
const initialImages = Array.from({ length: 15 }, (_, i) => `/c${i + 1}.png`);

const PhotoCarousel: React.FC = () => {
    const [images, setImages] = useState(initialImages);
    const [index, setIndex] = useState(0);

    // Garante que o índice atual permaneça válido se as imagens forem removidas
    useEffect(() => {
        if (index >= images.length && images.length > 0) {
            setIndex(images.length - 1);
        }
    }, [images, index]);

    const handleImageError = (erroredSrc: string) => {
        console.warn(`A imagem não pôde ser carregada e foi removida: ${erroredSrc}`);
        setImages(currentImages => currentImages.filter(src => src !== erroredSrc));
    };

    if (images.length === 0) {
        return (
            <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-black/30 flex items-center justify-center">
                <p className="text-gray-400">Nenhuma imagem disponível.</p>
            </div>
        );
    }

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const variants = {
        enter: { opacity: 0, scale: 0.8 },
        center: { zIndex: 1, opacity: 1, scale: 1 },
        exit: { zIndex: 0, opacity: 0, scale: 1.2 },
    };

    return (
        <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-black/30">
            <AnimatePresence initial={false}>
                <motion.img
                    key={`${index}-${images[index]}`} // Chave única para forçar a re-renderização
                    src={images[index]}
                    onError={() => handleImageError(images[index])}
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
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Ir para a imagem ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoCarousel;