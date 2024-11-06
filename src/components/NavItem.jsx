import React from "react";

const NavItem = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="text-white font-normal tracking-wide  text-lg leading-tight hover:text-[#24c4ff] transition-colors duration-300 ease-in-out  "
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {text}
    </a>
  );
};

export default NavItem;
