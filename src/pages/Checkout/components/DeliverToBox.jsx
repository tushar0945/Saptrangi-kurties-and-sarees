// // src/pages/Checkout/components/DeliverToBox.jsx
// import React from "react";

// const DeliverToBox = () => {
//   return (
//     <div className="bg-white border rounded-lg p-4">
//       <div className="flex justify-between items-start">
//         <div>
//           <p className="text-sm text-gray-600">Delivering order to</p>
//           <p className="font-semibold">Your Address Label</p>
//           <p className="text-sm text-gray-600">City, State, PIN</p>
//         </div>
//         <button className="text-sm text-primary">CHANGE</button>
//       </div>
//     </div>
//   );
// };

// export default DeliverToBox;

// import React, { useEffect, useState } from "react";
// import { AddressService } from "../../../services/AddressService";
// import AddressModal from "./AddressModal";

// const DeliverToBox = () => {
//   const [addresses, setAddresses] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     AddressService.getAddresses().then((res) => {
//       if (res.length) {
//         console.log(res);
//         setAddresses(res);
//         setSelected(res[0]); // ✅ first address default
//       }
//     });
//   }, []);

//   if (!selected) return null;

//   return (
//     <>
//       <div className="bg-white border rounded-lg p-4 flex justify-between">
//         <div>
//           <p className="font-semibold">{selected.label}</p>
//           <p className="text-sm text-gray-600">
//             {selected.name}, {selected.city}, {selected.state} -{" "}
//             {selected.pincode}
//           </p>
//         </div>
//         <button
//           onClick={() => setOpen(true)}
//           className="text-teal-600 font-medium"
//         >
//           CHANGE
//         </button>
//       </div>

//       {open && (
//         <AddressModal
//           addresses={addresses}
//           selected={selected}
//           onSelect={(addr) => {
//             setSelected(addr);
//             setOpen(false);
//           }}
//           onClose={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default DeliverToBox;

// import React, { useEffect, useState } from "react";
// import { AddressService } from "../../../services/addressService";
// import AddressModal from "./AddressModal";

// const DeliverToBox = ({ onAddressChange }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     AddressService.getAddresses().then((res) => {
//       if (res && res.length) {
//         setAddresses(res);
//         setSelected(res[0]); // ✅ first address default
//         onAddressChange?.(res[0]); // ✅ send to parent
//       }
//     });
//   }, []);

//   if (!selected) return null;

//   return (
//     <>
//       <div className="bg-white border rounded-lg p-4 flex justify-between items-start">
//         <div>
//           {/* NAME + LABEL */}
//           <p className="font-semibold">
//             {selected.name}
//             <span className="ml-2 text-xs text-gray-500">
//               ({selected.address_type})
//             </span>
//           </p>

//           {/* FULL ADDRESS */}
//           <p className="text-sm text-gray-600 mt-1">
//             {selected.street}, {selected.area}
//           </p>

//           {selected.landmark && (
//             <p className="text-sm text-gray-600">
//               Landmark: {selected.landmark}
//             </p>
//           )}

//           <p className="text-sm text-gray-600">
//             {selected.city}, {selected.state} - {selected.pincode}
//           </p>

//           <p className="text-sm text-gray-600 mt-1">
//             Mobile: {selected.mobile}
//           </p>
//         </div>

//         <button
//           onClick={() => setOpen(true)}
//           className="text-teal-600 font-medium text-sm"
//         >
//           CHANGE
//         </button>
//       </div>

//       {open && (
//         <AddressModal
//           addresses={addresses}
//           selected={selected}
//           onSelect={(addr) => {
//             setSelected(addr);
//             onAddressChange?.(addr); // ✅ update parent
//             setOpen(false);
//           }}
//           onClose={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default DeliverToBox;

import React, { useState } from "react";
import AddressModal from "./AddressModal";

const DeliverToBox = ({ addresses = [], selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  if (!selected) return null;

  return (
    <>
      <div className="bg-white border rounded-lg p-4 flex justify-between items-start">
        <div>
          {/* NAME + LABEL */}
          <p className="font-semibold">
            {selected.name}
            <span className="ml-2 text-xs text-gray-500">
              ({selected.address_type})
            </span>
          </p>

          {/* FULL ADDRESS */}
          <p className="text-sm text-gray-600 mt-1">
            {selected.street}, {selected.area}
          </p>

          {selected.landmark && (
            <p className="text-sm text-gray-600">
              Landmark: {selected.landmark}
            </p>
          )}

          <p className="text-sm text-gray-600">
            {selected.city}, {selected.state} - {selected.pincode}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Mobile: {selected.mobile}
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-teal-600 font-medium text-sm"
        >
          CHANGE
        </button>
      </div>

      {open && (
        <AddressModal
          addresses={addresses}
          selected={selected}
          onSelect={(addr) => {
            onSelect(addr); // 🔥 update CheckoutPage
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default DeliverToBox;
