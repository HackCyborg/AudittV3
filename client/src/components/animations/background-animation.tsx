import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import blockchainAnimation from '../../assets/animations/blockchain-animation.json';

interface BackgroundAnimationProps {
  opacity?: number;
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ 
  opacity = 0.5, 
  className = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Animation component mounted");
    console.log("Animation data available:", !!blockchainAnimation);
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`absolute inset-0 z-0 overflow-hidden bg-blue-900 ${className}`} 
      style={{ opacity }}
    >
      {isLoaded && (
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
          onComplete={() => console.log("Animation completed")}
          onLoopComplete={() => console.log("Loop completed")}
        />
      )}
      {!isLoaded && <div className="h-full w-full bg-blue-800 flex items-center justify-center text-white">Loading animation...</div>}
      <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 p-2 rounded">
        Animation status: {isLoaded ? 'Loaded' : 'Loading'}
      </div>
    </div>
  );
};

export default BackgroundAnimation;