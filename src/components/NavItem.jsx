import React from 'react';

const NavItem = ({ text }) => {
  return (
    <div className="text-white font-semibold text-lg leading-tight font-['Plus_Jakarta_Sans']">
      {text}
    </div>
  );
};

export default NavItem;