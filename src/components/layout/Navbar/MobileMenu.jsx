import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";

const menuItems = [
  {
    title: "Kurtis",
    dropdown: [
      { label: "Designer Kurties", slug: "kurti" },
      { label: "straight-cut Kurties", slug: "straight-cut-sarees" },
      { label: "Anarkali", slug: "anarkali" },
      { label: "Angrakha", slug: "angrakha" },
    ],
  },
  {
    title: "Sarees",
    dropdown: [
      { label: "Banarasi", slug: "men-shirts" },
      { label: "Kanjeevaram", slug: "men-jeans" },
      { label: "Paithani", slug: "men-tshirts" },
      { label: "Bandhani", slug: "men-kurtas" },
      { label: "Ikat", slug: "men-kurtas" },
      { label: "Phulkari", slug: "men-kurtas" },
      { label: "embroidered", slug: "men-kurtas" },
      { label: "Mysore silk", slug: "men-kurtas" },
    ],
  },
  {
    title: "Lehengas",
    dropdown: [
      { label: "Circular", slug: "lehenga" },
      { label: "Flared", slug: "kids-boys" },
      { label: "Straight Cut", slug: "infants" },
    ],
  },
];

const MobileMenu = ({ open, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-secondary text-white">
          <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-dark transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu List */}
        <ul className="divide-y divide-neutral">
          {menuItems.map((item) => (
            <li key={item.title}>
              {/* TOP LEVEL ITEM */}
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer text-dark hover:bg-neutral"
                onClick={() =>
                  item.dropdown ? toggleDropdown(item.title) : onClose()
                }
              >
                <span className="text-sm font-medium tracking-wide">
                  {item.title}
                </span>

                {item.dropdown ? (
                  activeMenu === item.title ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )
                ) : (
                  <ArrowRight size={18} className="text-gray-400" />
                )}
              </div>

              {/* DROPDOWN LIST */}
              {item.dropdown && (
                <div
                  className={`transition-all overflow-hidden bg-neutral/50 ${
                    activeMenu === item.title
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col text-sm text-dark">
                    {item.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={`/category/${sub.slug}`}
                        onClick={onClose} // close menu after click
                      >
                        <li className="px-8 py-2 hover:bg-secondary/20 hover:text-primary cursor-pointer transition">
                          {sub.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-primary text-white text-center py-3 text-sm font-medium tracking-wide">
          Saptrangi Kurti & Sarees © 2025
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
