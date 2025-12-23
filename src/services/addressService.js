// import api from "../api/axios";

// export const AddressService = {
//   // ➕ ADD
//   async addAddress(data) {
//     const res = await api.post("users/addresses/", data);
//     console.log(res);
//     return res.data.data;
//   },

//   // 📥 GET
//   async getAddresses() {
//     const res = await api.get("users/addresses/");
//     console.log(res);
//     return res.data;
//   },

//   // ✏️ UPDATE
//   async updateAddress(data) {
//     const res = await api.put("users/addresses/", data);
//     console.log(res);
//     return res.data.data;
//   },

//   // ❌ DELETE
//   async deleteAddress(id) {
//     await api.delete("users/addresses/", {
//       data: { id },
//     });
//     // console.log(res);
//   },
// };

import api from "../api/axios";

export const AddressService = {
  // ➕ ADD
  async addAddress(data) {
    const res = await api.post("users/addresses/", data);
    return res.data.data;
  },

  // 📥 GET
  async getAddresses() {
    const res = await api.get("users/addresses/");
    return res.data;
  },

  // ✏️ UPDATE (⚠️ must include id)
  async updateAddress(data) {
    if (!data.id) throw new Error("Address ID missing");
    const res = await api.put("users/addresses/", data);
    return res.data.data;
  },

  // ❌ DELETE
  async deleteAddress(id) {
    if (!id) throw new Error("Address ID missing");
    await api.delete("users/addresses/", {
      data: { id },
    });
  },
};
