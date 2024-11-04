import React from 'react';
import cyclePath from '../assets/images/itramei_cycle.png';
const CommunicationMaster = () => {
  return (
    <div className="flex flex-col md:flex-row  rounded-lg mx-auto w-full max-w-[1440px] h-[603.76px] p-0 items-center justify-between">
      <div className="text-section md:w-1/2 p-20">
        <h1
          className="font-bold text-center md:text-left"
          style={{
            fontSize: '40px',
            lineHeight: '44px',
            letterSpacing: '-0.02em',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: '700',
            color: '#000000',
            marginBottom: '24px', 
          }}
        >
          Master <span style={{ color: '#1B92BF' }}>Communication</span> with Itramei
        </h1>
        <p
          className="text-left"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '24px',
            color: '#555555',
            marginBottom: '16px',
          }}
        >
          Itramei is designed to make learning practical, fun, and highly effective through simulated scenarios that feel just like real life.
        </p>
        <p
          className="text-left"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '24px',
            color: '#555555',
          }}
        >
          Whether you’re preparing for a crucial business meeting or improving day-to-day interactions, we’ve got you covered.
        </p>
      </div>
      <div className="image-section md:w-1/2 flex justify-center" style={{ padding: '80px 0 0 0' }}>
        <img
          src={cyclePath}
          alt="Itramei Communication Process"
          className="w-[493px] h-[443.76px] object-contain"
        />
      </div>
    </div>
  );
};

export default CommunicationMaster;