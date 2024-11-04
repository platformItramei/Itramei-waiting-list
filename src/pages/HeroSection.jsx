import React from 'react';
import backgroundVideo from '../assets/videos/bg.mp4'; // Replace with the correct video path
import WaitButton from '../components/WaitButton';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-['Sansation'] max-w-[850px]">
          YOUR MESSAGE, PERFECTLY UNDERSTOOD
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium leading-8 font-['Plus_Jakarta_Sans'] text-gray-300 max-w-[785px]">
          Unlock your potential with Itramei, the platform to enhance your communication skills for
          lasting impact at work and in life.
        </p>

        {/* Join Waitlist Button */}
        <div className="mt-8">
          <WaitButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;