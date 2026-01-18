// // // // // import { useState } from "react";
// // // // // import { FiUploadCloud } from "react-icons/fi";

// // // // // const AddProduct = () => {
// // // // //   const [imagePreview, setImagePreview] = useState(null);

// // // // //   // Image handler
// // // // //   const handleImageChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) setImagePreview(URL.createObjectURL(file));
// // // // //   };

// // // // //   return (
// // // // //     <div className="space-y-8">
// // // // //       {/* Header */}
// // // // //       <div className="flex justify-between items-center">
// // // // //         <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
// // // // //       </div>

// // // // //       {/* Form Card */}
// // // // //       <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
// // // // //         <form className="space-y-6">
// // // // //           {/* Product Name */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Product Name</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Enter product name"
// // // // //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Description */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Description</label>
// // // // //             <textarea
// // // // //               placeholder="Enter product description"
// // // // //               rows="4"
// // // // //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
// // // // //             ></textarea>
// // // // //           </div>

// // // // //           {/* Price & Stock */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //             <div>
// // // // //               <label className="font-medium text-gray-700">Price (₹)</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 placeholder="Price"
// // // // //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// // // // //               />
// // // // //             </div>

// // // // //             <div>
// // // // //               <label className="font-medium text-gray-700">
// // // // //                 Sale Price (₹)
// // // // //               </label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 placeholder="Sale price (optional)"
// // // // //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// // // // //               />
// // // // //             </div>

// // // // //             <div>
// // // // //               <label className="font-medium text-gray-700">Stock</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 placeholder="Available quantity"
// // // // //                 className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Category selector */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Category</label>
// // // // //             <select className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white">
// // // // //               <option value="">Select Category</option>
// // // // //               <option>Fashion</option>
// // // // //               <option>Electronics</option>
// // // // //               <option>Home Decor</option>
// // // // //               <option>Beauty</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           {/* Tags */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Tags</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="e.g. summer, trending, bestseller"
// // // // //               className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
// // // // //             />
// // // // //             <p className="text-sm text-gray-500 mt-1">
// // // // //               Separate tags with commas.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Image Upload */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Product Image</label>

// // // // //             <div className="mt-3 p-5 border-2 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
// // // // //               <label className="flex flex-col items-center">
// // // // //                 <FiUploadCloud size={38} className="text-gray-500" />
// // // // //                 <p className="mt-2 text-gray-600">Click to upload image</p>
// // // // //                 <input
// // // // //                   type="file"
// // // // //                   className="hidden"
// // // // //                   onChange={handleImageChange}
// // // // //                 />
// // // // //               </label>
// // // // //             </div>

// // // // //             {imagePreview && (
// // // // //               <div className="mt-4">
// // // // //                 <img
// // // // //                   src={imagePreview}
// // // // //                   alt="Preview"
// // // // //                   className="w-40 h-40 rounded-xl object-cover shadow-md"
// // // // //                 />
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Status */}
// // // // //           <div>
// // // // //             <label className="font-medium text-gray-700">Status</label>

// // // // //             <select className="w-full mt-2 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white">
// // // // //               <option value="active">Active</option>
// // // // //               <option value="inactive">Inactive</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           {/* Submit Button */}
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
// // // // //           >
// // // // //             Add Product
// // // // //           </button>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddProduct;

// // // // import { useState } from "react";
// // // // import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// // // // const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// // // // const AddProduct = () => {
// // // //   // ------- STATES -------
// // // //   const [mainImage, setMainImage] = useState(null);
// // // //   const [hoverImage, setHoverImage] = useState(null);
// // // //   const [extraImages, setExtraImages] = useState([]);

// // // //   const [selectedSizes, setSelectedSizes] = useState([]);
// // // //   const [stock, setStock] = useState({});
// // // //   const [highlights, setHighlights] = useState([{ label: "", value: "" }]);
// // // //   const [tags, setTags] = useState([]);
// // // //   const [tagInput, setTagInput] = useState("");
// // // //   const [relatedProducts, setRelatedProducts] = useState([]);

// // // //   // ------- IMAGE HANDLERS -------
// // // //   const handleMainImage = (e) => {
// // // //     setMainImage(URL.createObjectURL(e.target.files[0]));
// // // //   };

// // // //   const handleHoverImage = (e) => {
// // // //     setHoverImage(URL.createObjectURL(e.target.files[0]));
// // // //   };

// // // //   const handleExtraImages = (e) => {
// // // //     const files = Array.from(e.target.files);
// // // //     const previews = files.map((f) => URL.createObjectURL(f));
// // // //     setExtraImages([...extraImages, ...previews]);
// // // //   };

// // // //   // ------- SIZE HANDLER -------
// // // //   const toggleSize = (size) => {
// // // //     let updated = selectedSizes.includes(size)
// // // //       ? selectedSizes.filter((s) => s !== size)
// // // //       : [...selectedSizes, size];

// // // //     setSelectedSizes(updated);

// // // //     // Initialize stock for selected size
// // // //     if (!stock[size]) {
// // // //       setStock({ ...stock, [size]: 0 });
// // // //     }
// // // //   };

// // // //   const updateStock = (size, value) => {
// // // //     setStock({ ...stock, [size]: value });
// // // //   };

// // // //   // ------- HIGHLIGHTS HANDLER -------
// // // //   const addHighlight = () => {
// // // //     setHighlights([...highlights, { label: "", value: "" }]);
// // // //   };

// // // //   const updateHighlight = (index, field, value) => {
// // // //     const updated = [...highlights];
// // // //     updated[index][field] = value;
// // // //     setHighlights(updated);
// // // //   };

// // // //   const removeHighlight = (index) => {
// // // //     setHighlights(highlights.filter((_, idx) => idx !== index));
// // // //   };

// // // //   // ------- TAGS -------
// // // //   const addTag = () => {
// // // //     if (tagInput.trim() !== "") {
// // // //       setTags([...tags, tagInput.trim()]);
// // // //       setTagInput("");
// // // //     }
// // // //   };

// // // //   const removeTag = (tag) => {
// // // //     setTags(tags.filter((t) => t !== tag));
// // // //   };

// // // //   // ------- RELATED PRODUCTS -------
// // // //   const addRelated = () => {
// // // //     if (tagInput.trim() !== "") {
// // // //       setRelatedProducts([...relatedProducts, tagInput.trim()]);
// // // //       setTagInput("");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="space-y-8">
// // // //       {/* Header */}
// // // //       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

// // // //       {/* FORM */}
// // // //       <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
// // // //         {/* Title */}
// // // //         <div>
// // // //           <label className="font-medium text-gray-700">Product Title</label>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Peach Kurti"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>

// // // //         {/* Category Slug */}
// // // //         <div className="mt-5">
// // // //           <label className="font-medium text-gray-700">Category Slug</label>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="designer-kurtis"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>

// // // //         {/* PRICING */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
// // // //           <div>
// // // //             <label className="font-medium text-gray-700">Price (₹)</label>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="1299"
// // // //               className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="font-medium text-gray-700">Old Price (₹)</label>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="1999"
// // // //               className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* RATING */}
// // // //         <div className="mt-5">
// // // //           <label className="font-medium text-gray-700">Rating</label>
// // // //           <input
// // // //             type="number"
// // // //             step="0.1"
// // // //             placeholder="4.6"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //           />
// // // //         </div>

// // // //         {/* IMAGES SECTION */}
// // // //         <div className="mt-8">
// // // //           <h2 className="text-xl font-semibold mb-4">Images</h2>

// // // //           {/* Main Image */}
// // // //           <div>
// // // //             <label>Main Image</label>
// // // //             <input type="file" className="mt-2" onChange={handleMainImage} />
// // // //             {mainImage && (
// // // //               <img
// // // //                 src={mainImage}
// // // //                 className="w-32 h-32 mt-3 rounded-xl object-cover"
// // // //               />
// // // //             )}
// // // //           </div>

// // // //           {/* Hover Image */}
// // // //           <div className="mt-4">
// // // //             <label>Hover Image</label>
// // // //             <input type="file" className="mt-2" onChange={handleHoverImage} />
// // // //             {hoverImage && (
// // // //               <img
// // // //                 src={hoverImage}
// // // //                 className="w-32 h-32 mt-3 rounded-xl object-cover"
// // // //               />
// // // //             )}
// // // //           </div>

// // // //           {/* Extra Images */}
// // // //           <div className="mt-4">
// // // //             <label>Extra Images</label>
// // // //             <input
// // // //               type="file"
// // // //               multiple
// // // //               className="mt-2"
// // // //               onChange={handleExtraImages}
// // // //             />

// // // //             <div className="flex gap-3 mt-3">
// // // //               {extraImages.map((img, index) => (
// // // //                 <img
// // // //                   key={index}
// // // //                   src={img}
// // // //                   className="w-20 h-20 rounded-xl object-cover border"
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* SIZES & STOCK */}
// // // //         <div className="mt-10">
// // // //           <h2 className="text-xl font-semibold mb-4">Sizes & Stock</h2>

// // // //           <div className="grid grid-cols-3 gap-4">
// // // //             {ALL_SIZES.map((size) => (
// // // //               <div key={size} className="flex items-center gap-3">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   onChange={() => toggleSize(size)}
// // // //                   checked={selectedSizes.includes(size)}
// // // //                 />
// // // //                 <span>{size}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* STOCK FIELDS */}
// // // //           {selectedSizes.length > 0 && (
// // // //             <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-6">
// // // //               {selectedSizes.map((size) => (
// // // //                 <div key={size}>
// // // //                   <label>{size} Stock</label>
// // // //                   <input
// // // //                     type="number"
// // // //                     className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //                     value={stock[size] || ""}
// // // //                     onChange={(e) => updateStock(size, e.target.value)}
// // // //                   />
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* HIGHLIGHTS */}
// // // //         <div className="mt-10">
// // // //           <h2 className="text-xl font-semibold mb-4">Highlights</h2>

// // // //           {highlights.map((item, index) => (
// // // //             <div className="grid grid-cols-2 gap-4 mb-4" key={index}>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="e.g. Fabric"
// // // //                 className="px-4 py-3 border rounded-xl"
// // // //                 value={item.label}
// // // //                 onChange={(e) =>
// // // //                   updateHighlight(index, "label", e.target.value)
// // // //                 }
// // // //               />

// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="e.g. Pure Cotton"
// // // //                 className="px-4 py-3 border rounded-xl"
// // // //                 value={item.value}
// // // //                 onChange={(e) =>
// // // //                   updateHighlight(index, "value", e.target.value)
// // // //                 }
// // // //               />

// // // //               <button
// // // //                 className="text-red-500"
// // // //                 onClick={() => removeHighlight(index)}
// // // //               >
// // // //                 <FiTrash2 />
// // // //               </button>
// // // //             </div>
// // // //           ))}

// // // //           <button
// // // //             className="text-blue-600 flex items-center gap-2 mt-2"
// // // //             onClick={addHighlight}
// // // //           >
// // // //             <FiPlus /> Add Highlight
// // // //           </button>
// // // //         </div>

// // // //         {/* DESCRIPTION */}
// // // //         <div className="mt-8">
// // // //           <label>Description</label>
// // // //           <textarea
// // // //             rows="4"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //             placeholder="This peach kurti is crafted from breathable cotton..."
// // // //           ></textarea>
// // // //         </div>

// // // //         {/* DETAILS */}
// // // //         <div className="mt-8">
// // // //           <label>Details</label>
// // // //           <textarea
// // // //             rows="4"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //             placeholder="• Fabric: 100% Cotton..."
// // // //           ></textarea>
// // // //         </div>

// // // //         {/* RETURN POLICY */}
// // // //         <div className="mt-8">
// // // //           <label>Return Policy</label>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="7-day return or exchange"
// // // //             className="w-full mt-2 px-4 py-3 border rounded-xl"
// // // //           />
// // // //         </div>

// // // //         {/* TAGS */}
// // // //         <div className="mt-10">
// // // //           <h2 className="text-xl font-semibold mb-4">Tags</h2>

// // // //           <div className="flex gap-3">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Comfort"
// // // //               className="px-4 py-3 border rounded-xl flex-1"
// // // //               value={tagInput}
// // // //               onChange={(e) => setTagInput(e.target.value)}
// // // //             />

// // // //             <button
// // // //               className="px-4 py-3 bg-blue-600 text-white rounded-xl"
// // // //               onClick={addTag}
// // // //               type="button"
// // // //             >
// // // //               Add
// // // //             </button>
// // // //           </div>

// // // //           <div className="flex gap-3 mt-3 flex-wrap">
// // // //             {tags.map((tag) => (
// // // //               <span
// // // //                 key={tag}
// // // //                 className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full flex items-center gap-2"
// // // //               >
// // // //                 {tag}
// // // //                 <button onClick={() => removeTag(tag)} className="text-red-600">
// // // //                   ✖
// // // //                 </button>
// // // //               </span>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* RELATED PRODUCTS */}
// // // //         <div className="mt-10">
// // // //           <h2 className="text-xl font-semibold mb-4">Related Products</h2>

// // // //           <div className="flex gap-3">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="grey-kurti"
// // // //               className="px-4 py-3 border rounded-xl flex-1"
// // // //               value={tagInput}
// // // //               onChange={(e) => setTagInput(e.target.value)}
// // // //             />

// // // //             <button
// // // //               className="px-4 py-3 bg-teal-600 text-white rounded-xl"
// // // //               onClick={addRelated}
// // // //               type="button"
// // // //             >
// // // //               Add
// // // //             </button>
// // // //           </div>

// // // //           <div className="flex gap-3 mt-3 flex-wrap">
// // // //             {relatedProducts.map((slug) => (
// // // //               <span
// // // //                 key={slug}
// // // //                 className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full flex items-center gap-2"
// // // //               >
// // // //                 {slug}
// // // //                 <button
// // // //                   onClick={() =>
// // // //                     setRelatedProducts(
// // // //                       relatedProducts.filter((p) => p !== slug)
// // // //                     )
// // // //                   }
// // // //                   className="text-red-600"
// // // //                 >
// // // //                   ✖
// // // //                 </button>
// // // //               </span>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* SUBMIT BUTTON */}
// // // //         <button className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition">
// // // //           Save Product
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddProduct;

// // import { useState } from "react";
// // import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// // const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// // const AddProduct = () => {
// //   const [mainImage, setMainImage] = useState(null);
// //   const [hoverImage, setHoverImage] = useState(null);
// //   const [extraImages, setExtraImages] = useState([]);

// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [stock, setStock] = useState({});
// //   const [highlights, setHighlights] = useState([{ label: "", value: "" }]);

// //   const [tags, setTags] = useState([]);
// //   const [tagInput, setTagInput] = useState("");

// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [relatedInput, setRelatedInput] = useState("");

// //   const handleMainImage = (e) => {
// //     setMainImage(URL.createObjectURL(e.target.files[0]));
// //   };

// //   const handleHoverImage = (e) => {
// //     setHoverImage(URL.createObjectURL(e.target.files[0]));
// //   };

// //   const handleExtraImages = (e) => {
// //     const files = [...e.target.files];
// //     const previews = files.map((file) => URL.createObjectURL(file));
// //     setExtraImages([...extraImages, ...previews]);
// //   };

// //   const toggleSize = (size) => {
// //     let updated = selectedSizes.includes(size)
// //       ? selectedSizes.filter((s) => s !== size)
// //       : [...selectedSizes, size];

// //     setSelectedSizes(updated);

// //     if (!stock[size]) {
// //       setStock({ ...stock, [size]: 0 });
// //     }
// //   };

// //   const updateHighlight = (index, field, value) => {
// //     let updated = [...highlights];
// //     updated[index][field] = value;
// //     setHighlights(updated);
// //   };

// //   const addHighlight = () => {
// //     setHighlights([...highlights, { label: "", value: "" }]);
// //   };

// //   const removeHighlight = (index) => {
// //     setHighlights(highlights.filter((_, idx) => idx !== index));
// //   };

// //   const addTag = () => {
// //     if (tagInput.trim() !== "") {
// //       setTags([...tags, tagInput.trim()]);
// //       setTagInput("");
// //     }
// //   };

// //   const removeTag = (tag) => {
// //     setTags(tags.filter((t) => t !== tag));
// //   };

// //   const addRelated = () => {
// //     if (relatedInput.trim() !== "") {
// //       setRelatedProducts([...relatedProducts, relatedInput.trim()]);
// //       setRelatedInput("");
// //     }
// //   };

// //   const removeRelated = (slug) => {
// //     setRelatedProducts(relatedProducts.filter((r) => r !== slug));
// //   };

// //   return (
// //     <div className="space-y-10">
// //       {/* Header */}
// //       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

// //       {/* MAIN CARD */}
// //       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
// //         {/* --- BASIC INFO --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500 text-gray-800">
// //             Basic Information
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             <div>
// //               <label className="text-gray-700 font-medium">Product Title</label>
// //               <input
// //                 type="text"
// //                 placeholder="Peach Kurti"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-gray-700 font-medium">Category Slug</label>
// //               <input
// //                 type="text"
// //                 placeholder="designer-kurtis"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* --- PRICING --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500 text-gray-800">
// //             Pricing
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div>
// //               <label className="text-gray-700 font-medium">Price (₹)</label>
// //               <input
// //                 type="number"
// //                 placeholder="1299"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-gray-700 font-medium">Old Price (₹)</label>
// //               <input
// //                 type="number"
// //                 placeholder="1999"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-gray-700 font-medium">Rating</label>
// //               <input
// //                 type="number"
// //                 step="0.1"
// //                 placeholder="4.6"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* --- IMAGES --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500 text-gray-800">
// //             Product Images
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             {/* Main Image */}
// //             <div>
// //               <label className="font-medium text-gray-700">Main Image</label>
// //               <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
// //                 <label className="flex flex-col items-center">
// //                   <FiUploadCloud className="text-gray-500" size={32} />
// //                   <p className="text-gray-600 mt-1 text-sm">
// //                     Upload main image
// //                   </p>
// //                   <input
// //                     type="file"
// //                     className="hidden"
// //                     onChange={handleMainImage}
// //                   />
// //                 </label>
// //               </div>
// //               {mainImage && (
// //                 <img
// //                   src={mainImage}
// //                   className="w-32 h-32 rounded-xl mt-3 object-cover shadow"
// //                 />
// //               )}
// //             </div>

// //             {/* Hover Image */}
// //             <div>
// //               <label className="font-medium text-gray-700">Hover Image</label>
// //               <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
// //                 <label className="flex flex-col items-center">
// //                   <FiUploadCloud className="text-gray-500" size={32} />
// //                   <p className="text-gray-600 mt-1 text-sm">
// //                     Upload hover image
// //                   </p>
// //                   <input
// //                     type="file"
// //                     className="hidden"
// //                     onChange={handleHoverImage}
// //                   />
// //                 </label>
// //               </div>
// //               {hoverImage && (
// //                 <img
// //                   src={hoverImage}
// //                   className="w-32 h-32 rounded-xl mt-3 object-cover shadow"
// //                 />
// //               )}
// //             </div>
// //           </div>

// //           {/* Extra Images */}
// //           <div>
// //             <label className="font-medium text-gray-700">Extra Images</label>
// //             <div className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
// //               <label className="flex flex-col items-center">
// //                 <FiUploadCloud className="text-gray-500" size={32} />
// //                 <p className="text-gray-600 mt-1 text-sm">
// //                   Upload extra images
// //                 </p>
// //                 <input
// //                   type="file"
// //                   multiple
// //                   className="hidden"
// //                   onChange={handleExtraImages}
// //                 />
// //               </label>
// //             </div>

// //             {/* Preview */}
// //             <div className="flex gap-3 mt-4 flex-wrap">
// //               {extraImages.map((img, index) => (
// //                 <img
// //                   key={index}
// //                   src={img}
// //                   className="w-20 h-20 rounded-xl object-cover border shadow"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* --- SIZES & STOCK --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-orange-500 text-gray-800">
// //             Sizes & Stock
// //           </h2>

// //           <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
// //             {ALL_SIZES.map((size) => (
// //               <label
// //                 key={size}
// //                 className="flex items-center gap-2 cursor-pointer"
// //               >
// //                 <input
// //                   type="checkbox"
// //                   checked={selectedSizes.includes(size)}
// //                   onChange={() => toggleSize(size)}
// //                 />
// //                 <span>{size}</span>
// //               </label>
// //             ))}
// //           </div>

// //           {/* Stock fields */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {selectedSizes.map((size) => (
// //               <div key={size}>
// //                 <label className="text-gray-700">{size} Stock</label>
// //                 <input
// //                   type="number"
// //                   className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                   value={stock[size] || ""}
// //                   onChange={(e) => updateStock(size, e.target.value)}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* --- HIGHLIGHTS --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-red-500 text-gray-800">
// //             Highlights
// //           </h2>

// //           <div className="space-y-4">
// //             {highlights.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="grid grid-cols-1 md:grid-cols-3 gap-4"
// //               >
// //                 <input
// //                   type="text"
// //                   placeholder="Label (e.g., Fabric)"
// //                   value={item.label}
// //                   onChange={(e) =>
// //                     updateHighlight(index, "label", e.target.value)
// //                   }
// //                   className="px-4 py-3 border rounded-xl"
// //                 />

// //                 <input
// //                   type="text"
// //                   placeholder="Value (e.g., Pure Cotton)"
// //                   value={item.value}
// //                   onChange={(e) =>
// //                     updateHighlight(index, "value", e.target.value)
// //                   }
// //                   className="px-4 py-3 border rounded-xl"
// //                 />

// //                 <button
// //                   className="px-4 py-3 text-red-500"
// //                   onClick={() => removeHighlight(index)}
// //                 >
// //                   <FiTrash2 />
// //                 </button>
// //               </div>
// //             ))}
// //           </div>

// //           <button
// //             onClick={addHighlight}
// //             className="flex items-center gap-2 text-blue-600 font-medium"
// //           >
// //             <FiPlus /> Add Highlight
// //           </button>
// //         </div>

// //         {/* --- DESCRIPTION --- */}
// //         <div className="space-y-2">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-400 text-gray-800">
// //             Description
// //           </h2>
// //           <textarea
// //             rows="4"
// //             placeholder="This peach kurti is crafted from breathable cotton..."
// //             className="w-full px-4 py-3 border rounded-xl"
// //           ></textarea>
// //         </div>

// //         {/* --- DETAILS --- */}
// //         <div className="space-y-2">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-400 text-gray-800">
// //             Details
// //           </h2>
// //           <textarea
// //             rows="4"
// //             placeholder="• Fabric: 100% Cotton..."
// //             className="w-full px-4 py-3 border rounded-xl"
// //           ></textarea>
// //         </div>

// //         {/* --- RETURN POLICY --- */}
// //         <div className="space-y-2">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-400 text-gray-800">
// //             Return Policy
// //           </h2>
// //           <input
// //             type="text"
// //             placeholder="7-day return or exchange"
// //             className="w-full px-4 py-3 border rounded-xl"
// //           />
// //         </div>

// //         {/* --- TAGS --- */}
// //         <div className="space-y-4">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-green-500 text-gray-800">
// //             Tags
// //           </h2>

// //           <div className="flex gap-3">
// //             <input
// //               type="text"
// //               placeholder="Comfort"
// //               className="flex-1 px-4 py-3 border rounded-xl"
// //               value={tagInput}
// //               onChange={(e) => setTagInput(e.target.value)}
// //             />
// //             <button
// //               onClick={addTag}
// //               className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow"
// //             >
// //               Add
// //             </button>
// //           </div>

// //           <div className="flex gap-3 flex-wrap">
// //             {tags.map((tag) => (
// //               <span
// //                 key={tag}
// //                 className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
// //               >
// //                 {tag}
// //                 <button onClick={() => removeTag(tag)} className="text-red-500">
// //                   ✕
// //                 </button>
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* --- RELATED PRODUCTS --- */}
// //         <div className="space-y-4">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-yellow-500 text-gray-800">
// //             Related Products
// //           </h2>

// //           <div className="flex gap-3">
// //             <input
// //               type="text"
// //               placeholder="grey-kurti"
// //               className="flex-1 px-4 py-3 border rounded-xl"
// //               value={relatedInput}
// //               onChange={(e) => setRelatedInput(e.target.value)}
// //             />
// //             <button
// //               onClick={addRelated}
// //               className="px-5 py-3 bg-teal-600 text-white rounded-xl shadow"
// //             >
// //               Add
// //             </button>
// //           </div>

// //           <div className="flex gap-3 flex-wrap">
// //             {relatedProducts.map((item) => (
// //               <span
// //                 key={item}
// //                 className="px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full flex items-center gap-2"
// //               >
// //                 {item}
// //                 <button
// //                   onClick={() => removeRelated(item)}
// //                   className="text-red-500"
// //                 >
// //                   ✕
// //                 </button>
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* --- SUBMIT BUTTON --- */}
// //         <button className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition">
// //           Save Product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// // import { useState } from "react";
// // import api from "../../../api/axios";
// // import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// // const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// // const AddProduct = () => {
// //   /* ---------------- BASIC ---------------- */
// //   const [title, setTitle] = useState("");
// //   const [categorySlug, setCategorySlug] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [oldPrice, setOldPrice] = useState("");
// //   const [rating, setRating] = useState("");

// //   const [description, setDescription] = useState("");
// //   const [details, setDetails] = useState("");
// //   const [returnPolicy, setReturnPolicy] = useState("");

// //   /* ---------------- IMAGES ---------------- */
// //   const [mainImage, setMainImage] = useState(null);
// //   const [mainPreview, setMainPreview] = useState(null);

// //   const [hoverImage, setHoverImage] = useState(null);
// //   const [hoverPreview, setHoverPreview] = useState(null);

// //   const [extraImages, setExtraImages] = useState([]);
// //   const [extraPreviews, setExtraPreviews] = useState([]);

// //   /* ---------------- SIZE & STOCK ---------------- */
// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [stock, setStock] = useState({});

// //   /* ---------------- HIGHLIGHTS ---------------- */
// //   const [highlights, setHighlights] = useState([{ label: "", value: "" }]);

// //   /* ---------------- TAGS ---------------- */
// //   const [tags, setTags] = useState([]);
// //   const [tagInput, setTagInput] = useState("");

// //   /* ---------------- RELATED ---------------- */
// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [relatedInput, setRelatedInput] = useState("");

// //   /* ---------------- IMAGE HANDLERS ---------------- */
// //   const handleMainImage = (e) => {
// //     const file = e.target.files[0];
// //     setMainImage(file);
// //     setMainPreview(URL.createObjectURL(file));
// //   };

// //   const handleHoverImage = (e) => {
// //     const file = e.target.files[0];
// //     setHoverImage(file);
// //     setHoverPreview(URL.createObjectURL(file));
// //   };

// //   const handleExtraImages = (e) => {
// //     const files = Array.from(e.target.files);
// //     setExtraImages((prev) => [...prev, ...files]);
// //     setExtraPreviews((prev) => [
// //       ...prev,
// //       ...files.map((f) => URL.createObjectURL(f)),
// //     ]);
// //   };

// //   /* ---------------- SIZE & STOCK ---------------- */
// //   const toggleSize = (size) => {
// //     let updated;
// //     if (selectedSizes.includes(size)) {
// //       updated = selectedSizes.filter((s) => s !== size);
// //     } else {
// //       updated = [...selectedSizes, size];
// //       setStock((prev) => ({ ...prev, [size]: 0 }));
// //     }
// //     setSelectedSizes(updated);
// //   };

// //   const updateStock = (size, value) => {
// //     setStock({ ...stock, [size]: value });
// //   };

// //   /* ---------------- HIGHLIGHTS ---------------- */
// //   const updateHighlight = (i, field, value) => {
// //     const updated = [...highlights];
// //     updated[i][field] = value;
// //     setHighlights(updated);
// //   };

// //   const addHighlight = () =>
// //     setHighlights([...highlights, { label: "", value: "" }]);

// //   const removeHighlight = (i) =>
// //     setHighlights(highlights.filter((_, idx) => idx !== i));

// //   /* ---------------- TAGS ---------------- */
// //   const addTag = () => {
// //     if (!tagInput.trim()) return;
// //     setTags([...tags, tagInput.trim()]);
// //     setTagInput("");
// //   };

// //   const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

// //   /* ---------------- RELATED ---------------- */
// //   const addRelated = () => {
// //     if (!relatedInput.trim()) return;
// //     setRelatedProducts([...relatedProducts, relatedInput.trim()]);
// //     setRelatedInput("");
// //   };

// //   const removeRelated = (slug) =>
// //     setRelatedProducts(relatedProducts.filter((r) => r !== slug));

// //   /* ---------------- SUBMIT ---------------- */
// //   const handleSubmit = async () => {
// //     try {
// //       const fd = new FormData();

// //       fd.append("title", title);
// //       fd.append("category_slug", categorySlug);
// //       fd.append("price", price);
// //       fd.append("old_price", oldPrice);
// //       fd.append("rating", rating);
// //       fd.append("description", description);
// //       fd.append("details", details);
// //       fd.append("return_policy", returnPolicy);

// //       if (mainImage) fd.append("main_image", mainImage);
// //       if (hoverImage) fd.append("hover_image", hoverImage);

// //       extraImages.forEach((img) => {
// //         fd.append("gallery_images", img);
// //       });

// //       fd.append("sizes", JSON.stringify(selectedSizes));
// //       fd.append("stock", JSON.stringify(stock));
// //       fd.append("highlights", JSON.stringify(highlights));
// //       fd.append("tags", JSON.stringify(tags));
// //       fd.append("related_products", JSON.stringify(relatedProducts));

// //       await api.post("/products/admin", fd);

// //       alert("🔥 Product added successfully");
// //     } catch (error) {
// //       console.error(error);
// //       alert("❌ Error while adding product");
// //     }
// //   };

// //   /* ---------------- UI ---------------- */
// //   return (
// //     <div className="space-y-10">
// //       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

// //       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
// //         {/* BASIC INFO */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500">
// //             Basic Information
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div>
// //               <label className="font-medium">Product Title</label>
// //               <input
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium">Category Slug</label>
// //               <input
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={categorySlug}
// //                 onChange={(e) => setCategorySlug(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* PRICING */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500">
// //             Pricing
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Price"
// //               value={price}
// //               onChange={(e) => setPrice(e.target.value)}
// //             />
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Old Price"
// //               value={oldPrice}
// //               onChange={(e) => setOldPrice(e.target.value)}
// //             />
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Rating"
// //               value={rating}
// //               onChange={(e) => setRating(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* IMAGES */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500">
// //             Product Images
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {[
// //               {
// //                 label: "Main Image",
// //                 on: handleMainImage,
// //                 preview: mainPreview,
// //               },
// //               {
// //                 label: "Hover Image",
// //                 on: handleHoverImage,
// //                 preview: hoverPreview,
// //               },
// //             ].map((i, idx) => (
// //               <div key={idx}>
// //                 <label className="font-medium">{i.label}</label>
// //                 <label className="mt-3 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 cursor-pointer flex flex-col items-center">
// //                   <FiUploadCloud size={32} />
// //                   <input type="file" hidden onChange={i.on} />
// //                 </label>
// //                 {i.preview && (
// //                   <img
// //                     src={i.preview}
// //                     className="w-32 h-32 mt-3 rounded-xl object-cover"
// //                   />
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* SUBMIT */}
// //         <button
// //           onClick={handleSubmit}
// //           className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white text-lg font-semibold"
// //         >
// //           Save Product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// // import { useState } from "react";
// // import api from "../../../api/axios";
// // import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// // const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// // const AddProduct = () => {
// //   /* BASIC */
// //   const [title, setTitle] = useState("");
// //   const [categorySlug, setCategorySlug] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [oldPrice, setOldPrice] = useState("");
// //   const [rating, setRating] = useState("");

// //   const [description, setDescription] = useState("");
// //   const [details, setDetails] = useState("");
// //   const [returnPolicy, setReturnPolicy] = useState("");

// //   /* IMAGES */
// //   const [mainImage, setMainImage] = useState(null);
// //   const [mainPreview, setMainPreview] = useState(null);

// //   const [hoverImage, setHoverImage] = useState(null);
// //   const [hoverPreview, setHoverPreview] = useState(null);

// //   const [extraImages, setExtraImages] = useState([]);
// //   const [extraPreviews, setExtraPreviews] = useState([]);

// //   /* SIZE & STOCK */
// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [stock, setStock] = useState({});

// //   /* HIGHLIGHTS */
// //   const [highlights, setHighlights] = useState([{ label: "", value: "" }]);

// //   /* TAGS */
// //   const [tags, setTags] = useState([]);
// //   const [tagInput, setTagInput] = useState("");

// //   /* RELATED */
// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [relatedInput, setRelatedInput] = useState("");

// //   /* IMAGE HANDLERS */
// //   const handleMainImage = (e) => {
// //     const file = e.target.files[0];
// //     setMainImage(file);
// //     setMainPreview(URL.createObjectURL(file));
// //   };

// //   const handleHoverImage = (e) => {
// //     const file = e.target.files[0];
// //     setHoverImage(file);
// //     setHoverPreview(URL.createObjectURL(file));
// //   };

// //   const handleExtraImages = (e) => {
// //     const files = Array.from(e.target.files);
// //     setExtraImages((prev) => [...prev, ...files]);
// //     setExtraPreviews((prev) => [
// //       ...prev,
// //       ...files.map((f) => URL.createObjectURL(f)),
// //     ]);
// //   };

// //   /* SIZE & STOCK */
// //   const toggleSize = (size) => {
// //     if (selectedSizes.includes(size)) {
// //       setSelectedSizes(selectedSizes.filter((s) => s !== size));
// //     } else {
// //       setSelectedSizes([...selectedSizes, size]);
// //       setStock((prev) => ({ ...prev, [size]: 0 }));
// //     }
// //   };

// //   const updateStock = (size, value) => {
// //     setStock({ ...stock, [size]: value });
// //   };

// //   /* HIGHLIGHTS */
// //   const updateHighlight = (i, field, value) => {
// //     const updated = [...highlights];
// //     updated[i][field] = value;
// //     setHighlights(updated);
// //   };

// //   const addHighlight = () =>
// //     setHighlights([...highlights, { label: "", value: "" }]);

// //   const removeHighlight = (i) =>
// //     setHighlights(highlights.filter((_, idx) => idx !== i));

// //   /* TAGS */
// //   const addTag = () => {
// //     if (!tagInput.trim()) return;
// //     setTags([...tags, tagInput.trim()]);
// //     setTagInput("");
// //   };

// //   const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

// //   /* RELATED */
// //   const addRelated = () => {
// //     if (!relatedInput.trim()) return;
// //     setRelatedProducts([...relatedProducts, relatedInput.trim()]);
// //     setRelatedInput("");
// //   };

// //   const removeRelated = (slug) =>
// //     setRelatedProducts(relatedProducts.filter((r) => r !== slug));

// //   /* SUBMIT */
// //   const handleSubmit = async () => {
// //     try {
// //       const fd = new FormData();

// //       fd.append("title", title);
// //       fd.append("category_slug", categorySlug);
// //       fd.append("price", price);
// //       fd.append("old_price", oldPrice);
// //       fd.append("rating", rating);
// //       fd.append("description", description);
// //       fd.append("details", details);
// //       fd.append("return_policy", returnPolicy);

// //       if (mainImage) fd.append("main_image", mainImage);
// //       if (hoverImage) fd.append("hover_image", hoverImage);

// //       extraImages.forEach((img) => fd.append("gallery_images", img));

// //       fd.append("sizes", JSON.stringify(selectedSizes));
// //       fd.append("stock", JSON.stringify(stock));
// //       fd.append("highlights", JSON.stringify(highlights));
// //       fd.append("tags", JSON.stringify(tags));
// //       fd.append("related_products", JSON.stringify(relatedProducts));

// //       await api.post("/products/admin", fd);

// //       alert("✅ Product added successfully");
// //     } catch (err) {
// //       console.error(err);
// //       alert("❌ Error while adding product");
// //     }
// //   };

// //   /* UI */
// //   return (
// //     <div className="space-y-10">
// //       <h1 className="text-3xl font-bold">Add New Product</h1>

// //       <div className="bg-white p-8 rounded-3xl shadow-xl space-y-10">
// //         {/* BASIC */}
// //         <div className="grid md:grid-cols-2 gap-6">
// //           <input
// //             className="input"
// //             placeholder="Product Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //           />
// //           <input
// //             className="input"
// //             placeholder="Category Slug"
// //             value={categorySlug}
// //             onChange={(e) => setCategorySlug(e.target.value)}
// //           />
// //         </div>

// //         {/* PRICING */}
// //         <div className="grid md:grid-cols-3 gap-6">
// //           <input
// //             type="number"
// //             className="input"
// //             placeholder="Price"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //           />
// //           <input
// //             type="number"
// //             className="input"
// //             placeholder="Old Price"
// //             value={oldPrice}
// //             onChange={(e) => setOldPrice(e.target.value)}
// //           />
// //           <input
// //             type="number"
// //             step="0.1"
// //             className="input"
// //             placeholder="Rating"
// //             value={rating}
// //             onChange={(e) => setRating(e.target.value)}
// //           />
// //         </div>

// //         {/* IMAGES */}
// //         <div>
// //           <label>Main Image</label>
// //           <input type="file" onChange={handleMainImage} />
// //           {mainPreview && <img src={mainPreview} className="w-32 mt-2" />}
// //         </div>

// //         <div>
// //           <label>Hover Image</label>
// //           <input type="file" onChange={handleHoverImage} />
// //           {hoverPreview && <img src={hoverPreview} className="w-32 mt-2" />}
// //         </div>

// //         <div>
// //           <label>Extra Images</label>
// //           <input type="file" multiple onChange={handleExtraImages} />
// //           <div className="flex gap-2 mt-2">
// //             {extraPreviews.map((img, i) => (
// //               <img key={i} src={img} className="w-20" />
// //             ))}
// //           </div>
// //         </div>

// //         {/* SIZES */}
// //         <div className="flex gap-4 flex-wrap">
// //           {ALL_SIZES.map((s) => (
// //             <label key={s}>
// //               <input type="checkbox" onChange={() => toggleSize(s)} /> {s}
// //             </label>
// //           ))}
// //         </div>

// //         {selectedSizes.map((s) => (
// //           <input
// //             key={s}
// //             className="input"
// //             type="number"
// //             placeholder={`${s} stock`}
// //             value={stock[s]}
// //             onChange={(e) => updateStock(s, e.target.value)}
// //           />
// //         ))}

// //         {/* HIGHLIGHTS */}
// //         {highlights.map((h, i) => (
// //           <div key={i} className="flex gap-2">
// //             <input
// //               className="input"
// //               placeholder="Label"
// //               value={h.label}
// //               onChange={(e) => updateHighlight(i, "label", e.target.value)}
// //             />
// //             <input
// //               className="input"
// //               placeholder="Value"
// //               value={h.value}
// //               onChange={(e) => updateHighlight(i, "value", e.target.value)}
// //             />
// //             <button onClick={() => removeHighlight(i)}>
// //               <FiTrash2 />
// //             </button>
// //           </div>
// //         ))}
// //         <button onClick={addHighlight}>
// //           <FiPlus /> Add Highlight
// //         </button>

// //         {/* TAGS */}
// //         <div className="flex gap-2">
// //           <input
// //             className="input"
// //             value={tagInput}
// //             onChange={(e) => setTagInput(e.target.value)}
// //           />
// //           <button onClick={addTag}>Add Tag</button>
// //         </div>

// //         {/* SUBMIT */}
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 text-white p-4 rounded-xl"
// //         >
// //           Save Product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// // import { useState } from "react";
// // import api from "../../../api/axios";
// // import { FiUploadCloud } from "react-icons/fi";

// // const AddProduct = () => {
// //   /* ---------------- BASIC (MODEL MATCHED) ---------------- */
// //   const [name, setName] = useState("");
// //   const [category, setCategory] = useState("");

// //   const [mrp, setMrp] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [discount, setDiscount] = useState("");
// //   const [rating, setRating] = useState("");

// //   const [fabric, setFabric] = useState("");
// //   const [size, setSize] = useState("");
// //   const [comfort, setComfort] = useState("");
// //   const [occasion, setOccasion] = useState("");

// //   const [quantity, setQuantity] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [topPicks, setTopPicks] = useState(false);

// //   /* ---------------- IMAGES ---------------- */
// //   const [mainImage, setMainImage] = useState(null);
// //   const [mainPreview, setMainPreview] = useState(null);

// //   const [hoverImage, setHoverImage] = useState(null);
// //   const [hoverPreview, setHoverPreview] = useState(null);

// //   const [galleryImages, setGalleryImages] = useState([]);
// //   const [galleryPreviews, setGalleryPreviews] = useState([]);

// //   /* ---------------- IMAGE HANDLERS ---------------- */
// //   const handleMainImage = (e) => {
// //     const file = e.target.files[0];
// //     setMainImage(file);
// //     setMainPreview(URL.createObjectURL(file));
// //   };

// //   const handleHoverImage = (e) => {
// //     const file = e.target.files[0];
// //     setHoverImage(file);
// //     setHoverPreview(URL.createObjectURL(file));
// //   };

// //   const handleGalleryImages = (e) => {
// //     const files = Array.from(e.target.files);
// //     setGalleryImages(files);
// //     setGalleryPreviews(files.map((f) => URL.createObjectURL(f)));
// //   };

// //   /* ---------------- SUBMIT ---------------- */
// //   const handleSubmit = async () => {
// //     try {
// //       const fd = new FormData();

// //       fd.append("name", name);
// //       fd.append("category", category);
// //       fd.append("mrp", mrp);
// //       fd.append("price", price);
// //       fd.append("discount", discount || 0);
// //       fd.append("rating", rating || 0);

// //       fd.append("fabric", fabric);
// //       fd.append("size", size);
// //       fd.append("comfort", comfort);
// //       fd.append("occasion", occasion);

// //       fd.append("quantity", quantity);
// //       fd.append("description", description);
// //       fd.append("top_picks", topPicks);

// //       if (mainImage) fd.append("main_image", mainImage);
// //       if (hoverImage) fd.append("hover_image", hoverImage);

// //       galleryImages.forEach((img) => fd.append("gallery_images", img));

// //       await api.post("/products/admin", fd);

// //       alert("✅ Product added successfully");
// //     } catch (err) {
// //       console.error(err);
// //       alert("❌ Error while adding product");
// //     }
// //   };

// //   /* ---------------- UI (STYLING COPIED) ---------------- */
// //   return (
// //     <div className="space-y-10">
// //       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

// //       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
// //         {/* BASIC INFO */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500">
// //             Basic Information
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div>
// //               <label className="font-medium">Product Name</label>
// //               <input
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium">Category</label>
// //               <input
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={category}
// //                 onChange={(e) => setCategory(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* PRICING */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500">
// //             Pricing
// //           </h2>

// //           <div className="grid md:grid-cols-4 gap-6">
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="MRP"
// //               type="number"
// //               value={mrp}
// //               onChange={(e) => setMrp(e.target.value)}
// //             />
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Price"
// //               type="number"
// //               value={price}
// //               onChange={(e) => setPrice(e.target.value)}
// //             />
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Discount %"
// //               type="number"
// //               value={discount}
// //               onChange={(e) => setDiscount(e.target.value)}
// //             />
// //             <input
// //               className="px-4 py-3 border rounded-xl"
// //               placeholder="Rating"
// //               type="number"
// //               step="0.1"
// //               value={rating}
// //               onChange={(e) => setRating(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* ATTRIBUTES */}
// //         <div className="grid md:grid-cols-3 gap-6">
// //           <input
// //             className="px-4 py-3 border rounded-xl"
// //             placeholder="Fabric"
// //             value={fabric}
// //             onChange={(e) => setFabric(e.target.value)}
// //           />
// //           <input
// //             className="px-4 py-3 border rounded-xl"
// //             placeholder="Size (S, M, L)"
// //             value={size}
// //             onChange={(e) => setSize(e.target.value)}
// //           />
// //           <input
// //             className="px-4 py-3 border rounded-xl"
// //             placeholder="Occasion"
// //             value={occasion}
// //             onChange={(e) => setOccasion(e.target.value)}
// //           />
// //         </div>

// //         <input
// //           className="px-4 py-3 border rounded-xl w-full"
// //           placeholder="Comfort"
// //           value={comfort}
// //           onChange={(e) => setComfort(e.target.value)}
// //         />
// //         <input
// //           className="px-4 py-3 border rounded-xl w-full"
// //           type="number"
// //           placeholder="Quantity"
// //           value={quantity}
// //           onChange={(e) => setQuantity(e.target.value)}
// //         />

// //         {/* DESCRIPTION */}
// //         <textarea
// //           rows="4"
// //           className="w-full px-4 py-3 border rounded-xl"
// //           placeholder="Product description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //         />

// //         <label className="flex items-center gap-2">
// //           <input
// //             type="checkbox"
// //             checked={topPicks}
// //             onChange={(e) => setTopPicks(e.target.checked)}
// //           />
// //           Top Picks
// //         </label>

// //         {/* IMAGES */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500">
// //             Product Images
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {/* Main */}
// //             <div>
// //               <label className="font-medium">Main Image</label>
// //               <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
// //                 <FiUploadCloud size={32} />
// //                 <input type="file" hidden onChange={handleMainImage} />
// //               </label>
// //               {mainPreview && (
// //                 <img
// //                   src={mainPreview}
// //                   className="w-32 h-32 mt-3 rounded-xl object-cover"
// //                 />
// //               )}
// //             </div>

// //             {/* Hover */}
// //             <div>
// //               <label className="font-medium">Hover Image</label>
// //               <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
// //                 <FiUploadCloud size={32} />
// //                 <input type="file" hidden onChange={handleHoverImage} />
// //               </label>
// //               {hoverPreview && (
// //                 <img
// //                   src={hoverPreview}
// //                   className="w-32 h-32 mt-3 rounded-xl object-cover"
// //                 />
// //               )}
// //             </div>
// //           </div>

// //           {/* Gallery */}
// //           <div>
// //             <label className="font-medium">Gallery Images</label>
// //             <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
// //               <FiUploadCloud size={32} />
// //               <input
// //                 type="file"
// //                 multiple
// //                 hidden
// //                 onChange={handleGalleryImages}
// //               />
// //             </label>

// //             <div className="flex gap-3 mt-4 flex-wrap">
// //               {galleryPreviews.map((img, i) => (
// //                 <img
// //                   key={i}
// //                   src={img}
// //                   className="w-20 h-20 rounded-xl object-cover border"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* SUBMIT */}
// //         <button
// //           onClick={handleSubmit}
// //           className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg"
// //         >
// //           Save Product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// // import { useEffect, useState } from "react";
// // import api from "../../../api/axios";
// // import { FiUploadCloud } from "react-icons/fi";

// // const CATEGORIES = [
// //   { label: "Designer Kurtis", value: "designer-kurtis" },
// //   { label: "Cotton Kurtis", value: "cotton-kurtis" },
// //   { label: "Festive Wear", value: "festive-wear" },
// //   { label: "Casual Wear", value: "casual-wear" },
// // ];

// // const AddProduct = () => {
// //   /* ---------------- BASIC ---------------- */
// //   const [name, setName] = useState("");
// //   const [category, setCategory] = useState("");

// //   const [mrp, setMrp] = useState("");
// //   const [discount, setDiscount] = useState("");
// //   const [price, setPrice] = useState("");

// //   const [fabric, setFabric] = useState("");
// //   const [size, setSize] = useState("");
// //   const [comfort, setComfort] = useState("");
// //   const [occasion, setOccasion] = useState("");

// //   const [quantity, setQuantity] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [topPicks, setTopPicks] = useState(false);

// //   /* ---------------- IMAGES ---------------- */
// //   const [mainImage, setMainImage] = useState(null);
// //   const [mainPreview, setMainPreview] = useState(null);

// //   const [hoverImage, setHoverImage] = useState(null);
// //   const [hoverPreview, setHoverPreview] = useState(null);

// //   const [galleryImages, setGalleryImages] = useState([]);
// //   const [galleryPreviews, setGalleryPreviews] = useState([]);

// //   /* ---------------- AUTO PRICE CALC ---------------- */
// //   useEffect(() => {
// //     if (mrp && discount) {
// //       const calculated = Number(mrp) - (Number(mrp) * Number(discount)) / 100;
// //       setPrice(Math.round(calculated));
// //     } else {
// //       setPrice("");
// //     }
// //   }, [mrp, discount]);

// //   /* ---------------- IMAGE HANDLERS ---------------- */
// //   const handleMainImage = (e) => {
// //     const file = e.target.files[0];
// //     setMainImage(file);
// //     setMainPreview(URL.createObjectURL(file));
// //   };

// //   const handleHoverImage = (e) => {
// //     const file = e.target.files[0];
// //     setHoverImage(file);
// //     setHoverPreview(URL.createObjectURL(file));
// //   };

// //   const handleGalleryImages = (e) => {
// //     const files = Array.from(e.target.files);
// //     setGalleryImages(files);
// //     setGalleryPreviews(files.map((f) => URL.createObjectURL(f)));
// //   };

// //   /* ---------------- SUBMIT ---------------- */
// //   const handleSubmit = async () => {
// //     try {
// //       const fd = new FormData();

// //       fd.append("name", name);
// //       fd.append("category", category);
// //       fd.append("mrp", mrp);
// //       fd.append("discount", discount || 0);
// //       fd.append("price", price);

// //       fd.append("fabric", fabric);
// //       fd.append("size", size);
// //       fd.append("comfort", comfort);
// //       fd.append("occasion", occasion);

// //       fd.append("quantity", quantity);
// //       fd.append("description", description);
// //       fd.append("top_picks", topPicks);

// //       if (mainImage) fd.append("main_image", mainImage);
// //       if (hoverImage) fd.append("hover_image", hoverImage);

// //       galleryImages.forEach((img) => fd.append("gallery_images", img));

// //       await api.post("/products/admin", fd);

// //       alert("✅ Product added successfully");
// //     } catch (err) {
// //       console.error(err);
// //       alert("❌ Error while adding product");
// //     }
// //   };

// //   /* ---------------- UI ---------------- */
// //   return (
// //     <div className="space-y-10">
// //       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

// //       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
// //         {/* BASIC INFO */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500">
// //             Basic Information
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div>
// //               <label className="font-medium">Product Name</label>
// //               <input
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium">Category</label>
// //               <select
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl bg-white"
// //                 value={category}
// //                 onChange={(e) => setCategory(e.target.value)}
// //               >
// //                 <option value="">Select Category</option>
// //                 {CATEGORIES.map((cat) => (
// //                   <option key={cat.value} value={cat.value}>
// //                     {cat.label}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>
// //         </div>

// //         {/* PRICING */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500">
// //             Pricing
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-6">
// //             <div>
// //               <label className="font-medium">MRP (₹)</label>
// //               <input
// //                 type="number"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={mrp}
// //                 onChange={(e) => setMrp(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium">Discount (%)</label>
// //               <input
// //                 type="number"
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl"
// //                 value={discount}
// //                 onChange={(e) => setDiscount(e.target.value)}
// //               />
// //             </div>

// //             <div>
// //               <label className="font-medium">Final Price (₹)</label>
// //               <input
// //                 type="number"
// //                 readOnly
// //                 className="mt-2 w-full px-4 py-3 border rounded-xl bg-gray-100"
// //                 value={price}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* ATTRIBUTES */}
// //         <div className="grid md:grid-cols-3 gap-6">
// //           <div>
// //             <label className="font-medium">Fabric</label>
// //             <input
// //               className="mt-2 w-full px-4 py-3 border rounded-xl"
// //               value={fabric}
// //               onChange={(e) => setFabric(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label className="font-medium">Size</label>
// //             <input
// //               className="mt-2 w-full px-4 py-3 border rounded-xl"
// //               value={size}
// //               onChange={(e) => setSize(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label className="font-medium">Occasion</label>
// //             <input
// //               className="mt-2 w-full px-4 py-3 border rounded-xl"
// //               value={occasion}
// //               onChange={(e) => setOccasion(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <label className="font-medium">Comfort</label>
// //           <input
// //             className="mt-2 w-full px-4 py-3 border rounded-xl"
// //             value={comfort}
// //             onChange={(e) => setComfort(e.target.value)}
// //           />
// //         </div>

// //         <div>
// //           <label className="font-medium">Quantity</label>
// //           <input
// //             type="number"
// //             className="mt-2 w-full px-4 py-3 border rounded-xl"
// //             value={quantity}
// //             onChange={(e) => setQuantity(e.target.value)}
// //           />
// //         </div>

// //         {/* DESCRIPTION */}
// //         <div>
// //           <label className="font-medium">Description</label>
// //           <textarea
// //             rows="4"
// //             className="mt-2 w-full px-4 py-3 border rounded-xl"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //           />
// //         </div>

// //         <label className="flex items-center gap-2">
// //           <input
// //             type="checkbox"
// //             checked={topPicks}
// //             onChange={(e) => setTopPicks(e.target.checked)}
// //           />
// //           Top Picks
// //         </label>

// //         {/* IMAGES */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500">
// //             Product Images
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {[
// //               {
// //                 label: "Main Image",
// //                 onChange: handleMainImage,
// //                 preview: mainPreview,
// //               },
// //               {
// //                 label: "Hover Image",
// //                 onChange: handleHoverImage,
// //                 preview: hoverPreview,
// //               },
// //             ].map((img, i) => (
// //               <div key={i}>
// //                 <label className="font-medium">{img.label}</label>
// //                 <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
// //                   <FiUploadCloud size={32} />
// //                   <input type="file" hidden onChange={img.onChange} />
// //                 </label>
// //                 {img.preview && (
// //                   <img
// //                     src={img.preview}
// //                     className="w-32 h-32 mt-3 rounded-xl object-cover"
// //                   />
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           <div>
// //             <label className="font-medium">Extra Images</label>
// //             <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
// //               <FiUploadCloud size={32} />
// //               <input
// //                 type="file"
// //                 multiple
// //                 hidden
// //                 onChange={handleGalleryImages}
// //               />
// //             </label>

// //             <div className="flex gap-3 mt-4 flex-wrap">
// //               {galleryPreviews.map((img, i) => (
// //                 <img
// //                   key={i}
// //                   src={img}
// //                   className="w-20 h-20 rounded-xl object-cover border"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* SUBMIT */}
// //         <button
// //           onClick={handleSubmit}
// //           className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg"
// //         >
// //           Save Product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// import { useEffect, useState } from "react";
// import api from "../../../api/axios";
// import { FiUploadCloud } from "react-icons/fi";

// const CATEGORIES = [
//   { label: "Designer Kurtis", value: "designer-kurtis" },
//   { label: "Cotton Kurtis", value: "cotton-kurtis" },
//   { label: "Festive Wear", value: "festive-wear" },
//   { label: "Casual Wear", value: "casual-wear" },
// ];

// const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

// const AddProduct = () => {
//   /* ---------------- BASIC ---------------- */
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");

//   const [mrp, setMrp] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [price, setPrice] = useState("");

//   const [fabric, setFabric] = useState("");
//   const [comfort, setComfort] = useState("");
//   const [occasion, setOccasion] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const [description, setDescription] = useState("");
//   const [topPicks, setTopPicks] = useState(false);

//   /* ---------------- SIZE (CHECKBOX STYLE) ---------------- */
//   const [sizes, setSizes] = useState([]);

//   const toggleSize = (size) => {
//     setSizes((prev) =>
//       prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
//     );
//   };

//   /* ---------------- IMAGES ---------------- */
//   const [mainImage, setMainImage] = useState(null);
//   const [mainPreview, setMainPreview] = useState(null);

//   const [hoverImage, setHoverImage] = useState(null);
//   const [hoverPreview, setHoverPreview] = useState(null);

//   const [galleryImages, setGalleryImages] = useState([]);
//   const [galleryPreviews, setGalleryPreviews] = useState([]);

//   /* ---------------- AUTO PRICE ---------------- */
//   useEffect(() => {
//     if (mrp && discount) {
//       const finalPrice = Number(mrp) - (Number(mrp) * Number(discount)) / 100;
//       setPrice(Math.round(finalPrice));
//     } else {
//       setPrice("");
//     }
//   }, [mrp, discount]);

//   /* ---------------- IMAGE HANDLERS ---------------- */
//   const handleMainImage = (e) => {
//     const file = e.target.files[0];
//     setMainImage(file);
//     setMainPreview(URL.createObjectURL(file));
//   };

//   const handleHoverImage = (e) => {
//     const file = e.target.files[0];
//     setHoverImage(file);
//     setHoverPreview(URL.createObjectURL(file));
//   };

//   const handleGalleryImages = (e) => {
//     const files = Array.from(e.target.files);
//     setGalleryImages(files);
//     setGalleryPreviews(files.map((f) => URL.createObjectURL(f)));
//   };

//   /* ---------------- SUBMIT ---------------- */
//   const handleSubmit = async () => {
//     try {
//       const fd = new FormData();

//       fd.append("name", name);
//       fd.append("category", category);
//       fd.append("mrp", mrp);
//       fd.append("discount", discount || 0);
//       fd.append("price", price);

//       fd.append("fabric", fabric);
//       fd.append("comfort", comfort);
//       fd.append("occasion", occasion);
//       fd.append("quantity", quantity);
//       fd.append("description", description);
//       fd.append("top_picks", topPicks);

//       fd.append("size", sizes.join(",")); // backend friendly

//       if (mainImage) fd.append("main_image", mainImage);
//       if (hoverImage) fd.append("hover_image", hoverImage);
//       galleryImages.forEach((img) => fd.append("gallery_images", img));

//       await api.post("/products/admin", fd);

//       alert("✅ Product added successfully");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error while adding product");
//     }
//   };

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="space-y-10">
//       <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

//       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
//         {/* BASIC INFO */}
//         <section className="space-y-6">
//           <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500">
//             Basic Information
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <label className="font-medium">Product Name</label>
//               <input
//                 className="mt-2 w-full px-4 py-3 border rounded-xl"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="font-medium">Category</label>
//               <select
//                 className="mt-2 w-full px-4 py-3 border rounded-xl bg-white"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Select category</option>
//                 {CATEGORIES.map((c) => (
//                   <option key={c.value} value={c.value}>
//                     {c.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         {/* PRICING */}
//         <section className="space-y-6">
//           <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500">
//             Pricing
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <label className="font-medium">MRP (₹)</label>
//               <input
//                 type="number"
//                 className="mt-2 w-full px-4 py-3 border rounded-xl"
//                 value={mrp}
//                 onChange={(e) => setMrp(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="font-medium">Discount (%)</label>
//               <input
//                 type="number"
//                 className="mt-2 w-full px-4 py-3 border rounded-xl"
//                 value={discount}
//                 onChange={(e) => setDiscount(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="font-medium">Final Price (₹)</label>
//               <input
//                 readOnly
//                 className="mt-2 w-full px-4 py-3 border rounded-xl bg-gray-100"
//                 value={price}
//               />
//             </div>
//           </div>
//         </section>

//         {/* SIZE (COPIED STYLE) */}
//         <section className="space-y-4">
//           <h2 className="text-xl font-semibold border-l-4 pl-3 border-orange-500">
//             Sizes
//           </h2>

//           <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//             {ALL_SIZES.map((s) => (
//               <label key={s} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={sizes.includes(s)}
//                   onChange={() => toggleSize(s)}
//                 />
//                 <span>{s}</span>
//               </label>
//             ))}
//           </div>
//         </section>

//         {/* ATTRIBUTES */}
//         <section className="grid md:grid-cols-3 gap-6">
//           <div>
//             <label className="font-medium">Fabric</label>
//             <input
//               className="mt-2 w-full px-4 py-3 border rounded-xl"
//               value={fabric}
//               onChange={(e) => setFabric(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="font-medium">Comfort</label>
//             <input
//               className="mt-2 w-full px-4 py-3 border rounded-xl"
//               value={comfort}
//               onChange={(e) => setComfort(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="font-medium">Occasion</label>
//             <input
//               className="mt-2 w-full px-4 py-3 border rounded-xl"
//               value={occasion}
//               onChange={(e) => setOccasion(e.target.value)}
//             />
//           </div>
//         </section>

//         <div>
//           <label className="font-medium">Quantity</label>
//           <input
//             type="number"
//             className="mt-2 w-full px-4 py-3 border rounded-xl"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>

//         {/* DESCRIPTION */}
//         <div>
//           <label className="font-medium">Description</label>
//           <textarea
//             rows="4"
//             className="mt-2 w-full px-4 py-3 border rounded-xl"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={topPicks}
//             onChange={(e) => setTopPicks(e.target.checked)}
//           />
//           Top Picks
//         </label>

//         {/* IMAGES */}
//         <section className="space-y-6">
//           <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500">
//             Product Images
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 label: "Main Image",
//                 fn: handleMainImage,
//                 preview: mainPreview,
//               },
//               {
//                 label: "Hover Image",
//                 fn: handleHoverImage,
//                 preview: hoverPreview,
//               },
//             ].map((img, i) => (
//               <div key={i}>
//                 <label className="font-medium">{img.label}</label>
//                 <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
//                   <FiUploadCloud size={32} />
//                   <input type="file" hidden onChange={img.fn} />
//                 </label>
//                 {img.preview && (
//                   <img
//                     src={img.preview}
//                     className="w-32 h-32 mt-3 rounded-xl object-cover"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           <div>
//             <label className="font-medium">Extra Images</label>
//             <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
//               <FiUploadCloud size={32} />
//               <input
//                 type="file"
//                 multiple
//                 hidden
//                 onChange={handleGalleryImages}
//               />
//             </label>

//             <div className="flex gap-3 mt-4 flex-wrap">
//               {galleryPreviews.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   className="w-20 h-20 rounded-xl object-cover border"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* SUBMIT */}
//         <button
//           onClick={handleSubmit}
//           className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg"
//         >
//           Save Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import { useEffect, useState } from "react";
// import api from "../../../api/axios";
import { publicApi } from "../../../api/publicApi";
import { FiUploadCloud } from "react-icons/fi";

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

const CATEGORIES = [
  { label: "Designer Kurtis", value: "designer-kurtis" },
  { label: "Cotton Kurtis", value: "cotton-kurtis" },
  { label: "Festive Wear", value: "festive-wear" },
  { label: "Casual Wear", value: "casual-wear" },
];

const AddProduct = () => {
  /* BASIC */
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [mrp, setMrp] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");

  const [fabric, setFabric] = useState("");
  const [comfort, setComfort] = useState("");
  const [occasion, setOccasion] = useState("");

  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [topPicks, setTopPicks] = useState(false);

  /* IMAGES */
  const [mainImage, setMainImage] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);

  const [hoverImage, setHoverImage] = useState(null);
  const [hoverPreview, setHoverPreview] = useState(null);

  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  /* AUTO PRICE */
  useEffect(() => {
    if (mrp && discount) {
      const finalPrice = mrp - (mrp * discount) / 100;
      setPrice(Math.round(finalPrice));
    } else {
      setPrice("");
    }
  }, [mrp, discount]);

  /* SIZE TOGGLE */
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  /* IMAGE HANDLERS */
  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainPreview(URL.createObjectURL(file));
  };

  const handleHoverImage = (e) => {
    const file = e.target.files[0];
    setHoverImage(file);
    setHoverPreview(URL.createObjectURL(file));
  };

  const handleGalleryImages = (e) => {
    const files = Array.from(e.target.files);
    setGalleryImages(files);
    setGalleryPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  /* SUBMIT */
  const handleSubmit = async () => {
    /* BASIC VALIDATIONS */
    if (!name.trim()) return alert("❌ Product name is required");
    if (!category) return alert("❌ Category is required");
    if (!mrp || mrp <= 0) return alert("❌ Valid MRP is required");
    if (discount < 0 || discount > 100)
      return alert("❌ Discount must be between 0–100");
    if (!price || price <= 0) return alert("❌ Price is invalid");
    if (!sizes.length) return alert("❌ Select at least one size");
    if (!quantity || quantity <= 0)
      return alert("❌ Quantity must be greater than 0");
    if (!mainImage) return alert("❌ Main image is required");

    try {
      const fd = new FormData();

      fd.append("name", name);
      fd.append("category", category);
      fd.append("mrp", mrp);
      fd.append("discount", discount || 0);
      fd.append("price", price);

      fd.append("fabric", fabric);
      fd.append("comfort", comfort);
      fd.append("occasion", occasion);
      fd.append("size", sizes.join(","));

      fd.append("quantity", quantity);
      fd.append("description", description);
      fd.append("details", details);
      fd.append("top_picks", topPicks);

      fd.append("main_image", mainImage);
      if (hoverImage) fd.append("hover_image", hoverImage);

      galleryImages.forEach((img) => fd.append("gallery_images", img));

      const res = await publicApi.post("/products/admin/", fd);
      console.log(res);
      alert("✅ Product added successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Error while adding product");
    }
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

      <div className="bg-white p-8 rounded-3xl shadow-xl border space-y-10">
        {/* BASIC INFO */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="font-medium">Product Name</label>
              <input
                className="mt-2 w-full px-4 py-3 border rounded-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium">Category</label>
              <select
                className="mt-2 w-full px-4 py-3 border rounded-xl bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label>MRP (₹)</label>
              <input
                type="number"
                className="mt-2 w-full px-4 py-3 border rounded-xl"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              />
            </div>

            <div>
              <label>Discount (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                className="mt-2 w-full px-4 py-3 border rounded-xl"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div>
              <label>Final Price (₹)</label>
              <input
                readOnly
                className="mt-2 w-full px-4 py-3 border rounded-xl bg-gray-100"
                value={price}
              />
            </div>
          </div>
        </section>

        {/* SIZES */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-orange-500">
            Sizes
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {ALL_SIZES.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={sizes.includes(s)}
                  onChange={() => toggleSize(s)}
                />
                {s}
              </label>
            ))}
          </div>
        </section>

        {/* ATTRIBUTES */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label>Fabric</label>
            <input
              className="mt-2 w-full px-4 py-3 border rounded-xl"
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
            />
          </div>

          <div>
            <label>Comfort</label>
            <input
              className="mt-2 w-full px-4 py-3 border rounded-xl"
              value={comfort}
              onChange={(e) => setComfort(e.target.value)}
            />
          </div>

          <div>
            <label>Occasion</label>
            <input
              className="mt-2 w-full px-4 py-3 border rounded-xl"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            className="mt-2 w-full px-4 py-3 border rounded-xl"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label>Description</label>
          <textarea
            rows="4"
            className="mt-2 w-full px-4 py-3 border rounded-xl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Details</label>
          <textarea
            rows="4"
            className="mt-2 w-full px-4 py-3 border rounded-xl"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={topPicks}
            onChange={(e) => setTopPicks(e.target.checked)}
          />
          Top Picks
        </label>

        {/* IMAGES */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500">
            Product Images
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: "Main Image",
                onChange: handleMainImage,
                preview: mainPreview,
              },
              {
                label: "Hover Image",
                onChange: handleHoverImage,
                preview: hoverPreview,
              },
            ].map((img, i) => (
              <div key={i}>
                <label>{img.label}</label>
                <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
                  <FiUploadCloud size={32} />
                  <input type="file" hidden onChange={img.onChange} />
                </label>
                {img.preview && (
                  <img
                    src={img.preview}
                    className="w-32 h-32 mt-3 rounded-xl object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <label>Extra Images</label>
            <label className="mt-3 border-2 border-dashed rounded-xl p-5 bg-gray-50 cursor-pointer flex flex-col items-center">
              <FiUploadCloud size={32} />
              <input
                type="file"
                multiple
                hidden
                onChange={handleGalleryImages}
              />
            </label>

            <div className="flex gap-3 mt-4 flex-wrap">
              {galleryPreviews.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-20 h-20 rounded-xl object-cover border"
                />
              ))}
            </div>
          </div>
        </section>

        <button
          onClick={handleSubmit}
          className="w-full mt-10 bg-gradient-to-r from-blue-600 to-teal-500 py-4 rounded-xl text-white font-semibold text-lg"
        >
          Save Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
