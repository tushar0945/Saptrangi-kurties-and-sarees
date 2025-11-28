// // // // // // // import { CreditCard, Plus, Trash2 } from "lucide-react";

// // // // // // // const Payments = () => {
// // // // // // //   return (
// // // // // // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm">
// // // // // // //       {/* PAGE TITLE */}
// // // // // // //       <h1 className="text-xl font-bold text-[#222]">My Payments</h1>

// // // // // // //       {/* MAIN BOX */}
// // // // // // //       <div className="mt-6">
// // // // // // //         {/* ---- Debit & Credit Cards ---- */}
// // // // // // //         <h2 className="font-semibold text-[15px] text-[#222] mb-3">
// // // // // // //           Debit & Credit Cards
// // // // // // //         </h2>

// // // // // // //         <div className="border border-[#e5e5e5] rounded-lg p-5 flex items-center gap-3">
// // // // // // //           <CreditCard size={22} className="text-gray-500" />
// // // // // // //           <span className="text-gray-600 text-[14px]">
// // // // // // //             No Debit/Credit Card saved
// // // // // // //           </span>
// // // // // // //         </div>

// // // // // // //         {/* ---- UPI Section ---- */}
// // // // // // //         <div className="mt-8">
// // // // // // //           <h2 className="font-semibold text-[15px] text-[#222] mb-3">UPI</h2>

// // // // // // //           <div className="border border-[#e5e5e5] rounded-lg p-5">
// // // // // // //             {/* SAVED UPI */}
// // // // // // //             <div className="flex items-center justify-between">
// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <img
// // // // // // //                   src="/images/gpay.png" // replace with your UPI icon
// // // // // // //                   alt="upi"
// // // // // // //                   className="w-8 h-8"
// // // // // // //                 />
// // // // // // //                 <span className="text-[#222] text-[15px]">
// // // // // // //                   tp909580@okhdfcbank
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               <button className="text-[#2874f0] text-sm font-semibold hover:underline">
// // // // // // //                 REMOVE
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             {/* Divider */}
// // // // // // //             <div className="mt-4 mb-4 border-b border-[#e5e5e5]"></div>

// // // // // // //             {/* Add UPI */}
// // // // // // //             <button className="flex items-center gap-2 text-[#444] hover:text-black">
// // // // // // //               <Plus size={20} className="text-[#2874f0]" />
// // // // // // //               <span className="text-[15px]">Add UPI ID</span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Payments;

// // // // // // import upiimg from "../../../../public/upi.png";
// // // // // // const Payments = () => {
// // // // // //   return (
// // // // // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm">
// // // // // //       {/* TITLE */}
// // // // // //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// // // // // //       {/* UPI SECTION */}
// // // // // //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// // // // // //       <div className="border border-[#e5e5e5] rounded-lg p-5">
// // // // // //         {/* SAVED UPI ROW */}
// // // // // //         <div className="flex items-center justify-between">
// // // // // //           <div className="flex items-center gap-3">
// // // // // //             <img
// // // // // //               src="/gpay.jpg" // ← replace with your correct path
// // // // // //               alt="upi"
// // // // // //               className="w-[32px] h-[32px]"
// // // // // //             />
// // // // // //             <span className="text-[#222] text-[15px]">tp909580@okhdfcbank</span>
// // // // // //           </div>

// // // // // //           <button className="text-[#2874f0] text-[14px] font-semibold hover:underline">
// // // // // //             REMOVE
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* DIVIDER */}
// // // // // //         <div className="mt-4 mb-4 border-b border-[#e5e5e5]"></div>

// // // // // //         {/* ADD UPI ROW */}
// // // // // //         <div className="flex items-center justify-between cursor-pointer">
// // // // // //           <div className="flex items-center gap-3">
// // // // // //             <img src="/upi.png" alt="upi" className="w-[28px] h-[28px]" />
// // // // // //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// // // // // //           </div>

// // // // // //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// // // // // //             <span className="text-[#2874f0] text-lg">+</span>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payments;

// // // // // const Payments = () => {
// // // // //   return (
// // // // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm">
// // // // //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// // // // //       {/* UPI */}
// // // // //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// // // // //       <div className="border border-[#e5e5e5] rounded-lg p-5">
// // // // //         {/* SAVED UPI */}
// // // // //         <div className="flex items-center justify-between">
// // // // //           <div className="flex items-center gap-3">
// // // // //             <img
// // // // //               src="/gpay.jpg"
// // // // //               alt="gpay"
// // // // //               className="w-[24px] h-[24px] object-contain"
// // // // //             />
// // // // //             <span className="text-[#222] text-[15px]">tp909580@okhdfcbank</span>
// // // // //           </div>

// // // // //           <button className="text-[#2874f0] text-[14px] font-semibold hover:underline">
// // // // //             REMOVE
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* DIVIDER */}
// // // // //         <div className="mt-4 mb-4 border-b border-[#e4e4e4]"></div>

// // // // //         {/* ADD UPI */}
// // // // //         <div className="flex items-center justify-between cursor-pointer">
// // // // //           <div className="flex items-center gap-3">
// // // // //             <img
// // // // //               src="/upi.png"
// // // // //               alt="upi"
// // // // //               className="w-[20px] h-[20px] object-contain opacity-80"
// // // // //             />
// // // // //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// // // // //           </div>

// // // // //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// // // // //             <span className="text-[#2874f0] text-xl leading-none">+</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payments;

// // // // import { useState } from "react";
// // // // import AddUPIModal from "./AddUPIModal"; // adjust path as needed

// // // // const Payments = () => {
// // // //   const [upiModalOpen, setUpiModalOpen] = useState(false);

// // // //   return (
// // // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm">
// // // //       {/* MODAL */}
// // // //       <AddUPIModal open={upiModalOpen} onClose={() => setUpiModalOpen(false)} />

// // // //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// // // //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// // // //       <div className="border border-[#e5e5e5] rounded-lg p-5">
// // // //         {/* SAVED UPI */}
// // // //         <div className="flex items-center justify-between">
// // // //           <div className="flex items-center gap-3">
// // // //             <img src="/gpay.jpg" className="w-[24px] h-[24px]" />
// // // //             <span className="text-[#222] text-[15px]">tp909580@okhdfcbank</span>
// // // //           </div>

// // // //           <button className="text-[#2874f0] text-[14px] font-semibold hover:underline">
// // // //             REMOVE
// // // //           </button>
// // // //         </div>

// // // //         <div className="mt-4 mb-4 border-b border-[#e4e4e4]"></div>

// // // //         {/* ADD UPI ROW */}
// // // //         <div
// // // //           className="flex items-center justify-between cursor-pointer"
// // // //           onClick={() => setUpiModalOpen(true)} // ← open modal
// // // //         >
// // // //           <div className="flex items-center gap-3">
// // // //             <img src="/upi.png" className="w-[20px] h-[20px] opacity-80" />
// // // //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// // // //           </div>

// // // //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// // // //             <span className="text-[#2874f0] text-xl leading-none">+</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payments;

// // // // import { useState } from "react";
// // // // import DeleteConfirmModal from "./DeleteConfirmModal";

// // // // // import upiLogo from "/upi.png";
// // // // // import gpayLogo from "/gpay.png";

// // // // const Payments = () => {
// // // //   const [upiList, setUpiList] = useState(["tp909580@okhdfcbank"]); // sample
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [newUpi, setNewUpi] = useState("");
// // // //   const [confirmDelete, setConfirmDelete] = useState(false);
// // // //   const [selectedUpi, setSelectedUpi] = useState(null);

// // // //   const handleRemove = (upi) => {
// // // //     setUpiList((prev) => prev.filter((item) => item !== upi));
// // // //   };

// // // //   const handleAddUpi = () => {
// // // //     if (!newUpi.trim()) return;
// // // //     setUpiList([...upiList, newUpi]);
// // // //     setShowModal(false);
// // // //     setNewUpi("");
// // // //   };

// // // //   return (
// // // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
// // // //       {/* TITLE */}
// // // //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// // // //       {/* UPI TITLE */}
// // // //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// // // //       {/* MAIN UPI BOX */}
// // // //       <div className="border border-[#e4e4e4] rounded-xl p-6">
// // // //         {/* IF UPI EXISTS */}
// // // //         {upiList.length > 0 ? (
// // // //           <>
// // // //             {upiList.map((upi) => (
// // // //               <div key={upi}>
// // // //                 <div className="flex items-center justify-between">
// // // //                   {/* LEFT */}
// // // //                   <div className="flex items-center gap-3">
// // // //                     <img
// // // //                       src="/gpay.jpg"
// // // //                       className="w-[26px] h-[26px] object-contain rounded-md"
// // // //                     />
// // // //                     <span className="text-[15px]">{upi}</span>
// // // //                   </div>

// // // //                   {/* REMOVE */}
// // // //                   <button
// // // //                     onClick={() => {
// // // //                       setSelectedUpi(upi);
// // // //                       setConfirmDelete(true);
// // // //                     }}
// // // //                     className="text-[#2874f0] text-[14px] font-semibold hover:underline"
// // // //                   >
// // // //                     REMOVE
// // // //                   </button>
// // // //                 </div>

// // // //                 {/* Divider */}
// // // //                 <div className="my-4 border-b border-[#e4e4e4]"></div>
// // // //               </div>
// // // //             ))}
// // // //           </>
// // // //         ) : null}

// // // //         {/* ADD UPI ROW */}
// // // //         <div
// // // //           onClick={() => setShowModal(true)}
// // // //           className="flex items-center justify-between cursor-pointer"
// // // //         >
// // // //           <div className="flex items-center gap-3">
// // // //             <img
// // // //               src="/upi.png"
// // // //               className="w-[22px] h-[22px] object-contain opacity-90"
// // // //             />
// // // //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// // // //           </div>

// // // //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// // // //             <span className="text-[#2874f0] text-lg leading-none">+</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* MODAL */}
// // // //       {showModal && (
// // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // //           <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
// // // //             {/* CLOSE BUTTON */}
// // // //             <button
// // // //               onClick={() => setShowModal(false)}
// // // //               className="absolute right-5 top-5 text-gray-600 text-xl"
// // // //             >
// // // //               ✕
// // // //             </button>

// // // //             {/* TITLE */}
// // // //             <h2 className="text-xl font-bold text-center mb-6">Add UPI ID</h2>

// // // //             {/* INPUT */}
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Enter UPI Id"
// // // //               value={newUpi}
// // // //               onChange={(e) => setNewUpi(e.target.value)}
// // // //               className="w-full border-b border-gray-300 pb-2 outline-none mb-4"
// // // //             />

// // // //             <p className="text-[13px] text-gray-600 mb-6">
// // // //               UPI ID is in the format of yourname@bankname or
// // // //               yourmobile@bankname
// // // //             </p>

// // // //             {/* ADD BUTTON */}
// // // //             <button
// // // //               onClick={handleAddUpi}
// // // //               className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
// // // //             >
// // // //               ADD
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payments;

// // // import { useState } from "react";
// // // import DeleteConfirmModal from "./DeleteConfirmModal";

// // // // import upiLogo from "/upi.png";
// // // // import gpayLogo from "/gpay.png";

// // // const Payments = () => {
// // //   const [upiList, setUpiList] = useState(["tp909580@okhdfcbank"]); // sample
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [newUpi, setNewUpi] = useState("");
// // //   const [confirmDelete, setConfirmDelete] = useState(false);
// // //   const [selectedUpi, setSelectedUpi] = useState(null);

// // //   const handleRemove = (upi) => {
// // //     setUpiList((prev) => prev.filter((item) => item !== upi));
// // //   };

// // //   const handleAddUpi = () => {
// // //     if (!newUpi.trim()) return;
// // //     setUpiList([...upiList, newUpi]);
// // //     setShowModal(false);
// // //     setNewUpi("");
// // //   };

// // //   return (
// // //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
// // //       {/* TITLE */}
// // //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// // //       {/* UPI TITLE */}
// // //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// // //       {/* MAIN UPI BOX */}
// // //       <div className="border border-[#e4e4e4] rounded-xl p-6">
// // //         {/* IF UPI EXISTS */}
// // //         {upiList.length > 0 ? (
// // //           <>
// // //             {upiList.map((upi) => (
// // //               <div key={upi}>
// // //                 <div className="flex items-center justify-between">
// // //                   {/* LEFT */}
// // //                   <div className="flex items-center gap-3">
// // //                     <img
// // //                       src="/gpay.jpg"
// // //                       className="w-[26px] h-[26px] object-contain rounded-md"
// // //                     />
// // //                     <span className="text-[15px]">{upi}</span>
// // //                   </div>

// // //                   {/* REMOVE */}
// // //                   <button
// // //                     onClick={() => {
// // //                       setSelectedUpi(upi);
// // //                       setConfirmDelete(true);
// // //                     }}
// // //                     className="text-[#2874f0] text-[14px] font-semibold hover:underline"
// // //                   >
// // //                     REMOVE
// // //                   </button>
// // //                 </div>

// // //                 {/* Divider */}
// // //                 <div className="my-4 border-b border-[#e4e4e4]"></div>
// // //               </div>
// // //             ))}
// // //           </>
// // //         ) : null}

// // //         {/* ADD UPI ROW */}
// // //         <div
// // //           onClick={() => setShowModal(true)}
// // //           className="flex items-center justify-between cursor-pointer"
// // //         >
// // //           <div className="flex items-center gap-3">
// // //             <img
// // //               src="/upi.png"
// // //               className="w-[22px] h-[22px] object-contain opacity-90"
// // //             />
// // //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// // //           </div>

// // //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// // //             <span className="text-[#2874f0] text-lg leading-none">+</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* MODAL */}
// // //       {showModal && (
// // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // //           <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
// // //             {/* CLOSE BUTTON */}
// // //             <button
// // //               onClick={() => setShowModal(false)}
// // //               className="absolute right-5 top-5 text-gray-600 text-xl"
// // //             >
// // //               ✕
// // //             </button>

// // //             {/* TITLE */}
// // //             <h2 className="text-xl font-bold text-center mb-6">Add UPI ID</h2>

// // //             {/* INPUT */}
// // //             <input
// // //               type="text"
// // //               placeholder="Enter UPI Id"
// // //               value={newUpi}
// // //               onChange={(e) => setNewUpi(e.target.value)}
// // //               className="w-full border-b border-gray-300 pb-2 outline-none mb-4"
// // //             />

// // //             <p className="text-[13px] text-gray-600 mb-6">
// // //               UPI ID is in the format of yourname@bankname or
// // //               yourmobile@bankname
// // //             </p>

// // //             {/* ADD BUTTON */}
// // //             <button
// // //               onClick={handleAddUpi}
// // //               className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
// // //             >
// // //               ADD
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Payments;

// // import { useState } from "react";
// // import DeleteConfirmModal from "./DeleteConfirmModal";

// // const Payments = () => {
// //   const [upiList, setUpiList] = useState(["tp909580@okhdfcbank"]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [newUpi, setNewUpi] = useState("");
// //   const [confirmDelete, setConfirmDelete] = useState(false);
// //   const [selectedUpi, setSelectedUpi] = useState(null);

// //   const handleRemove = (upi) => {
// //     setUpiList((prev) => prev.filter((item) => item !== upi));
// //   };

// //   const handleAddUpi = () => {
// //     if (!newUpi.trim()) return;
// //     setUpiList([...upiList, newUpi]);
// //     setShowModal(false);
// //     setNewUpi("");
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
// //       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

// //       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

// //       <div className="border border-[#e4e4e4] rounded-xl p-6">
// //         {upiList.length > 0 &&
// //           upiList.map((upi) => (
// //             <div key={upi}>
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-3">
// //                   <img
// //                     src="/gpay.jpg"
// //                     className="w-[26px] h-[26px] object-contain rounded-md"
// //                   />
// //                   <span className="text-[15px]">{upi}</span>
// //                 </div>

// //                 <button
// //                   onClick={() => {
// //                     setSelectedUpi(upi);
// //                     setConfirmDelete(true);
// //                   }}
// //                   className="text-[#2874f0] text-[14px] font-semibold hover:underline"
// //                 >
// //                   REMOVE
// //                 </button>
// //               </div>

// //               <div className="my-4 border-b border-[#e4e4e4]"></div>
// //             </div>
// //           ))}

// //         {/* ADD UPI ROW */}
// //         <div
// //           onClick={() => setShowModal(true)}
// //           className="flex items-center justify-between cursor-pointer"
// //         >
// //           <div className="flex items-center gap-3">
// //             <img
// //               src="/upi.png"
// //               className="w-[22px] h-[22px] object-contain opacity-90"
// //             />
// //             <span className="text-[15px] text-[#444]">Add UPI ID</span>
// //           </div>

// //           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
// //             <span className="text-[#2874f0] text-lg leading-none">+</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ADD UPI MODAL */}
// //       {showModal && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// //           <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
// //             <button
// //               onClick={() => setShowModal(false)}
// //               className="absolute right-5 top-5 text-gray-600 text-xl"
// //             >
// //               ✕
// //             </button>

// //             <h2 className="text-xl font-bold text-center mb-6">Add UPI ID</h2>

// //             <input
// //               type="text"
// //               placeholder="Enter UPI Id"
// //               value={newUpi}
// //               onChange={(e) => setNewUpi(e.target.value)}
// //               className="w-full border-b border-gray-300 pb-2 outline-none mb-4"
// //             />

// //             <p className="text-[13px] text-gray-600 mb-6">
// //               UPI ID is in the format of yourname@bankname or
// //               yourmobile@bankname
// //             </p>

// //             <button
// //               onClick={handleAddUpi}
// //               className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
// //             >
// //               ADD
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* DELETE CONFIRM MODAL */}
// //       <DeleteConfirmModal
// //         open={confirmDelete}
// //         onClose={() => setConfirmDelete(false)}
// //         onConfirm={() => {
// //           handleRemove(selectedUpi);
// //           setConfirmDelete(false);
// //           setSelectedUpi(null);
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default Payments;

// import { useState } from "react";
// import DeleteConfirmModal from "./DeleteConfirmModal";

// const Payments = () => {
//   const [upiList, setUpiList] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newUpi, setNewUpi] = useState("");
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const [selectedUpi, setSelectedUpi] = useState(null);

//   const handleRemove = (upi) => {
//     setUpiList((prev) => prev.filter((item) => item !== upi));
//   };

//   const handleAddUpi = () => {
//     if (!newUpi.trim()) return;
//     setUpiList([...upiList, newUpi]);
//     setShowModal(false);
//     setNewUpi("");
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
//       <h1 className="text-xl font-bold text-[#222] mb-6">My Payments</h1>

//       {/* -------------------------------------------------- */}
//       {/* 🔶 DEBIT & CREDIT CARDS SECTION (NEW)             */}
//       {/* -------------------------------------------------- */}
//       <h2 className="text-[15px] font-semibold text-[#222] mb-3">
//         Debit & Credit Cards
//       </h2>

//       <div className="border border-[#e4e4e4] rounded-xl p-6 mb-8">
//         <div className="flex items-center gap-4">
//           <img
//             src="/CardPay.png"
//             alt="card"
//             className="w-[40px] h-[40px] object-contain opacity-80"
//           />

//           <span className="text-[15px] text-[#444]">
//             No Debit/Credit Card saved
//           </span>
//         </div>
//       </div>

//       {/* -------------------------------------------------- */}
//       {/* 🔷 UPI SECTION (UNCHANGED)                       */}
//       {/* -------------------------------------------------- */}
//       <h2 className="text-[15px] font-semibold text-[#222] mb-3">UPI</h2>

//       <div className="border border-[#e4e4e4] rounded-xl p-6">
//         {upiList.length > 0 &&
//           upiList.map((upi) => (
//             <div key={upi}>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src="/gpay.jpg"
//                     className="w-[26px] h-[26px] object-contain rounded-md"
//                   />
//                   <span className="text-[15px]">{upi}</span>
//                 </div>

//                 <button
//                   onClick={() => {
//                     setSelectedUpi(upi);
//                     setConfirmDelete(true);
//                   }}
//                   className="text-[#2874f0] text-[14px] font-semibold hover:underline"
//                 >
//                   REMOVE
//                 </button>
//               </div>

//               <div className="my-4 border-b border-[#e4e4e4]"></div>
//             </div>
//           ))}

//         {/* ADD UPI ROW */}
//         <div
//           onClick={() => setShowModal(true)}
//           className="flex items-center justify-between cursor-pointer"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src="/upi.png"
//               className="w-[22px] h-[22px] object-contain opacity-90"
//             />
//             <span className="text-[15px] text-[#444]">Add UPI ID</span>
//           </div>

//           <div className="w-[26px] h-[26px] rounded-full border border-[#8ab4f8] flex items-center justify-center">
//             <span className="text-[#2874f0] text-lg leading-none">+</span>
//           </div>
//         </div>
//       </div>

//       {/* ADD UPI MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute right-5 top-5 text-gray-600 text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold text-center mb-6">Add UPI ID</h2>

//             <input
//               type="text"
//               placeholder="Enter UPI Id"
//               value={newUpi}
//               onChange={(e) => setNewUpi(e.target.value)}
//               className="w-full border-b border-gray-300 pb-2 outline-none mb-4"
//             />

//             <p className="text-[13px] text-gray-600 mb-6">
//               UPI ID is in the format of yourname@bankname or
//               yourmobile@bankname
//             </p>

//             <button
//               onClick={handleAddUpi}
//               className="bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-lg font-semibold"
//             >
//               ADD
//             </button>
//           </div>
//         </div>
//       )}

//       {/* DELETE CONFIRM MODAL */}
//       <DeleteConfirmModal
//         open={confirmDelete}
//         onClose={() => setConfirmDelete(false)}
//         onConfirm={() => {
//           handleRemove(selectedUpi);
//           setConfirmDelete(false);
//           setSelectedUpi(null);
//         }}
//       />
//     </div>
//   );
// };

// export default Payments;

import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";

const Payments = () => {
  const [upiList, setUpiList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUpi, setNewUpi] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedUpi, setSelectedUpi] = useState(null);

  const handleRemove = (upi) => {
    setUpiList((prev) => prev.filter((item) => item !== upi));
  };

  const handleAddUpi = () => {
    if (!newUpi.trim()) return;
    setUpiList([...upiList, newUpi]);
    setShowModal(false);
    setNewUpi("");
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-neutral shadow-sm w-full">
      <h1 className="text-xl font-bold text-dark mb-6">My Payments</h1>

      {/* --------------------------- */}
      {/* 🔶 Debit & Credit Cards */}
      {/* --------------------------- */}
      <h2 className="text-[15px] font-semibold text-dark mb-3">
        Debit & Credit Cards
      </h2>

      <div className="border  rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <img
            src="/CardPay.png"
            alt="card"
            className="w-[40px] h-[40px] object-contain opacity-80"
          />

          <span className="text-[15px] text-dark/70">
            No Debit/Credit Card saved
          </span>
        </div>
      </div>

      {/* --------------------------- */}
      {/* 🔷 UPI */}
      {/* --------------------------- */}
      <h2 className="text-[15px] font-semibold text-dark mb-3">UPI</h2>

      <div className="border  rounded-xl p-6">
        {upiList.length > 0 &&
          upiList.map((upi) => (
            <div key={upi}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/gpay.jpg"
                    className="w-[26px] h-[26px] object-contain rounded-md"
                  />
                  <span className="text-[15px] text-dark">{upi}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedUpi(upi);
                    setConfirmDelete(true);
                  }}
                  className="text-primary text-[14px] font-semibold hover:underline"
                >
                  REMOVE
                </button>
              </div>

              <div className="my-4 border-b border-neutral"></div>
            </div>
          ))}

        {/* ADD UPI */}
        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src="/upi.png"
              className="w-[22px] h-[22px] object-contain opacity-90"
            />
            <span className="text-[15px] text-dark/70">Add UPI ID</span>
          </div>

          <div className="w-[26px] h-[26px] rounded-full border border-primary flex items-center justify-center">
            <span className="text-primary text-lg leading-none">+</span>
          </div>
        </div>
      </div>

      {/* ADD UPI MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-5 text-dark text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center text-dark mb-6">
              Add UPI ID
            </h2>

            <input
              type="text"
              placeholder="Enter UPI Id"
              value={newUpi}
              onChange={(e) => setNewUpi(e.target.value)}
              className="w-full border-b border-neutral pb-2 outline-none mb-4 text-dark"
            />

            <p className="text-[13px] text-dark/70 mb-6">
              UPI ID example: yourname@bankname or yourmobile@bankname
            </p>

            <button
              onClick={handleAddUpi}
              className="bg-primary hover:bg-secondary w-full py-3 rounded-lg font-semibold text-white transition"
            >
              ADD
            </button>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      <DeleteConfirmModal
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          handleRemove(selectedUpi);
          setConfirmDelete(false);
          setSelectedUpi(null);
        }}
      />
    </div>
  );
};

export default Payments;
