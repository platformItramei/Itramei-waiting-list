import React, { useState } from "react";
import scale from "../assets/icons/BussinessIcon1.svg";
import excel from "../assets/icons/BussinessIcon2.svg";
import empower from "../assets/icons/BussinessIcon3.svg";
import BenefitCard from "../components/BenefitCard";
import increase from "../assets/icons/Individual1.svg";
import strength from "../assets/icons/Individual2.svg";
import boost from "../assets/icons/Individual3.svg";

const ItrameiBenefits = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="w-full mx-auto bg-[#0D4459] py-20 px-4 md:px-10 overflow-x-hidden">
      <h2
        className="text-center font-bold text-2xl md:text-4xl text-white mb-8"
        style={{ fontFamily: "Sansation" }}
      >
        How Itramei Benefits You
      </h2>

      <div className="flex justify-center mb-8">
        <div className="relative flex bg-[#105873] rounded-lg overflow-hidden w-full max-w-md h-[36px]">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-[#24C3FF] transition-transform duration-500 ease-in-out ${
              activeTab === "individual" ? "transform translate-x-full" : ""
            }`}
          ></div>

          {/* For Businesses Button */}
          <button
            onClick={() => setActiveTab("business")}
            className={`relative z-10 w-1/2 font-semibold flex items-center justify-center ${
              activeTab === "business" ? "text-white" : "text-gray-300"
            }`}
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            For Businesses
          </button>

          {/* For Individuals Button */}
          <button
            onClick={() => setActiveTab("individual")}
            className={`relative z-10 w-1/2 font-semibold flex items-center justify-center ${
              activeTab === "individual" ? "text-white" : "text-gray-300"
            }`}
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            For Individuals
          </button>
        </div>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          {activeTab === "business"
            ? "Register for Exclusive Invitation"
            : "Signup for Itramei Waitlist"}
        </button>
      </div>
    </div>
  );
};

export default ItrameiBenefits;
