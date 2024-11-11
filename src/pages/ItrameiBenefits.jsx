import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

//Desktop SVGs
import scale from "../assets/icons/BussinessIcon1.svg";
import excel from "../assets/icons/BussinessIcon2.svg";
import empower from "../assets/icons/BussinessIcon3.svg";
import BenefitCard from "../components/BenefitCard";
import increase from "../assets/icons/Individual1.svg";
import strength from "../assets/icons/Individual2.svg";
import boost from "../assets/icons/Individual3.svg";

//import Mobile PNGs
import scaleM from "../assets/icons/scale.png";
import excelM from "../assets/icons/excelM.png";
import empowerM from "../assets/icons/empower.png";
import increaseM from "../assets/icons/confidence.png";
import strengthM from "../assets/icons/strengthM.png";
import boostM from "../assets/icons/boostM.png";

//Redux
import { useDispatch } from "react-redux";
import { setForm } from "../redux/reducers/waiting_list_form";

const ItrameiBenefits = () => {
  const [activeTab, setActiveTab] = useState("business");
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleFormChange = (eventtype) => {
    dispatch(setForm(eventtype));
  };
  return (
    <div className="w-full mx-auto bg-[#0D4459] py-20 px-4 md:px-10 overflow-x-hidden">
      <h2
        className="text-center font-bold text-2xl md:text-4xl text-white mb-8"
        style={{ fontFamily: "Sansation" }}
      >
        How Itramei Benefits You
      </h2>

      <div className="flex justify-center mb-8 border-1">
        <div className="relative flex bg-[#FAFAFF11] rounded-lg overflow-hidden w-full max-w-md h-[48px] border border-[#105873]">
          <div
            className={`absolute top-[4px] left-[5px] h-[85%] rounded-[6px] w-1/2 bg-[#24C3FF] transition-transform duration-500 ease-in-out ${
              activeTab === "individual" ? "transform translate-x-[96%]" : ""
            }`}
          ></div>

          {/* For Businesses Button */}
          <button
            id="business"
            onClick={() => setActiveTab("business")}
            className={`relative z-10 w-1/2 font-light flex items-center justify-center hover:text-white transition-colors duration-300 ease ${
              activeTab === "business" ? "text-white" : "text-gray-400"
            }`}
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            For Businesses
          </button>

          {/* For Individuals Button */}
          <button
            id="individual"
            onClick={() => setActiveTab("individual")}
            className={`relative z-10 w-1/2 font-light flex items-center justify-center hover:text-white transition-colors duration-300 ease ${
              activeTab === "individual" ? "text-white" : "text-gray-400"
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
              icon={isMobile ? excelM : excel}
              text="Excel through improved employee performance and brand protection."
              altText="Excel Icon"
            />
            <BenefitCard
              icon={isMobile ? empowerM : empower}
              text="Empower your hiring of young talent without compromising quality."
              altText="Empower Icon"
            />
            <BenefitCard
              icon={isMobile ? scaleM : scale}
              text="Scale confidently while upholding high standards."
              altText="Scale Icon"
            />
          </>
        ) : (
          <>
            <BenefitCard
              icon={isMobile ? increaseM : increase}
              text="Increase confidence in social interactions"
              altText="Increase Icon"
            />
            <BenefitCard
              icon={isMobile ? strengthM : strength}
              text="Strengthening of interpersonal relationships."
              altText="Strength Icon"
            />
            <BenefitCard
              icon={isMobile ? boostM : boost}
              text="Boost career growth."
              altText="Boost Icon"
            />
          </>
        )}
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-10">
        <button
          id="invitation"
          className="text-white font-semibold text-base md:text-md px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <a
            href="#form"
            onClick={(e) => {
              if (activeTab === "business") {
                handleFormChange("launch");
              } else {
                handleFormChange("itramei");
              }
            }}
          >
            {activeTab === "business"
              ? "Register for Exclusive Invitation"
              : "Signup for Itramei Waitlist"}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ItrameiBenefits;
