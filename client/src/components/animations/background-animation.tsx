import React from 'react';
import Lottie from 'lottie-react';
import blockchainAnimation from '../../assets/animations/blockchain-animation.json';

interface BackgroundAnimationProps {
  opacity?: number;
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ 
  opacity = 0.35, 
  className = '' 
}) => {
  return (
    <div 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`} 
      style={{ opacity }}
    >
      <Lottie
        animationData={blockchainAnimation}
        loop={true}
        style={{
          width: '120%', // Slightly larger than container to ensure full coverage
          height: '120%',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          transform: 'scale(1.2)',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;