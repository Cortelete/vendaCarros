
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import IdealCarSection from './components/IdealCarSection';
import VehicleDetails from './components/VehicleDetails';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import DeveloperContactModal from './components/DeveloperContactModal';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDevModalOpen, setIsDevModalOpen] = useState(false);

    const carName = 'Chevrolet Cruze LTZ 2018 1.4 Turbo Sedan';

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openDevModal = () => setIsDevModalOpen(true);
    const closeDevModal = () => setIsDevModalOpen(false);

    return (
        <div className="min-h-screen w-full animated-gradient-bg text-white font-sans overflow-x-hidden">
            <Header onContactClick={openModal} />
            <main className="relative z-10">
                <IdealCarSection />
                <Hero onContactClick={openModal} />
                <VehicleDetails />
            </main>
            <Footer onDevContactClick={openDevModal} />
            <AnimatePresence>
                {isModalOpen && <ContactModal onClose={closeModal} carName={carName} />}
                {isDevModalOpen && <DeveloperContactModal onClose={closeDevModal} />}
            </AnimatePresence>
            <WhatsAppButton onContactClick={openModal} />
        </div>
    );
};

export default App;