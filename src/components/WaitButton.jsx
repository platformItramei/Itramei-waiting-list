import React from "react";
import itrameiIcon from "../assets/icons/Itramei_Icon.svg";
import { useDispatch } from "react-redux";
import { setForm } from "../redux/reducers/waiting_list_form";

const WaitListButton = () => {
  const dispatch = useDispatch(); 

  const handleFormChange = (eventtype) => {
    dispatch(setForm(eventtype)); 
  };

  return (
    <button
      id="waitlistbtn"
      className="relative flex items-center overflow-hidden group text-[#1F2C38] font-semibold text-lg shadow-md transition-colors duration-1000"
      onClick={(e) => {
        handleFormChange("itramei");
     }}
      href="#form"
      style={{
        width: "280.57px",
        height: "48px",
        padding: "20px 24px",
        gap: "10px",
        borderRadius: "8px",
        border: "1px solid #293A4B",
        borderWidth: "1px 0 0 0",
        opacity: 1,
        backgroundColor: "#FFFFFF",
        fontFamily: "Sansation",
      }}
    >
      <span
        className="absolute inset-0 bg-[#1B92BF] transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
        style={{ zIndex: 1 }}
      ></span>
      <a
        className="relative flex items-center z-10 transition-colors duration-1000 ease-in-out group-hover:text-white"
        href="#form"
      >
 
        <img src={itrameiIcon} alt="Itramei Icon" className="w-10 h-10 mr-2" />
        Join the Waitlist Today
      </a>
    </button>
  );
};

export default WaitListButton;
