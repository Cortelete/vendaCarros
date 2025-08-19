
import React from 'react';

interface AnimatedGradientTextProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className }) => {
    return (
        <h1 className={`relative inline-block ${className}`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-cover animated-gradient-bg">
                {children}
            </span>
            <span className="shine-effect"></span>
        </h1>
    );
};

export default AnimatedGradientText;
