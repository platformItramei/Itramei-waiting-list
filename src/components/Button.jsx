import React from 'react';
import { useDispatch } from "react-redux";
import { setForm } from "../redux/reducers/waiting_list_form";

const Button = ({ text,eventtype,btnid }) => {

  const dispatch = useDispatch(); 

  const handleFormChange = (eventtype) => {
    dispatch(setForm(eventtype)); 
  };

  return (
    <button
     id={btnid}
     href="#form"
     onClick={(e) => {
       handleFormChange(eventtype);
    }}
      className="relative overflow-hidden group text-gray-900 font-semibold text-lg flex items-center justify-center transition-colors duration-1000"
      style={{
        width: '246px',
        height: '48px',
        padding: '20px 24px',
        gap: '10px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #293A4B',
        fontFamily: 'Sansation'
      }}
    >
      <span
        className="absolute inset-0 bg-[#1B92BF] transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
        style={{ zIndex: 1 }}
      ></span>

      <span    
        className="relative z-10 transition-colors duration-1000 ease-in-out group-hover:text-white"
      >
        {text}
      </span>
    </button>
  );
};

export default Button;