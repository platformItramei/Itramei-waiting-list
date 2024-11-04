import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className="text-gray-900 font-semibold text-lg flex items-center justify-center"
      style={{
        width: '246px',
        height: '48px',
        padding: '20px 24px',
        gap: '10px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #293A4B',
        opacity: '1',
      }}
    >
      {text}
    </button>
  );
};

export default Button;