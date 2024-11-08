import React, { useState } from "react";
import NavItem from "./NavItem";
import { useDispatch } from "react-redux";
import { setForm } from "../redux/reducers/waiting_list_form";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormChange = (type,event) => {
    event.preventDefault(); 
    dispatch(setForm(type));
  };

  return (
    <div className="flex items-center justify-between w-full px-6 lg:px-20 md:px-4 h-[72px] fixed top-0 left-0 bg-black bg-opacity-50 text-white z-50">
      <h1 className="text-xl font-bold font-['Sansation']">Itramei</h1>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Hamburger Icon */}
          <div className="space-y-1.5 cursor-pointer">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Right Side - Links for Desktop */}
      <div className="hidden md:flex space-x-8">
        <NavItem text="About" href="#about" />
        <NavItem
          text="Itramei Waitlist"
          eventtype="itramei"
          href="#form"
        />
        <NavItem
          text="Launch Event Waitlist"
          href="#form"
          eventtype="launch"
        />
        <NavItem text="FAQ" href="#faq" />
        <NavItem text="Contact" href="#footer" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-gray-900 text-white p-6 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Icon Inside Mobile Menu */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Close Icon */}
            <div className="w-6 h-6 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 mt-16">
          <NavItem text="About" href="#about" />
          <NavItem
            text="Itramei Waitlist"
            href="#form"
            eventtype="itramei"
            onClick={() => handleFormChange("itramei")}
          />
          <NavItem
            text="Launch Event Waitlist"
            href="#form"
            eventtype="launch"
            onClick={() => handleFormChange("launch")}
          />
          <NavItem text="FAQ" href="#faq" />
          <NavItem text="Contact" href="#footer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
