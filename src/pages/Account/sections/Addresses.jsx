// import React, { useMemo, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import AddressList from "./AddressList";
// import AddAddressForm from "./AddAddressForm";
// import EditAddressForm from "./EditAddressForm";

// const Addresses = () => {
//   const [searchParams] = useSearchParams();
//   const addressId = searchParams.get("address-id");

//   const navigate = useNavigate();

//   // ---------------------
//   // ADDRESS STATE
//   // ---------------------
//   const [addresses, setAddresses] = useState([
//     // {
//     //   id: "692620f12e7e35cd229da8ec",
//     //   label: "Other",
//     //   name: "Tushar Patil",
//     //   street: "TALWADE Bk, erw",
//     //   city: "Nandurbar",
//     //   state: "Maharashtra",
//     //   pincode: "425412",
//     //   mobile: "8999197992",
//     //   area: "some area",
//     //   landmark: "none",
//     // },
//   ]);

//   // ---------------------
//   // ADD ADDRESS
//   // ---------------------
//   const handleAddAddress = (newAddress) => {
//     setAddresses((prev) => [...prev, newAddress]);
//     navigate("/account/addresses");
//   };

//   // ---------------------
//   // UPDATE ADDRESS
//   // ---------------------
//   const handleUpdateAddress = (updatedAddress) => {
//     setAddresses((prev) =>
//       prev.map((a) => (a.id === updatedAddress.id ? updatedAddress : a))
//     );
//     navigate("/account/addresses");
//   };

//   // ---------------------
//   // DELETE ADDRESS
//   // ---------------------
//   const handleDeleteAddress = (id) => {
//     setAddresses((prev) => prev.filter((a) => a.id !== id));
//   };

//   // ---------------------
//   // SELECT MODE
//   // ---------------------
//   const mode = useMemo(() => {
//     if (!addressId) return "list";
//     if (addressId === "new") return "new";
//     return "edit";
//   }, [addressId]);

//   // If edit → find the address
//   const selectedAddress =
//     mode === "edit" ? addresses.find((a) => a.id === addressId) : null;

//   return (
//     <div className="container mx-auto px-6">
//       {/* ===========================
//           LIST SCREEN
//       ============================ */}
//       {mode === "list" && (
//         <>
//           {/* EMPTY — Show Add Address Box */}
//           {addresses.length === 0 && (
//             <div className="flex justify-center pt-8">
//               <div
//                 onClick={() => navigate("/account/addresses?address-id=new")}
//                 className="
//                   w-full max-w-sm
//                   h-52
//                   border-2 border-dashed border-gray-300
//                   rounded-xl
//                   flex flex-col items-center justify-center
//                   cursor-pointer
//                   bg-white
//                   hover:border-pink-500
//                   transition
//                 "
//               >
//                 <div className="text-pink-600 text-4xl font-light">+</div>
//                 <p className="text-pink-600 font-semibold mt-2 text-sm tracking-wide">
//                   ADD NEW ADDRESS
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* FILLED — Show Address List */}
//           {addresses.length > 0 && (
//             <AddressList
//               addresses={addresses}
//               onDeleteAddress={handleDeleteAddress}
//             />
//           )}
//         </>
//       )}

//       {/* ===========================
//           ADD NEW SCREEN
//       ============================ */}
//       {mode === "new" && <AddAddressForm onAddAddress={handleAddAddress} />}

//       {/* ===========================
//           EDIT SCREEN
//       ============================ */}
//       {mode === "edit" && (
//         <EditAddressForm
//           addressData={selectedAddress}
//           onUpdateAddress={handleUpdateAddress}
//         />
//       )}
//     </div>
//   );
// };

// export default Addresses;

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import AddressList from "./AddressList";
import AddAddressForm from "./AddAddressForm";
import EditAddressForm from "./EditAddressForm";
import { AddressService } from "../../../services/addressService";

const Addresses = () => {
  const [searchParams] = useSearchParams();
  const addressId = searchParams.get("address-id");
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH ADDRESSES
  // =========================
  const loadAddresses = async () => {
    try {
      setLoading(true);
      const data = await AddressService.getAddresses();
      setAddresses(data);
    } catch (err) {
      console.error("Failed to fetch addresses", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  // =========================
  // MODE
  // =========================
  const mode = useMemo(() => {
    if (!addressId) return "list";
    if (addressId === "new") return "new";
    return "edit";
  }, [addressId]);

  const selectedAddress =
    mode === "edit"
      ? addresses.find((a) => String(a.id) === String(addressId))
      : null;

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        Loading addresses...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6">
      {/* LIST */}
      {mode === "list" && (
        <>
          {addresses.length === 0 && (
            <div className="flex justify-center pt-10">
              <div
                onClick={() => navigate("/account/addresses?address-id=new")}
                className="w-full max-w-sm h-52 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer bg-white hover:border-primary transition"
              >
                <div className="text-primary text-4xl">+</div>
                <p className="text-primary font-semibold mt-2">
                  ADD NEW ADDRESS
                </p>
              </div>
            </div>
          )}

          {addresses.length > 0 && (
            <AddressList
              addresses={addresses}
              onDeleteSuccess={loadAddresses}
            />
          )}
        </>
      )}

      {/* ADD */}
      {mode === "new" && (
        <AddAddressForm
          onSuccess={() => {
            loadAddresses();
            navigate("/account/addresses");
          }}
        />
      )}

      {/* EDIT */}
      {mode === "edit" && selectedAddress && (
        <EditAddressForm
          addressData={selectedAddress}
          onSuccess={() => {
            loadAddresses();
            navigate("/account/addresses");
          }}
        />
      )}
    </div>
  );
};

export default Addresses;
