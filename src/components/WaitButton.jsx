import React from 'react';
import itrameiIcon from '../assets/icons/Itramei_Icon.png';

const WaitButton = () => {
  return (
    <button
      className="flex items-center px-6 py-3 text-[#1F2C38] font-semibold text-lg border border-[#293A4B] rounded-lg bg-white shadow-md hover:bg-gray-100"
      style={{
        width: '290.57px',
        height: '48px',
        gap: '10px',
        borderRadius: '8px',
        border: '1px solid #293A4B',
      }}
    >
      <img src={itrameiIcon} alt="Itramei Icon" className="mr-2" style={{ width: '26.57px', height: '32px' }} />
      Join the Waitlist Today
    </button>
  );
};

export default WaitButton;