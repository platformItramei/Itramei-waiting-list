import React from 'react';

const BenefitCard = ({ icon, text, altText }) => {
  return (
    <div
      className="rounded-lg p-6 flex items-center gap-4"
      style={{
        backgroundColor: '#0E3848', 
      }}
    >
      <img src={icon} alt={altText} className="w-16 h-16" />
      <p
        className="font-medium text-[16px] leading-[24px] text-white"
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