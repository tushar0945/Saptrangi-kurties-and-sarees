import { FiSearch, FiEye, FiTrash2, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <p className="text-gray-500">Manage all customer orders.</p>
      </div>

      {/* Search + Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl flex-1 shadow-inner">
          <FiSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by order ID or customer..."
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm text-gray-700 text-sm">
          <FiFilter />
          <select className="outline-none bg-transparent">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[950px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="py-3 px-3">Order ID</th>
              <th className="py-3 px-3">Customer</th>
              <th className="py-3 px-3">Items</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {/* ORDER 1 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 font-semibold">#ORD1023</td>
              <td className="py-4 px-3">Tushar Patil</td>
              <td className="py-4 px-3">3 items</td>
              <td className="py-4 px-3 font-semibold">₹2,499</td>
              <td className="py-4 px-3">26 Nov 2025</td>
              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                  Pending
                </span>
              </td>
              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/orders/1"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>
                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* ORDER 2 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 font-semibold">#ORD1024</td>
              <td className="py-4 px-3">Aditi Sharma</td>
              <td className="py-4 px-3">1 item</td>
              <td className="py-4 px-3 font-semibold">₹799</td>
              <td className="py-4 px-3">25 Nov 2025</td>
              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  Confirmed
                </span>
              </td>
              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/orders/2"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>
                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* ORDER 3 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 font-semibold">#ORD1025</td>
              <td className="py-4 px-3">Rohan Singh</td>
              <td className="py-4 px-3">4 items</td>
              <td className="py-4 px-3 font-semibold">₹3,199</td>
              <td className="py-4 px-3">24 Nov 2025</td>
              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  Shipped
                </span>
              </td>
              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/orders/3"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>
                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* ORDER 4 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-3 font-semibold">#ORD1026</td>
              <td className="py-4 px-3">Sneha More</td>
              <td className="py-4 px-3">2 items</td>
              <td className="py-4 px-3 font-semibold">₹1,899</td>
              <td className="py-4 px-3">22 Nov 2025</td>
              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  Delivered
                </span>
              </td>
              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/orders/4"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>
                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
