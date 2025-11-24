// // // src/pages/Category/components/MobileFilterDrawer.jsx
// // import React, { useState } from "react";
// // import CategoryFilter from "./CategoryFilter";

// // /**
// //  * Bottom-sheet drawer (Option B - Myntra style)
// //  *
// //  * Props:
// //  * - open (bool)
// //  * - onClose (fn)
// //  * - products (array)
// //  * - onApply (fn(filteredList))
// //  */
// // const MobileFilterDrawer = ({ open, onClose, products = [], onApply }) => {
// //   // We keep a local copy of filters by letting CategoryFilter call setFiltered (we'll capture via apply)
// //   // For simplicity we re-render CategoryFilter and capture output when user clicks Apply (CategoryFilter returns filtered list via DOM? -> we'll compute by calling a hidden ref function)
// //   // Simpler approach: When Apply is clicked inside this drawer, we call CategoryFilter's applyFilters via event — but to keep things simple, we duplicate a small apply flow here:
// //   const [minPrice, setMinPrice] = useState("");
// //   const [maxPrice, setMaxPrice] = useState("");
// //   const [sizes, setSizes] = useState(new Set());
// //   const [inStockOnly, setInStockOnly] = useState(false);

// //   const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes || [])));

// //   const toggleSize = (s) => {
// //     const next = new Set(sizes);
// //     if (next.has(s)) next.delete(s);
// //     else next.add(s);
// //     setSizes(next);
// //   };

// //   const apply = () => {
// //     let list = [...products];
// //     const min = Number(minPrice) || 0;
// //     const max = Number(maxPrice) || Infinity;
// //     list = list.filter((p) => p.price >= min && p.price <= max);
// //     if (sizes.size > 0) {
// //       list = list.filter((p) => {
// //         return Array.from(sizes).some((s) => (p.sizes || []).includes(s));
// //       });
// //     }
// //     if (inStockOnly) {
// //       list = list.filter((p) => {
// //         if (!p.stock) return true;
// //         return Object.values(p.stock).some((q) => q > 0);
// //       });
// //     }
// //     if (onApply) onApply(list);
// //   };

// //   const clear = () => {
// //     setMinPrice("");
// //     setMaxPrice("");
// //     setSizes(new Set());
// //     setInStockOnly(false);
// //     if (onApply) onApply(products);
// //     onClose();
// //   };

// //   return (
// //     <div
// //       className={`fixed inset-0 z-50 transition-all ${
// //         open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
// //       }`}
// //       aria-hidden={!open}
// //     >
// //       {/* backdrop */}
// //       <div
// //         onClick={onClose}
// //         className={`absolute inset-0 bg-black/40 transition-opacity ${
// //           open ? "opacity-100" : "opacity-0"
// //         }`}
// //       />

// //       {/* bottom sheet */}
// //       <div
// //         className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl
// //                     max-h-[90vh] overflow-auto transition-transform transform ${
// //                       open ? "translate-y-0" : "translate-y-full"
// //                     }`}
// //       >
// //         {/* header */}
// //         <div className="flex items-center justify-between px-5 py-4 border-b">
// //           <div>
// //             <h3 className="text-lg font-semibold">Filter & Sort</h3>
// //             <p className="text-sm text-gray-500">{products.length} products</p>
// //           </div>
// //           <button onClick={onClose} className="text-gray-600 text-xl">
// //             ✕
// //           </button>
// //         </div>

// //         {/* content - simple replicated controls to keep UX fast */}
// //         <div className="p-5 space-y-6">
// //           {/* price */}
// //           <div>
// //             <div className="font-medium mb-2">Price</div>
// //             <div className="flex gap-3">
// //               <input
// //                 type="number"
// //                 placeholder="Min"
// //                 value={minPrice}
// //                 onChange={(e) => setMinPrice(e.target.value)}
// //                 className="border p-2 rounded w-32"
// //               />
// //               <input
// //                 type="number"
// //                 placeholder="Max"
// //                 value={maxPrice}
// //                 onChange={(e) => setMaxPrice(e.target.value)}
// //                 className="border p-2 rounded w-32"
// //               />
// //             </div>
// //           </div>

// //           {/* sizes */}
// //           <div>
// //             <div className="font-medium mb-2">Sizes</div>
// //             <div className="flex flex-wrap gap-2">
// //               {allSizes.length === 0 ? (
// //                 <div className="text-sm text-gray-500">No sizes</div>
// //               ) : (
// //                 allSizes.map((s) => (
// //                   <button
// //                     key={s}
// //                     onClick={() => toggleSize(s)}
// //                     className={`px-3 py-1 border rounded-full text-sm ${
// //                       sizes.has(s)
// //                         ? "bg-primary text-white border-primary"
// //                         : "bg-white hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     {s}
// //                   </button>
// //                 ))
// //               )}
// //             </div>
// //           </div>

// //           {/* availability */}
// //           <div>
// //             <label className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 checked={inStockOnly}
// //                 onChange={(e) => setInStockOnly(e.target.checked)}
// //                 className="w-4 h-4"
// //               />
// //               <span className="text-sm">In stock</span>
// //             </label>
// //           </div>

// //           {/* footer actions */}
// //           <div className="flex gap-3">
// //             <button
// //               onClick={apply}
// //               className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium"
// //             >
// //               Apply Filters
// //             </button>
// //             <button
// //               onClick={clear}
// //               className="px-4 py-3 border rounded-lg w-28"
// //             >
// //               Clear
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MobileFilterDrawer;

// // src/pages/Category/components/MobileFilterDrawer.jsx
// import React, { useRef } from "react";
// import CategoryFilter from "./CategoryFilter";

// const MobileFilterDrawer = ({ open, onClose, products, onApply }) => {
//   // Create a ref to call applyFilters() inside CategoryFilter
//   const filterRef = useRef(null);

//   const handleApply = () => {
//     if (filterRef.current) {
//       const result = filterRef.current.applyFilters(); // ⬅ FULL FILTER LOGIC
//       onApply(result);
//       onClose();
//     }
//   };

//   const handleClear = () => {
//     if (filterRef.current) {
//       filterRef.current.clearFilters();
//     }
//     onApply(products);
//     onClose();
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 transition-all ${
//         open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
//       }`}
//     >
//       {/* backdrop */}
//       <div
//         onClick={onClose}
//         className={`absolute inset-0 bg-black/40 transition-opacity ${
//           open ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* bottom sheet */}
//       <div
//         className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl
//         max-h-[90vh] overflow-hidden transition-transform ${
//           open ? "translate-y-0" : "translate-y-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-4 border-b">
//           <div>
//             <h3 className="text-lg font-semibold">Filter & Sort</h3>
//             <p className="text-sm text-gray-500">{products.length} products</p>
//           </div>
//           <button onClick={onClose} className="text-gray-600 text-xl">
//             ✕
//           </button>
//         </div>

//         {/* FULL CATEGORY FILTER INSIDE DRAWER */}
//         <div className="overflow-auto p-5 h-[calc(90vh-150px)]">
//           <CategoryFilter
//             ref={filterRef}
//             products={products}
//             setFiltered={() => {}}
//           />
//         </div>

//         {/* Bottom Action Buttons */}
//         <div className="border-t p-4 bg-white flex gap-3 sticky bottom-0">
//           <button
//             onClick={handleClear}
//             className="flex-1 px-4 py-3 border rounded-lg text-center"
//           >
//             Clear
//           </button>

//           <button
//             onClick={handleApply}
//             className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium"
//           >
//             Apply Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileFilterDrawer;

// src/pages/Category/components/MobileFilterDrawer.jsx
import React, { useMemo, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

/**
 * MobileFilterDrawer (Myntra / bottom-sheet style)
 *
 * Props:
 * - open (bool)            -> whether drawer is visible
 * - onClose (fn)           -> close drawer
 * - products (array)       -> full list of products in this category
 * - onApply (fn)           -> function(filteredProducts) called when user taps Apply
 *
 * Notes:
 * - Keeps local UI state for each filter so mobile UX is fast.
 * - When Apply is clicked we compute the filtered list and call onApply(list), then close.
 * - When Clear is clicked we reset everything, call onApply(products) and close.
 */
const DEFAULT_COLORS = [
  "Black",
  "Blue",
  "Grey",
  "Brown",
  "Green",
  "White",
  "Beige",
  "Purple",
  "Maroon",
  "Pink",
  "Red",
  "Yellow",
  "Orange",
];

const DEFAULT_MATERIALS = [
  "Cotton",
  "Silk",
  "Rayon",
  "Georgette",
  "Net",
  "Chiffon",
  "Velvet",
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Alphabetically, A-Z", value: "a-z" },
  { label: "Alphabetically, Z-A", value: "z-a" },
  { label: "Price, low to high", value: "low-high" },
  { label: "Price, high to low", value: "high-low" },
  { label: "Date, old to new", value: "old-new" },
  { label: "Date, new to old", value: "new-old" },
];

const MobileFilterDrawer = ({ open, onClose, products = [], onApply }) => {
  // Price
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Sizes (set)
  const [sizes, setSizes] = useState(new Set());

  // Colors (set)
  const [colors, setColors] = useState(new Set());

  // Materials (set)
  const [materials, setMaterials] = useState(new Set());

  // Availability
  const [inStockOnly, setInStockOnly] = useState(false);

  // Sort
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[1].value); // default Best Selling

  // Show more toggles
  const [showAllColors, setShowAllColors] = useState(false);

  // derive available sizes/colors/materials from products (fallback to defaults)
  const allSizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes || []))),
    [products]
  );

  // if products contain color values in p.color (or p.tags), you could extract them,
  // but since data may not have explicit color field we use defaults
  const allColors = useMemo(() => {
    // try to extract from product.tags or product.color fields if available
    const fromProducts = new Set();
    products.forEach((p) => {
      if (p.color) {
        fromProducts.add(String(p.color));
      }
      if (Array.isArray(p.tags)) {
        p.tags.forEach((t) => {
          // heuristics: treat short-tag strings as color if they match known defaults
          if (
            DEFAULT_COLORS.map((c) => c.toLowerCase()).includes(t.toLowerCase())
          )
            fromProducts.add(t);
        });
      }
    });
    return fromProducts.size > 0 ? Array.from(fromProducts) : DEFAULT_COLORS;
  }, [products]);

  const allMaterials = useMemo(() => {
    // try to get from product.details string heuristically (optional)
    const fromProducts = new Set();
    products.forEach((p) => {
      if (p.material) fromProducts.add(p.material);
      if (p.details && typeof p.details === "string") {
        const text = p.details.toLowerCase();
        DEFAULT_MATERIALS.forEach((m) => {
          if (text.includes(m.toLowerCase())) fromProducts.add(m);
        });
      }
    });
    return fromProducts.size > 0 ? Array.from(fromProducts) : DEFAULT_MATERIALS;
  }, [products]);

  // helper toggles
  const toggleSet = (setGetter, setSetter, value) => {
    const next = new Set(setGetter);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSetter(next);
  };

  const toggleSize = (s) => toggleSet(sizes, setSizes, s);
  const toggleColor = (c) => toggleSet(colors, setColors, c);
  const toggleMaterial = (m) => toggleSet(materials, setMaterials, m);

  // Reset filters to defaults
  const clearAll = () => {
    setMinPrice("");
    setMaxPrice("");
    setSizes(new Set());
    setColors(new Set());
    setMaterials(new Set());
    setInStockOnly(false);
    setSortBy(SORT_OPTIONS[1].value);
    setShowAllColors(false);
    if (onApply) onApply(products);
    onClose?.();
  };

  // Apply filters -> compute filtered list and optionally sort it
  const applyFilters = () => {
    let list = [...products];

    // price filter
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;
    list = list.filter((p) => p.price >= min && p.price <= max);

    // size filter
    if (sizes.size > 0) {
      const sizeArr = Array.from(sizes);
      list = list.filter((p) => {
        const ps = p.sizes || [];
        return sizeArr.some((s) => ps.includes(s));
      });
    }

    // color filter
    if (colors.size > 0) {
      const colorArr = Array.from(colors).map((c) => c.toLowerCase());
      list = list.filter((p) => {
        // look for `p.color` or in tags
        if (p.color) {
          if (colorArr.includes(String(p.color).toLowerCase())) return true;
        }
        if (Array.isArray(p.tags)) {
          return p.tags.some((t) => colorArr.includes(String(t).toLowerCase()));
        }
        return false;
      });
    }

    // material filter
    if (materials.size > 0) {
      const matArr = Array.from(materials).map((m) => m.toLowerCase());
      list = list.filter((p) => {
        if (p.material) {
          if (matArr.includes(String(p.material).toLowerCase())) return true;
        }
        if (p.details && typeof p.details === "string") {
          const txt = p.details.toLowerCase();
          return matArr.some((m) => txt.includes(m));
        }
        return false;
      });
    }

    // availability
    if (inStockOnly) {
      list = list.filter((p) => {
        if (!p.stock) return true; // assume true if no stock info
        return Object.values(p.stock).some((q) => Number(q) > 0);
      });
    }

    // sort
    switch (sortBy) {
      case "a-z":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        list.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-high":
        list.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        list.sort((a, b) => b.price - a.price);
        break;
      case "new-old":
        list.sort(
          (a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0)
        );
        break;
      case "old-new":
        list.sort(
          (a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0)
        );
        break;
      default:
        break;
    }

    if (onApply) onApply(list);
    onClose?.();
  };

  // Close drawer: keep current selections but hide
  useEffect(() => {
    if (!open) {
      // nothing – keep selections persistent while drawer closed
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all ${
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom sheet */}
      <div
        className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl
                    max-h-[92vh] overflow-auto transition-transform transform ${
                      open ? "translate-y-0" : "translate-y-full"
                    }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">Filter & Sort</h3>
            <p className="text-sm text-gray-500">{products.length} products</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6">
          {/* PRICE */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Price</h4>
              <button
                onClick={() => {
                  setMinPrice("");
                  setMaxPrice("");
                }}
                className="text-sm text-primary underline"
              >
                Reset
              </button>
            </div>

            <div className="flex gap-3 mt-3">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-2 rounded w-28"
                min="0"
              />
              <div className="flex items-center text-gray-500">-</div>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-2 rounded w-28"
                min="0"
              />
            </div>
          </div>

          {/* SIZES */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Sizes</h4>
              <button
                onClick={() => setSizes(new Set())}
                className="text-sm text-primary underline"
              >
                Reset
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {allSizes.length === 0 ? (
                <p className="text-sm text-gray-500">No sizes available</p>
              ) : (
                allSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`px-3 py-1 border rounded-full text-sm transition ${
                      sizes.has(s)
                        ? "bg-primary text-white border-primary"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* COLOR */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Color</h4>
              <button
                onClick={() => setColors(new Set())}
                className="text-sm text-primary underline"
              >
                Reset
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3">
              {(showAllColors ? allColors : allColors.slice(0, 8)).map(
                (color) => (
                  <label
                    key={color}
                    className="flex items-center gap-3 text-gray-700 cursor-pointer"
                    onClick={(e) => {
                      // label click toggles
                      e.preventDefault();
                      toggleColor(color);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={colors.has(color)}
                      onChange={() => toggleColor(color)}
                      className="w-4 h-4"
                    />
                    <span
                      className="w-4 h-4 border rounded-sm inline-block"
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "white"
                            ? "#fff"
                            : color.toLowerCase(),
                        border:
                          color.toLowerCase() === "white"
                            ? "1px solid #e2e8f0"
                            : undefined,
                      }}
                      aria-hidden
                    />
                    <span className="text-sm">{color}</span>
                  </label>
                )
              )}
            </div>

            {allColors.length > 8 && (
              <div className="mt-2">
                <button
                  onClick={() => setShowAllColors((s) => !s)}
                  className="text-sm text-primary underline"
                >
                  {showAllColors ? "Show less" : "Show more"}
                </button>
              </div>
            )}
          </div>

          {/* MATERIAL */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Material</h4>
              <button
                onClick={() => setMaterials(new Set())}
                className="text-sm text-primary underline"
              >
                Reset
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {allMaterials.map((m) => (
                <label
                  key={m}
                  className="flex items-center gap-2 text-gray-700 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMaterial(m);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={materials.has(m)}
                    onChange={() => toggleMaterial(m)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{m}</span>
                </label>
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Availability</h4>
              <div className="text-sm text-gray-500">
                <button
                  onClick={() => setInStockOnly((s) => !s)}
                  className="underline"
                >
                  Toggle
                </button>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">In stock</span>
              </label>

              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" disabled className="w-4 h-4" />
                <span className="text-sm">Out of stock</span>
              </label>
            </div>
          </div>

          {/* SORT */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Sort by</h4>
              <button
                onClick={() => setSortBy(SORT_OPTIONS[1].value)}
                className="text-sm text-primary underline"
              >
                Reset
              </button>
            </div>
            <div className="mt-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2 pb-6">
            <button
              onClick={clearAll}
              className="flex-1 px-4 py-3 border rounded-lg"
            >
              Clear
            </button>

            <button
              onClick={applyFilters}
              className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
