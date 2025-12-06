// // src/pages/Product/ProductDetails.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { allProducts } from "../../data/allProducts";
// import Breadcrumbs from "./components/Breadcrumbs";
// import ImageGallery from "./components/ImageGallery";
// import ProductTitlePrice from "./components/ProductTitlePrice";
// import QuantitySelector from "./components/QuantitySelector";
// import AddToCartSection from "./components/AddToCartSection";
// import PincodeChecker from "./components/PincodeChecker";
// import HighlightsSection from "./components/HighlightsSection";
// import DescriptionTabs from "./components/DescriptionTabs";
// import ReviewsSection from "./components/ReviewsSection";
// import RelatedProducts from "./components/RelatedProducts";

// const ProductDetails = () => {
//   const { productSlug } = useParams();
//   const product = allProducts.find((p) => p.slug === productSlug);
//   console.log(product);

//   if (!product) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold text-gray-600">
//         Product Not Found 😢
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-neutral-50 min-h-screen pb-20">
//       {/* Breadcrumbs */}
//       <Breadcrumbs product={product} />

//       <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* LEFT SIDE: Image Gallery */}
//         <ImageGallery product={product} />

//         {/* RIGHT SIDE: Title, Price, Sizes, Add To Cart */}
//         <div>
//           <ProductTitlePrice product={product} />
//           <QuantitySelector />
//           <AddToCartSection product={product} />
//           <PincodeChecker />
//         </div>
//       </div>

//       {/* Highlights */}
//       <HighlightsSection product={product} />

//       {/* Description / Additional Info Tabs */}
//       <DescriptionTabs product={product} />

//       {/* Reviews */}
//       <ReviewsSection product={product} />

//       {/* Related Products */}
//       <RelatedProducts currentProduct={product} />
//     </div>
//   );
// };

// export default ProductDetails;

// src/pages/Product/ProductDetails.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { allProducts } from "../../data/allProducts";
// import Breadcrumbs from "./components/Breadcrumbs";
// import ImageGallery from "./components/ImageGallery";
// import ProductTitlePrice from "./components/ProductTitlePrice";
// import QuantitySelector from "./components/QuantitySelector";
// import AddToCartSection from "./components/AddToCartSection";
// import PincodeChecker from "./components/PincodeChecker";
// import HighlightsSection from "./components/HighlightsSection";
// import DescriptionTabs from "./components/DescriptionTabs";
// import ReviewsSection from "./components/ReviewsSection";
// import RelatedProducts from "./components/RelatedProducts";

// const ProductDetails = () => {
//   const { productSlug } = useParams();
//   const product = allProducts.find((p) => p.slug === productSlug);
//   console.log(product);

//   if (!product) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold text-gray-600">
//         Product Not Found 😢
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-neutral-50 min-h-screen pb-20">
//       {/* Breadcrumbs */}
//       <Breadcrumbs product={product} />

//       {/* MAIN CONTENT — FIXED ALIGNMENT */}
//       <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 -mt-6 pt-4">
//         {/* LEFT SIDE: Image Gallery */}
//         <ImageGallery product={product} />

//         {/* RIGHT SIDE */}
//         <div>
//           <ProductTitlePrice product={product} />
//           <QuantitySelector />
//           <AddToCartSection product={product} />
//           <PincodeChecker />
//         </div>
//       </div>

//       {/* Highlights */}
//       <HighlightsSection product={product} />

//       {/* Tabs */}
//       <DescriptionTabs product={product} />

//       {/* Reviews */}
//       <ReviewsSection product={product} />

//       {/* Related */}
//       <RelatedProducts currentProduct={product} />
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { allProducts } from "../../data/allProducts";
// import Breadcrumbs from "./components/Breadcrumbs";
// import ImageGallery from "./components/ImageGallery";
// import ProductTitlePrice from "./components/ProductTitlePrice";
// import QuantitySelector from "./components/QuantitySelector";
// import AddToCartSection from "./components/AddToCartSection";
// import PincodeChecker from "./components/PincodeChecker";
// import HighlightsSection from "./components/HighlightsSection";
// import DescriptionTabs from "./components/DescriptionTabs";
// import ReviewsSection from "./components/ReviewsSection";
// import RelatedProducts from "./components/RelatedProducts";
// import SizeSelector from "./components/SizeSelector";

// const ProductDetails = () => {
//   const { productSlug } = useParams();
//   const product = allProducts.find((p) => p.slug === productSlug);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null); // ✅ add this

//   if (!product) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold text-gray-600">
//         Product Not Found 😢
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-neutral-50 min-h-screen pb-20">
//       {/* Breadcrumbs */}
//       <Breadcrumbs product={product} />

//       {/* MAIN CONTENT — NO VERTICAL GAP */}
//       <div
//         className="
//           max-w-[1400px] mx-auto px-4 lg:px-8
//           grid grid-cols-1 lg:grid-cols-2
//           gap-y-0 gap-x-10
//         "
//       >
//         {/* LEFT — Gallery */}
//         <ImageGallery product={product} />

//         {/* RIGHT — Content */}
//         <div className="flex flex-col gap-3 mt-0">
//           <ProductTitlePrice product={product} />
//           {/* Size Selector */}
//           <SizeSelector
//             sizes={["XS", "S", "M", "L", "XL", "2XL"]}
//             showGuide={true}
//             selected={selectedSize} // ✅ added
//             onSelect={setSelectedSize} // ✅ added
//           />

//           <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//           <AddToCartSection
//             product={product}
//             quantity={quantity}
//             selectedSize={selectedSize} // ✅ added
//           />

//           <PincodeChecker />
//         </div>
//       </div>
//       <div className="max-w-[1400px] mx-auto px-4 lg:px-8 gap-y-0 gap-x-10">
//         {/* Highlights */}
//         <HighlightsSection product={product} />

//         {/* Tabs */}
//         <DescriptionTabs product={product} />

//         {/* Reviews */}
//         <ReviewsSection product={product} />

//         {/* Related */}
//         <RelatedProducts currentProduct={product} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/axios"; // <-- axios instance

// import Breadcrumbs from "./components/Breadcrumbs";
// import ImageGallery from "./components/ImageGallery";
// import ProductTitlePrice from "./components/ProductTitlePrice";
// import QuantitySelector from "./components/QuantitySelector";
// import AddToCartSection from "./components/AddToCartSection";
// import PincodeChecker from "./components/PincodeChecker";
// import HighlightsSection from "./components/HighlightsSection";
// import DescriptionTabs from "./components/DescriptionTabs";
// import ReviewsSection from "./components/ReviewsSection";
// import RelatedProducts from "./components/RelatedProducts";
// import SizeSelector from "./components/SizeSelector";

// const ProductDetails = () => {
//   const { productSlug } = useParams();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   console.log(productSlug);

//   // 🔥 Fetch product by slug
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await api.get(`/products/${productSlug}/`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load product");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productSlug]);

//   // Loading UI
//   if (loading) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold">
//         Loading product...
//       </div>
//     );
//   }

//   // Error UI
//   if (error || !product) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold text-red-500">
//         {error || "Product Not Found 😢"}
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-neutral-50 min-h-screen pb-20">
//       {/* Breadcrumbs */}
//       <Breadcrumbs product={product} />

//       {/* MAIN CONTENT */}
//       <div
//         className="
//           max-w-[1400px] mx-auto px-4 lg:px-8
//           grid grid-cols-1 lg:grid-cols-2
//           gap-y-0 gap-x-10
//         "
//       >
//         {/* LEFT — Gallery */}
//         <ImageGallery product={product} />

//         {/* RIGHT — Content */}
//         <div className="flex flex-col gap-3 mt-0">
//           <ProductTitlePrice product={product} />

//           {/* Size Selector → using backend sizes */}
//           <SizeSelector
//             sizes={product.size.split(",")} // Example: "M,L,XL"
//             showGuide={true}
//             selected={selectedSize}
//             onSelect={setSelectedSize}
//           />

//           <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

//           <AddToCartSection
//             product={product}
//             quantity={quantity}
//             selectedSize={selectedSize}
//           />

//           <PincodeChecker />
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-4 lg:px-8 gap-y-0 gap-x-10">
//         <HighlightsSection product={product} />

//         <DescriptionTabs product={product} />

//         <ReviewsSection product={product} />

//         {/* 🎯 Later you can fetch related products dynamically */}
//         <RelatedProducts currentProduct={product} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

import Breadcrumbs from "./components/Breadcrumbs";
import ImageGallery from "./components/ImageGallery";
import ProductTitlePrice from "./components/ProductTitlePrice";
import QuantitySelector from "./components/QuantitySelector";
import AddToCartSection from "./components/AddToCartSection";
import PincodeChecker from "./components/PincodeChecker";
import HighlightsSection from "./components/HighlightsSection";
import DescriptionTabs from "./components/DescriptionTabs";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProducts from "./components/RelatedProducts";
import SizeSelector from "./components/SizeSelector";

import ProductNotFound from "../NotFound/ProductNotFound";

const ProductDetails = () => {
  const { productSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${productSlug}/`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productSlug]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
          SAPTRANGI
        </h1>

        <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
          <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-red-500">
        <ProductNotFound />
      </div>
    );
  }
  console.log(product);
  return (
    <div className="w-full bg-neutral-50 min-h-screen pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs product={product} />

      {/* MAIN CONTENT */}
      <div
        className="
          max-w-[1550px] mx-auto 
          px-3 sm:px-4 md:px-4 lg:px-10
          grid grid-cols-1 lg:grid-cols-2
          gap-y-0 gap-x-10
        "
      >
        {/* LEFT — Gallery */}
        <ImageGallery product={product} />

        {/* RIGHT — Content */}
        <div className="flex flex-col gap-3 mt-0">
          <ProductTitlePrice product={product} />

          {/* Size Selector */}
          <SizeSelector
            sizes={product.size.split(",")}
            showGuide={true}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            stock={product.quantity}
          />

          <AddToCartSection
            product={product}
            quantity={quantity}
            selectedSize={selectedSize}
            availableSizes={product.size
              .split(",")
              .map((s) => s.trim().toUpperCase())}
          />

          <PincodeChecker />
        </div>
      </div>

      {/*  SECOND BLOCK */}
      <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 gap-y-0 gap-x-10">
        <HighlightsSection product={product} />
        <DescriptionTabs product={product} />
        <ReviewsSection product={product} />
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
