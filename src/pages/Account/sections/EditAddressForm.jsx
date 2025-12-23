// // // import React, { useState, useEffect } from "react";

// // // const EditAddressForm = ({ addressData, onUpdateAddress }) => {
// // //   const [form, setForm] = useState(null);

// // //   useEffect(() => {
// // //     if (addressData) {
// // //       setForm({ ...addressData });
// // //     }
// // //   }, [addressData]);

// // //   if (!form) return <div>Loading...</div>;

// // //   const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     onUpdateAddress(form);
// // //   };

// // //   return (
// // //     <form
// // //       className="bg-white p-6 rounded-xl border border-neutral shadow"
// // //       onSubmit={handleSubmit}
// // //     >
// // //       <h2 className="text-xl font-semibold mb-6 text-dark">Edit Address</h2>

// // //       {/* NAME + MOBILE */}
// // //       <div className="grid grid-cols-2 gap-4">
// // //         <input
// // //           name="name"
// // //           className="p-3 border border-neutral rounded text-dark outline-none"
// // //           value={form.name}
// // //           onChange={update}
// // //           placeholder="Full Name"
// // //         />
// // //         <input
// // //           name="mobile"
// // //           className="p-3 border border-neutral rounded text-dark outline-none"
// // //           value={form.mobile}
// // //           onChange={update}
// // //           placeholder="Mobile"
// // //         />
// // //       </div>

// // //       {/* STREET */}
// // //       <input
// // //         name="street"
// // //         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
// // //         value={form.street}
// // //         onChange={update}
// // //         placeholder="Flat no/Building, Street name"
// // //       />

// // //       {/* CITY - STATE - PINCODE */}
// // //       <div className="grid grid-cols-3 gap-4 mt-4">
// // //         <input
// // //           name="city"
// // //           className="p-3 border border-neutral rounded text-dark outline-none"
// // //           value={form.city}
// // //           onChange={update}
// // //           placeholder="City"
// // //         />
// // //         <input
// // //           name="state"
// // //           className="p-3 border border-neutral rounded text-dark outline-none"
// // //           value={form.state}
// // //           onChange={update}
// // //           placeholder="State"
// // //         />
// // //         <input
// // //           name="pincode"
// // //           className="p-3 border border-neutral rounded text-dark outline-none"
// // //           value={form.pincode}
// // //           onChange={update}
// // //           placeholder="PIN Code"
// // //         />
// // //       </div>

// // //       {/* AREA */}
// // //       <input
// // //         name="area"
// // //         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
// // //         value={form.area}
// // //         onChange={update}
// // //         placeholder="Area / Locality"
// // //       />

// // //       {/* LANDMARK */}
// // //       <input
// // //         name="landmark"
// // //         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
// // //         value={form.landmark}
// // //         onChange={update}
// // //         placeholder="Landmark"
// // //       />

// // //       {/* LABEL BUTTONS */}
// // //       <div className="flex gap-3 mt-4">
// // //         {["Home", "Office", "Other"].map((lbl) => {
// // //           const isActive = form.label === lbl;

// // //           return (
// // //             <button
// // //               type="button"
// // //               key={lbl}
// // //               onClick={() => setForm({ ...form, label: lbl })}
// // //               className={`px-4 py-2 rounded border
// // //                 ${
// // //                   isActive
// // //                     ? "bg-primary text-white border-primary"
// // //                     : "border-dark/20 text-dark hover:bg-neutral"
// // //                 }
// // //               `}
// // //             >
// // //               {lbl}
// // //             </button>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* UPDATE BUTTON */}
// // //       <button className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white transition">
// // //         UPDATE ADDRESS
// // //       </button>
// // //     </form>
// // //   );
// // // };

// // // export default EditAddressForm;

// // import React, { useEffect, useState } from "react";
// // import { AddressService } from "../../../services/addressService";

// // const EditAddressForm = ({ addressData, onSuccess }) => {
// //   const [form, setForm] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (addressData) setForm(addressData);
// //   }, [addressData]);

// //   if (!form) return null;

// //   const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       await AddressService.updateAddress(form);
// //       onSuccess?.();
// //     } catch (err) {
// //       console.error("Update address failed", err);
// //       alert("Failed to update address");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="bg-white p-6 rounded-xl border shadow"
// //     >
// //       <h2 className="text-xl font-semibold mb-6">Edit Address</h2>

// //       <div className="grid grid-cols-2 gap-4">
// //         <input
// //           name="name"
// //           value={form.name}
// //           onChange={update}
// //           className="input"
// //         />
// //         <input
// //           name="mobile"
// //           value={form.mobile}
// //           onChange={update}
// //           className="input"
// //         />
// //       </div>

// //       <input
// //         name="street"
// //         value={form.street}
// //         onChange={update}
// //         className="input mt-4"
// //       />

// //       <div className="grid grid-cols-3 gap-4 mt-4">
// //         <input
// //           name="city"
// //           value={form.city}
// //           onChange={update}
// //           className="input"
// //         />
// //         <input
// //           name="state"
// //           value={form.state}
// //           onChange={update}
// //           className="input"
// //         />
// //         <input
// //           name="pincode"
// //           value={form.pincode}
// //           onChange={update}
// //           className="input"
// //         />
// //       </div>

// //       <input
// //         name="area"
// //         value={form.area}
// //         onChange={update}
// //         className="input mt-4"
// //       />
// //       <input
// //         name="landmark"
// //         value={form.landmark}
// //         onChange={update}
// //         className="input mt-4"
// //       />

// //       <div className="flex gap-3 mt-4">
// //         {["Home", "Office", "Other"].map((lbl) => (
// //           <button
// //             type="button"
// //             key={lbl}
// //             onClick={() => setForm({ ...form, label: lbl })}
// //             className={`px-4 py-2 rounded border ${
// //               form.label === lbl ? "bg-primary text-white" : "border-gray-300"
// //             }`}
// //           >
// //             {lbl}
// //           </button>
// //         ))}
// //       </div>

// //       <button
// //         disabled={loading}
// //         className="w-full bg-primary mt-6 py-3 rounded-lg text-white font-semibold"
// //       >
// //         {loading ? "Updating..." : "UPDATE ADDRESS"}
// //       </button>
// //     </form>
// //   );
// // };

// // export default EditAddressForm;

// import React, { useEffect, useState } from "react";
// import { AddressService } from "../../../services/addressService";

// const EditAddressForm = ({ addressData, onSuccess }) => {
//   const [form, setForm] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (addressData?.id) {
//       setForm({ ...addressData }); // ✅ preserve id
//     }
//   }, [addressData]);

//   if (!form) return null;

//   const update = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const isValid = () => {
//     if (!form.name?.trim()) return "Name is required";
//     if (!/^[0-9]{10}$/.test(form.mobile)) return "Enter valid 10-digit mobile";
//     if (!form.street?.trim()) return "Street is required";
//     if (!form.city?.trim()) return "City is required";
//     if (!form.state?.trim()) return "State is required";
//     if (!/^[0-9]{6}$/.test(form.pincode)) return "Enter valid 6-digit pincode";
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = isValid();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);

//     try {
//       await AddressService.updateAddress({
//         ...form,
//         name: form.name.trim(),
//         street: form.street.trim(),
//         city: form.city.trim(),
//         state: form.state.trim(),
//         area: form.area?.trim(),
//         landmark: form.landmark?.trim(),
//       });

//       onSuccess?.();
//     } catch (err) {
//       console.error("Update address failed", err);
//       setError("Failed to update address. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-xl border shadow"
//     >
//       <h2 className="text-xl font-semibold mb-6">Edit Address</h2>

//       {/* ERROR */}
//       {error && (
//         <p className="mb-4 text-sm text-red-600 font-medium">{error}</p>
//       )}

//       {/* NAME + MOBILE */}
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           value={form.name}
//           onChange={update}
//           placeholder="Full Name"
//           className="input"
//         />
//         <input
//           name="mobile"
//           value={form.mobile}
//           onChange={update}
//           placeholder="Mobile"
//           maxLength={10}
//           className="input"
//         />
//       </div>

//       {/* STREET */}
//       <input
//         name="street"
//         value={form.street}
//         onChange={update}
//         placeholder="Flat / Building / Street"
//         className="input mt-4"
//       />

//       {/* CITY - STATE - PINCODE */}
//       <div className="grid grid-cols-3 gap-4 mt-4">
//         <input
//           name="city"
//           value={form.city}
//           onChange={update}
//           placeholder="City"
//           className="input"
//         />
//         <input
//           name="state"
//           value={form.state}
//           onChange={update}
//           placeholder="State"
//           className="input"
//         />
//         <input
//           name="pincode"
//           value={form.pincode}
//           onChange={update}
//           placeholder="PIN Code"
//           maxLength={6}
//           className="input"
//         />
//       </div>

//       {/* AREA */}
//       <input
//         name="area"
//         value={form.area}
//         onChange={update}
//         placeholder="Area / Locality"
//         className="input mt-4"
//       />

//       {/* LANDMARK */}
//       <input
//         name="landmark"
//         value={form.landmark}
//         onChange={update}
//         placeholder="Landmark"
//         className="input mt-4"
//       />

//       {/* LABEL */}
//       <div className="flex gap-3 mt-4">
//         {["Home", "Office", "Other"].map((lbl) => (
//           <button
//             type="button"
//             key={lbl}
//             onClick={() => setForm({ ...form, label: lbl })}
//             className={`px-4 py-2 rounded border ${
//               form.label === lbl
//                 ? "bg-primary text-white border-primary"
//                 : "border-gray-300"
//             }`}
//           >
//             {lbl}
//           </button>
//         ))}
//       </div>

//       {/* SAVE */}
//       <button
//         disabled={loading}
//         className="w-full bg-primary mt-6 py-3 rounded-lg text-white font-semibold disabled:opacity-60"
//       >
//         {loading ? "Updating..." : "UPDATE ADDRESS"}
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
  const [error, setError] = useState("");

  useEffect(() => {
    if (addressData?.id) {
      setForm({ ...addressData }); // ✅ preserve id + address_type
    }
  }, [addressData]);

  if (!form) return null;

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const isValid = () => {
    if (!form.name?.trim()) return "Name is required";
    if (!/^[0-9]{10}$/.test(form.mobile)) return "Enter valid 10-digit mobile";
    if (!form.street?.trim()) return "Street is required";
    if (!form.city?.trim()) return "City is required";
    if (!form.state?.trim()) return "State is required";
    if (!/^[0-9]{6}$/.test(form.pincode)) return "Enter valid 6-digit pincode";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = isValid();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await AddressService.updateAddress({
        ...form,
        name: form.name.trim(),
        street: form.street.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        area: form.area?.trim(),
        landmark: form.landmark?.trim(),
      });

      onSuccess?.();
    } catch (err) {
      console.error("Update address failed", err);
      setError("Failed to update address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border border-neutral shadow"
    >
      <h2 className="text-xl font-semibold mb-6 text-dark">Edit Address</h2>

      {/* ERROR */}
      {error && (
        <p className="mb-4 text-sm text-red-600 font-medium">{error}</p>
      )}

      {/* NAME + MOBILE */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
          className="p-3 border rounded outline-none"
        />
        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={update}
          maxLength={10}
          className="p-3 border rounded outline-none"
        />
      </div>

      {/* STREET */}
      <input
        name="street"
        placeholder="Flat no / Building / Street"
        value={form.street}
        onChange={update}
        className="p-3 w-full border rounded mt-4 outline-none"
      />

      {/* CITY - STATE - PINCODE */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={update}
          className="p-3 border rounded outline-none"
        />
        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={update}
          className="p-3 border rounded outline-none"
        />
        <input
          name="pincode"
          placeholder="PIN Code"
          value={form.pincode}
          onChange={update}
          maxLength={6}
          className="p-3 border rounded outline-none"
        />
      </div>

      {/* AREA */}
      <input
        name="area"
        placeholder="Area / Locality"
        value={form.area}
        onChange={update}
        className="p-3 w-full border rounded mt-4 outline-none"
      />

      {/* LANDMARK */}
      <input
        name="landmark"
        placeholder="Landmark"
        value={form.landmark}
        onChange={update}
        className="p-3 w-full border rounded mt-4 outline-none"
      />

      {/* ADDRESS TYPE (same as Add form) */}
      <div className="flex gap-3 mt-4">
        {["Home", "Office", "Other"].map((type) => {
          const active = form.address_type === type;

          return (
            <button
              type="button"
              key={type}
              onClick={() => setForm({ ...form, address_type: type })}
              className={`px-4 py-2 rounded border transition ${
                active
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-gray-700 hover:border-primary"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* SAVE */}
      <button
        disabled={loading}
        className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Updating..." : "UPDATE ADDRESS"}
      </button>
    </form>
  );
};

export default EditAddressForm;
