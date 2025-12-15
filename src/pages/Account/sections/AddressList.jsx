// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MapPin } from "lucide-react";
// import DeleteConfirmModal from "./DeleteConfirmModal";

// const AddressList = ({ addresses, onDeleteAddress }) => {
//   const [toDelete, setToDelete] = useState(null);
//   const navigate = useNavigate();

//   const handleConfirmDelete = () => {
//     onDeleteAddress(toDelete);
//     setToDelete(null);
//   };

//   return (
//     <div>
//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {addresses.map((addr) => (
//           <div
//             key={addr.id}
//             className="bg-white border border-neutral rounded-xl p-6 shadow-sm"
//           >
//             <div className="flex justify-between items-start">
//               <div className="flex gap-3">
//                 <MapPin className="text-dark/70 w-5 h-5 mt-1" />

//                 <div>
//                   <p className="font-semibold text-[16px] text-dark">
//                     {addr.name}
//                   </p>

//                   <p className="text-dark/70 text-sm mt-1">
//                     {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
//                   </p>

//                   <p className="text-sm text-dark mt-2">
//                     Mobile: {addr.mobile}
//                   </p>
//                 </div>
//               </div>

//               <span className="px-3 py-1 text-sm border border-secondary/40 rounded text-secondary font-medium">
//                 {addr.label}
//               </span>
//             </div>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() =>
//                   navigate(`/account/addresses?address-id=${addr.id}`)
//                 }
//                 className="flex-1 border border-primary rounded-lg py-2 font-semibold text-primary hover:bg-primary/10 transition"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => setToDelete(addr.id)}
//                 className="flex-1 border border-dark/30 rounded-lg py-2 font-semibold text-dark hover:bg-neutral transition"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD NEW ADDRESS BUTTON */}
//       <div className="flex justify-center mt-10">
//         <button
//           onClick={() => navigate("/account/addresses?address-id=new")}
//           className="bg-primary hover:bg-secondary px-12 py-3 rounded-lg font-semibold text-white transition"
//         >
//           ADD NEW ADDRESS
//         </button>
//       </div>

//       <DeleteConfirmModal
//         open={!!toDelete}
//         onClose={() => setToDelete(null)}
//         onConfirm={handleConfirmDelete}
//         title="Delete Confirmation"
//         description="Are you sure you want to delete this address?"
//       />
//     </div>
//   );
// };

// export default AddressList;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

import DeleteConfirmModal from "./DeleteConfirmModal";
import { AddressService } from "../../../services/addressService";

const AddressList = ({ addresses, onDeleteSuccess }) => {
  const [toDelete, setToDelete] = useState(null);
  const navigate = useNavigate();

  const handleConfirmDelete = async () => {
    try {
      await AddressService.deleteAddress(toDelete);
      onDeleteSuccess();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete address");
    } finally {
      setToDelete(null);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-600" />

                <div>
                  <p className="font-semibold">{addr.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
                  </p>
                  <p className="text-sm mt-2">Mobile: {addr.mobile}</p>
                </div>
              </div>

              <span className="px-3 py-1 text-sm border rounded text-primary">
                {addr.label}
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() =>
                  navigate(`/account/addresses?address-id=${addr.id}`)
                }
                className="flex-1 border border-primary rounded-lg py-2 text-primary font-semibold hover:bg-primary/10"
              >
                Edit
              </button>

              <button
                onClick={() => setToDelete(addr.id)}
                className="flex-1 border border-gray-300 rounded-lg py-2 font-semibold hover:bg-gray-100"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/account/addresses?address-id=new")}
          className="bg-primary px-12 py-3 rounded-lg text-white font-semibold hover:bg-secondary"
        >
          ADD NEW ADDRESS
        </button>
      </div>

      <DeleteConfirmModal
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AddressList;
