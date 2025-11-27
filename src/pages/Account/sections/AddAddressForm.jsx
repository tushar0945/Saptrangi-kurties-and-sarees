// // // // src/pages/Account/sections/AddressForm.jsx
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // /*
// // //   For 'edit' mode we pretend to load the data by id.
// // //   Replace fetch calls with your API.
// // // */
// // // const fakeFetchAddress = (id) =>
// // //   new Promise((res) =>
// // //     setTimeout(
// // //       () =>
// // //         res({
// // //           id,
// // //           name: "sdfsd sdsdflk",
// // //           firstName: "sdfsd",
// // //           lastName: "sdsdflk",
// // //           mobile: "8999197992",
// // //           pincode: "425412",
// // //           city: "Nandurbar",
// // //           state: "Maharashtra",
// // //           street: "TALWADE Bk",
// // //           area: "sdfjslk",
// // //           landmark: "sdfjskldj",
// // //           label: "Other",
// // //         }),
// // //       300
// // //     )
// // //   );

// // // const AddressForm = ({ addressId = null }) => {
// // //   const isEdit = !!addressId;
// // //   const [loading, setLoading] = useState(isEdit);
// // //   const [form, setForm] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     mobile: "",
// // //     pincode: "",
// // //     city: "",
// // //     state: "",
// // //     street: "",
// // //     area: "",
// // //     landmark: "",
// // //     label: "Home",
// // //   });

// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (isEdit) {
// // //       setLoading(true);
// // //       fakeFetchAddress(addressId).then((data) => {
// // //         setForm({
// // //           firstName: data.firstName,
// // //           lastName: data.lastName,
// // //           mobile: data.mobile,
// // //           pincode: data.pincode,
// // //           city: data.city,
// // //           state: data.state,
// // //           street: data.street,
// // //           area: data.area,
// // //           landmark: data.landmark,
// // //           label: data.label,
// // //         });
// // //         setLoading(false);
// // //       });
// // //     }
// // //   }, [addressId, isEdit]);

// // //   const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

// // //   const handleSave = () => {
// // //     // call create or update API
// // //     // on success navigate back to list:
// // //     navigate("/myaccount/addresses");
// // //   };

// // //   if (loading) return <div className="p-6 bg-white rounded">Loading...</div>;

// // //   return (
// // //     <div className="bg-white border rounded-lg p-6">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         <div>
// // //           <label className="text-sm text-gray-600">First Name *</label>
// // //           <input
// // //             value={form.firstName}
// // //             onChange={(e) => update("firstName", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="First Name"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="text-sm text-gray-600">Last Name</label>
// // //           <input
// // //             value={form.lastName}
// // //             onChange={(e) => update("lastName", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="Last Name"
// // //           />
// // //         </div>

// // //         <div className="md:col-span-2">
// // //           <label className="text-sm text-gray-600">Mobile Number *</label>
// // //           <div className="flex gap-3 items-center mt-1">
// // //             <div className="px-3 py-3 bg-gray-50 rounded border">+91</div>
// // //             <input
// // //               value={form.mobile}
// // //               onChange={(e) => update("mobile", e.target.value)}
// // //               className="flex-1 px-4 py-3 border rounded"
// // //               placeholder="Mobile Number"
// // //             />
// // //             {/* If mobile change needs verification, show "Change" button near the field */}
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <label className="text-sm text-gray-600">PIN Code *</label>
// // //           <input
// // //             value={form.pincode}
// // //             onChange={(e) => update("pincode", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="PIN Code"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="text-sm text-gray-600">City *</label>
// // //           <input
// // //             value={form.city}
// // //             onChange={(e) => update("city", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="City"
// // //           />
// // //         </div>

// // //         <div className="md:col-span-2">
// // //           <label className="text-sm text-gray-600">
// // //             Flat no/Building, Street name *
// // //           </label>
// // //           <input
// // //             value={form.street}
// // //             onChange={(e) => update("street", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="Flat no/Building, Street name"
// // //           />
// // //         </div>

// // //         <div className="md:col-span-2">
// // //           <label className="text-sm text-gray-600">Area/Locality *</label>
// // //           <input
// // //             value={form.area}
// // //             onChange={(e) => update("area", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="Area/Locality"
// // //           />
// // //         </div>

// // //         <div className="md:col-span-2">
// // //           <label className="text-sm text-gray-600">Landmark</label>
// // //           <input
// // //             value={form.landmark}
// // //             onChange={(e) => update("landmark", e.target.value)}
// // //             className="w-full mt-1 px-4 py-3 border rounded"
// // //             placeholder="Landmark"
// // //           />
// // //         </div>

// // //         <div className="md:col-span-2 mt-3">
// // //           <div className="flex gap-3">
// // //             {["Home", "Office", "Other"].map((lbl) => (
// // //               <button
// // //                 key={lbl}
// // //                 type="button"
// // //                 onClick={() => update("label", lbl)}
// // //                 className={`px-4 py-2 border rounded ${
// // //                   form.label === lbl ? "bg-yellow-200" : ""
// // //                 }`}
// // //               >
// // //                 {lbl}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="mt-6">
// // //         <button
// // //           onClick={handleSave}
// // //           className="w-full bg-yellow-400 py-3 rounded font-semibold"
// // //         >
// // //           SAVE ADDRESS
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddressForm;

// // import React, { useState } from "react";

// // const AddAddressForm = ({ onAddAddress }) => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     pincode: "",
// //     mobile: "",
// //     label: "Other",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const newAddress = {
// //       id: crypto.randomUUID(),
// //       ...form,
// //     };

// //     onAddAddress(newAddress);

// //     // You may show toast: “Address added successfully”
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="bg-white p-6 rounded-xl border shadow"
// //     >
// //       <div className="grid grid-cols-2 gap-4">
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Full Name"
// //           className="border rounded p-3"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="mobile"
// //           placeholder="Mobile Number"
// //           className="border rounded p-3"
// //           onChange={handleChange}
// //         />
// //       </div>

// //       <input
// //         type="text"
// //         name="street"
// //         placeholder="Street"
// //         className="border rounded p-3 w-full mt-4"
// //         onChange={handleChange}
// //       />

// //       <div className="grid grid-cols-3 gap-4 mt-4">
// //         <input
// //           type="text"
// //           name="city"
// //           placeholder="City"
// //           className="border rounded p-3"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="state"
// //           placeholder="State"
// //           className="border rounded p-3"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="pincode"
// //           placeholder="PIN Code"
// //           className="border rounded p-3"
// //           onChange={handleChange}
// //         />
// //       </div>

// //       <button
// //         type="submit"
// //         className="mt-6 w-full bg-yellow-400 py-3 rounded-lg font-semibold"
// //       >
// //         SAVE ADDRESS
// //       </button>
// //     </form>
// //   );
// // };

// // export default AddAddressForm;

// import React, { useState } from "react";

// const AddAddressForm = ({ onAddAddress }) => {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newAddress = {
//       id: crypto.randomUUID(),
//       name: `${form.firstName} ${form.lastName}`,
//       ...form,
//     };

//     onAddAddress(newAddress);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white border rounded-lg p-6 shadow"
//     >
//       {/* GRID START */}
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

//         {/* MOBILE NUMBER */}
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
//           type="submit"
//           className="w-full bg-yellow-400 py-3 rounded font-semibold hover:bg-yellow-500"
//         >
//           SAVE ADDRESS
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddAddressForm;

import React, { useState } from "react";

const AddAddressForm = ({ onAddAddress }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    area: "",
    landmark: "",
    label: "Other",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddAddress({
      id: crypto.randomUUID(),
      ...form,
    });
  };

  return (
    <form
      className="bg-white p-6 rounded-xl border shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-6">Add New Address</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          className="p-3 border rounded"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
        />
        <input
          name="mobile"
          className="p-3 border rounded"
          placeholder="Mobile"
          value={form.mobile}
          onChange={update}
        />
      </div>

      <input
        name="street"
        className="p-3 w-full border rounded mt-4"
        placeholder="Flat no/Building, Street name"
        value={form.street}
        onChange={update}
      />

      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          name="city"
          className="p-3 border rounded"
          placeholder="City"
          value={form.city}
          onChange={update}
        />
        <input
          name="state"
          className="p-3 border rounded"
          placeholder="State"
          value={form.state}
          onChange={update}
        />
        <input
          name="pincode"
          className="p-3 border rounded"
          placeholder="PIN Code"
          value={form.pincode}
          onChange={update}
        />
      </div>

      <input
        name="area"
        className="p-3 w-full border rounded mt-4"
        placeholder="Area / Locality"
        value={form.area}
        onChange={update}
      />
      <input
        name="landmark"
        className="p-3 w-full border rounded mt-4"
        placeholder="Landmark"
        value={form.landmark}
        onChange={update}
      />

      <div className="flex gap-3 mt-4">
        {["Home", "Office", "Other"].map((lbl) => (
          <button
            type="button"
            key={lbl}
            onClick={() => setForm({ ...form, label: lbl })}
            className={`px-4 py-2 border rounded ${
              form.label === lbl ? "bg-yellow-200" : ""
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>

      <button className="w-full bg-yellow-400 mt-6 py-3 rounded-lg font-semibold">
        SAVE ADDRESS
      </button>
    </form>
  );
};

export default AddAddressForm;
