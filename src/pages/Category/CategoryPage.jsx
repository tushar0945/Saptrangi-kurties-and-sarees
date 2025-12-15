import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios"; // ⬅️ Your axios instance

import CategoryFilter from "./components/CategoryFilter";
import CategorySortBar from "./components/CategorySortBar";
import CategoryProductCard from "./components/CategoryProductCard";
import Pagination from "./components/Pagination";
import MobileFilterDrawer from "./components/MobileFilterDrawer";
import ProductNotFound from "../../pages/NotFound/ProductNotFound";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⬇️ FETCH PRODUCTS USING AXIOS INSTANCE
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiURL = `/products/products/category/${categorySlug}/`;

        const res = await api.get(apiURL);

        // Validate response structure
        if (!res.data || !Array.isArray(res.data)) {
          throw new Error("Invalid API response format");
        }

        setProducts(res.data);
        setFiltered(res.data);
        setCurrentPage(1);

        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        console.error("API Error:", err);

        // Handle different types of API errors

        if (err.response) {
          // Server responded with an error
          if (err.response.status === 404) {
            setError("Products not found (404)");
          } else if (err.response.status === 500) {
            setError("Internal Server Error (500)");
          } else {
            setError(`Request failed: ${err.response.status}`);
          }
        } else if (err.request) {
          // No response from server (network issue)
          setError("No response from server. Please check your internet.");
        } else {
          // Other JS errors
          setError(err.message || "Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug) fetchProducts();
  }, [categorySlug]);

  // ⭐ LOADING UI
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-primary tracking-widest animate-pulse">
          SAPTRANGI
        </h1>

        <div className="mt-4 w-40 h-1 bg-primary/30 overflow-hidden rounded-full">
          <div className="h-full w-full bg-primary animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }

  // ❌ ERROR UI (handles all errors including 404)
  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">{error}</h2>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary text-white rounded-lg shadow"
        >
          Retry
        </button>
      </div>
    );
  }

  // Products pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* HEADER */}
      <div
        className="
          max-w-[1550px] mx-auto 
          px-3 sm:px-4 md:px-4 lg:px-10 
          pt-6 mb-4 flex items-center justify-between
        "
      >
        <h1 className="text-3xl font-bold capitalize text-gray-900">
          {categorySlug ? categorySlug.replace("-", " ") : "Collection"}
        </h1>

        {/* Mobile filter */}
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

      {/* CONTENT */}
      <div
        className="
          max-w-[1550px] mx-auto 
          grid grid-cols-1 md:grid-cols-4 
          gap-8 
          px-3 sm:px-4 md:px-4 lg:px-10
        "
      >
        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1">
          <CategoryFilter
            products={products}
            setFiltered={(newFiltered) => {
              setFiltered(newFiltered);
              setCurrentPage(1);
            }}
          />
        </aside>

        {/* Main Section */}
        <main className="md:col-span-3">
          <CategorySortBar
            products={filtered.length ? filtered : products}
            setFiltered={(newFiltered) => {
              setFiltered(newFiltered);
              setCurrentPage(1);
            }}
          />

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">
            {visibleProducts.map((p) => (
              <div key={p.id} className="flex justify-center">
                <CategoryProductCard {...p} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="mt-12 text-center text-gray-600">
              <ProductNotFound />
            </div>
          )}

          {/* Pagination */}
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

      {/* Mobile Drawer */}
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
