// // import { useState } from "react";
// // import { FiUploadCloud } from "react-icons/fi";

// // const AddProduct = () => {
// //   const [imagePreview, setImagePreview] = useState(null);

// //   // Image handler
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) setImagePreview(URL.createObjectURL(file));
// //   };

// //   return (
// //     <div className="space-y-8">
// //       {/* Header */}
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
// //       </div>

// //       {/* Form Card */}
// //       <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
// //         <form className="space-y-6">
// //           {/* Product Name */}
// //           <div>
// //             <label className="font-medium text-gray-700">Product Name</label>
// //             <input
// //               type="text"
// //               placeholder="Enter product name"
// //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
// //             />
// //           </div>

// //           {/* Description */}
// //           <div>
// //             <label className="font-medium text-gray-700">Description</label>
// //             <textarea
// //               placeholder="Enter product description"
// //               rows="4"
// //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
// //             ></textarea>
// //           </div>

// //           {/* Price & Stock */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             <div>
// //               <label className="font-medium text-gray-700">Price (₹)</label>
// //               <input
// //                 type="number"
// //                 placeholder="Price"
// //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium text-gray-700">
// //                 Sale Price (₹)
// //               </label>
// //               <input
// //                 type="number"
// //                 placeholder="Sale price (optional)"
// //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium text-gray-700">Stock</label>
// //               <input
// //                 type="number"
// //                 placeholder="Available quantity"
// //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //             </div>
// //           </div>

// //           {/* Category selector */}
// //           <div>
// //             <label className="font-medium text-gray-700">Category</label>
// //             <select className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white">
// //               <option value="">Select Category</option>
// //               <option>Fashion</option>
// //               <option>Electronics</option>
// //               <option>Home Decor</option>
// //               <option>Beauty</option>
// //             </select>
// //           </div>

// //           {/* Tags */}
// //           <div>
// //             <label className="font-medium text-gray-700">Tags</label>
// //             <input
// //               type="text"
// //               placeholder="e.g. summer, trending, bestseller"
// //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             <p className="text-sm text-gray-500 mt-1">
// //               Separate tags with commas.
// //             </p>
// //           </div>

// //           {/* Image Upload */}
// //           <div>
// //             <label className="font-medium text-gray-700">Product Image</label>

// //             <div className="mt-3 p-5 border-2 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
// //               <label className="flex flex-col items-center">
// //                 <FiUploadCloud size={38} className="text-gray-500" />
// //                 <p className="mt-2 text-gray-600">Click to upload image</p>
// //                 <input
// //                   type="file"
// //                   className="hidden"
// //                   onChange={handleImageChange}
// //                 />
// //               </label>
// //             </div>

// //             {imagePreview && (
// //               <div className="mt-4">
// //                 <img
// //                   src={imagePreview}
// //                   alt="Preview"
// //                   className="w-40 h-40 rounded-xl object-cover shadow-md"
// //                 />
// //               </div>
// //             )}
// //           </div>

// //           {/* Status */}
// //           <div>
// //             <label className="font-medium text-gray-700">Status</label>

// //             <select className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white">
// //               <option value="active">Active</option>
// //               <option value="inactive">Inactive</option>
// //             </select>
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Add Product
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// import { useState } from "react";
// import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// const AddProduct = () => {
//   // ------- STATES -------
//   const [mainImage, setMainImage] = useState(null);
//   const [hoverImage, setHoverImage] = useState(null);
//   const [extraImages, setExtraImages] = useState([]);

//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [stock, setStock] = useState({});
//   const [highlights, setHighlights] = useState([{ label: "", value: "" }]);
//   const [tags, setTags] = useState([]);
//   const [tagInput, setTagInput] = useState("");
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   // ------- IMAGE HANDLERS -------
//   const handleMainImage = (e) => {
//     setMainImage(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleHoverImage = (e) => {
//     setHoverImage(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleExtraImages = (e) => {
//     const files = Array.from(e.target.files);
//     const previews = files.map((f) => URL.createObjectURL(f));
//     setExtraImages([...extraImages, ...previews]);
//   };

//   // ------- SIZE HANDLER -------
//   const toggleSize = (size) => {
//     let updated = selectedSizes.includes(size)
//       ? selectedSizes.filter((s) => s !== size)
//       : [...selectedSizes, size];

//     setSelectedSizes(updated);

//     // Initialize stock for selected size
//     if (!stock[size]) {
//       setStock({ ...stock, [size]: 0 });
//     }
//   };

//   const updateStock = (size, value) => {
//     setStock({ ...stock, [size]: value });
//   };

//   // ------- HIGHLIGHTS HANDLER -------
//   const addHighlight = () => {
//     setHighlights([...highlights, { label: "", value: "" }]);
//   };

//   const updateHighlight = (index, field, value) => {
//     const updated = [...highlights];
//     updated[index][field] = value;
//     setHighlights(updated);
//   };

//   const removeHighlight = (index) => {
//     setHighlights(highlights.filter((_, idx) => idx !== index));
//   };

//   // ------- TAGS -------
//   const addTag = () => {
//     if (tagInput.trim() !== "") {
//       setTags([...tags, tagInput.trim()]);
//       setTagInput("");
//     }
//   };

//   const removeTag = (tag) => {
//     setTags(tags.filter((t) => t !== tag));
//   };

//   // ------- RELATED PRODUCTS -------
//   const addRelated = () => {
//     if (tagInput.trim() !== "") {
//       setRelatedProducts([...relatedProducts, tagInput.trim()]);
//       setTagInput("");
//     }
//   };

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

//       {/* FORM */}
//       <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
//         {/* Title */}
//         <div>
//           <label className="font-medium text-gray-700">Product Title</label>
//           <input
//             type="text"
//             placeholder="Peach Kurti"
//             className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Category Slug */}
//         <div className="mt-5">
//           <label className="font-medium text-gray-700">Category Slug</label>
//           <input
//             type="text"
//             placeholder="designer-kurtis"
//             className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* PRICING */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           <div>
//             <label className="font-medium text-gray-700">Price (₹)</label>
//             <input
//               type="number"
//               placeholder="1299"
//               className="w-full mt-2 px-4 py-3 border rounded-xl"
//             />
//           </div>

//           <div>
//             <label className="font-medium text-gray-700">Old Price (₹)</label>
//             <input
//               type="number"
//               placeholder="1999"
//               className="w-full mt-2 px-4 py-3 border rounded-xl"
//             />
//           </div>
//         </div>

//         {/* RATING */}
//         <div className="mt-5">
//           <label className="font-medium text-gray-700">Rating</label>
//           <input
//             type="number"
//             step="0.1"
//             placeholder="4.6"
//             className="w-full mt-2 px-4 py-3 border rounded-xl"
//           />
//         </div>

//         {/* IMAGES SECTION */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Images</h2>

//           {/* Main Image */}
//           <div>
//             <label>Main Image</label>
//             <input type="file" className="mt-2" onChange={handleMainImage} />
//             {mainImage && (
//               <img
//                 src={mainImage}
//                 className="w-32 h-32 mt-3 rounded-xl object-cover"
//               />
//             )}
//           </div>

//           {/* Hover Image */}
//           <div className="mt-4">
//             <label>Hover Image</label>
//             <input type="file" className="mt-2" onChange={handleHoverImage} />
//             {hoverImage && (
//               <img
//                 src={hoverImage}
//                 className="w-32 h-32 mt-3 rounded-xl object-cover"
//               />
//             )}
//           </div>

//           {/* Extra Images */}
//           <div className="mt-4">
//             <label>Extra Images</label>
//             <input
//               type="file"
//               multiple
//               className="mt-2"
//               onChange={handleExtraImages}
//             />

//             <div className="flex gap-3 mt-3">
//               {extraImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   className="w-20 h-20 rounded-xl object-cover border"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* SIZES & STOCK */}
//         <div className="mt-10">
//           <h2 className="text-xl font-semibold mb-4">Sizes & Stock</h2>

//           <div className="grid grid-cols-3 gap-4">
//             {ALL_SIZES.map((size) => (
//               <div key={size} className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   onChange={() => toggleSize(size)}
//                   checked={selectedSizes.includes(size)}
//                 />
//                 <span>{size}</span>
//               </div>
//             ))}
//           </div>

//           {/* STOCK FIELDS */}
//           {selectedSizes.length > 0 && (
//             <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-6">
//               {selectedSizes.map((size) => (
//                 <div key={size}>
//                   <label>{size} Stock</label>
//                   <input
//                     type="number"
//                     className="w-full mt-2 px-4 py-3 border rounded-xl"
//                     value={stock[size] || ""}
//                     onChange={(e) => updateStock(size, e.target.value)}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* HIGHLIGHTS */}
//         <div className="mt-10">
//           <h2 className="text-xl font-semibold mb-4">Highlights</h2>

//           {highlights.map((item, index) => (
//             <div className="grid grid-cols-2 gap-4 mb-4" key={index}>
//               <input
//                 type="text"
//                 placeholder="e.g. Fabric"
//                 className="px-4 py-3 border rounded-xl"
//                 value={item.label}
//                 onChange={(e) =>
//                   updateHighlight(index, "label", e.target.value)
//                 }
//               />

//               <input
//                 type="text"
//                 placeholder="e.g. Pure Cotton"
//                 className="px-4 py-3 border rounded-xl"
//                 value={item.value}
//                 onChange={(e) =>
//                   updateHighlight(index, "value", e.target.value)
//                 }
//               />

//               <button
//                 className="text-red-500"
//                 onClick={() => removeHighlight(index)}
//               >
//                 <FiTrash2 />
//               </button>
//             </div>
//           ))}

//           <button
//             className="text-blue-600 flex items-center gap-2 mt-2"
//             onClick={addHighlight}
//           >
//             <FiPlus /> Add Highlight
//           </button>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="mt-8">
//           <label>Description</label>
//           <textarea
//             rows="4"
//             className="w-full mt-2 px-4 py-3 border rounded-xl"
//             placeholder="This peach kurti is crafted from breathable cotton..."
//           ></textarea>
//         </div>

//         {/* DETAILS */}
//         <div className="mt-8">
//           <label>Details</label>
//           <textarea
//             rows="4"
//             className="w-full mt-2 px-4 py-3 border rounded-xl"
//             placeholder="• Fabric: 100% Cotton..."
//           ></textarea>
//         </div>

//         {/* RETURN POLICY */}
//         <div className="mt-8">
//           <label>Return Policy</label>
//           <input
//             type="text"
//             placeholder="7-day return or exchange"
//             className="w-full mt-2 px-4 py-3 border rounded-xl"
//           />
//         </div>

//         {/* TAGS */}
//         <div className="mt-10">
//           <h2 className="text-xl font-semibold mb-4">Tags</h2>

//           <div className="flex gap-3">
//             <input
//               type="text"
//               placeholder="Comfort"
//               className="px-4 py-3 border rounded-xl flex-1"
//               value={tagInput}
//               onChange={(e) => setTagInput(e.target.value)}
//             />

//             <button
//               className="px-4 py-3 bg-blue-600 text-white rounded-xl"
//               onClick={addTag}
//               type="button"
//             >
//               Add
//             </button>
//           </div>

//           <div className="flex gap-3 mt-3 flex-wrap">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full flex items-center gap-2"
//               >
//                 {tag}
//                 <button onClick={() => removeTag(tag)} className="text-red-600">
//                   ✖
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* RELATED PRODUCTS */}
//         <div className="mt-10">
//           <h2 className="text-xl font-semibold mb-4">Related Products</h2>

//           <div className="flex gap-3">
//             <input
//               type="text"
//               placeholder="grey-kurti"
//               className="px-4 py-3 border rounded-xl flex-1"
//               value={tagInput}
//               onChange={(e) => setTagInput(e.target.value)}
//             />

//             <button
//               className="px-4 py-3 bg-teal-600 text-white rounded-xl"
//               onClick={addRelated}
//               type="button"
//             >
//               Add
//             </button>
//           </div>

//           <div className="flex gap-3 mt-3 flex-wrap">
//             {relatedProducts.map((slug) => (
//               <span
//                 key={slug}
//                 className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full flex items-center gap-2"
//               >
//                 {slug}
//                 <button
//                   onClick={() =>
//                     setRelatedProducts(
//                       relatedProducts.filter((p) => p !== slug)
//                     )
//                   }
//                   className="text-red-600"
//                 >
//                   ✖
//                 </button>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* SUBMIT BUTTON */}
//         <button className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition">
//           Save Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import { useState } from "react";
import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

const AddProduct = () => {
  const [mainImage, setMainImage] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [stock, setStock] = useState({});
  const [highlights, setHighlights] = useState([{ label: "", value: "" }]);

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedInput, setRelatedInput] = useState("");

  const handleMainImage = (e) => {
    setMainImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleHoverImage = (e) => {
    setHoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleExtraImages = (e) => {
    const files = [...e.target.files];
    const previews = files.map((file) => URL.createObjectURL(file));
    setExtraImages([...extraImages, ...previews]);
  };

  const toggleSize = (size) => {
    let updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updated);

    if (!stock[size]) {
      setStock({ ...stock, [size]: 0 });
    }
  };

  const updateHighlight = (index, field, value) => {
    let updated = [...highlights];
    updated[index][field] = value;
    setHighlights(updated);
  };

  const addHighlight = () => {
    setHighlights([...highlights, { label: "", value: "" }]);
  };

  const removeHighlight = (index) => {
    setHighlights(highlights.filter((_, idx) => idx !== index));
  };

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const addRelated = () => {
    if (relatedInput.trim() !== "") {
      setRelatedProducts([...relatedProducts, relatedInput.trim()]);
      setRelatedInput("");
    }
  };

  const removeRelated = (slug) => {
    setRelatedProducts(relatedProducts.filter((r) => r !== slug));
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

      {/* MAIN CARD */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
        {/* --- BASIC INFO --- */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500 text-gray-800">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-700 font-medium">Product Title</label>
              <input
                type="text"
                placeholder="Peach Kurti"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Category Slug</label>
              <input
                type="text"
                placeholder="designer-kurtis"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- PRICING --- */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500 text-gray-800">
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="text-gray-700 font-medium">Price (₹)</label>
              <input
                type="number"
                placeholder="1299"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Old Price (₹)</label>
              <input
                type="number"
                placeholder="1999"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Rating</label>
              <input
                type="number"
                step="0.1"
                placeholder="4.6"
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* --- IMAGES --- */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500 text-gray-800">
            Product Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Image */}
            <div>
              <label className="font-medium text-gray-700">Main Image</label>
              <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <label className="flex flex-col items-center">
                  <FiUploadCloud className="text-gray-500" size={32} />
                  <p className="text-gray-600 mt-1 text-sm">
                    Upload main image
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleMainImage}
                  />
                </label>
              </div>
              {mainImage && (
                <img
                  src={mainImage}
                  className="w-32 h-32 rounded-xl mt-3 object-cover shadow"
                />
              )}
            </div>

            {/* Hover Image */}
            <div>
              <label className="font-medium text-gray-700">Hover Image</label>
              <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <label className="flex flex-col items-center">
                  <FiUploadCloud className="text-gray-500" size={32} />
                  <p className="text-gray-600 mt-1 text-sm">
                    Upload hover image
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleHoverImage}
                  />
                </label>
              </div>
              {hoverImage && (
                <img
                  src={hoverImage}
                  className="w-32 h-32 rounded-xl mt-3 object-cover shadow"
                />
              )}
            </div>
          </div>

          {/* Extra Images */}
          <div>
            <label className="font-medium text-gray-700">Extra Images</label>
            <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <label className="flex flex-col items-center">
                <FiUploadCloud className="text-gray-500" size={32} />
                <p className="text-gray-600 mt-1 text-sm">
                  Upload extra images
                </p>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleExtraImages}
                />
              </label>
            </div>

            {/* Preview */}
            <div className="flex gap-3 mt-4 flex-wrap">
              {extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-20 h-20 rounded-xl object-cover border shadow"
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- SIZES & STOCK --- */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-orange-500 text-gray-800">
            Sizes & Stock
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {ALL_SIZES.map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => toggleSize(size)}
                />
                <span>{size}</span>
              </label>
            ))}
          </div>

          {/* Stock fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedSizes.map((size) => (
              <div key={size}>
                <label className="text-gray-700">{size} Stock</label>
                <input
                  type="number"
                  className="mt-2 w-full px-4 py-3 border rounded-xl"
                  value={stock[size] || ""}
                  onChange={(e) => updateStock(size, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- HIGHLIGHTS --- */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-red-500 text-gray-800">
            Highlights
          </h2>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <input
                  type="text"
                  placeholder="Label (e.g., Fabric)"
                  value={item.label}
                  onChange={(e) =>
                    updateHighlight(index, "label", e.target.value)
                  }
                  className="px-4 py-3 border rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Value (e.g., Pure Cotton)"
                  value={item.value}
                  onChange={(e) =>
                    updateHighlight(index, "value", e.target.value)
                  }
                  className="px-4 py-3 border rounded-xl"
                />

                <button
                  className="px-4 py-3 text-red-500"
                  onClick={() => removeHighlight(index)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addHighlight}
            className="flex items-center gap-2 text-blue-600 font-medium"
          >
            <FiPlus /> Add Highlight
          </button>
        </div>

        {/* --- DESCRIPTION --- */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-400 text-gray-800">
            Description
          </h2>
          <textarea
            rows="4"
            placeholder="This peach kurti is crafted from breathable cotton..."
            className="w-full px-4 py-3 border rounded-xl"
          ></textarea>
        </div>

        {/* --- DETAILS --- */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-400 text-gray-800">
            Details
          </h2>
          <textarea
            rows="4"
            placeholder="• Fabric: 100% Cotton..."
            className="w-full px-4 py-3 border rounded-xl"
          ></textarea>
        </div>

        {/* --- RETURN POLICY --- */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-400 text-gray-800">
            Return Policy
          </h2>
          <input
            type="text"
            placeholder="7-day return or exchange"
            className="w-full px-4 py-3 border rounded-xl"
          />
        </div>

        {/* --- TAGS --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-green-500 text-gray-800">
            Tags
          </h2>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Comfort"
              className="flex-1 px-4 py-3 border rounded-xl"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button
              onClick={addTag}
              className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow"
            >
              Add
            </button>
          </div>

          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
              >
                {tag}
                <button onClick={() => removeTag(tag)} className="text-red-500">
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-yellow-500 text-gray-800">
            Related Products
          </h2>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="grey-kurti"
              className="flex-1 px-4 py-3 border rounded-xl"
              value={relatedInput}
              onChange={(e) => setRelatedInput(e.target.value)}
            />
            <button
              onClick={addRelated}
              className="px-5 py-3 bg-teal-600 text-white rounded-xl shadow"
            >
              Add
            </button>
          </div>

          <div className="flex gap-3 flex-wrap">
            {relatedProducts.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full flex items-center gap-2"
              >
                {item}
                <button
                  onClick={() => removeRelated(item)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* --- SUBMIT BUTTON --- */}
        <button className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
