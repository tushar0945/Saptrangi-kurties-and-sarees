// // // // src/pages/Category/components/CategorySortBar.jsx
// // // import React from "react";

// // // const CategorySortBar = ({ products, setFiltered }) => {
// // //   const sortProducts = (type) => {
// // //     let sorted = [...products];

// // //     if (type === "low-high") {
// // //       sorted.sort((a, b) => a.price - b.price);
// // //     } else if (type === "high-low") {
// // //       sorted.sort((a, b) => b.price - a.price);
// // //     } else if (type === "rating") {
// // //       sorted.sort((a, b) => b.rating - a.rating);
// // //     }

// // //     setFiltered(sorted);
// // //   };

// // //   return (
// // //     <div className="flex justify-between items-center mb-5">
// // //       <div className="text-gray-600">{products.length} Products</div>

// // //       <select
// // //         className="border px-3 py-2 rounded-lg"
// // //         onChange={(e) => sortProducts(e.target.value)}
// // //       >
// // //         <option value="rating">Best Selling</option>
// // //         <option value="low-high">Price: Low → High</option>
// // //         <option value="high-low">Price: High → Low</option>
// // //       </select>
// // //     </div>
// // //   );
// // // };

// // // export default CategorySortBar;

// // // src/pages/Category/components/CategorySortBar.jsx
// // import React, { useState } from "react";
// // import { MdKeyboardArrowDown } from "react-icons/md";

// // const sortOptions = [
// //   { label: "Featured", value: "featured" },
// //   { label: "Best Selling", value: "best-selling" },
// //   { label: "Alphabetically, A-Z", value: "a-z" },
// //   { label: "Alphabetically, Z-A", value: "z-a" },
// //   { label: "Price, low to high", value: "low-high" },
// //   { label: "Price, high to low", value: "high-low" },
// //   { label: "Date, old to new", value: "old-new" },
// //   { label: "Date, new to old", value: "new-old" },
// // ];

// // const CategorySortBar = ({ products, setFiltered }) => {
// //   const [open, setOpen] = useState(false);
// //   const [selected, setSelected] = useState(sortOptions[1]); // default Best Selling

// //   const applySort = (option) => {
// //     setSelected(option);
// //     setOpen(false);

// //     let sorted = [...products];

// //     switch (option.value) {
// //       case "a-z":
// //         sorted.sort((a, b) => a.title.localeCompare(b.title));
// //         break;
// //       case "z-a":
// //         sorted.sort((a, b) => b.title.localeCompare(a.title));
// //         break;
// //       case "low-high":
// //         sorted.sort((a, b) => a.price - b.price);
// //         break;
// //       case "high-low":
// //         sorted.sort((a, b) => b.price - a.price);
// //         break;
// //       case "new-old":
// //         sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
// //         break;
// //       case "old-new":
// //         sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
// //         break;
// //       default:
// //         break;
// //     }

// //     setFiltered(sorted);
// //   };

// //   return (
// //     <div className="flex justify-end mb-4 relative">
// //       <p className="text-gray-600 text-sm">{products.length} Products</p>
// //       {/* SORT LABEL */}
// //       <span className="text-gray-600 text-sm mr-3 mt-[6px]">Sort by:</span>

// //       {/* DROPDOWN BOX */}
// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="flex items-center justify-between w-48 bg-white border
// //                    rounded-lg px-4 py-2 shadow-sm hover:shadow
// //                    transition cursor-pointer"
// //       >
// //         <span className="text-gray-800 font-medium">{selected.label}</span>
// //         <MdKeyboardArrowDown
// //           size={20}
// //           className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
// //         />
// //       </button>

// //       {/* OPTIONS BOX */}
// //       {open && (
// //         <div
// //           className="absolute right-0 top-12 z-20 w-48 bg-white border rounded-lg
// //                      shadow-lg py-2 animate-fadeIn"
// //         >
// //           {sortOptions.map((opt) => (
// //             <button
// //               key={opt.value}
// //               onClick={() => applySort(opt)}
// //               className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100
// //                          transition ${
// //                            selected.value === opt.value
// //                              ? "font-semibold text-primary"
// //                              : "text-gray-700"
// //                          }`}
// //             >
// //               {opt.label}
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategorySortBar;

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

// const CategorySortBar = ({ products, setFiltered }) => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(sortOptions[1]); // default Best Selling

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
//         sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//         break;
//       case "old-new":
//         sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
//         break;
//       default:
//         break;
//     }

//     setFiltered(sorted);
//   };

//   return (
//     <div className="flex items-center justify-between mb-4 relative">
//       {/* LEFT → PRODUCT COUNT */}
//       <p className="text-gray-600 text-sm">{products.length} Products</p>

//       {/* RIGHT → Sort Label + Dropdown */}
//       <div className="flex items-center gap-3">
//         <span className="text-gray-600 text-sm mt-[2px]">Sort by:</span>

//         {/* SORT BOX */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex items-center justify-between w-48 bg-white border
//                      rounded-lg px-4 py-2 shadow-sm hover:shadow
//                      transition cursor-pointer"
//         >
//           <span className="text-gray-800 font-medium text-sm">
//             {selected.label}
//           </span>
//           <MdKeyboardArrowDown
//             size={20}
//             className={`transition-transform ${
//               open ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </button>
//       </div>

//       {/* DROPDOWN OPTIONS */}
//       {open && (
//         <div
//           className="absolute right-0 top-12 z-20 w-48 bg-white border rounded-lg
//                      shadow-lg py-2 animate-fadeIn"
//         >
//           {sortOptions.map((opt) => (
//             <button
//               key={opt.value}
//               onClick={() => applySort(opt)}
//               className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
//                 selected.value === opt.value
//                   ? "font-semibold text-primary"
//                   : "text-gray-700"
//               }`}
//             >
//               {opt.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategorySortBar;

// src/pages/Category/components/CategorySortBar.jsx
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Alphabetically, A-Z", value: "a-z" },
  { label: "Alphabetically, Z-A", value: "z-a" },
  { label: "Price, low to high", value: "low-high" },
  { label: "Price, high to low", value: "high-low" },
  { label: "Date, old to new", value: "old-new" },
  { label: "Date, new to old", value: "new-old" },
];

const CategorySortBar = ({ products = [], setFiltered }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[1]);

  const applySort = (option) => {
    setSelected(option);
    setOpen(false);
    let sorted = [...products];

    switch (option.value) {
      case "a-z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "new-old":
        sorted.sort(
          (a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0)
        );
        break;
      case "old-new":
        sorted.sort(
          (a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0)
        );
        break;
      default:
        break;
    }

    if (setFiltered) setFiltered(sorted);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-gray-600 text-sm">{products.length} Products</p>

      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm">Sort by:</span>

        <div className="relative">
          <button
            onClick={() => setOpen((s) => !s)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm"
          >
            <span className="text-gray-800 text-sm">{selected.label}</span>
            <MdKeyboardArrowDown
              size={18}
              className={`${open ? "rotate-180" : ""} transition`}
            />
          </button>

          {open && (
            <div className="absolute right-0 top-12 z-30 w-56 bg-white border rounded-md shadow-lg">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => applySort(opt)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selected.value === opt.value
                      ? "font-semibold text-primary"
                      : "text-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySortBar;
