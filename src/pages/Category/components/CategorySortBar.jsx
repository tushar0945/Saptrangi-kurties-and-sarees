// import React, { useState } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const sortOptions = [
//   { label: "Featured", value: "featured" },
//   { label: "Best Selling", value: "best-selling" },
//   { label: "Alphabetically, A-Z", value: "a-z" },
//   { label: "Alphabetically, Z-A", value: "z-a" },
//   { label: "Price, low to high", value: "low-high" },
//   { label: "Price, high to low", value: "high-low" },
//   { label: "Date, old to new", value: "old-new" },
//   { label: "Date, new to old", value: "new-old" },
// ];

// const CategorySortBar = ({ products = [], setFiltered }) => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(sortOptions[1]);

//   const applySort = (option) => {
//     setSelected(option);
//     setOpen(false);
//     let sorted = [...products];

//     switch (option.value) {
//       case "a-z":
//         sorted.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case "z-a":
//         sorted.sort((a, b) => b.title.localeCompare(a.title));
//         break;
//       case "low-high":
//         sorted.sort((a, b) => a.price - b.price);
//         break;
//       case "high-low":
//         sorted.sort((a, b) => b.price - a.price);
//         break;
//       case "new-old":
//         sorted.sort(
//           (a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0)
//         );
//         break;
//       case "old-new":
//         sorted.sort(
//           (a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0)
//         );
//         break;
//       default:
//         break;
//     }

//     if (setFiltered) setFiltered(sorted);
//   };

//   return (
//     <div className="flex items-center justify-between mb-4">
//       <p className="text-gray-600 text-sm">{products.length} Products</p>

//       <div className="flex items-center gap-3">
//         <span className="text-gray-600 text-sm">Sort by:</span>

//         <div className="relative">
//           <button
//             onClick={() => setOpen((s) => !s)}
//             className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm"
//           >
//             <span className="text-gray-800 text-sm">{selected.label}</span>
//             <MdKeyboardArrowDown
//               size={18}
//               className={`${open ? "rotate-180" : ""} transition`}
//             />
//           </button>

//           {open && (
//             <div className="absolute right-0 top-12 z-30 w-56 bg-white border rounded-md shadow-lg">
//               {sortOptions.map((opt) => (
//                 <button
//                   key={opt.value}
//                   onClick={() => applySort(opt)}
//                   className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
//                     selected.value === opt.value
//                       ? "font-semibold text-primary"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategorySortBar;

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

/* ================= SORT OPTIONS (INDUSTRY STANDARD) ================= */
const sortOptions = [
  { label: "Best Selling", value: "best-selling" },
  { label: "New Arrivals", value: "new" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
  { label: "Alphabetical: A–Z", value: "a-z" },
  { label: "Alphabetical: Z–A", value: "z-a" },
];

const CategorySortBar = ({ products = [], setFiltered }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);

  /* ================= APPLY SORT ================= */
  const applySort = (option) => {
    setSelected(option);
    setOpen(false);

    let sorted = [...products];

    switch (option.value) {
      case "a-z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "z-a":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "new":
        sorted.sort(
          (a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0)
        );
        break;

      case "best-selling":
      default:
        // Backend-driven in real apps
        // Fallback = keep original order
        sorted = [...products];
        break;
    }

    setFiltered?.(sorted);
  };

  return (
    <div className="relative">
      {/* SORT BUTTON */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          px-4 py-2
          bg-white border border-gray-300
          rounded-lg
          text-sm text-gray-800
          hover:border-gray-400
          transition
        "
      >
        <span>Sort by: {selected.label}</span>
        <MdKeyboardArrowDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-2
            w-56
            bg-white
            border border-gray-200
            rounded-lg
            shadow-lg
            z-50
          "
        >
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => applySort(opt)}
              className={`
                w-full text-left px-4 py-2 text-sm
                hover:bg-gray-100
                transition
                ${
                  selected.value === opt.value
                    ? "font-semibold text-primary"
                    : "text-gray-700"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySortBar;
