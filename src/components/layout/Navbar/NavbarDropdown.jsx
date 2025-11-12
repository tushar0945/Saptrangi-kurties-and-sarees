import React from "react";

const NavbarDropdown = ({
  items = [],
  open = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 top-full mt-2 w-44 bg-white shadow-md border border-gray-100 rounded-md z-20
        transition-all duration-150 transform origin-top-left
        ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1"
        }`}
    >
      <ul className="flex flex-col text-sm text-gray-700">
        {items.map((it, idx) => (
          <li
            key={idx}
            className="px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors"
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarDropdown;
