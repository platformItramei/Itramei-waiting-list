import React from "react";
import cyclePath from "../assets/images/itramei_cycle.svg";
import itramei_watermark from "../../src/assets/images/Itramei_rot.svg"; 

const CommunicationMaster = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row rounded-lg mx-auto w-full max-w-[1440px] items-center justify-between"
      id="about"
    >
      {/* Text Section */}
      <div className="text-section md:w-1/2 px-6 md:px-20 py-10 md:py-20 relative">
      
        {/* Watermark Image */}
        <img
  id="watermark"
  src={itramei_watermark}
  alt="Watermark"
  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
  style={{
    width: "458.84px",
    height: "552.45px",
    opacity: 20, 
    transform: "translate(-40%, -18%)",
    zIndex: -1,
  }}
/>
<style>
  {`
    /* Media query to apply styles for larger screens */
    @media (min-width: 768px) { /* md breakpoint */
      #watermark {
        transform: translate(-64%, -28%); // For larger screens
      }
    }
  `}
</style>


        <h1
          className="font-bold text-center md:text-left text-4xl md:text-5xl leading-tight mb-6"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "#000000",
          }}
        >
          <span style={{ color: "#2C3E50", fontFamily: "Sansation" }}>
            Master
          </span>{" "}
          <span style={{ color: "#1B92BF", fontFamily: "Sansation" }}>
            Communication
          </span>{" "}
          <span style={{ color: "#2C3E50" }}>with Itramei</span>
        </h1>
        <br />
        <p
          className="text-left text-base md:text-lg leading-6 md:leading-7 text-gray-700 mb-4"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "24px",
          }}
        >
          Itramei is designed to make learning practical, fun, and highly
          effective through simulated scenarios that feel just like real life.
        </p>
        <br />
        <p
          className="text-left text-base md:text-lg leading-6 md:leading-7 text-gray-700"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "24px",
          }}
        >
          Whether you’re preparing for a crucial business meeting or improving
          day-to-day interactions, we’ve got you covered.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="image-section md:w-1/2 flex justify-center px-6 md:px-0 pb-10 md:pb-0"
        style={{ gap: "0px" }}
      >
        {/* Wrapped the image in a container with max-width */}
        <div className="w-full max-w-md">
          <img
            src={cyclePath}
            alt="Itramei Communication Process"
            className="w-full h-auto"
          />
          <br />

        </div>
      </div>
    </div>
  );
};

export default CommunicationMaster;
