// // src/pages/Product/components/DescriptionTabs.jsx

// import React, { useState } from "react";

// const DescriptionTabs = ({ product }) => {
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="mt-10 w-full max-w-3xl">
//       {/* TAB BUTTONS */}
//       <div className="flex border-b border-gray-300">
//         {[
//           { id: "description", label: "Description" },
//           { id: "details", label: "Details" },
//           { id: "policy", label: "Return Policy" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-5 py-3 font-medium text-sm sm:text-base transition-all
//               ${
//                 activeTab === tab.id
//                   ? "border-b-2 border-black text-black"
//                   : "text-gray-500 hover:text-black"
//               }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* TAB CONTENT SECTION */}
//       <div className="mt-5 text-sm sm:text-base text-gray-700 leading-relaxed">
//         {/* DESCRIPTION TAB */}
//         {activeTab === "description" && (
//           <p>
//             {product.description ||
//               "This is a stylish and comfortable premium-quality product crafted with attention to detail. Perfect for daily wear or special occasions."}
//           </p>
//         )}

//         {/* PRODUCT DETAILS TAB */}
//         {activeTab === "details" && (
//           <ul className="list-disc pl-5 space-y-2">
//             {product.details ? (
//               product.details.map((item, index) => <li key={index}>{item}</li>)
//             ) : (
//               <>
//                 <li>Material: Premium Fabric</li>
//                 <li>Care: Hand wash for long-lasting durability</li>
//                 <li>Fit: Regular Fit</li>
//                 <li>Country of Origin: India</li>
//               </>
//             )}
//           </ul>
//         )}

//         {/* RETURN POLICY TAB */}
//         {activeTab === "policy" && (
//           <div>
//             <h3 className="font-semibold mb-2">Return / Exchange Policy</h3>
//             <p>
//               Easy 7-day return or exchange available. Product must be unused &
//               in original packaging.
//               <br />
//               For more details, contact customer support.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DescriptionTabs;

// import React, { useState } from "react";

// const DescriptionTabs = ({ product }) => {
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="mt-5 w-full">
//       <div className="flex border-b border-gray-300">
//         {[
//           { id: "description", label: "Description" },
//           { id: "details", label: "Details" },
//           { id: "policy", label: "Return Policy" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 font-medium text-base ${
//               activeTab === tab.id
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4 text-gray-700">
//         {activeTab === "description" && <p>{product.description}</p>}

//         {activeTab === "details" && (
//           <ul className="list-disc pl-4 space-y-1">
//             {(product.details || []).map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         )}

//         {activeTab === "policy" && (
//           <div>
//             <p>Easy 7-day return or exchange policy.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DescriptionTabs;

// import React, { useState } from "react";

// const DescriptionTabs = ({ product }) => {
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="mt-5 w-full">
//       <div className="flex border-b border-gray-300">
//         {[
//           { id: "description", label: "Description" },
//           { id: "details", label: "Details" },
//           { id: "policy", label: "Return Policy" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 font-medium text-base ${
//               activeTab === tab.id
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4 text-gray-700">
//         {activeTab === "description" && <p>{product.description}</p>}

//         {activeTab === "details" && (
//           <ul className="list-disc pl-4 space-y-1">
//             {(product.details || []).map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         )}

//         {activeTab === "policy" && (
//           <div>
//             <p>Easy 7-day return or exchange policy.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DescriptionTabs;

// import React, { useState } from "react";

// const DescriptionTabs = ({ product }) => {
//   const [activeTab, setActiveTab] = useState("description");

//   // Dynamic safe values
//   const description = product?.description || "No description available.";
//   const details = Array.isArray(product?.details) ? product.details : [];
//   const returnPolicy =
//     product?.returnPolicy ||
//     "Easy 7-day return or exchange policy. Product must be unused and in original condition.";

//   return (
//     <div className="mt-6 w-full">
//       {/* ---- TAB HEADERS ---- */}
//       <div className="flex flex-wrap border-b border-gray-300">
//         {[
//           { id: "description", label: "Description" },
//           { id: "details", label: "Details" },
//           { id: "policy", label: "Return Policy" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`
//               px-4 py-2 font-medium text-sm sm:text-base
//               ${
//                 activeTab === tab.id
//                   ? "border-b-2 border-black text-black"
//                   : "text-gray-500 hover:text-black"
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* ---- TAB CONTENT ---- */}
//       <div className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
//         {/* DESCRIPTION */}
//         {activeTab === "description" && <p>{description}</p>}

//         {/* DETAILS */}
//         {activeTab === "details" && (
//           <ul className="list-disc pl-5 space-y-1">
//             {details.length > 0 ? (
//               details.map((item, idx) => <li key={idx}>{item}</li>)
//             ) : (
//               <p>No product details available.</p>
//             )}
//           </ul>
//         )}

//         {/* RETURN POLICY */}
//         {activeTab === "policy" && <p>{returnPolicy}</p>}
//       </div>
//     </div>
//   );
// };

// export default DescriptionTabs;

// import React, { useState } from "react";

// const DescriptionTabs = ({ product }) => {
//   const [activeTab, setActiveTab] = useState("description");

//   // Safe extract
//   const description = product?.description || "No description available.";
//   const details = product?.details || "";
//   const returnPolicy = product?.returnPolicy || "No return policy available.";

//   // Convert details (string or array) → Array
//   const parsedDetails = Array.isArray(details)
//     ? details
//     : details
//         .split("\n")
//         .map((l) => l.trim())
//         .filter((l) => l !== "")
//         .map((l) => l.replace("•", "").trim());

//   return (
//     <div className="mt-10 w-full text-gray-800">
//       {/* ---------- TAB HEADERS ---------- */}
//       <div className="flex border-b border-gray-300 overflow-x-auto no-scrollbar">
//         {[
//           { id: "description", label: "Description" },
//           { id: "details", label: "Details" },
//           { id: "policy", label: "Return Policy" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`
//               px-4 py-3 font-semibold text-sm md:text-base transition-all
//               ${
//                 activeTab === tab.id
//                   ? "border-b-2 border-primary text-primary"
//                   : "text-gray-500 hover:text-dark"
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* ---------- TAB CONTENT ---------- */}
//       <div className="mt-5 text-sm md:text-base leading-relaxed">
//         {/* Description */}
//         {activeTab === "description" && (
//           <p className="whitespace-pre-line">{description}</p>
//         )}

//         {/* Details */}
//         {activeTab === "details" && (
//           <div>
//             {parsedDetails.length > 0 ? (
//               <ul className="list-disc pl-5 space-y-2">
//                 {parsedDetails.map((item, idx) => (
//                   <li key={idx} className="text-gray-700">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No product details available.</p>
//             )}
//           </div>
//         )}

//         {/* Return Policy */}
//         {activeTab === "policy" && (
//           <p className="whitespace-pre-line">{returnPolicy}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DescriptionTabs;

import React, { useState } from "react";

const DescriptionTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  // Safe values
  const description = product?.description || "No description available.";
  const details = product?.details || "";
  const returnPolicy =
    product?.returnPolicy ||
    "Easy 7-day return or exchange. Product must be unused and in original condition.";

  // Convert details string → array
  const parsedDetails = Array.isArray(details)
    ? details
    : details
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l !== "")
        .map((l) => l.replace("•", "").trim());

  return (
    <div className="mt-12 w-full text-gray-800">
      {/* ---------- TABS HEADER ---------- */}
      <div className="flex overflow-x-auto border-b border-gray-200 no-scrollbar">
        {[
          { id: "description", label: "Description" },
          { id: "details", label: "Details" },
          { id: "policy", label: "Return Policy" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-5 py-3 font-semibold text-sm md:text-base
              transition-all duration-300 whitespace-nowrap
              ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {tab.label}

            {/* Animated underline */}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-[slideIn_0.3s_ease]"></span>
            )}
          </button>
        ))}
      </div>

      {/* ---------- TAB CONTENT ---------- */}
      <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-7 leading-relaxed animate-fadeIn">
        {/* DESCRIPTION */}
        {activeTab === "description" && (
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        )}

        {/* DETAILS */}
        {activeTab === "details" && (
          <>
            {parsedDetails.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {parsedDetails.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No product details available.</p>
            )}
          </>
        )}

        {/* RETURN POLICY */}
        {activeTab === "policy" && (
          <p className="text-gray-700 whitespace-pre-line">{returnPolicy}</p>
        )}
      </div>

      {/* Small fade-in animation */}
      <style>{`
        @keyframes slideIn {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DescriptionTabs;
