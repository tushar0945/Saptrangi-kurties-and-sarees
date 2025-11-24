// // // // // // src/pages/Category/CategoryPage.jsx
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import { allProducts } from "../../data/allProducts";

// // // // // import CategoryFilter from "./components/CategoryFilter";
// // // // // import CategorySortBar from "./components/CategorySortBar";
// // // // // import CategoryProductCard from "./components/CategoryProductCard";

// // // // // const CategoryPage = () => {
// // // // //   const { categorySlug } = useParams();
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [filtered, setFiltered] = useState([]);

// // // // //   // Load products from allProducts by category
// // // // //   useEffect(() => {
// // // // //     const list = allProducts.filter((p) => p.categorySlug === categorySlug);
// // // // //     setProducts(list);
// // // // //     setFiltered(list);
// // // // //   }, [categorySlug]);

// // // // //   return (
// // // // //     <div className="bg-neutral-50 min-h-screen pt-6 pb-20">
// // // // //       {/* Heading */}
// // // // //       <div className="max-w-[1400px] mx-auto px-4 mb-6">
// // // // //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// // // // //           {categorySlug.replace("-", " ")}
// // // // //         </h1>
// // // // //       </div>

// // // // //       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
// // // // //         {/* Sidebar Filters */}
// // // // //         <div className="md:col-span-1">
// // // // //           <CategoryFilter products={products} setFiltered={setFiltered} />
// // // // //         </div>

// // // // //         {/* Main Products Area */}
// // // // //         <div className="md:col-span-3">
// // // // //           <CategorySortBar setFiltered={setFiltered} products={products} />

// // // // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
// // // // //             {filtered.map((p) => (
// // // // //               <CategoryProductCard key={p.id} product={p} />
// // // // //             ))}
// // // // //           </div>

// // // // //           {filtered.length === 0 && (
// // // // //             <p className="text-gray-600 mt-10">No products found.</p>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CategoryPage;

// // // // // src/pages/Category/CategoryPage.jsx

// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import { allProducts } from "../../data/allProducts";

// // // // import CategoryFilter from "./components/CategoryFilter";
// // // // import CategorySortBar from "./components/CategorySortBar";
// // // // import CategoryProductCard from "./components/CategoryProductCard   ";

// // // // import HomeProductCard from "../Home/HomeProductCard"; // ✅ USE HOME CARD

// // // // const CategoryPage = () => {
// // // //   const { categorySlug } = useParams();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [filtered, setFiltered] = useState([]);

// // // //   useEffect(() => {
// // // //     const list = allProducts.filter((p) => p.categorySlug === categorySlug);
// // // //     setProducts(list);
// // // //     setFiltered(list);
// // // //   }, [categorySlug]);

// // // //   return (
// // // //     <div className="bg-neutral-50 min-h-screen pt-6 pb-20">
// // // //       <div className="max-w-[1400px] mx-auto px-4 mb-6">
// // // //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// // // //           {categorySlug.replace("-", " ")}
// // // //         </h1>
// // // //       </div>

// // // //       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
// // // //         <div className="md:col-span-1">
// // // //           <CategoryFilter products={products} setFiltered={setFiltered} />
// // // //         </div>

// // // //         <div className="md:col-span-3">
// // // //           <CategorySortBar setFiltered={setFiltered} products={products} />

// // // //           <div
// // // //             className="
// // // //   grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
// // // //   gap-x-6 gap-y-10 mt-5
// // // // "
// // // //           >
// // // //             {filtered.map((p) => (
// // // //               <div key={p.id} className="flex justify-center">
// // // //                 {/* <HomeProductCard {...p} /> */}
// // // //                 <CategoryProductCard {...p} />
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {filtered.length === 0 && (
// // // //             <p className="text-gray-600 mt-10">No products found.</p>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategoryPage;

// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import { allProducts } from "../../data/allProducts";

// // // import CategoryFilter from "./components/CategoryFilter";
// // // import CategorySortBar from "./components/CategorySortBar";
// // // import CategoryProductCard from "./components/CategoryProductCard";

// // // const CategoryPage = () => {
// // //   const { categorySlug } = useParams();
// // //   const [products, setProducts] = useState([]);
// // //   const [filtered, setFiltered] = useState([]);

// // //   // Load products based on categorySlug
// // //   useEffect(() => {
// // //     const list = allProducts.filter((p) => p.categorySlug === categorySlug);
// // //     setProducts(list);
// // //     setFiltered(list);
// // //   }, [categorySlug]);

// // //   return (
// // //     <div className="bg-neutral-50 min-h-screen pt-6 pb-20">
// // //       {/* PAGE HEADING */}
// // //       <div className="max-w-[1400px] mx-auto px-4 mb-6 flex justify-between items-center">
// // //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// // //           {categorySlug.replace("-", " ")}
// // //         </h1>

// // //         {/* Product count */}
// // //         {/* <p className="text-gray-600 text-sm">{filtered.length} Products</p> */}
// // //       </div>

// // //       {/* PAGE LAYOUT */}
// // //       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
// // //         {/* LEFT SIDEBAR FILTER */}
// // //         <div className="md:col-span-1">
// // //           <CategoryFilter products={products} setFiltered={setFiltered} />
// // //         </div>

// // //         {/* RIGHT MAIN PRODUCT AREA */}
// // //         <div className="md:col-span-3">
// // //           {/* SORTING BAR */}
// // //           <CategorySortBar setFiltered={setFiltered} products={products} />

// // //           {/* PRODUCT GRID */}
// // //           <div
// // //             className="
// // //               grid
// // //               grid-cols-2
// // //               sm:grid-cols-3
// // //               lg:grid-cols-4
// // //               gap-x-6
// // //               gap-y-12
// // //               mt-6
// // //             "
// // //           >
// // //             {filtered.map((p) => (
// // //               <div key={p.id} className="flex justify-center">
// // //                 <CategoryProductCard {...p} />
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* EMPTY MESSAGE */}
// // //           {filtered.length === 0 && (
// // //             <p className="text-gray-600 mt-10">No products found.</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryPage;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { allProducts } from "../../data/allProducts";

// // import CategoryFilter from "./components/CategoryFilter";
// // import CategorySortBar from "./components/CategorySortBar";
// // import CategoryProductCard from "./components/CategoryProductCard";

// // const CategoryPage = () => {
// //   const { categorySlug } = useParams();

// //   const [products, setProducts] = useState([]);
// //   const [filtered, setFiltered] = useState([]);

// //   // Pagination states
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const productsPerPage = 16;

// //   // Load products from category slug
// //   useEffect(() => {
// //     const list = allProducts.filter((p) => p.categorySlug === categorySlug);
// //     setProducts(list);
// //     setFiltered(list);
// //     setCurrentPage(1); // reset page when category changes
// //   }, [categorySlug]);

// //   // PAGE CALCULATION
// //   const indexOfLast = currentPage * productsPerPage;
// //   const indexOfFirst = indexOfLast - productsPerPage;
// //   const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

// //   return (
// //     <div className="bg-neutral-50 min-h-screen pt-6 pb-20">
// //       {/* Heading */}
// //       <div className="max-w-[1400px] mx-auto px-4 mb-6 flex justify-between">
// //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// //           {categorySlug.replace("-", " ")}
// //         </h1>
// //         <p className="text-gray-600 text-sm">{filtered.length} Products</p>
// //       </div>

// //       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
// //         {/* LEFT FILTER */}
// //         <div className="md:col-span-1">
// //           <CategoryFilter products={products} setFiltered={setFiltered} />
// //         </div>

// //         {/* RIGHT PRODUCT GRID */}
// //         <div className="md:col-span-3">
// //           <CategorySortBar setFiltered={setFiltered} products={products} />

// //           {/* PRODUCT GRID */}
// //           <div
// //             className="
// //               grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
// //               gap-x-6 gap-y-12 mt-6
// //             "
// //           >
// //             {currentProducts.map((p) => (
// //               <div key={p.id} className="flex justify-center">
// //                 <CategoryProductCard {...p} />
// //               </div>
// //             ))}
// //           </div>

// //           {/* PAGINATION */}
// //           {filtered.length > productsPerPage && (
// //             <div className="flex justify-center items-center mt-10 gap-3">
// //               {/* PREVIOUS BUTTON */}
// //               <button
// //                 onClick={() =>
// //                   currentPage > 1 && setCurrentPage(currentPage - 1)
// //                 }
// //                 className={`px-4 py-2 rounded-lg border ${
// //                   currentPage === 1
// //                     ? "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                     : "bg-white hover:bg-gray-100"
// //                 }`}
// //                 disabled={currentPage === 1}
// //               >
// //                 ← Previous
// //               </button>

// //               {/* PAGE NUMBERS */}
// //               {Array.from(
// //                 { length: Math.ceil(filtered.length / productsPerPage) },
// //                 (_, i) => (
// //   <button
// //     key={i}
// //     onClick={() => setCurrentPage(i + 1)}
// //     className={`px-4 py-2 rounded-lg border ${
// //       currentPage === i + 1
// //         ? "bg-primary text-white border-primary"
// //         : "bg-white hover:bg-gray-100"
// //     }`}
// //   >
// //     {i + 1}
// //   </button>
// //                 )
// //               )}

// //               {/* NEXT BUTTON */}
// //               <button
// //                 onClick={() =>
// //                   currentPage < Math.ceil(filtered.length / productsPerPage) &&
// //                   setCurrentPage(currentPage + 1)
// //                 }
// //                 className={`px-4 py-2 rounded-lg border ${
// //                   currentPage === Math.ceil(filtered.length / productsPerPage)
// //                     ? "bg-gray-200 text-gray-400 cursor-not-allowed"
// //                     : "bg-white hover:bg-gray-100"
// //                 }`}
// //                 disabled={
// //                   currentPage === Math.ceil(filtered.length / productsPerPage)
// //                 }
// //               >
// //                 Next →
// //               </button>
// //             </div>
// //           )}

// //           {filtered.length === 0 && (
// //             <p className="text-gray-600 mt-10">No products found.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { allProducts } from "../../data/allProducts";

// import CategoryFilter from "./components/CategoryFilter";
// import CategorySortBar from "./components/CategorySortBar";
// import CategoryProductCard from "./components/CategoryProductCard";
// import Pagination from "./components/Pagination";

// const CategoryPage = () => {
//   const { categorySlug } = useParams();
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 16;

//   useEffect(() => {
//     const list = allProducts.filter((p) => p.categorySlug === categorySlug);
//     setProducts(list);
//     setFiltered(list);
//     setCurrentPage(1); // Reset page when category changes
//   }, [categorySlug]);

//   // Pagination Calculations
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-neutral-50 min-h-screen pt-6 pb-20">
//       <div className="max-w-[1400px] mx-auto px-4 mb-6 flex justify-between items-center">
//         <h1 className="text-3xl font-bold capitalize text-gray-900">
//           {categorySlug.replace("-", " ")}
//         </h1>
//       </div>

//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
//         <div className="md:col-span-1">
//           <CategoryFilter products={products} setFiltered={setFiltered} />
//         </div>

//         <div className="md:col-span-3">
//           <CategorySortBar products={products} setFiltered={setFiltered} />

//           {/* PRODUCT GRID */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-6">
//             {visibleProducts.map((p) => (
//               <div key={p.id} className="flex justify-center">
//                 <CategoryProductCard {...p} />
//               </div>
//             ))}
//           </div>

//           {/* PAGINATION */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />

//           {filtered.length === 0 && (
//             <p className="text-gray-600 mt-10">No products found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// src/pages/Category/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data/allProducts";

import CategoryFilter from "./components/CategoryFilter";
import CategorySortBar from "./components/CategorySortBar";
import CategoryProductCard from "./components/CategoryProductCard";
import Pagination from "./components/Pagination";
import MobileFilterDrawer from "./components/MobileFilterDrawer";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // UI state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const list = allProducts.filter((p) => p.categorySlug === categorySlug);
    setProducts(list);
    setFiltered(list);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categorySlug]);

  // pagination calculations
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* header */}
      <div className="max-w-[1400px] mx-auto px-4 pt-6 mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold capitalize text-gray-900">
          {categorySlug ? categorySlug.replace("-", " ") : "Collection"}
        </h1>

        {/* small mobile: show filter button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="px-3 py-2 border rounded-lg bg-white shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 5h18M6 12h12M10 19h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter & Sort
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block md:col-span-1">
          <CategoryFilter
            products={products}
            setFiltered={(newFiltered) => {
              setFiltered(newFiltered);
              setCurrentPage(1);
            }}
          />
        </aside>

        {/* Main */}
        <main className="md:col-span-3">
          <CategorySortBar
            products={filtered.length ? filtered : products}
            setFiltered={(newFiltered) => {
              setFiltered(newFiltered);
              setCurrentPage(1);
            }}
          />

          {/* grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">
            {visibleProducts.map((p) => (
              <div key={p.id} className="flex justify-center">
                <CategoryProductCard {...p} />
              </div>
            ))}
          </div>

          {/* empty state */}
          {filtered.length === 0 && (
            <div className="mt-12 text-center text-gray-600">
              No products found.
            </div>
          )}

          {/* pagination (hidden on small screens) */}
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(p) => {
                setCurrentPage(p);
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
            />
          </div>
        </main>
      </div>

      {/* mobile bottom-sheet drawer */}
      <MobileFilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        products={products}
        onApply={(newFiltered) => {
          setFiltered(newFiltered);
          setDrawerOpen(false);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default CategoryPage;
