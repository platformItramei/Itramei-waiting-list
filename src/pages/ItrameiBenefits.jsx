import React, { useState } from 'react';
import scale from '../assets/icons/BussinessIcon1.png';
import excel from '../assets/icons/BussinessIcon2.png';
import empower from '../assets/icons/BussinessIcon3.png';
import BenefitCard from '../components/BenefitCard';

const ItrameiBenefits = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div
      className="w-full mx-auto bg-[#0D4459] space-y-10"
      style={{
        height: 'auto',
        padding: '80px 0px 0px 0px',
        gap: '40px',
        opacity: '1',
      }}
    >
      {/* Heading */}
      <h2
        className="text-center font-bold"
        style={{
          fontSize: '34px',
          lineHeight: '38.05px',
          letterSpacing: '-0.03em',
          fontFamily: 'Sansation, sans-serif',
          color: '#FFFFFF',
        }}
      >
        How Itramei Benefits You
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-6">
        <div className="flex bg-[#105873] rounded-lg p-1">
          <button
            onClick={() => setActiveTab("business")}
            className={`w-[238px] h-[40px] font-semibold px-6 py-3 rounded-lg ${
              activeTab === "business" ? "bg-[#24C3FF] text-white" : "text-gray-300"
            }`}
            style={{
              fontFamily: 'Sansation, sans-serif',
              borderRadius: activeTab === "business" ? '8px' : '8px 0 0 8px',
            }}
          >
            For Businesses
          </button>
          <button
            onClick={() => setActiveTab("individual")}
            className={`w-[238px] h-[40px] font-semibold px-6 py-3 rounded-lg ${
              activeTab === "individual" ? "bg-[#24C3FF] text-white" : "text-gray-300"
            }`}
            style={{
              fontFamily: 'Sansation, sans-serif',
              borderRadius: activeTab === "individual" ? '8px' : '0 8px 8px 0',
            }}
          >
            For Individuals
          </button>
        </div>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {activeTab === "business" ? (
          <>
            <BenefitCard
              icon={excel}
              text="Excel through improved employee performance and brand protection."
              altText="Excel Icon"
            />
            <BenefitCard
              icon={empower}
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
              icon={scale}
              text="Personal growth through effective communication."
              altText="Growth Icon"
            />
            <BenefitCard
              icon={empower}
              text="Build confidence in public speaking and presentations."
              altText="Confidence Icon"
            />
            <BenefitCard
              icon={excel}
              text="Enhance interpersonal relationships at work and in life."
              altText="Interpersonal Icon"
            />
          </>
        )}
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-8">
        <button
          className="text-white font-semibold text-lg flex items-center justify-center"
          style={{
            width: '350px',
            height: '48px',
            padding: '20px 24px',
            gap: '10px',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF1A',
            border: '1px solid #BDC2C7',
            opacity: '1',
          }}
        >
          Register for Exclusive Invitation
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ItrameiBenefits;