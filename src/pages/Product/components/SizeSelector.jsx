// import React, { useState } from "react";

// const SizeSelector = ({
//   sizes = [],
//   title = "Select Size",
//   showGuide = false,
// }) => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="flex flex-col gap-3">
//       {/* Heading + Size Guide Link */}
//       <div className="flex items-center justify-between">
//         <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>

//         {showGuide && (
//           <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
//             Size guide <span>›</span>
//           </button>
//         )}
//       </div>

//       {/* Size Buttons */}
//       <div className="flex flex-wrap gap-3">
//         {sizes.map((size, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSelected(size)}
//             className={`px-5 py-2 rounded-full border transition-all
//               ${
//                 selected === size
//                   ? "bg-black text-white border-black"
//                   : "border-gray-400 text-gray-700 hover:bg-gray-200"
//               }
//             `}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SizeSelector;

import React, { useState } from "react";

const SizeSelector = ({
  sizes = [],
  title = "Select Size",
  showGuide = false,
}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {/* Heading + Size Guide Link */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-dark text-lg">{title}</h3>

        {showGuide && (
          <button className="text-primary text-sm font-medium flex items-center gap-1 hover:text-secondary transition">
            Size guide <span>›</span>
          </button>
        )}
      </div>

      {/* Size Buttons */}
      <div className="flex flex-wrap gap-3">
        {sizes.map((size, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(size)}
            className={`px-5 py-2 rounded-full border transition-all duration-200 font-medium
              ${
                selected === size
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "border-gray-300 text-dark hover:bg-neutral hover:border-dark"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
