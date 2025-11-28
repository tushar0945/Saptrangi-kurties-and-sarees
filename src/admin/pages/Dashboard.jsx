// const Dashboard = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Dashboard Overview
//       </h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <p className="text-gray-500">Total Users</p>
//           <h2 className="text-2xl font-bold">126</h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p className="text-gray-500">Total Orders</p>
//           <h2 className="text-2xl font-bold">89</h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p className="text-gray-500">Revenue</p>
//           <h2 className="text-2xl font-bold">₹1,24,000</h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p className="text-gray-500">Products</p>
//           <h2 className="text-2xl font-bold">42</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { FiUsers, FiShoppingBag, FiBarChart2, FiBox } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">
          Key metrics for your business at a glance.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Users */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h2 className="text-3xl font-bold mt-1">126</h2>
            </div>
            <div className="p-4 bg-blue-100 text-blue-600 rounded-xl shadow">
              <FiUsers size={28} />
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <h2 className="text-3xl font-bold mt-1">89</h2>
            </div>
            <div className="p-4 bg-purple-100 text-purple-600 rounded-xl shadow">
              <FiShoppingBag size={28} />
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Revenue</p>
              <h2 className="text-3xl font-bold mt-1">₹1,24,000</h2>
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-xl rounded-xl">
              <FiBarChart2 size={28} />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h2 className="text-3xl font-bold mt-1">42</h2>
            </div>
            <div className="p-4 bg-orange-100 text-orange-600 rounded-xl shadow">
              <FiBox size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3 font-medium">#1001</td>
              <td className="py-3">Rohit Sharma</td>
              <td className="py-3">₹2,499</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                  Delivered
                </span>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3 font-medium">#1002</td>
              <td className="py-3">Neha Patel</td>
              <td className="py-3">₹1,199</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                  Pending
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="py-3 font-medium">#1003</td>
              <td className="py-3">Amit Verma</td>
              <td className="py-3">₹3,499</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                  Cancelled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
