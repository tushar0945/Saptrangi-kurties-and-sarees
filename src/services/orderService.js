// // src/services/orderService.js
// import api from "../api/axios";

// export const OrderService = {
//   // 📦 Get single order details
//   async getOrderById(orderId) {
//     const res = await api.get(`orders/${orderId}/`);
//     return res.data;
//   },

//   // (future ready)
//   async requestReturn(orderId, payload) {
//     const res = await api.post(`orders/${orderId}/return/`, payload);
//     return res.data;
//   },

//   async submitReview(orderId, payload) {
//     const res = await api.post(`orders/${orderId}/review/`, payload);
//     return res.data;
//   },
// };

// src/services/orderService.js
import api from "../api/axios";

export const OrderService = {
  // 📦 GET ALL ORDERS
  async getMyOrders() {
    const res = await api.get("orders/list");
    // backend returns { orders: [...] }
    return res.data?.orders || [];
  },

  // 📦 GET SINGLE ORDER
  async getOrderById(orderId) {
    const res = await api.get(`orders/details/${orderId}/`);
    return res.data;
  },

  // 🔄 REQUEST RETURN (future ready)
  async requestReturn(orderId, payload) {
    const res = await api.post(`orders/${orderId}/return/`, payload);
    return res.data;
  },

  // ⭐ SUBMIT REVIEW (future ready)
  async submitReview(orderId, payload) {
    const res = await api.post(`orders/${orderId}/review/`, payload);
    return res.data;
  },
};
