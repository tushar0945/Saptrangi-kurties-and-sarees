import React from "react";
import { Link } from "react-router-dom";

const NavbarDropdown = ({
  items = [],
  open,
  onMouseEnter,
  onMouseLeave,
  closeMenu,
}) => {
  if (!open || !Array.isArray(items)) return null;

  return (
    <div
      className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg py-3 z-20 w-48"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, idx) => {
        // VALIDATE ITEM STRUCTURE
        if (!item || typeof item !== "object") return null;

        const { label, slug } = item;

        return (
          <Link
            key={idx}
            to={`/category/${slug}`}
            onClick={closeMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarDropdown;
