import React from 'react';
import increase from '../assets/icons/Featured icon-3.svg';
import reduceSales from '../assets/icons/Featured icon-1.svg';
import reduceConflicts from '../assets/icons/Featured icon-4.svg';
import cut from '../assets/icons/Featured icon-2.svg';
import Button from '../components/Button';
import BenefitCard from '../components/Card';

const CommunicationBenefits = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-20">
      <h2
        className="text-center font-bold text-3xl md:text-4xl"
        style={{
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontFamily: 'Sansation, sans-serif',
          color: "#2C3E50"
        }}
      >
        <span style={{ color: '#1B92BF', fontFamily: 'Sansation' }}>Effective communication </span> is proven to
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <BenefitCard 
          icon={increase} 
          title="Increase" 
          description="overall productivity by 30%, leading to faster project completion."
        />
        <BenefitCard 
          icon={reduceSales} 
          title="Reduce" 
          description="sales cycles by 20% and achieve a 50% faster deal-closing rate."
        />
        <BenefitCard 
          icon={cut} 
          title="Lower" 
          description="churn by 20% and increase customer lifetime value by 15% with improved transparency and responsiveness."
        />
        <BenefitCard 
          icon={reduceConflicts} 
          title="Reduce" 
          description="conflict resolution time by 40%, enhancing team focus and efficiency."
        />
      </div>

      <div className="flex justify-center mt-12">
        <Button text="Join the Waitlist Today" />
      </div>
    </div>
  );
};

export default CommunicationBenefits;