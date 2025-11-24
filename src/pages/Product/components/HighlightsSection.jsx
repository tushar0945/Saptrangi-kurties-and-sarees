// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLink, FaFeather, FaFire } from "react-icons/fa";

// const HighlightsSection = ({ product }) => {
//   console.log(product);
//   const { highlights } = product;
//   if (!highlights || highlights.length === 0) return null;

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {highlights.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start gap-1 p-3 border rounded-lg bg-white shadow-sm"
//           >
//             <span className="text-gray-800 font-medium">{item.label}</span>
//             <span className="text-gray-600 text-sm">{item.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightsSection;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HighlightsSection = ({ product }) => {
  const { highlights } = product || {};

  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Key Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="
              flex items-start gap-3 p-4 rounded-xl bg-white
              border border-gray-200 shadow-sm
              hover:shadow-md hover:border-gray-300
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="text-primary text-xl mt-1">
              <FaCheckCircle />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm text-gray-500 font-medium">{item.label}</p>
              <p className="text-base font-semibold text-gray-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;

// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const HighlightsSection = ({ product }) => {
//   const { highlights } = product || {};

//   if (!highlights || highlights.length === 0) return null;

//   return (
//     <div className="mt-10">
//       <h2 className="text-xl font-bold mb-4 text-gray-900">Key Highlights</h2>

//       {/* FIX: Use flexible wrapping instead of grid */}
//       <div className="flex flex-wrap gap-4">
//         {highlights.map((item, index) => (
//           <div
//             key={index}
//             className="
//               flex items-start gap-3 p-4 rounded-xl bg-white
//               border border-gray-200 shadow-sm
//               hover:shadow-md hover:border-gray-300
//               transition-all duration-300
//               w-full sm:w-[48%] lg:w-[31%]   /* FIX WIDTH */
//             "
//           >
//             {/* Icon */}
//             <div className="text-primary text-xl mt-1">
//               <FaCheckCircle />
//             </div>

//             {/* Text */}
//             <div>
//               <p className="text-sm text-gray-500 font-medium">{item.label}</p>
//               <p className="text-base font-semibold text-gray-800">
//                 {item.value}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightsSection;
