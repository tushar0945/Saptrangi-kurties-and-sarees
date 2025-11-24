// src/pages/Product/components/Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ product }) => {
  return (
    <div className="text-sm text-gray-600 py-4 px-4 lg:px-8">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <span className="mx-2">›</span>
      <span className="capitalize text-gray-800">{product.title}</span>
    </div>
  );
};

export default Breadcrumbs;
