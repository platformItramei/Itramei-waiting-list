import React, { useState } from 'react';
import scale from '../assets/icons/BussinessIcon1.png';
import excel from '../assets/icons/BussinessIcon2.png';
import empower from '../assets/icons/BussinessIcon3.png';
import BenefitCard from '../components/BenefitCard';
import increase from '../assets/icons/Individual1.png';
import strength from '../assets/icons/Individual2.png'
import boost from '../assets/icons/Individual3.png'


const ItrameiBenefits = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="w-full mx-auto bg-[#0D4459] py-20 px-4 md:px-10 overflow-x-hidden">
      {/* Heading */}
      <h2
        className="text-center font-bold text-2xl md:text-4xl text-white mb-8"
        style={{ fontFamily: 'Sansation, sans-serif' }}
      >
        How Itramei Benefits You
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-[#105873] rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("business")}
            className={`font-semibold ${
              activeTab === "business"
                ? "bg-[#24C3FF] text-white"
                : "text-gray-300"
            }`}
            style={{
              fontFamily: 'Sansation, sans-serif',
              width: '200px', // Increased width
              height: '36px', // Reduced height
              padding: '4px 8px',
              borderRadius: activeTab === "business" ? '8px' : '8px 0 0 8px',
            }}
          >
            For Businesses
          </button>
          <button
            onClick={() => setActiveTab("individual")}
            className={`font-semibold ${
              activeTab === "individual"
                ? "bg-[#24C3FF] text-white"
                : "text-gray-300"
            }`}
            style={{
              fontFamily: 'Sansation, sans-serif',
              width: '200px', // Increased width
              height: '36px', // Reduced height
              padding: '4px 8px',
              borderRadius: activeTab === "individual" ? '8px' : '0 8px 8px 0',
            }}
          >
            For Individuals
          </button>
        </div>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {activeTab === "business" ? (
          <>
            <BenefitCard
              icon={excel}
              text="Excel through improved employee performance and brand protection."
              altText="Excel Icon"
            />
            <BenefitCard
              icon={strength}
              text="Empower your hiring of young talent without compromising quality."
              altText="Empower Icon"
            />
            <BenefitCard
              icon={scale}
              text="Scale confidently while upholding high standards."
              altText="Scale Icon"
            />
          </>
        ) : (
          <>
            {/* Individual benefits */}
            <BenefitCard
              icon={increase}
              text="Increase confidence in social interactions"
              altText="Increase Icon"
            />
            <BenefitCard
              icon={strength}
              text="Strengthening of interpersonal relationships."
              altText="Strength Icon"
            />
            <BenefitCard
              icon={boost}
              text="Boost career growth."
              altText="Boost Icon"
            />
          </>
        )}
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-10">
        <button
          className="text-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-400"
          style={{ fontFamily: 'Sansation, sans-serif' }}
        >
          Register for Exclusive Invitation
        </button>
      </div>
    </div>
  );
};

export default ItrameiBenefits;