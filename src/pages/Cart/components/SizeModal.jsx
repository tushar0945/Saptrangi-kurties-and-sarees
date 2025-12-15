// // // import React, { useState } from "react";
// // // import { X } from "lucide-react";

// // // const SizeModal = ({ open, currentSize, onClose, onUpdate }) => {
// // //   if (!open) return null;

// // //   const allSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
// // //   const [selected, setSelected] = useState(currentSize);

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

// // //         <h2 className="text-lg font-semibold mb-4">Choose your perfect fit!</h2>

// // //         <div className="grid grid-cols-3 gap-3 mb-6">
// // //           {allSizes.map((s) => (
// // //             <button
// // //               key={s}
// // //               onClick={() => setSelected(s)}
// // //               className={`py-3 rounded-lg border text-sm font-medium transition
// // //                 ${
// // //                   selected === s
// // //                     ? "bg-primary text-white border-primary"
// // //                     : "border-gray-300 hover:bg-neutral"
// // //                 }
// // //               `}
// // //             >
// // //               {s}
// // //             </button>
// // //           ))}
// // //         </div>

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

// // // export default SizeModal;

// // import React, { useEffect, useState } from "react";
// // import { X } from "lucide-react";

// // const SizeModal = ({ open, currentSize, sizes = [], onClose, onUpdate }) => {
// //   const [selected, setSelected] = useState(currentSize);

// //   useEffect(() => {
// //     setSelected(currentSize);
// //   }, [currentSize]);

// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
// //       <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
// //         <button
// //           className="absolute right-4 top-4 text-gray-500 hover:text-black"
// //           onClick={onClose}
// //         >
// //           <X size={22} />
// //         </button>

// //         <h2 className="text-lg font-semibold mb-4">Choose your size</h2>

// //         <div className="grid grid-cols-3 gap-3 mb-6">
// //           {sizes.map((s) => (
// //             <button
// //               key={s}
// //               onClick={() => setSelected(s)}
// //               className={`py-3 rounded-lg border text-sm font-medium
// //                 ${
// //                   selected === s
// //                     ? "bg-primary text-white border-primary"
// //                     : "border-gray-300 hover:bg-neutral"
// //                 }
// //               `}
// //             >
// //               {s}
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

// // export default SizeModal;

// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";

// const SizeModal = ({ open, currentSize, sizes = [], onClose, onUpdate }) => {
//   const [selected, setSelected] = useState(currentSize);

//   useEffect(() => {
//     setSelected(currentSize);
//   }, [currentSize]);

//   if (!open) return null;

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

//         <h2 className="text-lg font-semibold mb-4">Choose your size</h2>

//         <div className="grid grid-cols-3 gap-3 mb-6">
//           {sizes.map((s) => (
//             <button
//               key={s}
//               onClick={() => setSelected(s)}
//               className={`py-3 rounded-lg border text-sm font-medium
//                 ${
//                   selected === s
//                     ? "bg-primary text-white border-primary"
//                     : "border-gray-300 hover:bg-neutral"
//                 }`}
//             >
//               {s}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => {
//             onUpdate(selected);
//             onClose();
//           }}
//           className="w-full py-3 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-secondary"
//         >
//           UPDATE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SizeModal;

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SizeModal = ({ open, currentSize, sizes = [], onClose, onUpdate }) => {
  const [selected, setSelected] = useState(currentSize);

  useEffect(() => {
    setSelected(currentSize);
  }, [currentSize]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Select Size</h2>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelected(s)}
              className={`py-3 rounded-lg border text-sm font-medium
                ${
                  selected === s
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 hover:bg-neutral"
                }`}
            >
              {s}
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

export default SizeModal;
