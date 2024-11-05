import React from 'react';

const NavItem = ({ text, href = '#' }) => {
  return (
    <a
      href={href}
      className="text-white font-semibold text-lg leading-tight  "
      style={{fontFamily: 'Sansation'}}

    >
      {text}
    </a>
  );
};

export default NavItem;