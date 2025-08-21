
import React from 'react';

interface AnimatedGradientTextProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className }) => {
    return (
        <h1 className={`relative inline-block ${className}`}>
            <span className="bg-clip-text text-transparent animated-gradient-text-style">
                {children}
            </span>
        </h1>
    );
};

export default AnimatedGradientText;