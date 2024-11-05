import React from 'react';
import tick from '../assets/icons/tick.svg'; 

const WaitlistBenefitCard = ({ text }) => {
  return (
    <div
      className="flex items-center bg-white p-4 md:p-6 shadow-md w-full max-w-lg mx-4"
      style={{
        border: '1px solid #24C3FF',
        borderRadius: '8px', 
      }}
    >
      <img src={tick} alt="Tick" className="w-6 h-6 mr-4 flex-shrink-0" />
      <p
        className="text-secondary text-base md:text-lg font-medium leading-6"
        style={{ 
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          color: '#2C3E50'
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default WaitlistBenefitCard;