// // // // src/pages/Account/sections/AddressList.jsx
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import DeleteConfirmModal from "./DeleteConfirmModal";

// // // /*
// // //   This component uses local sample data. Replace with fetch calls to your API.
// // // */
// // // const sampleAddresses = [
// // //   {
// // //     id: "692620f12e7e35cd229da8ec",
// // //     label: "Other",
// // //     name: "sdfsd sdsdflk",
// // //     street: "TALWADE Bk, sdfjslk",
// // //     city: "Nandurbar",
// // //     state: "Maharashtra",
// // //     pincode: "425412",
// // //     mobile: "8999197992",
// // //   },
// // // ];

// // // const AddressList = () => {
// // //   const [addresses, setAddresses] = useState(sampleAddresses);
// // //   const [toDelete, setToDelete] = useState(null);
// // //   const navigate = useNavigate();

// // //   const handleRemoveConfirm = (id) => {
// // //     setToDelete(id);
// // //   };

// // //   const handleDelete = () => {
// // //     setAddresses((prev) => prev.filter((a) => a.id !== toDelete));
// // //     setToDelete(null);
// // //     // show toast: "Address Deleted Successfully" (you have your own toast)
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="bg-white border rounded-lg p-6">
// // //         {addresses.length === 0 ? (
// // //           <div
// // //             className="p-8 border-dashed border-2 border-gray-200 rounded-lg text-center text-blue-600 cursor-pointer"
// // //             onClick={() => navigate("/myaccount/addresses?address-id=new")}
// // //           >
// // //             <div className="text-2xl mb-2">+</div>
// // //             <div>Add New Address</div>
// // //           </div>
// // //         ) : (
// // //           <>
// // //             {addresses.map((addr) => (
// // //               <div
// // //                 key={addr.id}
// // //                 className="mb-6 bg-white border rounded-lg p-4"
// // //               >
// // //                 <div className="flex justify-between items-start">
// // //                   <div>
// // //                     <div className="text-lg font-medium">{addr.name}</div>
// // //                     <div className="text-sm text-gray-600 mt-1">
// // //                       {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
// // //                     </div>
// // //                     <div className="text-sm text-gray-700 mt-2">
// // //                       Mobile: {addr.mobile}
// // //                     </div>
// // //                   </div>

// // //                   <div className="text-right">
// // //                     <span className="px-3 py-1 rounded text-sm border border-yellow-300 text-yellow-700">
// // //                       {addr.label}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="mt-4 flex gap-4">
// // //                   <button
// // //                     onClick={() =>
// // //                       navigate(`/myaccount/addresses?address-id=${addr.id}`)
// // //                     }
// // //                     className="flex-1 py-3 rounded border text-blue-600 font-semibold"
// // //                   >
// // //                     Edit
// // //                   </button>

// // //                   <button
// // //                     onClick={() => handleRemoveConfirm(addr.id)}
// // //                     className="flex-1 py-3 rounded border text-gray-700"
// // //                   >
// // //                     Remove
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </>
// // //         )}
// // //       </div>

// // //       {/* Add new button */}
// // //       <div className="mt-8 md:mt-12">
// // //         <button
// // //           onClick={() => navigate("/myaccount/addresses?address-id=new")}
// // //           className="bg-yellow-400 px-8 py-3 rounded-lg font-semibold"
// // //         >
// // //           ADD NEW ADDRESS
// // //         </button>
// // //       </div>

// // //       <DeleteConfirmModal
// // //         open={!!toDelete}
// // //         onClose={() => setToDelete(null)}
// // //         onConfirm={handleDelete}
// // //         title="Delete Confirmation"
// // //         description="Are you sure you want to delete this address?"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default AddressList;

// // // src/pages/Account/sections/AddressList.jsx
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { MapPin } from "lucide-react"; // icon
// // import DeleteConfirmModal from "./DeleteConfirmModal";

// // // sample data
// // const sampleAddresses = [
// //   {
// //     id: "692620f12e7e35cd229da8ec",
// //     label: "Other",
// //     name: "Tushar Patil",
// //     street: "TALWADE Bk, erw",
// //     city: "Nandurbar",
// //     state: "Maharashtra",
// //     pincode: "425412",
// //     mobile: "8999197992",
// //   },
// //   {
// //     id: "692620f12e7e35cd229da8ed",
// //     label: "Other",
// //     name: "Tushar Patil",
// //     street: "TALWADE Bk, erw",
// //     city: "Nandurbar",
// //     state: "Maharashtra",
// //     pincode: "425412",
// //     mobile: "8999197992",
// //   },
// // ];

// // const AddressList = () => {
// //   const [addresses, setAddresses] = useState(sampleAddresses);
// //   const [toDelete, setToDelete] = useState(null);
// //   const navigate = useNavigate();

// //   const handleRemoveConfirm = (id) => {
// //     setToDelete(id);
// //   };

// //   const handleDelete = () => {
// //     setAddresses((prev) => prev.filter((a) => a.id !== toDelete));
// //     setToDelete(null);
// //   };

// //   return (
// //     <div>
// //       {/* GRID LIST */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {addresses.map((addr) => (
// //           <div
// //             key={addr.id}
// //             className="bg-white border rounded-xl p-6 shadow-sm"
// //           >
// //             {/* TOP: ICON + NAME + LABEL */}
// //             <div className="flex justify-between items-start">
// //               <div className="flex gap-3">
// //                 <MapPin className="text-gray-700 w-5 h-5 mt-1" />
// //                 <div>
// //                   <p className="font-semibold text-[16px]">{addr.name}</p>
// //                   <p className="text-gray-600 text-sm mt-1 leading-relaxed">
// //                     {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
// //                   </p>
// //                   <p className="text-sm text-gray-700 mt-2">
// //                     Mobile: {addr.mobile}
// //                   </p>
// //                 </div>
// //               </div>

// //               <span className="px-3 py-1 text-sm border border-yellow-300 rounded text-yellow-700">
// //                 {addr.label}
// //               </span>
// //             </div>

// //             {/* BUTTONS */}
// //             <div className="flex gap-4 mt-6">
// //               <button
// //                 onClick={() =>
// //                   navigate(`/myaccount/addresses?address-id=${addr.id}`)
// //                 }
// //                 className="flex-1 border rounded-lg py-2 font-semibold text-blue-600"
// //               >
// //                 Edit
// //               </button>

// //               <button
// //                 onClick={() => handleRemoveConfirm(addr.id)}
// //                 className="flex-1 border rounded-lg py-2 font-semibold text-gray-700"
// //               >
// //                 Remove
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* ADD NEW ADDRESS BUTTON */}
// //       <div className="flex justify-center mt-10">
// //         <button
// //           onClick={() => navigate("/myaccount/addresses?address-id=new")}
// //           className="bg-yellow-400 hover:bg-yellow-500 px-12 py-3 rounded-lg font-semibold"
// //         >
// //           ADD NEW ADDRESS
// //         </button>
// //       </div>

// //       {/* DELETE MODAL */}
// //       <DeleteConfirmModal
// //         open={!!toDelete}
// //         onClose={() => setToDelete(null)}
// //         onConfirm={handleDelete}
// //         title="Delete Confirmation"
// //         description="Are you sure you want to delete this address?"
// //       />
// //     </div>
// //   );
// // };

// // export default AddressList;

// // src/pages/Account/sections/AddressList.jsx
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
//             className="bg-white border rounded-xl p-6 shadow-sm"
//           >
//             <div className="flex justify-between items-start">
//               <div className="flex gap-3">
//                 <MapPin className="text-gray-700 w-5 h-5 mt-1" />
//                 <div>
//                   <p className="font-semibold text-[16px]">{addr.name}</p>
//                   <p className="text-gray-600 text-sm mt-1">
//                     {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
//                   </p>
//                   <p className="text-sm text-gray-700 mt-2">
//                     Mobile: {addr.mobile}
//                   </p>
//                 </div>
//               </div>

//               <span className="px-3 py-1 text-sm border border-yellow-300 rounded text-yellow-700">
//                 {addr.label}
//               </span>
//             </div>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() =>
//                   navigate(`/myaccount/addresses?address-id=${addr.id}`)
//                 }
//                 className="flex-1 border rounded-lg py-2 font-semibold text-blue-600"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => setToDelete(addr.id)}
//                 className="flex-1 border rounded-lg py-2 font-semibold text-gray-700"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//         <button
//           onClick={() => navigate("/myaccount/addresses?address-id=new")}
//           className="bg-yellow-400 hover:bg-yellow-500 px-12 py-3 rounded-lg font-semibold"
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

const AddressList = ({ addresses, onDeleteAddress }) => {
  const [toDelete, setToDelete] = useState(null);
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    onDeleteAddress(toDelete);
    setToDelete(null);
  };

  return (
    <div>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white border border-neutral rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <MapPin className="text-dark/70 w-5 h-5 mt-1" />

                <div>
                  <p className="font-semibold text-[16px] text-dark">
                    {addr.name}
                  </p>

                  <p className="text-dark/70 text-sm mt-1">
                    {addr.street}, {addr.city}, {addr.state}, {addr.pincode}
                  </p>

                  <p className="text-sm text-dark mt-2">
                    Mobile: {addr.mobile}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 text-sm border border-secondary/40 rounded text-secondary font-medium">
                {addr.label}
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() =>
                  navigate(`/myaccount/addresses?address-id=${addr.id}`)
                }
                className="flex-1 border border-primary rounded-lg py-2 font-semibold text-primary hover:bg-primary/10 transition"
              >
                Edit
              </button>

              <button
                onClick={() => setToDelete(addr.id)}
                className="flex-1 border border-dark/30 rounded-lg py-2 font-semibold text-dark hover:bg-neutral transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD NEW ADDRESS BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/myaccount/addresses?address-id=new")}
          className="bg-primary hover:bg-secondary px-12 py-3 rounded-lg font-semibold text-white transition"
        >
          ADD NEW ADDRESS
        </button>
      </div>

      <DeleteConfirmModal
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Confirmation"
        description="Are you sure you want to delete this address?"
      />
    </div>
  );
};

export default AddressList;
