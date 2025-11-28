import { FiSearch, FiEye, FiTrash2, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-500">Manage all registered users.</p>
      </div>

      {/* Search + Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl flex-1 shadow-inner">
          <FiSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search users by name, email..."
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>

        {/* Role Filter */}
        <select className="px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm text-gray-700 outline-none">
          <option value="">All Roles</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="py-3 px-3">User</th>
              <th className="py-3 px-3">Email</th>
              <th className="py-3 px-3">Phone</th>
              <th className="py-3 px-3">Role</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {/* USER 1 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/60"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <span className="font-medium">Tushar Patil</span>
              </td>

              <td className="py-4 px-3 text-gray-700">tushar@example.com</td>
              <td className="py-4 px-3 text-gray-700">9876543210</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 font-semibold rounded-full">
                  User
                </span>
              </td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 font-semibold rounded-full">
                  Active
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/users/1"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* USER 2 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/60"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <span className="font-medium">Aditi Sharma</span>
              </td>

              <td className="py-4 px-3 text-gray-700">aditi@example.com</td>
              <td className="py-4 px-3 text-gray-700">8877665544</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 font-semibold rounded-full">
                  Admin
                </span>
              </td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 font-semibold rounded-full">
                  Active
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/users/2"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEye size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* USER 3 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/60"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <span className="font-medium">Rohan Singh</span>
              </td>

              <td className="py-4 px-3 text-gray-700">rohan@example.com</td>
              <td className="py-4 px-3 text-gray-700">9988776655</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 font-semibold rounded-full">
                  User
                </span>
              </td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 text-xs bg-red-100 text-red-700 font-semibold rounded-full">
                  Blocked
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/users/3"
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

export default Users;
