import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api/axios";

import CategorySortBar from "../Category/components/CategorySortBar";
import CategoryProductCard from "../Category/components/CategoryProductCard";
import Pagination from "../Category/components/Pagination";
import ProductNotFound from "../NotFound/ProductNotFound";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  /* ================= FETCH SEARCH RESULTS ================= */
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/admin?search=${query}`);
        setProducts(res.data);
        setSorted(res.data);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Searching…
      </div>
    );
  }

  /* ================= PAGINATION ================= */
  const total = sorted.length;
  const totalPages = Math.ceil(total / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const visible = sorted.slice(start, start + itemsPerPage);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER */}
      <div className="max-w-[1550px] mx-auto px-4 pt-12 pb-6">
        <h1 className="text-2xl font-medium">Search results for “{query}”</h1>
        <p className="text-sm text-gray-500 mt-1">{total} products found</p>
      </div>

      {/* SORT */}
      <div className="max-w-[1550px] mx-auto px-4 flex justify-end py-4">
        <CategorySortBar
          products={products}
          setFiltered={(list) => {
            setSorted(list);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* GRID */}
      <div className="max-w-[1550px] mx-auto px-4 mt-6">
        {total === 0 ? (
          <ProductNotFound />
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {visible.map((p) => (
                <CategoryProductCard key={p.id} {...p} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
