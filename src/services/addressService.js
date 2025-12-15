import api from "../api/axios";

export const AddressService = {
  // ➕ ADD
  async addAddress(data) {
    const res = await api.post("auth/address/", data);
    console.log(res);
    return res.data.data;
  },

  // 📥 GET
  async getAddresses() {
    const res = await api.get("auth/address/");
    console.log(res);
    return res.data;
  },

  // ✏️ UPDATE
  async updateAddress(data) {
    const res = await api.put("auth/address/", data);
    console.log(res);
    return res.data.data;
  },

  // ❌ DELETE
  async deleteAddress(id) {
    await api.delete("auth/address/", {
      data: { id },
    });
    // console.log(res);
  },
};
