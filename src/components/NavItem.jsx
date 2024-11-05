import React from 'react';

const NavItem = ({ text, href = '#' }) => {
  return (
    <a
      href={href}
      className="text-white font-semibold text-lg leading-tight "
      style={{ fontFamily: 'Plus Jakarta Sans' }}

    >
      {text}
    </a>
  );
};

export default NavItem;