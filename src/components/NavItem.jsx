import React from "react";
import { useDispatch } from "react-redux";
import { setForm } from "../redux/reducers/waiting_list_form";

const NavItem = ({ text, href = "#", eventtype }) => {
  const dispatch = useDispatch(); 

  const handleFormChange = (eventtype) => {
    dispatch(setForm(eventtype)); 
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        handleFormChange(eventtype);
      }}
      className="text-white font-normal tracking-wide text-lg leading-tight hover:text-[#24c4ff] transition-colors duration-300 ease-in-out"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {text}
    </a>
  );
};

export default NavItem;