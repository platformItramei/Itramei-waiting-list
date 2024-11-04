import React from 'react';
import increase from '../assets/icons/Featured icon-3.png';
import reduceSales from '../assets/icons/Featured icon-1.png';
import reduceConflicts from '../assets/icons/Featured icon-4.png';
import cut from '../assets/icons/Featured icon-2.png';
import Button from  '../components/Button';

const CommunicationBenefits = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-20">
      <h2
        className="text-center font-bold"
        style={{
          fontSize: '40px',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          fontFamily: 'Sansation, sans-serif',
          color: '#1B92BF',
        }}
      >
        Effective <span style={{ color: '#1B92BF' }}>communication</span> is proven to
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Card 1 */}
        <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md space-x-4">
          <div className="w-10 h-10 bg-blue-500 flex justify-center items-center rounded-tl-md">
            <img src={increase} alt="Increase Productivity" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Increase</h3>
            <p className="text-sm text-gray-700">
              overall productivity by 30%, leading to faster project completion.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md space-x-4">
          <div className="w-10 h-10 bg-blue-500 flex justify-center items-center rounded-tl-md">
            <img src={reduceSales} alt="Reduce Sales Cycle" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Reduce</h3>
            <p className="text-sm text-gray-700">
              sales cycles by 20% and achieve a 50% faster deal-closing rate.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md space-x-4">
          <div className="w-10 h-10 bg-blue-500 flex justify-center items-center rounded-tl-md">
            <img src={cut} alt="Cut Churn" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Cut</h3>
            <p className="text-sm text-gray-700">
              churn by 20% and increase customer lifetime value by 15% with improved transparency and responsiveness.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md space-x-4">
          <div className="w-10 h-10 bg-blue-500 flex justify-center items-center rounded-tl-md">
            <img src={reduceConflicts} alt="Reduce Conflict Resolution Time" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Reduce</h3>
            <p className="text-sm text-gray-700">
              conflict resolution time by 40%, enhancing team focus and efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button text="Join the Waitlist Today" /> 
      </div>
    </div>
  );
};

export default CommunicationBenefits;