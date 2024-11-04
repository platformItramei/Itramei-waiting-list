import React from 'react';
import dashboard from '../assets/images/dashboard.png';
import monthly from '../assets/images/monthly.png';
import points from '../assets/images/points.png';
import WaitlistBenefitCard from '../components/WaitlistBenefitCard'; 
import Button  from '../components/Button';


import itrameiIcon from '../assets/icons/Itramei_Icon.png'
const WhyJoinWaitlist = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-20 flex flex-col items-center ">
      {/* Heading */}
      <h2
        className="text-center font-bold"
        style={{
          fontSize: '40px',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontFamily: 'Sansation, sans-serif',
          color: '#1F2C38',
        }}
      >
        Why Join the <span style={{ color: '#1B92BF' }}>Itramei</span> Waitlist?
      </h2>

      {/* Benefits List and Images */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-10 w-full max-w-[1440px]">
        {/* Left Side - Benefits List */}
        <div className="flex flex-col space-y-4">
          <WaitlistBenefitCard text="Opportunity to get invited for the in person event" />
          <WaitlistBenefitCard text="Be among the first to use Itramei." />
          <WaitlistBenefitCard text="Priority for any upcoming benefits and bonuses." />
          <WaitlistBenefitCard text="Only Seconds to Apply!" />
        </div>

        {/* Right Side - Images */}
        <div className="relative w-full md:w-auto flex justify-center items-center">
          {/* Main Dashboard Image */}
          <img
            src={dashboard}
            alt="Dashboard"
            className="w-[450px] h-[450px] rounded-tl-lg bg-[#1B92BF] p-4 shadow-lg"
            style={{ position: 'relative', top: '38px', left: '66px' }}
          />

          {/* Top-right Overlay Image */}
          <img
            src={monthly}
            alt="Monthly Goal"
            className="absolute top-[-40px] right-[-100px] w-[234.5px] h-[170.5px] rounded-tl-lg shadow-md"
            style={{ boxShadow: '0px 0px 27px 0px rgba(0, 0, 0, 0.08)' }}
          />

          {/* Bottom-left Overlay Image */}
          <img
            src={points}
            alt="Points Per Day"
            className="absolute bottom-[-50px] left-[-50px] w-[439px] h-[170.5px] rounded-tl-lg shadow-md"
            style={{ boxShadow: '0px 0px 27px 0px rgba(0, 0, 0, 0.08)' }}
          />
        </div>
      </div>

  
       <div className="mt-12">
          <Button text="Join the Waitlist Today" /> 
      </div> 
    </div>
  );
};

export default WhyJoinWaitlist;