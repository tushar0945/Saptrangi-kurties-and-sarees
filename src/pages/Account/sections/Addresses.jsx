// // // // import { useSearchParams } from "react-router-dom";
// // // // import AddAddressForm from "./AddAddressForm";
// // // // import AddressList from "./AddressList";
// // // // import EditAddressForm from "./EditAddressForm";

// // // // const Addresses = () => {
// // // //   const [params] = useSearchParams();
// // // //   const addressId = params.get("address-id");

// // // //   // 1️⃣ No query param → show address list
// // // //   if (!addressId) {
// // // //     return <AddressList />;
// // // //   }

// // // //   // 2️⃣ address-id=new → show add form
// // // //   if (addressId === "new") {
// // // //     return <AddAddressForm />;
// // // //   }

// // // //   // 3️⃣ address-id=XYZ → show edit form
// // // //   return <EditAddressForm addressId={addressId} />;
// // // // };

// // // // export default Addresses;

// // // // src/pages/Account/Addresses.jsx
// // // import React, { useMemo } from "react";
// // // import { useSearchParams } from "react-router-dom";
// // // import AddressList from "./AddressList";
// // // import AddressForm from "./AddAddressForm";

// // // const Addresses = () => {
// // //   const [searchParams] = useSearchParams();
// // //   const addressId = searchParams.get("address-id");

// // //   const mode = useMemo(() => {
// // //     if (!addressId) return "list";
// // //     if (addressId === "new") return "new";
// // //     return "edit";
// // //   }, [addressId]);

// // //   return (
// // //     <div className="w-full">
// // //       {/* Header */}

// // //       {/* Main content (WITHOUT SIDEBAR) */}
// // //       <div className="mt-6">
// // //         {mode === "list" && <AddressList />}

// // //         {(mode === "new" || mode === "edit") && (
// // //           <AddressForm addressId={addressId === "new" ? null : addressId} />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Addresses;

// // // src/pages/Account/Addresses.jsx
// // import React, { useMemo, useState } from "react";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import AddressList from "./AddressList";
// // import AddAddressForm from "./AddAddressForm";

// // const Addresses = () => {
// //   const [searchParams] = useSearchParams();
// //   const addressId = searchParams.get("address-id");

// //   const navigate = useNavigate();

// //   // ---------------------
// //   // GLOBAL ADDRESS STATE
// //   // ---------------------
// //   const [addresses, setAddresses] = useState([
// //     {
// //       id: "692620f12e7e35cd229da8ec",
// //       label: "Other",
// //       name: "Tushar Patil",
// //       street: "TALWADE Bk, erw",
// //       city: "Nandurbar",
// //       state: "Maharashtra",
// //       pincode: "425412",
// //       mobile: "8999197992",
// //     },
// //   ]);

// //   // Add new address
// //   const handleAddAddress = (newAddress) => {
// //     setAddresses((prev) => [...prev, newAddress]);
// //     navigate("/myaccount/addresses");
// //   };

// //   // Delete address
// //   const handleDeleteAddress = (id) => {
// //     setAddresses((prev) => prev.filter((a) => a.id !== id));
// //   };

// //   const mode = useMemo(() => {
// //     if (!addressId) return "list";
// //     if (addressId === "new") return "new";
// //     return "edit";
// //   }, [addressId]);

// //   return (
// //     <div className="container mx-auto px-6 py-10">
// //       {/* title */}
// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h1 className="text-2xl font-semibold">My Addresses</h1>
// //         <p className="text-gray-600 mt-2">
// //           Add, edit, or remove saved addresses.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-12 gap-6 mt-6">
// //         {/* LEFT NAV (same as your setup) */}
// //         <aside className="col-span-12 md:col-span-3">
// //           <div className="bg-white rounded-lg p-6 border">
// //             <ul className="space-y-4">
// //               <li className="text-gray-800 font-medium">Overview</li>
// //               <li className="text-gray-600">My Orders</li>
// //               <li className="text-gray-600">My Payments</li>
// //               <li className="text-gray-600">My Wallet</li>
// //               <li className="text-blue-600 border-b-2 border-blue-100 pb-2">
// //                 My Addresses
// //               </li>
// //               <li className="text-gray-600">My Profile</li>
// //               <li className="text-red-500">Logout</li>
// //             </ul>
// //           </div>
// //         </aside>

// //         {/* MAIN CONTENT */}
// //         <main className="col-span-12 md:col-span-9">
// //           {mode === "list" && (
// //             <AddressList
// //               addresses={addresses}
// //               onDeleteAddress={handleDeleteAddress}
// //             />
// //           )}

// //           {mode === "new" && <AddAddressForm onAddAddress={handleAddAddress} />}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addresses;

// // // src/pages/Account/Addresses.jsx
// // import React, { useMemo, useState } from "react";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import AddressList from "./AddressList";
// // import AddAddressForm from "./AddAddressForm";

// // const Addresses = () => {
// //   const [searchParams] = useSearchParams();
// //   const addressId = searchParams.get("address-id");

// //   const navigate = useNavigate();

// //   // ---------------------
// //   // GLOBAL ADDRESS STATE
// //   // ---------------------
// //   const [addresses, setAddresses] = useState([
// //     {
// //       id: "692620f12e7e35cd229da8ec",
// //       label: "Other",
// //       name: "Tushar Patil",
// //       street: "TALWADE Bk, erw",
// //       city: "Nandurbar",
// //       state: "Maharashtra",
// //       pincode: "425412",
// //       mobile: "8999197992",
// //     },
// //   ]);

// //   // Add address
// //   const handleAddAddress = (newAddress) => {
// //     setAddresses((prev) => [...prev, newAddress]);
// //     navigate("/myaccount/addresses");
// //   };

// //   // Update existing address
// //   const handleUpdateAddress = (updatedAddress) => {
// //     setAddresses((prev) =>
// //       prev.map((addr) =>
// //         addr.id === updatedAddress.id ? updatedAddress : addr
// //       )
// //     );
// //     navigate("/myaccount/addresses");
// //   };

// //   // Delete address
// //   const handleDeleteAddress = (id) => {
// //     setAddresses((prev) => prev.filter((a) => a.id !== id));
// //   };

// //   // Decide mode: list, new, edit
// //   const mode = useMemo(() => {
// //     if (!addressId) return "list";
// //     if (addressId === "new") return "new";
// //     return "edit";
// //   }, [addressId]);

// //   return (
// //     <div className="container mx-auto px-6 py-10">
// //       <main className="col-span-12 md:col-span-9">
// //         {/* Address List */}
// //         {mode === "list" && (
// //           <AddressList
// //             addresses={addresses}
// //             onDeleteAddress={handleDeleteAddress}
// //           />
// //         )}

// //         {/* Add / Edit Form */}
// //         {(mode === "new" || mode === "edit") && (
// //           <AddAddressForm
// //             addressId={mode === "edit" ? addressId : null}
// //             addresses={addresses}
// //             onAddAddress={handleAddAddress}
// //             onUpdateAddress={handleUpdateAddress}
// //           />
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Addresses;

// // src/pages/Account/Addresses.jsx
// import React, { useMemo, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import AddressList from "./AddressList";
// import AddAddressForm from "./AddAddressForm";

// const Addresses = () => {
//   const [searchParams] = useSearchParams();
//   const addressId = searchParams.get("address-id"); // null | new | {id}

//   const navigate = useNavigate();

//   // ---------------------
//   // GLOBAL ADDRESS STATE
//   // ---------------------
//   const [addresses, setAddresses] = useState([
//     {
//       id: "692620f12e7e35cd229da8ec",
//       label: "Other",
//       name: "Tushar Patil",
//       street: "TALWADE Bk, erw",
//       city: "Nandurbar",
//       state: "Maharashtra",
//       pincode: "425412",
//       mobile: "8999197992",
//       area: "Erw",
//       landmark: "Near Temple",
//     },
//   ]);

//   // ---------------------
//   // ADD NEW ADDRESS
//   // ---------------------
//   const handleAddAddress = (newAddress) => {
//     setAddresses((prev) => [...prev, newAddress]);
//     navigate("/myaccount/addresses");
//   };

//   // ---------------------
//   // UPDATE EXISTING ADDRESS
//   // ---------------------
//   const handleUpdateAddress = (updated) => {
//     setAddresses((prev) =>
//       prev.map((addr) => (addr.id === updated.id ? updated : addr))
//     );
//     navigate("/myaccount/addresses");
//   };

//   // ---------------------
//   // DELETE ADDRESS
//   // ---------------------
//   const handleDeleteAddress = (id) => {
//     setAddresses((prev) => prev.filter((a) => a.id !== id));
//   };

//   // ---------------------
//   // WHAT MODE ARE WE IN?
//   // ---------------------
//   const mode = useMemo(() => {
//     if (!addressId) return "list";
//     if (addressId === "new") return "new";
//     return "edit";
//   }, [addressId]);

//   // For editing → find the address
//   const editData =
//     mode === "edit" ? addresses.find((a) => a.id === addressId) : null;

//   return (
//     <div className="container mx-auto px-6 py-10">
//       {/* SHOW LIST */}
//       {mode === "list" && (
//         <AddressList
//           addresses={addresses}
//           onDeleteAddress={handleDeleteAddress}
//         />
//       )}

//       {/* SHOW ADD FORM */}
//       {mode === "new" && (
//         <AddAddressForm onAddAddress={handleAddAddress} mode="new" />
//       )}

//       {/* SHOW EDIT FORM */}
//       {mode === "edit" && (
//         <AddAddressForm
//           mode="edit"
//           addressData={editData}
//           onUpdateAddress={handleUpdateAddress}
//         />
//       )}
//     </div>
//   );
// };

// export default Addresses;

// src/pages/Account/sections/Addresses.jsx
import React, { useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import AddressList from "./AddressList";
import AddAddressForm from "./AddAddressForm";
import EditAddressForm from "./EditAddressForm";

const Addresses = () => {
  const [searchParams] = useSearchParams();
  const addressId = searchParams.get("address-id");

  const navigate = useNavigate();

  // ---------------------
  // ADDRESS STATE
  // ---------------------
  const [addresses, setAddresses] = useState([
    {
      id: "692620f12e7e35cd229da8ec",
      label: "Other",
      name: "Tushar Patil",
      street: "TALWADE Bk, erw",
      city: "Nandurbar",
      state: "Maharashtra",
      pincode: "425412",
      mobile: "8999197992",
      area: "some area",
      landmark: "none",
    },
  ]);

  // ---------------------
  // ADD ADDRESS
  // ---------------------
  const handleAddAddress = (newAddress) => {
    setAddresses((prev) => [...prev, newAddress]);
    navigate("/myaccount/addresses");
  };

  // ---------------------
  // UPDATE ADDRESS
  // ---------------------
  const handleUpdateAddress = (updatedAddress) => {
    setAddresses((prev) =>
      prev.map((a) => (a.id === updatedAddress.id ? updatedAddress : a))
    );
    navigate("/myaccount/addresses");
  };

  // ---------------------
  // DELETE ADDRESS
  // ---------------------
  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  // ---------------------
  // SELECT MODE
  // ---------------------
  const mode = useMemo(() => {
    if (!addressId) return "list";
    if (addressId === "new") return "new";
    return "edit";
  }, [addressId]);

  // If edit → find the address
  const selectedAddress =
    mode === "edit" ? addresses.find((a) => a.id === addressId) : null;

  return (
    <div className="container mx-auto px-6 py-10">
      {/* LIST SCREEN */}
      {mode === "list" && (
        <AddressList
          addresses={addresses}
          onDeleteAddress={handleDeleteAddress}
        />
      )}

      {/* ADD NEW SCREEN */}
      {mode === "new" && <AddAddressForm onAddAddress={handleAddAddress} />}

      {/* EDIT SCREEN */}
      {mode === "edit" && (
        <EditAddressForm
          addressData={selectedAddress}
          onUpdateAddress={handleUpdateAddress}
        />
      )}
    </div>
  );
};

export default Addresses;
