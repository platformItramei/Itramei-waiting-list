import React from 'react';

const BenefitCard = ({ icon, text, altText }) => {
  return (
    <div
      className="rounded-lg p-6 flex items-center gap-4"
      style={{
        backgroundColor: '#0E3848', // Set background color
      }}
    >
      <img src={icon} alt={altText} className="w-16 h-16" />
      <p
        className="font-medium text-[20px] leading-[24px] text-white" // Set text color to white
        style={{
          fontFamily: 'Plus Jakarta Sans',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default BenefitCard;