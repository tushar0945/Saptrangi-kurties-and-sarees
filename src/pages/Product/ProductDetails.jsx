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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data/allProducts";
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

const ProductDetails = () => {
  const { productSlug } = useParams();
  const product = allProducts.find((p) => p.slug === productSlug);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // ✅ add this

  if (!product) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-gray-600">
        Product Not Found 😢
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-50 min-h-screen pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs product={product} />

      {/* MAIN CONTENT — NO VERTICAL GAP */}
      <div
        className="
          max-w-[1400px] mx-auto px-4 lg:px-8
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
            sizes={["XS", "S", "M", "L", "XL", "2XL"]}
            showGuide={true}
            selected={selectedSize} // ✅ added
            onSelect={setSelectedSize} // ✅ added
          />

          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <AddToCartSection
            product={product}
            quantity={quantity}
            selectedSize={selectedSize} // ✅ added
          />

          <PincodeChecker />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 gap-y-0 gap-x-10">
        {/* Highlights */}
        <HighlightsSection product={product} />

        {/* Tabs */}
        <DescriptionTabs product={product} />

        {/* Reviews */}
        <ReviewsSection product={product} />

        {/* Related */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

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
