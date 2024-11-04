import React from 'react';

const BenefitCard = ({ icon, text, altText }) => {
  return (
    <div className="flex items-center bg-[#0E3848] p-6 rounded-lg shadow-md">
      <img src={icon} alt={altText} className="w-10 h-10 mr-4" />
      <p className="text-white text-sm font-semibold">
        {text}
      </p>
    </div>
  );
};

export default BenefitCard;