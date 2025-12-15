// // // // // // import { useState } from "react";
// // // // // // import { X } from "lucide-react";
// // // // // // import SizeModal from "./SizeModal";
// // // // // // import QtyModal from "./QtyModal";
// // // // // // import RemoveConfirmModal from "./RemoveConfirmModal";
// // // // // // import { useCart } from "../../../context/CartContext";

// // // // // // const CartItem = ({ item }) => {
// // // // // //   const [sizeModal, setSizeModal] = useState(false);
// // // // // //   const [qtyModal, setQtyModal] = useState(false);
// // // // // //   const [removeModal, setRemoveModal] = useState(false);

// // // // // //   const [size, setSize] = useState(item.size);
// // // // // //   const [qty, setQty] = useState(item.qty);

// // // // // //   const { updateItem, removeItem } = useCart();

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* REMOVE CONFIRM MODAL */}
// // // // // //       <RemoveConfirmModal
// // // // // //         open={removeModal}
// // // // // //         item={item}
// // // // // //         onClose={() => setRemoveModal(false)}
// // // // // //         onConfirm={() => {
// // // // // //           removeItem(item.id, item.size);
// // // // // //           setRemoveModal(false);
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* SIZE MODAL */}
// // // // // //       <SizeModal
// // // // // //         open={sizeModal}
// // // // // //         currentSize={size}
// // // // // //         onClose={() => setSizeModal(false)}
// // // // // //         onUpdate={(val) => {
// // // // // //           setSize(val);
// // // // // //           updateItem(item.id, item.size, { size: val });
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* QTY MODAL */}
// // // // // //       <QtyModal
// // // // // //         open={qtyModal}
// // // // // //         currentQty={qty}
// // // // // //         onClose={() => setQtyModal(false)}
// // // // // //         onUpdate={(val) => {
// // // // // //           setQty(val);
// // // // // //           updateItem(item.id, item.size, { qty: val });
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* Main Card */}
// // // // // //       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex items-start gap-4 relative">
// // // // // //         {/* Remove Button */}
// // // // // //         <button
// // // // // //           className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
// // // // // //           onClick={() => setRemoveModal(true)}
// // // // // //         >
// // // // // //           <X size={20} />
// // // // // //         </button>

// // // // // //         {/* Image */}
// // // // // //         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
// // // // // //           <img
// // // // // //             src={item.image}
// // // // // //             className="w-full h-full object-cover"
// // // // // //             alt={item.title}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Middle Section */}
// // // // // //         <div className="flex-1 flex flex-col gap-1">
// // // // // //           <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
// // // // // //             {item.brand}
// // // // // //           </h3>

// // // // // //           <p className="text-gray-600 text-sm">{item.title}</p>

// // // // // //           {/* Delivery */}
// // // // // //           <div className="flex items-center gap-2 mt-2">
// // // // // //             <span className="text-green-600 text-lg">✔</span>
// // // // // //             <span className="text-gray-700 text-sm">
// // // // // //               Delivery by{" "}
// // // // // //               <span className="font-semibold">{item.deliveryDate}</span>
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* Size + Qty Buttons */}
// // // // // //           <div className="flex gap-3 mt-3">
// // // // // //             <button
// // // // // //               onClick={() => setSizeModal(true)}
// // // // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
// // // // // //             >
// // // // // //               Size: <span className="font-medium">{size}</span>
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => setQtyModal(true)}
// // // // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
// // // // // //             >
// // // // // //               Qty: <span className="font-medium">{qty}</span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* PRICE SECTION */}
// // // // // //         <div className="flex flex-col items-end mt-auto pr-1">
// // // // // //           <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
// // // // // //             ₹{item.price.toLocaleString("en-IN")}
// // // // // //           </p>

// // // // // //           <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
// // // // // //             ₹{item.originalPrice.toLocaleString("en-IN")}
// // // // // //           </p>

// // // // // //           <p className="text-[15px] text-[#16a34a] font-medium mt-1">
// // // // // //             You saved ₹{item.saved.toLocaleString("en-IN")}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default CartItem;

// // // // // import { useState } from "react";
// // // // // import { X } from "lucide-react";
// // // // // import SizeModal from "./SizeModal";
// // // // // import QtyModal from "./QtyModal";
// // // // // import RemoveConfirmModal from "./RemoveConfirmModal";
// // // // // import { useCart } from "../../../context/CartContext";

// // // // // const CartItem = ({ item }) => {
// // // // //   // ===========================
// // // // //   // 🛡 SAFE DATA MAPPING
// // // // //   // ===========================
// // // // //   const product = item?.product_details || {};

// // // // //   const {
// // // // //     name = "Product",
// // // // //     brand = "",
// // // // //     image = "https://via.placeholder.com/150",
// // // // //     price = 0,
// // // // //     original_price = price,
// // // // //     discount_price = null,
// // // // //   } = product;

// // // // //   const quantity = item?.quantity ?? 1;
// // // // //   const sizeFromApi = item?.size ?? "Free Size";

// // // // //   const finalPrice = discount_price ?? price;
// // // // //   const savedAmount = original_price - finalPrice;

// // // // //   // ===========================
// // // // //   // 🔄 LOCAL UI STATE
// // // // //   // ===========================
// // // // //   const [sizeModal, setSizeModal] = useState(false);
// // // // //   const [qtyModal, setQtyModal] = useState(false);
// // // // //   const [removeModal, setRemoveModal] = useState(false);

// // // // //   const [size, setSize] = useState(sizeFromApi);
// // // // //   const [qty, setQty] = useState(quantity);

// // // // //   const { updateItem, removeItem } = useCart();

// // // // //   return (
// // // // //     <>
// // // // //       {/* REMOVE CONFIRM MODAL */}
// // // // //       <RemoveConfirmModal
// // // // //         open={removeModal}
// // // // //         item={item}
// // // // //         onClose={() => setRemoveModal(false)}
// // // // //         onConfirm={() => {
// // // // //           removeItem(item.id, size);
// // // // //           setRemoveModal(false);
// // // // //         }}
// // // // //       />

// // // // //       {/* SIZE MODAL */}
// // // // //       <SizeModal
// // // // //         open={sizeModal}
// // // // //         currentSize={size}
// // // // //         onClose={() => setSizeModal(false)}
// // // // //         onUpdate={(val) => {
// // // // //           setSize(val);
// // // // //           updateItem(item.id, size, { size: val });
// // // // //         }}
// // // // //       />

// // // // //       {/* QTY MODAL */}
// // // // //       <QtyModal
// // // // //         open={qtyModal}
// // // // //         currentQty={qty}
// // // // //         onClose={() => setQtyModal(false)}
// // // // //         onUpdate={(val) => {
// // // // //           setQty(val);
// // // // //           updateItem(item.id, size, { qty: val });
// // // // //         }}
// // // // //       />

// // // // //       {/* ===========================
// // // // //           🛒 CART CARD
// // // // //       =========================== */}
// // // // //       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex items-start gap-4 relative">
// // // // //         {/* Remove Button */}
// // // // //         <button
// // // // //           className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
// // // // //           onClick={() => setRemoveModal(true)}
// // // // //         >
// // // // //           <X size={20} />
// // // // //         </button>

// // // // //         {/* Image */}
// // // // //         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
// // // // //           <img src={image} className="w-full h-full object-cover" alt={name} />
// // // // //         </div>

// // // // //         {/* Middle Section */}
// // // // //         <div className="flex-1 flex flex-col gap-1">
// // // // //           {brand && (
// // // // //             <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
// // // // //               {brand}
// // // // //             </h3>
// // // // //           )}

// // // // //           <p className="text-gray-600 text-sm">{name}</p>

// // // // //           {/* Delivery */}
// // // // //           <div className="flex items-center gap-2 mt-2">
// // // // //             <span className="text-green-600 text-lg">✔</span>
// // // // //             <span className="text-gray-700 text-sm">
// // // // //               Delivery in <span className="font-semibold">3–5 days</span>
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* Size + Qty Buttons */}
// // // // //           <div className="flex gap-3 mt-3">
// // // // //             <button
// // // // //               onClick={() => setSizeModal(true)}
// // // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
// // // // //             >
// // // // //               Size: <span className="font-medium">{size}</span>
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => setQtyModal(true)}
// // // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
// // // // //             >
// // // // //               Qty: <span className="font-medium">{qty}</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* PRICE SECTION */}
// // // // //         <div className="flex flex-col items-end mt-auto pr-1">
// // // // //           <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
// // // // //             ₹{(finalPrice * qty).toLocaleString("en-IN")}
// // // // //           </p>

// // // // //           {original_price > finalPrice && (
// // // // //             <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
// // // // //               ₹{(original_price * qty).toLocaleString("en-IN")}
// // // // //             </p>
// // // // //           )}

// // // // //           {savedAmount > 0 && (
// // // // //             <p className="text-[15px] text-[#16a34a] font-medium mt-1">
// // // // //               You saved ₹{(savedAmount * qty).toLocaleString("en-IN")}
// // // // //             </p>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default CartItem;

// // // // import { useState } from "react";
// // // // import { X } from "lucide-react";
// // // // import SizeModal from "./SizeModal";
// // // // import QtyModal from "./QtyModal";
// // // // import RemoveConfirmModal from "./RemoveConfirmModal";
// // // // import { useCart } from "../../../context/CartContext";

// // // // const CartItem = ({ item }) => {
// // // //   const product = item?.product_details || {};
// // // //   console.log(product);
// // // //   const {
// // // //     name = "Product",
// // // //     brand = "",
// // // //     image = "https://via.placeholder.com/150",
// // // //     price = 0,
// // // //     original_price = price,
// // // //     discount_price = null,
// // // //   } = product;

// // // //   const finalPrice = discount_price ?? price;
// // // //   const quantity = item?.quantity ?? 1;
// // // //   const sizeFromApi = item?.size ?? "Free Size";

// // // //   const savedAmount = original_price - finalPrice;

// // // //   const [sizeModal, setSizeModal] = useState(false);
// // // //   const [qtyModal, setQtyModal] = useState(false);
// // // //   const [removeModal, setRemoveModal] = useState(false);

// // // //   const [size, setSize] = useState(sizeFromApi);
// // // //   const [qty, setQty] = useState(quantity);

// // // //   const { removeItem, updateQuantity, updateSize } = useCart();

// // // //   // ===========================
// // // //   // HANDLERS
// // // //   // ===========================
// // // //   const handleRemove = async () => {
// // // //     await removeItem(item.id);
// // // //     window.location.reload(); // 🔁 simplest sync (later we optimize)
// // // //   };

// // // //   const handleQtyUpdate = async (val) => {
// // // //     setQty(val);
// // // //     await updateQuantity(item.id, val);
// // // //     window.location.reload();
// // // //   };

// // // //   const handleSizeUpdate = async (val) => {
// // // //     setSize(val);
// // // //     await updateSize(item.id, val);
// // // //     window.location.reload();
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* REMOVE MODAL */}
// // // //       <RemoveConfirmModal
// // // //         open={removeModal}
// // // //         item={item}
// // // //         onClose={() => setRemoveModal(false)}
// // // //         onConfirm={handleRemove}
// // // //       />

// // // //       {/* SIZE MODAL */}
// // // //       <SizeModal
// // // //         open={sizeModal}
// // // //         currentSize={size}
// // // //         onClose={() => setSizeModal(false)}
// // // //         onUpdate={handleSizeUpdate}
// // // //       />

// // // //       {/* QTY MODAL */}
// // // //       <QtyModal
// // // //         open={qtyModal}
// // // //         currentQty={qty}
// // // //         onClose={() => setQtyModal(false)}
// // // //         onUpdate={handleQtyUpdate}
// // // //       />

// // // //       {/* CARD */}
// // // //       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex items-start gap-4 relative">
// // // //         <button
// // // //           className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
// // // //           onClick={() => setRemoveModal(true)}
// // // //         >
// // // //           <X size={20} />
// // // //         </button>

// // // //         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
// // // //           <img src={image} alt={name} className="w-full h-full object-cover" />
// // // //         </div>

// // // //         <div className="flex-1 flex flex-col gap-1">
// // // //           {brand && <h3 className="font-semibold">{brand}</h3>}
// // // //           <p className="text-sm text-gray-600">{name}</p>

// // // //           <div className="flex gap-3 mt-3">
// // // //             <button
// // // //               onClick={() => setSizeModal(true)}
// // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// // // //             >
// // // //               Size: <b>{size}</b>
// // // //             </button>

// // // //             <button
// // // //               onClick={() => setQtyModal(true)}
// // // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// // // //             >
// // // //               Qty: <b>{qty}</b>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex flex-col items-end mt-auto">
// // // //           <p className="text-lg font-bold">
// // // //             ₹{(finalPrice * qty).toLocaleString("en-IN")}
// // // //           </p>

// // // //           {original_price > finalPrice && (
// // // //             <p className="line-through text-gray-400 text-sm">
// // // //               ₹{(original_price * qty).toLocaleString("en-IN")}
// // // //             </p>
// // // //           )}

// // // //           {savedAmount > 0 && (
// // // //             <p className="text-green-600 text-sm">
// // // //               You saved ₹{(savedAmount * qty).toLocaleString("en-IN")}
// // // //             </p>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default CartItem;

// // // import { useState } from "react";
// // // import { X } from "lucide-react";
// // // import SizeModal from "./SizeModal";
// // // import QtyModal from "./QtyModal";
// // // import RemoveConfirmModal from "./RemoveConfirmModal";
// // // import { useCart } from "../../../context/CartContext";

// // // const CartItem = ({ item }) => {
// // //   // ===========================
// // //   // SAFE DATA MAPPING
// // //   // ===========================
// // //   const product = item?.product_details || {};

// // //   const {
// // //     name = "Product",
// // //     brand = "",
// // //     image = "https://via.placeholder.com/150",
// // //     price = 0,
// // //     original_price = price,
// // //     discount_price = null,
// // //   } = product;

// // //   const finalPrice = discount_price ?? price;
// // //   const quantityFromApi = item?.quantity ?? 1;
// // //   const sizeFromApi = item?.size ?? "Free Size";
// // //   const savedAmount = original_price - finalPrice;

// // //   // ===========================
// // //   // LOCAL UI STATE
// // //   // ===========================
// // //   const [sizeModal, setSizeModal] = useState(false);
// // //   const [qtyModal, setQtyModal] = useState(false);
// // //   const [removeModal, setRemoveModal] = useState(false);

// // //   const [size, setSize] = useState(sizeFromApi);
// // //   const [qty, setQty] = useState(quantityFromApi);

// // //   const { removeItem, updateQuantity, updateSize } = useCart();

// // //   // ===========================
// // //   // HANDLERS (NO PAGE RELOAD)
// // //   // ===========================
// // //   const handleRemove = async () => {
// // //     await removeItem(item.id);
// // //     setRemoveModal(false);
// // //   };

// // //   const handleQtyUpdate = async (val) => {
// // //     setQty(val); // instant UI update
// // //     await updateQuantity(item.id, val);
// // //   };

// // //   const handleSizeUpdate = async (val) => {
// // //     setSize(val);
// // //     await updateSize(item.id, val);
// // //   };

// // //   return (
// // //     <>
// // //       {/* REMOVE CONFIRM MODAL */}
// // //       <RemoveConfirmModal
// // //         open={removeModal}
// // //         item={item}
// // //         onClose={() => setRemoveModal(false)}
// // //         onConfirm={handleRemove}
// // //       />

// // //       {/* SIZE MODAL */}
// // //       <SizeModal
// // //         open={sizeModal}
// // //         currentSize={size}
// // //         onClose={() => setSizeModal(false)}
// // //         onUpdate={handleSizeUpdate}
// // //       />

// // //       {/* QTY MODAL */}
// // //       <QtyModal
// // //         open={qtyModal}
// // //         currentQty={qty}
// // //         onClose={() => setQtyModal(false)}
// // //         onUpdate={handleQtyUpdate}
// // //       />

// // //       {/* CART CARD */}
// // //       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex items-start gap-4 relative">
// // //         {/* Remove Button */}
// // //         <button
// // //           className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
// // //           onClick={() => setRemoveModal(true)}
// // //         >
// // //           <X size={20} />
// // //         </button>

// // //         {/* Image */}
// // //         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
// // //           <img src={image} alt={name} className="w-full h-full object-cover" />
// // //         </div>

// // //         {/* Details */}
// // //         <div className="flex-1 flex flex-col gap-1">
// // //           {brand && <h3 className="font-semibold">{brand}</h3>}
// // //           <p className="text-sm text-gray-600">{name}</p>

// // //           <div className="flex gap-3 mt-3">
// // //             <button
// // //               onClick={() => setSizeModal(true)}
// // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// // //             >
// // //               Size: <b>{size}</b>
// // //             </button>

// // //             <button
// // //               onClick={() => setQtyModal(true)}
// // //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// // //             >
// // //               Qty: <b>{qty}</b>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Price */}
// // //         <div className="flex flex-col items-end mt-auto">
// // //           <p className="text-lg font-bold">
// // //             ₹{(finalPrice * qty).toLocaleString("en-IN")}
// // //           </p>

// // //           {original_price > finalPrice && (
// // //             <p className="line-through text-gray-400 text-sm">
// // //               ₹{(original_price * qty).toLocaleString("en-IN")}
// // //             </p>
// // //           )}

// // //           {savedAmount > 0 && (
// // //             <p className="text-green-600 text-sm">
// // //               You saved ₹{(savedAmount * qty).toLocaleString("en-IN")}
// // //             </p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default CartItem;

// // import { useState } from "react";
// // import { X } from "lucide-react";
// // import { useCart } from "../../../context/CartContext";

// // import SizeModal from "./SizeModal";
// // import QtyModal from "./QtyModal";
// // import RemoveConfirmModal from "./RemoveConfirmModal";

// // const CartItem = ({ item }) => {
// //   // =========================
// //   // BACKEND DATA (SAFE)
// //   // =========================
// //   const product = item.product_details || {};

// //   const {
// //     name = "Product",
// //     main_image,
// //     hover_image,
// //     price = 0,
// //     mrp = price,
// //     brand,
// //   } = product;

// //   const quantity = item.quantity || 1;
// //   const size = item.size || "Free Size";

// //   const image = main_image || hover_image;
// //   const savedAmount = mrp - price;

// //   // =========================
// //   // MODAL STATE
// //   // =========================
// //   const [qtyModal, setQtyModal] = useState(false);
// //   const [sizeModal, setSizeModal] = useState(false);
// //   const [removeModal, setRemoveModal] = useState(false);

// //   // =========================
// //   // CONTEXT
// //   // =========================
// //   const { updateQuantity, updateSize, removeItem } = useCart();

// //   // =========================
// //   // HANDLERS
// //   // =========================
// //   const handleQtyUpdate = async (val) => {
// //     await updateQuantity(item.id, val);
// //   };

// //   const handleSizeUpdate = async (val) => {
// //     await updateSize(item.id, val);
// //   };

// //   const handleRemove = async () => {
// //     await removeItem(item.id);
// //     setRemoveModal(false);
// //   };

// //   return (
// //     <>
// //       {/* ================= MODALS ================= */}
// //       <RemoveConfirmModal
// //         open={removeModal}
// //         onClose={() => setRemoveModal(false)}
// //         onConfirm={handleRemove}
// //       />

// //       <QtyModal
// //         open={qtyModal}
// //         currentQty={quantity}
// //         onClose={() => setQtyModal(false)}
// //         onUpdate={handleQtyUpdate}
// //       />

// //       <SizeModal
// //         open={sizeModal}
// //         currentSize={size}
// //         onClose={() => setSizeModal(false)}
// //         onUpdate={handleSizeUpdate}
// //       />

// //       {/* ================= CART ITEM ================= */}
// //       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex gap-4 relative">
// //         {/* REMOVE */}
// //         <button
// //           className="absolute top-5 right-5 text-gray-400 hover:text-red-600"
// //           onClick={() => setRemoveModal(true)}
// //         >
// //           <X size={20} />
// //         </button>

// //         {/* IMAGE */}
// //         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
// //           <img src={image} alt={name} className="w-full h-full object-cover" />
// //         </div>

// //         {/* DETAILS */}
// //         <div className="flex-1 flex flex-col gap-1">
// //           {brand && <h3 className="font-semibold">{brand}</h3>}
// //           <p className="text-sm text-gray-700">{name}</p>

// //           <div className="flex gap-3 mt-3">
// //             <button
// //               onClick={() => setSizeModal(true)}
// //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// //             >
// //               Size: <b>{size}</b>
// //             </button>

// //             <button
// //               onClick={() => setQtyModal(true)}
// //               className="px-4 py-2 bg-gray-100 rounded-md text-sm"
// //             >
// //               Qty: <b>{quantity}</b>
// //             </button>
// //           </div>
// //         </div>

// //         {/* PRICE */}
// //         <div className="flex flex-col items-end justify-end">
// //           <p className="text-lg font-bold">
// //             ₹{(price * quantity).toLocaleString("en-IN")}
// //           </p>

// //           {mrp > price && (
// //             <p className="line-through text-gray-400 text-sm">
// //               ₹{(mrp * quantity).toLocaleString("en-IN")}
// //             </p>
// //           )}

// //           {savedAmount > 0 && (
// //             <p className="text-green-600 text-sm">
// //               You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CartItem;

// import { useState } from "react";
// import { X } from "lucide-react";
// import { useCart } from "../../../context/CartContext";

// import SizeModal from "./SizeModal";
// import QtyModal from "./QtyModal";
// import RemoveConfirmModal from "./RemoveConfirmModal";

// const CartItem = ({ item }) => {
//   // =========================
//   // BACKEND DATA (SAFE)
//   // =========================
//   const product = item?.product_details || {};

//   const {
//     name = "Product",
//     main_image,
//     hover_image,
//     price = 0,
//     mrp = price,
//     brand,
//   } = product;

//   const quantity = item?.quantity || 1;
//   const size = item?.size || "Free Size";

//   const image =
//     main_image ||
//     hover_image ||
//     "https://via.placeholder.com/120x150?text=No+Image";

//   const savedAmount = mrp - price;

//   // =========================
//   // MODAL STATE
//   // =========================
//   const [qtyModal, setQtyModal] = useState(false);
//   const [sizeModal, setSizeModal] = useState(false);
//   const [removeModal, setRemoveModal] = useState(false);
//   const [updating, setUpdating] = useState(false); // ✅ NEW

//   // =========================
//   // CONTEXT
//   // =========================
//   const { updateQuantity, updateSize, removeItem } = useCart();

//   // =========================
//   // HANDLERS
//   // =========================
//   const handleQtyUpdate = async (val) => {
//     if (updating) return;
//     setUpdating(true);
//     await updateQuantity(item.id, val);
//     setUpdating(false);
//   };

//   const handleSizeUpdate = async (val) => {
//     if (updating) return;
//     setUpdating(true);
//     await updateSize(item.id, val);
//     setUpdating(false);
//   };

//   const handleRemove = async () => {
//     setUpdating(true);
//     await removeItem(item.id);
//     setUpdating(false);
//     setRemoveModal(false);
//   };

//   return (
//     <>
//       {/* ================= MODALS ================= */}
//       <RemoveConfirmModal
//         open={removeModal}
//         item={item}                 {/* ✅ FIX 1 */}
//         onClose={() => setRemoveModal(false)}
//         onConfirm={handleRemove}
//       />

//       <QtyModal
//         open={qtyModal}
//         currentQty={quantity}
//         onClose={() => setQtyModal(false)}
//         onUpdate={handleQtyUpdate}
//       />

//       <SizeModal
//         open={sizeModal}
//         currentSize={size}
//         onClose={() => setSizeModal(false)}
//         onUpdate={handleSizeUpdate}
//       />

//       {/* ================= CART ITEM ================= */}
//       <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex gap-4 relative">
//         {/* REMOVE */}
//         <button
//           className="absolute top-5 right-5 text-gray-400 hover:text-red-600 disabled:opacity-50"
//           onClick={() => setRemoveModal(true)}
//           disabled={updating}
//         >
//           <X size={20} />
//         </button>

//         {/* IMAGE */}
//         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1 flex flex-col gap-1">
//           {brand && <h3 className="font-semibold">{brand}</h3>}
//           <p className="text-sm text-gray-700">{name}</p>

//           <div className="flex gap-3 mt-3">
//             <button
//               onClick={() => setSizeModal(true)}
//               disabled={updating}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm disabled:opacity-50"
//             >
//               Size: <b>{size}</b>
//             </button>

//             <button
//               onClick={() => setQtyModal(true)}
//               disabled={updating}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm disabled:opacity-50"
//             >
//               Qty: <b>{quantity}</b>
//             </button>
//           </div>
//         </div>

//         {/* PRICE */}
//         <div className="flex flex-col items-end justify-end">
//           <p className="text-lg font-bold">
//             ₹{(price * quantity).toLocaleString("en-IN")}
//           </p>

//           {mrp > price && (
//             <p className="line-through text-gray-400 text-sm">
//               ₹{(mrp * quantity).toLocaleString("en-IN")}
//             </p>
//           )}

//           {savedAmount > 0 && (
//             <p className="text-green-600 text-sm">
//               You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartItem;

import { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../../../context/CartContext";

import SizeModal from "./SizeModal";
import QtyModal from "./QtyModal";
import RemoveConfirmModal from "./RemoveConfirmModal";

const CartItem = ({ item }) => {
  // =========================
  // BACKEND DATA (SAFE)
  // =========================
  const product = item?.product_details || {};

  const {
    name = "Product",
    main_image,
    hover_image,
    price = 0,
    mrp = price,
    brand,
  } = product;

  const quantity = item?.quantity || 1;
  const size = item?.size || "Free Size";

  const image =
    main_image ||
    hover_image ||
    "https://via.placeholder.com/120x150?text=No+Image";

  const savedAmount = mrp - price;

  // =========================
  // MODAL STATE
  // =========================
  const [qtyModal, setQtyModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [updating, setUpdating] = useState(false);

  // =========================
  // CONTEXT
  // =========================
  const { updateQuantity, updateSize, removeItem } = useCart();

  // =========================
  // HANDLERS
  // =========================
  const handleQtyUpdate = async (val) => {
    if (updating) return;
    setUpdating(true);
    await updateQuantity(item.id, val);
    setUpdating(false);
  };

  const handleSizeUpdate = async (val) => {
    if (updating) return;
    setUpdating(true);
    await updateSize(item.id, val);
    setUpdating(false);
  };

  const handleRemove = async () => {
    setUpdating(true);
    await removeItem(item.id);
    setUpdating(false);
    setRemoveModal(false);
  };

  return (
    <>
      {/* MODALS */}
      <RemoveConfirmModal
        open={removeModal}
        item={item}
        onClose={() => setRemoveModal(false)}
        onConfirm={handleRemove}
      />

      <QtyModal
        open={qtyModal}
        currentQty={quantity}
        onClose={() => setQtyModal(false)}
        onUpdate={handleQtyUpdate}
      />

      <SizeModal
        open={sizeModal}
        currentSize={size}
        onClose={() => setSizeModal(false)}
        onUpdate={handleSizeUpdate}
      />

      {/* CART ITEM */}
      <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex gap-4 relative">
        {/* REMOVE */}
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-red-600 disabled:opacity-50"
          onClick={() => setRemoveModal(true)}
          disabled={updating}
        >
          <X size={20} />
        </button>

        {/* IMAGE */}
        <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* DETAILS */}
        <div className="flex-1 flex flex-col gap-1">
          {brand && <h3 className="font-semibold">{brand}</h3>}
          <p className="text-sm text-gray-700">{name}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setSizeModal(true)}
              disabled={updating}
              className="px-4 py-2 bg-gray-100 rounded-md text-sm disabled:opacity-50"
            >
              Size: <b>{size}</b>
            </button>

            <button
              onClick={() => setQtyModal(true)}
              disabled={updating}
              className="px-4 py-2 bg-gray-100 rounded-md text-sm disabled:opacity-50"
            >
              Qty: <b>{quantity}</b>
            </button>
          </div>
        </div>

        {/* PRICE */}
        <div className="flex flex-col items-end justify-end">
          <p className="text-lg font-bold">
            ₹{(price * quantity).toLocaleString("en-IN")}
          </p>

          {mrp > price && (
            <p className="line-through text-gray-400 text-sm">
              ₹{(mrp * quantity).toLocaleString("en-IN")}
            </p>
          )}

          {savedAmount > 0 && (
            <p className="text-green-600 text-sm">
              You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItem;
