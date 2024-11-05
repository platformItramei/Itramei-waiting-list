import React, { useRef, useEffect } from 'react';
import backgroundVideo from '../assets/videos/bg.mp4'; 
import WaitButton from '../components/WaitButton';

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 1.5;
      }
    }, []);
    
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
      />
      

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-['Sansation'] max-w-[850px]"  style={{fontFamily:'Sansation'}}>
          YOUR MESSAGE, PERFECTLY UNDERSTOOD
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium leading-8 text-gray-300 max-w-[785px]"
                      style={{ fontFamily: 'Plus Jakarta Sans' }}
>
          Unlock your potential with Itramei, the platform to enhance your communication skills for
          lasting impact at work and in life.
        </p>

        <div className="mt-8">
          <WaitButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;