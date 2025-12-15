// import React, { useState, useEffect } from "react";

// const EditAddressForm = ({ addressData, onUpdateAddress }) => {
//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     if (addressData) {
//       setForm({ ...addressData });
//     }
//   }, [addressData]);

//   if (!form) return <div>Loading...</div>;

//   const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdateAddress(form);
//   };

//   return (
//     <form
//       className="bg-white p-6 rounded-xl border border-neutral shadow"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-xl font-semibold mb-6 text-dark">Edit Address</h2>

//       {/* NAME + MOBILE */}
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           value={form.name}
//           onChange={update}
//           placeholder="Full Name"
//         />
//         <input
//           name="mobile"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           value={form.mobile}
//           onChange={update}
//           placeholder="Mobile"
//         />
//       </div>

//       {/* STREET */}
//       <input
//         name="street"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         value={form.street}
//         onChange={update}
//         placeholder="Flat no/Building, Street name"
//       />

//       {/* CITY - STATE - PINCODE */}
//       <div className="grid grid-cols-3 gap-4 mt-4">
//         <input
//           name="city"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           value={form.city}
//           onChange={update}
//           placeholder="City"
//         />
//         <input
//           name="state"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           value={form.state}
//           onChange={update}
//           placeholder="State"
//         />
//         <input
//           name="pincode"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           value={form.pincode}
//           onChange={update}
//           placeholder="PIN Code"
//         />
//       </div>

//       {/* AREA */}
//       <input
//         name="area"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         value={form.area}
//         onChange={update}
//         placeholder="Area / Locality"
//       />

//       {/* LANDMARK */}
//       <input
//         name="landmark"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         value={form.landmark}
//         onChange={update}
//         placeholder="Landmark"
//       />

//       {/* LABEL BUTTONS */}
//       <div className="flex gap-3 mt-4">
//         {["Home", "Office", "Other"].map((lbl) => {
//           const isActive = form.label === lbl;

//           return (
//             <button
//               type="button"
//               key={lbl}
//               onClick={() => setForm({ ...form, label: lbl })}
//               className={`px-4 py-2 rounded border
//                 ${
//                   isActive
//                     ? "bg-primary text-white border-primary"
//                     : "border-dark/20 text-dark hover:bg-neutral"
//                 }
//               `}
//             >
//               {lbl}
//             </button>
//           );
//         })}
//       </div>

//       {/* UPDATE BUTTON */}
//       <button className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white transition">
//         UPDATE ADDRESS
//       </button>
//     </form>
//   );
// };

// export default EditAddressForm;

import React, { useEffect, useState } from "react";
import { AddressService } from "../../../services/addressService";

const EditAddressForm = ({ addressData, onSuccess }) => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (addressData) setForm(addressData);
  }, [addressData]);

  if (!form) return null;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await AddressService.updateAddress(form);
      onSuccess?.();
    } catch (err) {
      console.error("Update address failed", err);
      alert("Failed to update address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border shadow"
    >
      <h2 className="text-xl font-semibold mb-6">Edit Address</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={update}
          className="input"
        />
        <input
          name="mobile"
          value={form.mobile}
          onChange={update}
          className="input"
        />
      </div>

      <input
        name="street"
        value={form.street}
        onChange={update}
        className="input mt-4"
      />

      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          name="city"
          value={form.city}
          onChange={update}
          className="input"
        />
        <input
          name="state"
          value={form.state}
          onChange={update}
          className="input"
        />
        <input
          name="pincode"
          value={form.pincode}
          onChange={update}
          className="input"
        />
      </div>

      <input
        name="area"
        value={form.area}
        onChange={update}
        className="input mt-4"
      />
      <input
        name="landmark"
        value={form.landmark}
        onChange={update}
        className="input mt-4"
      />

      <div className="flex gap-3 mt-4">
        {["Home", "Office", "Other"].map((lbl) => (
          <button
            type="button"
            key={lbl}
            onClick={() => setForm({ ...form, label: lbl })}
            className={`px-4 py-2 rounded border ${
              form.label === lbl ? "bg-primary text-white" : "border-gray-300"
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>

      <button
        disabled={loading}
        className="w-full bg-primary mt-6 py-3 rounded-lg text-white font-semibold"
      >
        {loading ? "Updating..." : "UPDATE ADDRESS"}
      </button>
    </form>
  );
};

export default EditAddressForm;
