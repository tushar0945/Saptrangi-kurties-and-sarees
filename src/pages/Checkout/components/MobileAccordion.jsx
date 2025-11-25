// // components/MobileAccordion.jsx
// import React, { useState, createContext, useContext } from "react";

// const MobileAccordionContext = createContext();

// const MobileAccordion = ({ children }) => {
//   // keep track of opened panel id; only one open at a time for the reference behavior
//   const [openId, setOpenId] = useState(null);

//   return (
//     <MobileAccordionContext.Provider value={{ openId, setOpenId }}>
//       <div className="bg-white rounded-lg shadow-sm divide-y">{children}</div>
//     </MobileAccordionContext.Provider>
//   );
// };

// // Panel subcomponent
// const Panel = ({ id, title, children }) => {
//   const { openId, setOpenId } = useContext(MobileAccordionContext);
//   const isOpen = openId === id;

//   return (
//     <div className="">
//       <button
//         type="button"
//         onClick={() => setOpenId(isOpen ? null : id)}
//         className="w-full flex items-center justify-between px-4 py-3 text-left"
//       >
//         <div className="flex items-center gap-3">
//           <span className="text-lg font-medium">{title}</span>
//         </div>
//         <div className="text-gray-400">{isOpen ? "▲" : "▼"}</div>
//       </button>

//       {/* content area with smooth height animation */}
//       <div
//         className={`overflow-hidden transition-all duration-200 ${
//           isOpen ? "max-h-[1200px] px-4 pb-6" : "max-h-0 px-4"
//         }`}
//       >
//         <div className="pt-2">{children}</div>
//       </div>
//     </div>
//   );
// };

// // attach Panel as a static property for nice usage
// MobileAccordion.Panel = Panel;

// export default MobileAccordion;

// src/pages/Checkout/components/MobileAccordion.jsx
import React, { useState, createContext, useContext } from "react";

const MobileAccordionContext = createContext();

const MobileAccordion = ({ children }) => {
  // only one open at a time (reference behavior)
  const [openId, setOpenId] = useState(null);
  return (
    <MobileAccordionContext.Provider value={{ openId, setOpenId }}>
      <div className="bg-white rounded-lg shadow-sm divide-y">{children}</div>
    </MobileAccordionContext.Provider>
  );
};

const Panel = ({ id, title, children }) => {
  const { openId, setOpenId } = useContext(MobileAccordionContext);
  const isOpen = openId === id;
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium">{title}</span>
        </div>
        <div className="text-gray-400">{isOpen ? "▲" : "▼"}</div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[1200px] px-4 pb-6" : "max-h-0 px-4"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

MobileAccordion.Panel = Panel;
export default MobileAccordion;
