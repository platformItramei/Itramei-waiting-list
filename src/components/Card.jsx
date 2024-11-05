import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex items-center p-6 bg-gray-50 rounded-lg shadow-md space-x-4">
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <div>
        <p
          className="text-lg font-normal leading-6 text-left text-gray-700"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <span className="font-bold">{title} </span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
