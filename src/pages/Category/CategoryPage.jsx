// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import api from "../../api/axios"; // ⬅️ Your axios instance

// // // // import CategoryFilter from "./components/CategoryFilter";
// // // // import CategorySortBar from "./components/CategorySortBar";
// // // // import CategoryProductCard from "./components/CategoryProductCard";
// // // // import Pagination from "./components/Pagination";
// // // // import MobileFilterDrawer from "./components/MobileFilterDrawer";
// // // // import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// // // // const CategoryPage = () => {
// // // //   const { categorySlug } = useParams();

// // // //   const [products, setProducts] = useState([]);
// // // //   const [filtered, setFiltered] = useState([]);
// // // //   const [drawerOpen, setDrawerOpen] = useState(false);

// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const itemsPerPage = 16;

// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   // ⬇️ FETCH PRODUCTS USING AXIOS INSTANCE
// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         setError(null);

// // // //         const apiURL = `/products/category/${categorySlug}/`;

// // // //         const res = await api.get(apiURL);

// // // //         // Validate response structure
// // // //         if (!res.data || !Array.isArray(res.data)) {
// // // //           throw new Error("Invalid API response format");
// // // //         }

// // // //         setProducts(res.data);
// // // //         setFiltered(res.data);
// // // //         setCurrentPage(1);

// // // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // // //       } catch (err) {
// // // //         console.error("API Error:", err);

// // // //         // Handle different types of API errors

// // // //         if (err.response) {
// // // //           // Server responded with an error
// // // //           if (err.response.status === 404) {
// // // //             setError("Products not found (404)");
// // // //           } else if (err.response.status === 500) {
// // // //             setError("Internal Server Error (500)");
// // // //           } else {
// // // //             setError(`Request failed: ${err.response.status}`);
// // // //           }
// // // //         } else if (err.request) {
// // // //           // No response from server (network issue)
// // // //           setError("No response from server. Please check your internet.");
// // // //         } else {
// // // //           // Other JS errors
// // // //           setError(err.message || "Something went wrong.");
// // // //         }
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     if (categorySlug) fetchProducts();
// // // //   }, [categorySlug]);

// // // //   // ⭐ LOADING UI
// // // //   if (loading) {
// // // //     return (
// // // //       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
// // // //         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
// // // //           Saajnika
// // // //         </h1>

// // // //         <div className="mt-4 w-40 h-1 bg-primary/30 overflow-hidden rounded-full">
// // // //           <div className="h-full w-full bg-primary animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // ❌ ERROR UI (handles all errors including 404)
// // // //   if (error) {
// // // //     return (
// // // //       <div className="h-screen flex flex-col items-center justify-center text-center px-4">
// // // //         <h2 className="text-2xl font-semibold text-red-500 mb-4">{error}</h2>
// // // //         <button
// // // //           onClick={() => window.location.reload()}
// // // //           className="px-6 py-2 bg-primary text-white rounded-lg shadow"
// // // //         >
// // // //           Retry
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // Products pagination logic
// // // //   const totalPages = Math.ceil(filtered.length / itemsPerPage);
// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const visibleProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

// // // //   return (
// // // //     <div className="bg-neutral-50 min-h-screen pb-20">
// // // //       {/* HEADER */}
// // // //       <div
// // // //         className="
// // // //           max-w-[1550px] mx-auto
// // // //           px-3 sm:px-4 md:px-4 lg:px-10
// // // //           pt-6 mb-4 flex items-center justify-between
// // // //         "
// // // //       >
// // // //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// // // //           {categorySlug ? categorySlug.replace("-", " ") : "Collection"}
// // // //         </h1>

// // // //         {/* Mobile filter */}
// // // //         <div className="md:hidden flex items-center gap-3">
// // // //           <button
// // // //             onClick={() => setDrawerOpen(true)}
// // // //             className="px-3 py-2 border rounded-lg bg-white shadow-sm flex items-center gap-2"
// // // //           >
// // // //             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
// // // //               <path
// // // //                 d="M3 5h18M6 12h12M10 19h4"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinecap="round"
// // // //                 strokeLinejoin="round"
// // // //               />
// // // //             </svg>
// // // //             Filter & Sort
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* CONTENT */}
// // // //       <div
// // // //         className="
// // // //           max-w-[1550px] mx-auto
// // // //           grid grid-cols-1 md:grid-cols-4
// // // //           gap-8
// // // //           px-3 sm:px-4 md:px-4 lg:px-10
// // // //         "
// // // //       >
// // // //         {/* Sidebar */}
// // // //         <aside className="hidden md:block md:col-span-1">
// // // //           <CategoryFilter
// // // //             products={products}
// // // //             setFiltered={(newFiltered) => {
// // // //               setFiltered(newFiltered);
// // // //               setCurrentPage(1);
// // // //             }}
// // // //           />
// // // //         </aside>

// // // //         {/* Main Section */}
// // // //         <main className="md:col-span-3">
// // // //           <CategorySortBar
// // // //             products={filtered.length ? filtered : products}
// // // //             setFiltered={(newFiltered) => {
// // // //               setFiltered(newFiltered);
// // // //               setCurrentPage(1);
// // // //             }}
// // // //           />

// // // //           {/* Product Grid */}
// // // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">
// // // //             {visibleProducts.map((p) => (
// // // //               <div key={p.id} className="flex justify-center">
// // // //                 <CategoryProductCard {...p} />
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Empty State */}
// // // //           {filtered.length === 0 && (
// // // //             <div className="mt-12 text-center text-gray-600">
// // // //               <ProductNotFound />
// // // //             </div>
// // // //           )}

// // // //           {/* Pagination */}
// // // //           <div className="mt-8">
// // // //             <Pagination
// // // //               currentPage={currentPage}
// // // //               totalPages={totalPages}
// // // //               onPageChange={(p) => {
// // // //                 setCurrentPage(p);
// // // //                 window.scrollTo({ top: 200, behavior: "smooth" });
// // // //               }}
// // // //             />
// // // //           </div>
// // // //         </main>
// // // //       </div>

// // // //       {/* Mobile Drawer */}
// // // //       <MobileFilterDrawer
// // // //         open={drawerOpen}
// // // //         onClose={() => setDrawerOpen(false)}
// // // //         products={products}
// // // //         onApply={(newFiltered) => {
// // // //           setFiltered(newFiltered);
// // // //           setDrawerOpen(false);
// // // //           setCurrentPage(1);
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategoryPage;

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import api from "../../api/axios";

// // // // // import CategorySortBar from "./components/CategorySortBar";
// // // // // import CategoryProductCard from "./components/CategoryProductCard";
// // // // // import Pagination from "./components/Pagination";
// // // // // import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// // // // // const CategoryPage = () => {
// // // // //   const { categorySlug } = useParams();

// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [sorted, setSorted] = useState([]);

// // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // //   const itemsPerPage = 16;

// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   /* ================= FETCH PRODUCTS ================= */
// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         setError(null);

// // // // //         const res = await api.get(`/products/category/${categorySlug}/`);

// // // // //         if (!Array.isArray(res.data)) {
// // // // //           throw new Error("Invalid API response");
// // // // //         }

// // // // //         setProducts(res.data);
// // // // //         setSorted(res.data);
// // // // //         setCurrentPage(1);

// // // // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // // // //       } catch (err) {
// // // // //         console.error(err);

// // // // //         if (err.response) {
// // // // //           if (err.response.status === 404) {
// // // // //             setError("Products not found");
// // // // //           } else {
// // // // //             setError("Something went wrong");
// // // // //           }
// // // // //         } else {
// // // // //           setError("Network error");
// // // // //         }
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     if (categorySlug) fetchProducts();
// // // // //   }, [categorySlug]);

// // // // //   /* ================= LOADING ================= */
// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
// // // // //         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
// // // // //           Saajnika
// // // // //         </h1>

// // // // //         <div className="mt-4 w-40 h-1 bg-primary/30 overflow-hidden rounded-full">
// // // // //           <div className="h-full w-full bg-primary animate-[loadingBar_1.4s_ease-in-out_infinite]" />
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   /* ================= ERROR ================= */
// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="h-screen flex flex-col items-center justify-center text-center px-4">
// // // // //         <h2 className="text-2xl font-semibold text-red-500 mb-4">{error}</h2>
// // // // //         <button
// // // // //           onClick={() => window.location.reload()}
// // // // //           className="px-6 py-2 bg-primary text-white rounded-lg shadow"
// // // // //         >
// // // // //           Retry
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   /* ================= PAGINATION ================= */
// // // // //   const totalPages = Math.ceil(sorted.length / itemsPerPage);
// // // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // // //   const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

// // // // //   /* ================= UI ================= */
// // // // //   return (
// // // // //     <div className="bg-neutral-50 min-h-screen pb-20">
// // // // //       {/* HEADER */}
// // // // //       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 pt-6">
// // // // //         <h1 className="text-3xl font-bold capitalize text-gray-900">
// // // // //           {categorySlug?.replace("-", " ") || "Collection"}
// // // // //         </h1>
// // // // //       </div>

// // // // //       {/* SORT BAR */}
// // // // //       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 mt-4">
// // // // //         <CategorySortBar
// // // // //           products={products}
// // // // //           setFiltered={(newSorted) => {
// // // // //             setSorted(newSorted);
// // // // //             setCurrentPage(1);
// // // // //           }}
// // // // //         />
// // // // //       </div>

// // // // //       {/* PRODUCT GRID */}
// // // // //       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 mt-8">
// // // // //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
// // // // //           {visibleProducts.map((p) => (
// // // // //             <div key={p.id} className="flex justify-center">
// // // // //               <CategoryProductCard {...p} />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* EMPTY STATE */}
// // // // //         {sorted.length === 0 && (
// // // // //           <div className="mt-16 text-center text-gray-600">
// // // // //             <ProductNotFound />
// // // // //           </div>
// // // // //         )}

// // // // //         {/* PAGINATION */}
// // // // //         {totalPages > 1 && (
// // // // //           <div className="mt-10">
// // // // //             <Pagination
// // // // //               currentPage={currentPage}
// // // // //               totalPages={totalPages}
// // // // //               onPageChange={(p) => {
// // // // //                 setCurrentPage(p);
// // // // //                 window.scrollTo({ top: 200, behavior: "smooth" });
// // // // //               }}
// // // // //             />
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CategoryPage;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import api from "../../api/axios";

// // // // import CategorySortBar from "./components/CategorySortBar";
// // // // import CategoryProductCard from "./components/CategoryProductCard";
// // // // import Pagination from "./components/Pagination";
// // // // import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// // // // const CategoryPage = () => {
// // // //   const { categorySlug } = useParams();

// // // //   const [products, setProducts] = useState([]);
// // // //   const [sorted, setSorted] = useState([]);

// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const itemsPerPage = 16;

// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   /* ================= FETCH PRODUCTS ================= */
// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         setError(null);

// // // //         const res = await api.get(`/products/category/${categorySlug}/`);

// // // //         if (!Array.isArray(res.data)) {
// // // //           throw new Error("Invalid API response");
// // // //         }

// // // //         setProducts(res.data);
// // // //         setSorted(res.data);
// // // //         setCurrentPage(1);

// // // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         setError("Something went wrong");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     if (categorySlug) fetchProducts();
// // // //   }, [categorySlug]);

// // // //   /* ================= LOADING ================= */
// // // //   if (loading) {
// // // //     return (
// // // //       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
// // // //         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
// // // //           Saajnika
// // // //         </h1>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   /* ================= ERROR ================= */
// // // //   if (error) {
// // // //     return (
// // // //       <div className="h-screen flex items-center justify-center">
// // // //         <ProductNotFound />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   /* ================= PAGINATION ================= */
// // // //   const totalPages = Math.ceil(sorted.length / itemsPerPage);
// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

// // // //   /* ================= UI ================= */
// // // //   return (
// // // //     <div className="bg-white min-h-screen pb-20">
// // // //       {/* ===== CATEGORY HEADER ===== */}
// // // //       <div className="max-w-[1550px] mx-auto px-6 pt-10">
// // // //         <h1 className="text-[28px] font-medium uppercase tracking-wide text-gray-900">
// // // //           {categorySlug?.replace("-", " ")}
// // // //         </h1>

// // // //         {/* Divider */}
// // // //         <div className="mt-6 border-b border-gray-200" />
// // // //       </div>

// // // //       {/* ===== SORT BAR ===== */}
// // // //       <div className="max-w-[1550px] mx-auto px-6 mt-6 flex items-center gap-4">
// // // //         {/* <span className="text-sm uppercase tracking-wide text-gray-700">
// // // //           Sort By
// // // //         </span> */}

// // // //         <CategorySortBar
// // // //           products={products}
// // // //           setFiltered={(newSorted) => {
// // // //             setSorted(newSorted);
// // // //             setCurrentPage(1);
// // // //           }}
// // // //         />
// // // //       </div>

// // // //       {/* ===== PRODUCT GRID ===== */}
// // // //       <div className="max-w-[1550px] mx-auto px-6 mt-10">
// // // //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
// // // //           {visibleProducts.map((p) => (
// // // //             <CategoryProductCard key={p.id} {...p} />
// // // //           ))}
// // // //         </div>

// // // //         {/* EMPTY STATE */}
// // // //         {sorted.length === 0 && (
// // // //           <div className="mt-20 text-center">
// // // //             <ProductNotFound />
// // // //           </div>
// // // //         )}

// // // //         {/* PAGINATION */}
// // // //         {totalPages > 1 && (
// // // //           <div className="mt-14">
// // // //             <Pagination
// // // //               currentPage={currentPage}
// // // //               totalPages={totalPages}
// // // //               onPageChange={(p) => {
// // // //                 setCurrentPage(p);
// // // //                 window.scrollTo({ top: 200, behavior: "smooth" });
// // // //               }}
// // // //             />
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategoryPage;

// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import api from "../../api/axios";

// // // import CategorySortBar from "./components/CategorySortBar";
// // // import CategoryProductCard from "./components/CategoryProductCard";
// // // import Pagination from "./components/Pagination";
// // // import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// // // const CategoryPage = () => {
// // //   const { categorySlug } = useParams();

// // //   const [products, setProducts] = useState([]);
// // //   const [sorted, setSorted] = useState([]);

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 16;

// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   /* ================= FETCH PRODUCTS ================= */
// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError(null);

// // //         const res = await api.get(`/products/category/${categorySlug}/`);

// // //         if (!Array.isArray(res.data)) {
// // //           throw new Error("Invalid API response");
// // //         }

// // //         setProducts(res.data);
// // //         setSorted(res.data);
// // //         setCurrentPage(1);

// // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // //       } catch (err) {
// // //         console.error(err);
// // //         setError("Something went wrong");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (categorySlug) fetchProducts();
// // //   }, [categorySlug]);

// // //   /* ================= LOADING ================= */
// // //   if (loading) {
// // //     return (
// // //       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
// // //         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
// // //           Saajnika
// // //         </h1>
// // //       </div>
// // //     );
// // //   }

// // //   /* ================= ERROR ================= */
// // //   if (error) {
// // //     return (
// // //       <div className="h-screen flex items-center justify-center">
// // //         <ProductNotFound />
// // //       </div>
// // //     );
// // //   }

// // //   /* ================= PAGINATION ================= */
// // //   const totalPages = Math.ceil(sorted.length / itemsPerPage);
// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

// // //   /* ================= UI ================= */
// // //   return (
// // //     <div className="bg-white min-h-screen pb-20">
// // //       {/* ===== CATEGORY HEADER ===== */}
// // //       <div className="max-w-[1550px] mx-auto px-6 pt-10">
// // //         <h1 className="text-[28px] font-medium uppercase tracking-wide text-gray-900">
// // //           {categorySlug?.replace("-", " ")}
// // //         </h1>

// // //         {/* Divider */}
// // //         <div className="mt-6 border-b border-gray-200" />
// // //       </div>

// // //       {/* ===== SORT BAR (RIGHT ALIGNED) ===== */}
// // //       <div className="max-w-[1550px] mx-auto px-6 mt-6 flex justify-end">
// // //         <CategorySortBar
// // //           products={products}
// // //           setFiltered={(newSorted) => {
// // //             setSorted(newSorted);
// // //             setCurrentPage(1);
// // //           }}
// // //         />
// // //       </div>

// // //       {/* ===== PRODUCT GRID ===== */}
// // //       <div className="max-w-[1550px] mx-auto px-6 mt-10">
// // //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
// // //           {visibleProducts.map((p) => (
// // //             <CategoryProductCard key={p.id} {...p} />
// // //           ))}
// // //         </div>

// // //         {/* EMPTY STATE */}
// // //         {sorted.length === 0 && (
// // //           <div className="mt-20 text-center">
// // //             <ProductNotFound />
// // //           </div>
// // //         )}

// // //         {/* PAGINATION */}
// // //         {totalPages > 1 && (
// // //           <div className="mt-14">
// // //             <Pagination
// // //               currentPage={currentPage}
// // //               totalPages={totalPages}
// // //               onPageChange={(p) => {
// // //                 setCurrentPage(p);
// // //                 window.scrollTo({ top: 200, behavior: "smooth" });
// // //               }}
// // //             />
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import api from "../../api/axios";

// // import CategorySortBar from "./components/CategorySortBar";
// // import CategoryProductCard from "./components/CategoryProductCard";
// // import Pagination from "./components/Pagination";
// // import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// // const CategoryPage = () => {
// //   const { categorySlug } = useParams();

// //   const [products, setProducts] = useState([]);
// //   const [sorted, setSorted] = useState([]);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 16;

// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   /* ================= FETCH PRODUCTS ================= */
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         const res = await api.get(`/products/category/${categorySlug}/`);

// //         if (!Array.isArray(res.data)) {
// //           throw new Error("Invalid API response");
// //         }

// //         setProducts(res.data);
// //         setSorted(res.data);
// //         setCurrentPage(1);

// //         window.scrollTo({ top: 0, behavior: "smooth" });
// //       } catch (err) {
// //         console.error(err);
// //         setError("Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (categorySlug) fetchProducts();
// //   }, [categorySlug]);

// //   /* ================= LOADING ================= */
// //   if (loading) {
// //     return (
// //       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
// //         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
// //           Saajnika
// //         </h1>
// //       </div>
// //     );
// //   }

// //   /* ================= ERROR ================= */
// //   if (error) {
// //     return (
// //       <div className="h-screen flex items-center justify-center">
// //         <ProductNotFound />
// //       </div>
// //     );
// //   }

// //   /* ================= PAGINATION ================= */
// //   const totalProducts = sorted.length;
// //   const totalPages = Math.ceil(totalProducts / itemsPerPage);
// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

// //   const showingFrom = totalProducts === 0 ? 0 : startIndex + 1;
// //   const showingTo = Math.min(startIndex + itemsPerPage, totalProducts);

// //   /* ================= UI ================= */
// //   return (
// //     <div className="bg-neutral-50 min-h-screen pb-20">
// //       {/* ===== HEADER (SAME SPACING AS OLD PAGE) ===== */}
// //       {/* <div
// //         className="
// //           max-w-[1550px] mx-auto
// //           px-3 sm:px-4 md:px-4 lg:px-10
// //           pt-6 mb-6
// //         "
// //       >
// //         <h1 className="text-3xl font-bold uppercase text-gray-900">
// //           {categorySlug?.replace("-", " ")}
// //         </h1>

// //         <div className="mt-4 border-b border-gray-200" />
// //       </div> */}
// //       <div
// //         className="
// //     max-w-[1550px] mx-auto
// //     px-3 sm:px-4 md:px-4 lg:px-10
// //     pt-14
// //   "
// //       >
// //         <h1 className="text-[28px] font-medium uppercase tracking-wide text-gray-900">
// //           {categorySlug?.replace("-", " ")}
// //         </h1>

// //         {/* Spacer */}
// //         <div className="h-14" />

// //         {/* Divider */}
// //         <div className="border-b border-gray-200" />
// //       </div>

// //       {/* ===== SORT + COUNT ROW (MATCH OLD LAYOUT) ===== */}
// //       <div
// //         className="
// //           max-w-[1550px] mx-auto
// //           px-3 sm:px-4 md:px-4 lg:px-10
// //           flex items-center justify-between
// //           mt-4
// //         "
// //       >
// //         {/* PRODUCT COUNT */}
// //         <p className="text-sm text-gray-600">
// //           Showing {showingFrom}–{showingTo} of {totalProducts} products
// //         </p>

// //         {/* SORT */}
// //         <CategorySortBar
// //           products={products}
// //           setFiltered={(newSorted) => {
// //             setSorted(newSorted);
// //             setCurrentPage(1);
// //           }}
// //         />
// //       </div>

// //       {/* ===== PRODUCT GRID ===== */}
// //       <div
// //         className="
// //           max-w-[1550px] mx-auto
// //           px-3 sm:px-4 md:px-4 lg:px-10
// //           mt-8
// //         "
// //       >
// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
// //           {visibleProducts.map((p) => (
// //             <div key={p.id} className="flex justify-center">
// //               <CategoryProductCard {...p} />
// //             </div>
// //           ))}
// //         </div>

// //         {/* EMPTY STATE */}
// //         {sorted.length === 0 && (
// //           <div className="mt-16 text-center text-gray-600">
// //             <ProductNotFound />
// //           </div>
// //         )}

// //         {/* PAGINATION */}
// //         {totalPages > 1 && (
// //           <div className="mt-10">
// //             <Pagination
// //               currentPage={currentPage}
// //               totalPages={totalPages}
// //               onPageChange={(p) => {
// //                 setCurrentPage(p);
// //                 window.scrollTo({ top: 200, behavior: "smooth" });
// //               }}
// //             />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/axios";

// import CategorySortBar from "./components/CategorySortBar";
// import CategoryProductCard from "./components/CategoryProductCard";
// import Pagination from "./components/Pagination";
// import ProductNotFound from "../../pages/NotFound/ProductNotFound";

// const CategoryPage = () => {
//   const { categorySlug } = useParams();

//   const [products, setProducts] = useState([]);
//   const [sorted, setSorted] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 16;

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ================= FETCH PRODUCTS ================= */
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await api.get(`/products/category/${categorySlug}/`);

//         if (!Array.isArray(res.data)) {
//           throw new Error("Invalid API response");
//         }

//         setProducts(res.data);
//         setSorted(res.data);
//         setCurrentPage(1);

//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } catch (err) {
//         console.error(err);
//         setError("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (categorySlug) fetchProducts();
//   }, [categorySlug]);

//   /* ================= LOADING ================= */
//   if (loading) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
//         <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
//           Saajnika
//         </h1>
//       </div>
//     );
//   }

//   /* ================= ERROR ================= */
//   if (error) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <ProductNotFound />
//       </div>
//     );
//   }

//   /* ================= PAGINATION ================= */
//   const totalProducts = sorted.length;
//   const totalPages = Math.ceil(totalProducts / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

//   const showingFrom = totalProducts === 0 ? 0 : startIndex + 1;
//   const showingTo = Math.min(startIndex + itemsPerPage, totalProducts);

//   /* ================= UI ================= */
//   return (
//     <div className="bg-neutral-50 min-h-screen pb-20">
//       {/* ===== CATEGORY HEADER (FULL-WIDTH BAND) ===== */}
//       <div className="w-full bg-neutral-100">
//         <div
//           className="
//             max-w-[1550px] mx-auto
//             px-3 sm:px-4 md:px-4 lg:px-10
//             py-16
//           "
//         >
//           <h1 className="text-[28px] font-medium uppercase tracking-wide text-gray-900">
//             {categorySlug?.replace("-", " ")}
//           </h1>
//         </div>

//         {/* Divider */}
//         <div className="border-b border-gray-300" />
//       </div>

//       {/* ===== SORT + COUNT ROW ===== */}
//       <div
//         className="
//           max-w-[1550px] mx-auto
//           px-3 sm:px-4 md:px-4 lg:px-10
//           flex items-center justify-between
//           mt-6
//         "
//       >
//         {/* PRODUCT COUNT */}
//         <p className="text-sm text-gray-600">
//           Showing {showingFrom}–{showingTo} of {totalProducts} products
//         </p>

//         {/* SORT */}
//         <CategorySortBar
//           products={products}
//           setFiltered={(newSorted) => {
//             setSorted(newSorted);
//             setCurrentPage(1);
//           }}
//         />
//       </div>

//       {/* ===== PRODUCT GRID ===== */}
//       <div
//         className="
//           max-w-[1550px] mx-auto
//           px-3 sm:px-4 md:px-4 lg:px-10
//           mt-8
//         "
//       >
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
//           {visibleProducts.map((p) => (
//             <div key={p.id} className="flex justify-center">
//               <CategoryProductCard {...p} />
//             </div>
//           ))}
//         </div>

//         {/* EMPTY STATE */}
//         {sorted.length === 0 && (
//           <div className="mt-16 text-center text-gray-600">
//             <ProductNotFound />
//           </div>
//         )}

//         {/* PAGINATION */}
//         {totalPages > 1 && (
//           <div className="mt-10">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={(p) => {
//                 setCurrentPage(p);
//                 window.scrollTo({ top: 200, behavior: "smooth" });
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import api from "../../api/axios";

import CategorySortBar from "./components/CategorySortBar";
import CategoryProductCard from "./components/CategoryProductCard";
import Pagination from "./components/Pagination";
import ProductNotFound from "../../pages/NotFound/ProductNotFound";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/category/${categorySlug}/`);
        console.log(data);
        setProducts(res.data);
        setSorted(res.data);
        setCurrentPage(1);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);
  console.log("product", products);
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
          SAAJNIKA
        </h1>

        <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
          <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ProductNotFound />;
  }

  /* ================= PAGINATION ================= */
  const totalProducts = sorted.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

  const showingFrom = totalProducts === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(startIndex + itemsPerPage, totalProducts);

  return (
    <div className=" min-h-screen pb-20">
      {/* ===== CATEGORY HEADER (CLEAN) ===== */}
      <div
        className="
          max-w-[1550px] mx-auto
          px-3 sm:px-4 md:px-4 lg:px-10
          pt-12 pb-4
        "
      >
        <h1 className="text-[26px] font-medium tracking-wide uppercase text-gray-900">
          {categorySlug?.replace("-", " ")}
        </h1>

        {/* <div className="mt-4 border-b border-gray-200" /> */}
      </div>

      {/* ===== COUNT + SORT (LIGHT & PREMIUM) ===== */}
      <div
        className="
          max-w-[1550px] mx-auto
          px-3 sm:px-4 md:px-4 lg:px-10
          flex items-center justify-between
          py-4
        "
      >
        <p className="text-sm text-gray-500">
          Showing {showingFrom}–{showingTo} of {totalProducts} products
        </p>

        <CategorySortBar
          products={products}
          setFiltered={(newSorted) => {
            setSorted(newSorted);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* ===== PRODUCT GRID (MATCHES TOP PICKS) ===== */}
      <div
        className="
    max-w-[1550px] mx-auto
    px-3 sm:px-4 md:px-4 lg:px-10
    mt-6
  "
      >
        <div
          className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5
      gap-x-6
      gap-y-10
    "
        >
          {visibleProducts.map((p) => (
            <CategoryProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(p) => {
                setCurrentPage(p);
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
