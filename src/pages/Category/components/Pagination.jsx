import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const btn = (active) =>
    `px-4 py-2 rounded-lg border transition ${
      active
        ? "bg-primary text-white border-primary"
        : "bg-white hover:bg-gray-100"
    }`;

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${btn(false)} ${
          currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowLeft size={20} />
      </button>

      {getPages().map((p, i) => {
        if (p === "...")
          return (
            <span key={i} className="px-3 text-gray-500">
              ...
            </span>
          );
        return (
          <button
            key={i}
            onClick={() => onPageChange(p)}
            className={btn(currentPage === p)}
          >
            {p}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${btn(false)} ${
          currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
