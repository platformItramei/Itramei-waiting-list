import React from 'react';
import dashboard from '../assets/images/dashboard.png';
import monthly from '../assets/images/monthly.png';
import points from '../assets/images/points.png';
import WaitlistBenefitCard from '../components/WaitlistBenefitCard';
import Button from '../components/Button';

const WhyJoinWaitlist = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-center font-bold text-3xl md:text-4xl leading-tight font-sansation text-secondary">
        Why Join the <span style={{ color: '#1B92BF' }}>Itramei</span> Waitlist?
      </h2>

      {/* Benefits List and Images */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-10 w-full">
        {/* Left Side - Benefits List */}
        <div className="flex flex-col space-y-4 md:w-1/2 w-full px-2">
          <WaitlistBenefitCard text="Opportunity to get invited for the in-person event" />
          <WaitlistBenefitCard text="Be among the first to use Itramei." />
          <WaitlistBenefitCard text="Priority for any upcoming benefits and bonuses." />
          <WaitlistBenefitCard text="Only Seconds to Apply!" />
        </div>

        {/* Right Side - Images */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          {/* Image Container with overflow-hidden */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
            {/* Main Dashboard Image */}
            <img
              src={dashboard}
              alt="Dashboard"
              className="w-full h-auto rounded-tl-lg bg-primary p-4 shadow-lg object-contain"
            />

            {/* Top-right Overlay Image */}
            <img
              src={monthly}
              alt="Monthly Goal"
              className="absolute"
              style={{
                top: '0',
                right: '0',
                width: '60%',
                transform: 'translate(30%, -40%)',
              }}
            />
            {/* Bottom-left Overlay Image */}
            <img
              src={points}
              alt="Points Per Day"
              className="absolute"
              style={{
                bottom: '0',
                left: '0',
                width: '85%',
                transform: 'translate(-17%, -43%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-12">
        <Button text="Join the Waitlist Today" />
      </div>
    </section>
  );
};

export default WhyJoinWaitlist;