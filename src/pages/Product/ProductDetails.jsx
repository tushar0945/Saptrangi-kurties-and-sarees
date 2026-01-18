// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/axios";

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
// import ShareButton from "./components/ShareButton";
// import DeliveryEstimate from "./components/DeliveryEstimate";

// import ProductNotFound from "../NotFound/ProductNotFound";

// const ProductDetails = () => {
//   const { productSlug } = useParams();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await api.get(`/products/details/${productSlug}/`);
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

//   if (loading) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
//         <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
//           SAAJNIKA
//         </h1>

//         <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
//           <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="p-10 text-center text-xl font-semibold text-red-500">
//         <ProductNotFound />
//       </div>
//     );
//   }
//   // console.log(product);
//   return (
//     <div className="w-full bg-neutral-50 min-h-screen pb-20">
//       {/* Breadcrumbs */}
//       <Breadcrumbs product={product} />

//       {/* MAIN CONTENT */}
//       <div
//         className="
//           max-w-[1550px] mx-auto
//           px-3 sm:px-4 md:px-4 lg:px-10
//           grid grid-cols-1 lg:grid-cols-2
//           gap-y-0 gap-x-10
//         "
//       >
//         {/* LEFT — Gallery */}
//         <ImageGallery product={product} />

//         {/* RIGHT — Content */}
//         <div className="flex flex-col gap-3 mt-0">
//           <ProductTitlePrice product={product} />
//           {/* <ShareButton product={product} /> */}

//           {/* Size Selector */}
//           <SizeSelector
//             sizes={product.size.split(",")}
//             showGuide={true}
//             selected={selectedSize}
//             onSelect={setSelectedSize}
//           />

//           <QuantitySelector
//             quantity={quantity}
//             setQuantity={setQuantity}
//             stock={product.quantity}
//           />

//           <AddToCartSection
//             product={product}
//             quantity={quantity}
//             selectedSize={selectedSize}
//             availableSizes={product.size
//               .split(",")
//               .map((s) => s.trim().toUpperCase())}
//           />

//           <PincodeChecker />
//         </div>
//       </div>

//       {/*  SECOND BLOCK */}
//       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 gap-y-0 gap-x-10">
//         <HighlightsSection product={product} />
//         <DescriptionTabs product={product} />
//         <ReviewsSection product={product} />
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
import DeliveryEstimate from "./components/DeliveryEstimate";

import ProductNotFound from "../NotFound/ProductNotFound";

const ProductDetails = () => {
  const { productSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/details/${productSlug}/`);
        console.log(res);
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

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
          SAAJNIKA
        </h1>

        <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
          <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]" />
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error || !product) {
    return (
      <div className="p-10 text-center">
        <ProductNotFound />
      </div>
    );
  }

  /* ================= UI ================= */
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
          gap-x-10
        "
      >
        {/* LEFT — IMAGE GALLERY */}
        <ImageGallery product={product} />

        {/* RIGHT — PRODUCT DETAILS */}
        <div className="flex flex-col gap-4">
          <ProductTitlePrice product={product} />

          {/* SIZE SELECTOR */}
          <SizeSelector
            sizes={product.size.split(",")}
            showGuide={true}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          {/* QUANTITY */}
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            stock={product.quantity}
          />

          {/* ADD TO CART */}
          <AddToCartSection
            product={product}
            quantity={quantity}
            selectedSize={selectedSize}
            availableSizes={product.size
              .split(",")
              .map((s) => s.trim().toUpperCase())}
          />

          {/* 🚚 DELIVERY ESTIMATE (NEW) */}
          <DeliveryEstimate minDays={3} maxDays={6} />

          {/* PINCODE CHECK */}
          <PincodeChecker />
        </div>
      </div>

      {/* SECOND BLOCK */}
      <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
        <HighlightsSection product={product} />
        <DescriptionTabs product={product} />
        <ReviewsSection product={product} />
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
