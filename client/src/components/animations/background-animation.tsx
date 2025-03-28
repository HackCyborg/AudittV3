import React from 'react';
import Lottie from 'lottie-react';
import blockchainAnimation from '../../assets/animations/blockchain-animation.json';

interface BackgroundAnimationProps {
  opacity?: number;
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ 
  opacity = 0.25, 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`} style={{ opacity }}>
      <Lottie
        animationData={blockchainAnimation}
        loop={true}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;