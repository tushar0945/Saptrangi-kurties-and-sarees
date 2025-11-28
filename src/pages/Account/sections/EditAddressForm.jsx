// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// /*
//   Fake fetch – replace with your real API call.
//   This loads the address based on addressId.
// */
// const fakeFetchAddress = (id) =>
//   new Promise((res) =>
//     setTimeout(
//       () =>
//         res({
//           id,
//           firstName: "Tushar",
//           lastName: "Patil",
//           mobile: "8999197992",
//           pincode: "425412",
//           city: "Nandurbar",
//           state: "Maharashtra",
//           street: "TALWADE Bk",
//           area: "Erw",
//           landmark: "Near Temple",
//           label: "Other",
//         }),
//       500
//     )
//   );

// const EditAddressForm = ({ addressId }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     mobile: "",
//     pincode: "",
//     city: "",
//     state: "",
//     street: "",
//     area: "",
//     landmark: "",
//     label: "Home",
//   });

//   const update = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   // Load data on mount
//   useEffect(() => {
//     setLoading(true);

//     fakeFetchAddress(addressId).then((data) => {
//       setForm({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         mobile: data.mobile,
//         pincode: data.pincode,
//         city: data.city,
//         state: data.state,
//         street: data.street,
//         area: data.area,
//         landmark: data.landmark,
//         label: data.label,
//       });

//       setLoading(false);
//     });
//   }, [addressId]);

//   const handleSave = () => {
//     // API call: updateAddress(addressId, form)
//     console.log("Updated Address:", form);

//     navigate("/myaccount/addresses");
//   };

//   if (loading)
//     return (
//       <div className="p-6 bg-white rounded-xl border shadow">
//         Loading address details...
//       </div>
//     );

//   return (
//     <div className="bg-white border rounded-lg p-6 shadow">
//       <h2 className="text-xl font-semibold mb-6">Edit Address</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* FIRST NAME */}
//         <div>
//           <label className="text-sm text-gray-600">First Name *</label>
//           <input
//             value={form.firstName}
//             onChange={(e) => update("firstName", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="First Name"
//             required
//           />
//         </div>

//         {/* LAST NAME */}
//         <div>
//           <label className="text-sm text-gray-600">Last Name *</label>
//           <input
//             value={form.lastName}
//             onChange={(e) => update("lastName", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="Last Name"
//             required
//           />
//         </div>

//         {/* MOBILE */}
//         <div className="md:col-span-2">
//           <label className="text-sm text-gray-600">Mobile Number *</label>
//           <div className="flex gap-3 items-center mt-1">
//             <div className="px-3 py-3 bg-gray-50 rounded border">+91</div>
//             <input
//               value={form.mobile}
//               onChange={(e) => update("mobile", e.target.value)}
//               className="flex-1 px-4 py-3 border rounded"
//               placeholder="Mobile Number"
//               required
//             />
//           </div>
//         </div>

//         {/* PIN CODE */}
//         <div>
//           <label className="text-sm text-gray-600">PIN Code *</label>
//           <input
//             value={form.pincode}
//             onChange={(e) => update("pincode", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="PIN Code"
//             required
//           />
//         </div>

//         {/* CITY */}
//         <div>
//           <label className="text-sm text-gray-600">City *</label>
//           <input
//             value={form.city}
//             onChange={(e) => update("city", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="City"
//             required
//           />
//         </div>

//         {/* STATE */}
//         <div className="md:col-span-2">
//           <label className="text-sm text-gray-600">State *</label>
//           <input
//             value={form.state}
//             onChange={(e) => update("state", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="State"
//             required
//           />
//         </div>

//         {/* STREET */}
//         <div className="md:col-span-2">
//           <label className="text-sm text-gray-600">
//             Flat no/Building, Street name *
//           </label>
//           <input
//             value={form.street}
//             onChange={(e) => update("street", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="Flat no/Building, Street name"
//             required
//           />
//         </div>

//         {/* AREA */}
//         <div className="md:col-span-2">
//           <label className="text-sm text-gray-600">Area/Locality *</label>
//           <input
//             value={form.area}
//             onChange={(e) => update("area", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="Area/Locality"
//             required
//           />
//         </div>

//         {/* LANDMARK */}
//         <div className="md:col-span-2">
//           <label className="text-sm text-gray-600">Landmark</label>
//           <input
//             value={form.landmark}
//             onChange={(e) => update("landmark", e.target.value)}
//             className="w-full mt-1 px-4 py-3 border rounded"
//             placeholder="Landmark"
//           />
//         </div>

//         {/* LABEL SELECTION */}
//         <div className="md:col-span-2 mt-3">
//           <div className="flex gap-3">
//             {["Home", "Office", "Other"].map((lbl) => (
//               <button
//                 key={lbl}
//                 type="button"
//                 onClick={() => update("label", lbl)}
//                 className={`px-4 py-2 border rounded ${
//                   form.label === lbl ? "bg-yellow-200" : ""
//                 }`}
//               >
//                 {lbl}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* SAVE BUTTON */}
//       <div className="mt-6">
//         <button
//           onClick={handleSave}
//           className="w-full bg-yellow-400 py-3 rounded font-semibold hover:bg-yellow-500"
//         >
//           SAVE CHANGES
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditAddressForm;

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
//       className="bg-white p-6 rounded-xl border shadow"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-xl font-semibold mb-6">Edit Address</h2>

//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           className="p-3 border rounded"
//           value={form.name}
//           onChange={update}
//         />
//         <input
//           name="mobile"
//           className="p-3 border rounded"
//           value={form.mobile}
//           onChange={update}
//         />
//       </div>

//       <input
//         name="street"
//         className="p-3 w-full border rounded mt-4"
//         value={form.street}
//         onChange={update}
//       />

//       <div className="grid grid-cols-3 gap-4 mt-4">
//         <input
//           name="city"
//           className="p-3 border rounded"
//           value={form.city}
//           onChange={update}
//         />
//         <input
//           name="state"
//           className="p-3 border rounded"
//           value={form.state}
//           onChange={update}
//         />
//         <input
//           name="pincode"
//           className="p-3 border rounded"
//           value={form.pincode}
//           onChange={update}
//         />
//       </div>

//       <input
//         name="area"
//         className="p-3 w-full border rounded mt-4"
//         value={form.area}
//         onChange={update}
//       />
//       <input
//         name="landmark"
//         className="p-3 w-full border rounded mt-4"
//         value={form.landmark}
//         onChange={update}
//       />

//       <div className="flex gap-3 mt-4">
//         {["Home", "Office", "Other"].map((lbl) => (
//           <button
//             type="button"
//             key={lbl}
//             onClick={() => setForm({ ...form, label: lbl })}
//             className={`px-4 py-2 border rounded ${
//               form.label === lbl ? "bg-yellow-200" : ""
//             }`}
//           >
//             {lbl}
//           </button>
//         ))}
//       </div>

//       <button className="w-full bg-yellow-400 mt-6 py-3 rounded-lg font-semibold">
//         UPDATE ADDRESS
//       </button>
//     </form>
//   );
// };

// export default EditAddressForm;

import React, { useState, useEffect } from "react";

const EditAddressForm = ({ addressData, onUpdateAddress }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (addressData) {
      setForm({ ...addressData });
    }
  }, [addressData]);

  if (!form) return <div>Loading...</div>;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAddress(form);
  };

  return (
    <form
      className="bg-white p-6 rounded-xl border border-neutral shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-6 text-dark">Edit Address</h2>

      {/* NAME + MOBILE */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          className="p-3 border border-neutral rounded text-dark outline-none"
          value={form.name}
          onChange={update}
          placeholder="Full Name"
        />
        <input
          name="mobile"
          className="p-3 border border-neutral rounded text-dark outline-none"
          value={form.mobile}
          onChange={update}
          placeholder="Mobile"
        />
      </div>

      {/* STREET */}
      <input
        name="street"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        value={form.street}
        onChange={update}
        placeholder="Flat no/Building, Street name"
      />

      {/* CITY - STATE - PINCODE */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          name="city"
          className="p-3 border border-neutral rounded text-dark outline-none"
          value={form.city}
          onChange={update}
          placeholder="City"
        />
        <input
          name="state"
          className="p-3 border border-neutral rounded text-dark outline-none"
          value={form.state}
          onChange={update}
          placeholder="State"
        />
        <input
          name="pincode"
          className="p-3 border border-neutral rounded text-dark outline-none"
          value={form.pincode}
          onChange={update}
          placeholder="PIN Code"
        />
      </div>

      {/* AREA */}
      <input
        name="area"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        value={form.area}
        onChange={update}
        placeholder="Area / Locality"
      />

      {/* LANDMARK */}
      <input
        name="landmark"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        value={form.landmark}
        onChange={update}
        placeholder="Landmark"
      />

      {/* LABEL BUTTONS */}
      <div className="flex gap-3 mt-4">
        {["Home", "Office", "Other"].map((lbl) => {
          const isActive = form.label === lbl;

          return (
            <button
              type="button"
              key={lbl}
              onClick={() => setForm({ ...form, label: lbl })}
              className={`px-4 py-2 rounded border
                ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "border-dark/20 text-dark hover:bg-neutral"
                }
              `}
            >
              {lbl}
            </button>
          );
        })}
      </div>

      {/* UPDATE BUTTON */}
      <button className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white transition">
        UPDATE ADDRESS
      </button>
    </form>
  );
};

export default EditAddressForm;
