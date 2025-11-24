// import React, { useEffect, useRef, useState } from "react";
// import NavbarDropdown from "./NavbarDropdown";

// const NavbarMenu = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const containerRef = useRef(null);
//   const closeTimer = useRef(null);

//   const menuItems = [
//     {
//       title: "WOMEN",
//       dropdown: [
//         { label: "Kurtis", slug: "designer-kurtis" },
//         { label: "Sarees", slug: "designer-sarees" },
//         { label: "Tops", slug: "tops" },
//         { label: "Lehengas", slug: "stylish-lehengas" },
//       ],
//     },
//     {
//       title: "MEN",
// dropdown: [
//   { label: "Shirts", slug: "men-shirts" },
//   { label: "Jeans", slug: "men-jeans" },
//   { label: "T-Shirts", slug: "men-tshirts" },
//   { label: "Kurtas", slug: "men-kurtas" },
// ],
//     },
//     {
//       title: "KIDS",
// dropdown: [
//   { label: "Girls", slug: "kids-girls" },
//   { label: "Boys", slug: "kids-boys" },
//   { label: "Infants", slug: "infants" },
// ],
//     },
//     { title: "HOME" },
//     { title: "OFFERS" },
//     { title: "VMART" },
//   ];

//   // Close if clicked outside
//   useEffect(() => {
//     const onDocClick = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setActiveMenu(null);
//       }
//     };
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   const openMenu = (title) => {
//     clearTimeout(closeTimer.current);
//     setActiveMenu(title);
//   };

//   const scheduleClose = () => {
//     clearTimeout(closeTimer.current);
//     // small delay so moving pointer into dropdown doesn't close it
//     closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
//   };

//   const toggleMenu = (title) => {
//     // click toggles (helpful for mobile/touch)
//     setActiveMenu((prev) => (prev === title ? null : title));
//   };

//   return (
//     <ul
//       ref={containerRef}
//       className="flex items-center gap-8 text-sm font-semibold uppercase text-gray-800"
//     >
//       {menuItems.map((item, index) => {
//         const isOpen = activeMenu === item.title;
//         return (
//           <li
//             key={index}
//             className="relative"
//             onMouseEnter={() => openMenu(item.title)}
//             onMouseLeave={() => scheduleClose()}
//           >
//             {/* Use button for accessibility and click toggling */}
//             <button
//               onClick={() => toggleMenu(item.title)}
//               aria-expanded={isOpen}
//               className={`cursor-pointer px-1 py-1 ${
//                 item.color || "hover:text-primary"
//               } transition`}
//             >
//               {item.title}
//             </button>

//             {item.dropdown && (
//               <NavbarDropdown
//                 items={item.dropdown}
//                 open={isOpen}
//                 // keep open when entering dropdown
//                 onMouseEnter={() => {
//                   clearTimeout(closeTimer.current);
//                 }}
//                 // schedule close when leaving dropdown
//                 onMouseLeave={() => scheduleClose()}
//               />
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavbarMenu;

import React, { useEffect, useRef, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

const NavbarMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const containerRef = useRef(null);
  const closeTimer = useRef(null);

  const menuItems = [
    {
      title: "WOMEN",
      dropdown: [
        { label: "Kurtis", slug: "designer-kurtis" },
        { label: "Sarees", slug: "designer-sarees" },
        { label: "Tops", slug: "tops" },
        { label: "Lehengas", slug: "stylish-lehengas" },
      ],
    },
    {
      title: "MEN",
      dropdown: [
        { label: "Shirts", slug: "men-shirts" },
        { label: "Jeans", slug: "men-jeans" },
        { label: "T-Shirts", slug: "men-tshirts" },
        { label: "Kurtas", slug: "men-kurtas" },
      ],
    },
    {
      title: "KIDS",
      dropdown: [
        { label: "Girls", slug: "kids-girls" },
        { label: "Boys", slug: "kids-boys" },
        { label: "Infants", slug: "infants" },
      ],
    },
    { title: "HOME" },
    { title: "OFFERS" },
    { title: "VMART" },
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
