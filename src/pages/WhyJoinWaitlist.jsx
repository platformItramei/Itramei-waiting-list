import React from "react";
import { useMediaQuery } from "react-responsive";

//SVGs
import dashboard from "../assets/images/dashboard.svg";
import monthly from "../assets/images/monthly.svg";
import points from "../assets/images/points.svg";

//PNGs
import dashboardM from "../assets/icons/dashboard.png";
import monthlyM from "../assets/icons/goal.png";
import pointsM from "../assets/icons/bars.png";

//Components
import WaitlistBenefitCard from "../components/WaitlistBenefitCard";
import Button from "../components/Button";

const WhyJoinWaitlist = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
      <h2
        className="text-center font-bold text-3xl md:text-4xl leading-tight  text-secondary"
        style={{ color: "#2C3E50" }}
      >
        <span style={{ fontFamily: "Sansation" }}> Why Join the </span>{" "}
        <span style={{ color: "#1B92BF" }}>Waitlist</span>?
        {/* <span style={{ fontFamily: "Sansation" }}>  </span> */}
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-10 w-full">
        <div className="flex flex-col space-y-4 md:w-1/2 w-full px-2">
          <div className="flex justify-center">
            <WaitlistBenefitCard text="Opportunity to get invited for the in-person event" />
          </div>
          <div className="flex justify-center">
            <WaitlistBenefitCard text="Be among the first to use Itramei." />
          </div>
          <div className="flex justify-center">
            <WaitlistBenefitCard text="Priority for any upcoming benefits and bonuses." />
          </div>
          <div className="flex justify-center">
            <WaitlistBenefitCard text="Only Seconds to Apply!" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
            <img
              src={isMobile ? dashboardM : dashboard}
              alt="Dashboard"
              className="w-full h-auto rounded-tl-lg bg-primary p-4 shadow-lg object-contain"
            />

            <img
              src={isMobile ? monthlyM : monthly}
              alt="Monthly Goal"
              className="absolute"
              style={{
                top: "0",
                right: "0",
                width: "60%",
                transform: "translate(30%, -10%)",
              }}
            />
            <img
              src={isMobile ? pointsM : points}
              alt="Points Per Day"
              className="absolute"
              style={{
                bottom: "0",
                left: "0",
                width: "85%",
                transform: "translate(-6%, -20%)",
              }}
            />
          </div>
        </div>
      </div>

      <a href="#form" className="mt-12">
        <Button
          btnid="waitlistbtn2"
          eventtype="itramei"
          text="Join the Waitlist Today"
        />
      </a>
    </section>
  );
};

export default WhyJoinWaitlist;
