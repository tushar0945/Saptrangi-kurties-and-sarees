import React, { useEffect, useRef, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

const NavbarMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const containerRef = useRef(null);
  const closeTimer = useRef(null);

  const menuItems = [
    {
      title: "KURTIES",
      dropdown: [
        { label: "Designer Kurties", slug: "kurti" },
        { label: "straight-cut Kurties", slug: "straight-cut-sarees" },
        { label: "Anarkali", slug: "anarkali" },
        { label: "Angrakha", slug: "angrakha" },
      ],
    },
    {
      title: "SAREES",
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
      title: "LEHENGAS",
      dropdown: [
        { label: "Circular", slug: "lehenga" },
        { label: "Flared", slug: "kids-boys" },
        { label: "Straight Cut", slug: "infants" },
      ],
    },
  ];

  // Close if clicked outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const openMenu = (title) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(title);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMenu = (title) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <ul
      ref={containerRef}
      className="flex items-center gap-8 text-sm font-semibold uppercase text-gray-800"
    >
      {menuItems.map((item, index) => {
        const isOpen = activeMenu === item.title;

        return (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => openMenu(item.title)}
            onMouseLeave={() => scheduleClose()}
          >
            <button
              onClick={() => toggleMenu(item.title)}
              aria-expanded={isOpen}
              className="cursor-pointer px-1 py-1 hover:text-primary transition"
            >
              {item.title}
            </button>

            {item.dropdown && (
              <NavbarDropdown
                items={item.dropdown}
                open={isOpen}
                onMouseEnter={() => clearTimeout(closeTimer.current)}
                onMouseLeave={() => scheduleClose()}
                closeMenu={() => setActiveMenu(null)} // ← ADDED
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
