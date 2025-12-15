// // // import React, { useState } from "react";
// // // import { X } from "lucide-react";

// // // const QtyModal = ({ open, currentQty, onClose, onUpdate }) => {
// // //   if (!open) return null;

// // //   const qtyList = Array.from({ length: 10 }, (_, i) => i + 1);
// // //   const [selected, setSelected] = useState(currentQty);

// // //   return (
// // //     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
// // //       <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
// // //         {/* Close Button */}
// // //         <button
// // //           className="absolute right-4 top-4 text-gray-500 hover:text-black transition"
// // //           onClick={onClose}
// // //         >
// // //           <X size={22} />
// // //         </button>

// // //         <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>

// // //         {/* Quantity Buttons */}
// // //         <div className="grid grid-cols-5 gap-3 mb-6">
// // //           {qtyList.map((q) => (
// // //             <button
// // //               key={q}
// // //               onClick={() => setSelected(q)}
// // //               className={`py-2 rounded-lg border text-sm font-medium transition
// // //                 ${
// // //                   selected === q
// // //                     ? "bg-primary text-white border-primary"
// // //                     : "border-gray-300 hover:bg-neutral"
// // //                 }
// // //               `}
// // //             >
// // //               {q}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Update Button */}
// // //         <button
// // //           disabled={!selected}
// // //           onClick={() => {
// // //             onUpdate(selected);
// // //             onClose();
// // //           }}
// // //           className={`w-full py-3 rounded-xl text-lg font-semibold transition
// // //             ${
// // //               selected
// // //                 ? "bg-primary text-white hover:bg-secondary"
// // //                 : "bg-neutral cursor-not-allowed"
// // //             }
// // //           `}
// // //         >
// // //           UPDATE
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QtyModal;

// // import React, { useEffect, useState } from "react";
// // import { X } from "lucide-react";

// // const QtyModal = ({ open, currentQty, maxQty = 1, onClose, onUpdate }) => {
// //   const [selected, setSelected] = useState(currentQty);

// //   useEffect(() => {
// //     setSelected(currentQty);
// //   }, [currentQty]);

// //   if (!open) return null;

// //   const qtyList = Array.from({ length: maxQty }, (_, i) => i + 1);

// //   return (
// //     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
// //       <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
// //         {/* CLOSE */}
// //         <button
// //           className="absolute right-4 top-4 text-gray-500 hover:text-black"
// //           onClick={onClose}
// //         >
// //           <X size={22} />
// //         </button>

// //         <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>

// //         <div className="grid grid-cols-5 gap-3 mb-6">
// //           {qtyList.map((q) => (
// //             <button
// //               key={q}
// //               onClick={() => setSelected(q)}
// //               className={`py-2 rounded-lg border text-sm font-medium
// //                 ${
// //                   selected === q
// //                     ? "bg-primary text-white border-primary"
// //                     : "border-gray-300 hover:bg-neutral"
// //                 }`}
// //             >
// //               {q}
// //             </button>
// //           ))}
// //         </div>

// //         <button
// //           onClick={() => {
// //             onUpdate(selected);
// //             onClose();
// //           }}
// //           className="w-full py-3 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-secondary"
// //         >
// //           UPDATE
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QtyModal;

// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";

// const QtyModal = ({ open, currentQty, maxQty = 1, onClose, onUpdate }) => {
//   const [selected, setSelected] = useState(currentQty);

//   useEffect(() => {
//     setSelected(currentQty);
//   }, [currentQty]);

//   if (!open) return null;

//   // ✅ show max 10, or less if stock is less
//   const limit = Math.min(maxQty, 10);
//   const qtyList = Array.from({ length: limit }, (_, i) => i + 1);

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//       <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
//         {/* CLOSE */}
//         <button
//           className="absolute right-4 top-4 text-gray-500 hover:text-black"
//           onClick={onClose}
//         >
//           <X size={22} />
//         </button>

//         <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>

//         <div className="grid grid-cols-5 gap-3 mb-6">
//           {qtyList.map((q) => (
//             <button
//               key={q}
//               onClick={() => setSelected(q)}
//               className={`py-2 rounded-lg border text-sm font-medium transition
//                 ${
//                   selected === q
//                     ? "bg-primary text-white border-primary"
//                     : "border-gray-300 hover:bg-neutral"
//                 }`}
//             >
//               {q}
//             </button>
//           ))}
//         </div>

//         <button
//           disabled={!selected}
//           onClick={() => {
//             onUpdate(selected);
//             onClose();
//           }}
//           className={`w-full py-3 rounded-xl text-lg font-semibold transition
//             ${
//               selected
//                 ? "bg-primary text-white hover:bg-secondary"
//                 : "bg-neutral cursor-not-allowed"
//             }`}
//         >
//           UPDATE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QtyModal;

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const QtyModal = ({ open, currentQty, maxQty = 1, onClose, onUpdate }) => {
  const [selected, setSelected] = useState(currentQty);

  useEffect(() => {
    setSelected(currentQty);
  }, [currentQty]);

  if (!open) return null;

  const qtyLimit = Math.min(maxQty, 10);
  const qtyList = Array.from({ length: qtyLimit }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {qtyList.map((q) => (
            <button
              key={q}
              onClick={() => setSelected(q)}
              className={`py-2 rounded-lg border text-sm font-medium
                ${
                  selected === q
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 hover:bg-neutral"
                }`}
            >
              {q}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            onUpdate(selected);
            onClose();
          }}
          className="w-full py-3 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-secondary"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default QtyModal;
