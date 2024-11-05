import React from 'react';
import itrameiIcon from '../assets/icons/Itramei_Icon.svg';

const WaitListButton = () => {
  return (
    <button
      className="relative flex items-center overflow-hidden group text-[#1F2C38] font-semibold text-lg shadow-md transition-colors duration-1000"
      style={{
        width: '280.57px',           
        height: '48px',                
        padding: '20px 24px',        
        gap: '10px',                  
        borderRadius: '8px',     
        border: '1px solid #293A4B',   
        borderWidth: '1px 0 0 0',     
        opacity: 1,                   
        backgroundColor: '#FFFFFF',
        fontFamily: 'Sansation'
      }}
    >
      {/* Sliding background */}
      <span
        className="absolute inset-0 bg-[#1B92BF] transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
        style={{ zIndex: 1 }}
      ></span>
      {/* Icon and text */}
      <span className="relative flex items-center z-10 transition-colors duration-1000 ease-in-out group-hover:text-white">
        <img src={itrameiIcon} alt="Itramei Icon" className="w-10 h-10 mr-2" />
        Join the Waitlist Today
      </span>
    </button>
  );
};

export default WaitListButton;