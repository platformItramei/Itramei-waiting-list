import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-20 h-[72px] absolute top-0 left-0 text-white z-20">
      {/* Left Side - Itramei Text */}
      <h1 className="text-xl font-bold font-['Sansation']">Itramei</h1>

      {/* Right Side - Links */}
      <div className="flex space-x-8">
        <NavItem text="About Us" />
        <NavItem text="Itramei Waitlist" />
        <NavItem text="Launch Event Waitlist" />
        <NavItem text="FAQ" />
        <NavItem text="Contact" />
      </div>
    </div>
  );
};

export default Navbar;