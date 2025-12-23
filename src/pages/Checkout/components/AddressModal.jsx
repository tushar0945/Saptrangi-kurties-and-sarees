// const AddressModal = ({ addresses, selected, onSelect, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md p-4">
//         <h3 className="font-semibold mb-3">Select Delivery Address</h3>

//         <div className="space-y-3 max-h-80 overflow-y-auto">
//           {addresses.map((addr) => (
//             <div
//               key={addr.id}
//               onClick={() => onSelect(addr)}
//               className={`p-3 border rounded cursor-pointer ${
//                 selected.id === addr.id ? "border-teal-600 bg-teal-50" : ""
//               }`}
//             >
//               <p className="font-medium">{addr.label}</p>
//               <p className="text-sm text-gray-600">
//                 {addr.name}, {addr.city}, {addr.state} - {addr.pincode}
//               </p>
//             </div>
//           ))}
//         </div>

//         <button onClick={onClose} className="mt-4 w-full border py-2 rounded">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddressModal;

const AddressModal = ({ addresses, selected, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg p-4">
        <h3 className="font-semibold mb-4">Select Delivery Address</h3>

        <div className="space-y-3 max-h-80 overflow-y-auto">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              onClick={() => onSelect(addr)}
              className={`p-3 border rounded cursor-pointer ${
                selected?.id === addr.id
                  ? "border-teal-600 bg-teal-50"
                  : "hover:border-gray-400"
              }`}
            >
              <p className="font-medium">
                {addr.name}
                <span className="ml-2 text-xs text-gray-500">
                  ({addr.address_type})
                </span>
              </p>

              <p className="text-sm text-gray-600">
                {addr.street}, {addr.area}
              </p>

              {addr.landmark && (
                <p className="text-sm text-gray-600">
                  Landmark: {addr.landmark}
                </p>
              )}

              <p className="text-sm text-gray-600">
                {addr.city}, {addr.state} - {addr.pincode}
              </p>

              <p className="text-sm text-gray-600">Mobile: {addr.mobile}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full border py-2 rounded text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddressModal;
