// // // // import React from "react";

// // // // import { Link } from "react-router-dom";
// // // // const NavbarDropdown = ({
// // // //   items = [],
// // // //   open = false,
// // // //   onMouseEnter,
// // // //   onMouseLeave,
// // // // }) => {
// // // //   return (
// // // //     <div
// // // //       onMouseEnter={onMouseEnter}
// // // //       onMouseLeave={onMouseLeave}
// // // //       className={`absolute left-0 top-full mt-2 w-44 bg-white shadow-md border border-gray-100 rounded-md z-20
// // // //         transition-all duration-150 transform origin-top-left
// // // //         ${
// // // //           open
// // // //             ? "opacity-100 visible translate-y-0"
// // // //             : "opacity-0 invisible -translate-y-1"
// // // //         }`}
// // // //     >
// // // //       <ul className="flex flex-col text-sm text-gray-700">
// // // //         {items.map((it, idx) => (
// // // //           // <li
// // // //           //   key={idx}
// // // //           //   className="px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors"
// // // //           // >
// // // //           //   {it}
// // // //           // </li>
// // // //           <li key={idx}>
// // // //             <Link
// // // //               to={`/category/${it.slug}`}
// // // //               className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800"
// // // //             >
// // // //               {it.lable}
// // // //             </Link>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default NavbarDropdown;

// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const NavbarDropdown = ({ items, open, ...events }) => {
// // //   if (!open) return null;

// // //   return (
// // //     <div
// // //       className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 z-50 min-w-[180px]"
// // //       {...events}
// // //     >
// // //       <ul className="flex flex-col gap-2">
// // //         {items.map((item, idx) => (
// // //           <li key={idx}>
// // //             <Link
// // //               to={`/category/${item.slug}`}
// // //               className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800"
// // //             >
// // //               {item.label}
// // //             </Link>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default NavbarDropdown;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const NavbarDropdown = ({
// //   items,
// //   open,
// //   onMouseEnter,
// //   onMouseLeave,
// //   closeMenu,
// // }) => {
// //   if (!open) return null;

// //   return (
// //     <div
// //       className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg py-3 z-20 w-48"
// //       onMouseEnter={onMouseEnter}
// //       onMouseLeave={onMouseLeave}
// //     >
// //       {items.map((item, idx) => (
// //         <Link
// //           key={idx}
// //           to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
// //           onClick={closeMenu} // ← CLOSE DROPDOWN ON CLICK
// //           className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// //         >
// //           {item}
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // };

// // export default NavbarDropdown;

// import React from "react";
// import { Link } from "react-router-dom";

// const NavbarDropdown = ({
//   items,
//   open,
//   onMouseEnter,
//   onMouseLeave,
//   closeMenu,
// }) => {
//   if (!open || !items) return null;

//   return (
//     <div
//       className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg py-3 z-20 w-48"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       {items.map((item, idx) => {
//         // item can be STRING or OBJECT
//         const label = typeof item === "string" ? item : item.title;
//         const slug =
//           typeof item === "string"
//             ? item.toLowerCase().replace(/\s+/g, "-")
//             : item.slug ?? item.title.toLowerCase().replace(/\s+/g, "-");

//         return (
//           <Link
//             key={idx}
//             to={`/category/${slug}`}
//             onClick={closeMenu}
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//           >
//             {label}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default NavbarDropdown;

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
