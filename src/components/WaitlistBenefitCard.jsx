import React from 'react';
import tick from '../assets/icons/tick.png'; // Ensure the correct path to tick icon

const WaitlistBenefitCard = ({ text }) => {
  return (
    <div
      className="flex items-center bg-white p-4 border border-[#24C3FF] rounded-tl-lg shadow-md"
      style={{
        width: '604px',
        height: '72px',
        padding: '24px 16px',
        borderRadius: '8px 0px 0px 0px',
      }}
    >
      <img src={tick} alt="Tick" className="w-6 h-6 mr-4" />
      <p
        className="text-[#1F2C38] text-[20px] font-medium leading-6"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        {text}
      </p>
    </div>
  );
};

export default WaitlistBenefitCard;