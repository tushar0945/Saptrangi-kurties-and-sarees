// import React, { useState } from "react";

// const AddAddressForm = ({ onAddAddress }) => {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     area: "",
//     landmark: "",
//     label: "Other",
//   });

//   const update = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddAddress({
//       id: crypto.randomUUID(),
//       ...form,
//     });
//   };

//   return (
//     <form
//       className="bg-white p-6 rounded-xl border border-neutral shadow"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-xl font-semibold mb-6 text-dark">Add New Address</h2>

//       {/* NAME + MOBILE */}
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={update}
//         />
//         <input
//           name="mobile"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           placeholder="Mobile"
//           value={form.mobile}
//           onChange={update}
//         />
//       </div>

//       {/* STREET */}
//       <input
//         name="street"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         placeholder="Flat no/Building, Street name"
//         value={form.street}
//         onChange={update}
//       />

//       {/* CITY - STATE - PINCODE */}
//       <div className="grid grid-cols-3 gap-4 mt-4">
//         <input
//           name="city"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           placeholder="City"
//           value={form.city}
//           onChange={update}
//         />
//         <input
//           name="state"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           placeholder="State"
//           value={form.state}
//           onChange={update}
//         />
//         <input
//           name="pincode"
//           className="p-3 border border-neutral rounded text-dark outline-none"
//           placeholder="PIN Code"
//           value={form.pincode}
//           onChange={update}
//         />
//       </div>

//       {/* AREA */}
//       <input
//         name="area"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         placeholder="Area / Locality"
//         value={form.area}
//         onChange={update}
//       />

//       {/* LANDMARK */}
//       <input
//         name="landmark"
//         className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
//         placeholder="Landmark"
//         value={form.landmark}
//         onChange={update}
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

//       {/* SAVE BUTTON */}
//       <button className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white transition">
//         SAVE ADDRESS
//       </button>
//     </form>
//   );
// };

// export default AddAddressForm;

import React, { useState } from "react";
import { AddressService } from "../../../services/addressService";

const AddAddressForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await AddressService.addAddress(form);
      onSuccess?.(); // refresh list + navigate back
    } catch (err) {
      console.error("Add address failed", err);
      alert("Failed to add address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-xl border border-neutral shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-6 text-dark">Add New Address</h2>

      {/* NAME + MOBILE */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          className="p-3 border border-neutral rounded text-dark outline-none"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
        />
        <input
          name="mobile"
          className="p-3 border border-neutral rounded text-dark outline-none"
          placeholder="Mobile"
          value={form.mobile}
          onChange={update}
        />
      </div>

      {/* STREET */}
      <input
        name="street"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        placeholder="Flat no/Building, Street name"
        value={form.street}
        onChange={update}
      />

      {/* CITY - STATE - PINCODE */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          name="city"
          className="p-3 border border-neutral rounded text-dark outline-none"
          placeholder="City"
          value={form.city}
          onChange={update}
        />
        <input
          name="state"
          className="p-3 border border-neutral rounded text-dark outline-none"
          placeholder="State"
          value={form.state}
          onChange={update}
        />
        <input
          name="pincode"
          className="p-3 border border-neutral rounded text-dark outline-none"
          placeholder="PIN Code"
          value={form.pincode}
          onChange={update}
        />
      </div>

      {/* AREA */}
      <input
        name="area"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        placeholder="Area / Locality"
        value={form.area}
        onChange={update}
      />

      {/* LANDMARK */}
      <input
        name="landmark"
        className="p-3 w-full border border-neutral rounded mt-4 text-dark outline-none"
        placeholder="Landmark"
        value={form.landmark}
        onChange={update}
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

      {/* SAVE BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-primary hover:bg-secondary mt-6 py-3 rounded-lg font-semibold text-white transition disabled:opacity-60"
      >
        {loading ? "Saving..." : "SAVE ADDRESS"}
      </button>
    </form>
  );
};

export default AddAddressForm;
