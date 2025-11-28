import { FiPlus, FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>

        <Link
          to="/admin/products/add"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          <FiPlus size={20} />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl flex-1 shadow-inner">
          <FiSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>

        {/* Category Filter */}
        <select className="px-4 py-3 border border-gray-300 rounded-xl bg-white shadow text-gray-700 outline-none">
          <option value="">All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home Decor</option>
        </select>
      </div>

      {/* Product Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="text-left border-b bg-gray-50 text-gray-600">
              <th className="py-3 px-2">Product</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2">Stock</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-800">
            {/* SAMPLE ROW 1 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-2 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/55"
                  className="w-14 h-14 rounded-xl object-cover shadow-sm"
                />
                <span className="font-medium">Stylish Cotton Shirt</span>
              </td>

              <td className="py-4 px-2">Fashion</td>

              <td className="py-4 px-2 font-semibold">₹799</td>

              <td className="py-4 px-2">34 pcs</td>

              <td className="py-4 px-2">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 font-semibold rounded-full shadow-sm">
                  Active
                </span>
              </td>

              <td className="py-4 px-2 flex justify-center gap-6">
                <Link
                  to="/admin/products/1/edit"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEdit size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* SAMPLE ROW 2 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-2 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/55"
                  className="w-14 h-14 rounded-xl object-cover shadow-sm"
                />
                <span className="font-medium">Bluetooth Headphones</span>
              </td>

              <td className="py-4 px-2">Electronics</td>

              <td className="py-4 px-2 font-semibold">₹1,499</td>

              <td className="py-4 px-2">18 pcs</td>

              <td className="py-4 px-2">
                <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 font-semibold rounded-full shadow-sm">
                  Low Stock
                </span>
              </td>

              <td className="py-4 px-2 flex justify-center gap-6">
                <Link
                  to="/admin/products/2/edit"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEdit size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* SAMPLE ROW 3 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-2 flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/55"
                  className="w-14 h-14 rounded-xl object-cover shadow-sm"
                />
                <span className="font-medium">Decorative Wall Lamp</span>
              </td>

              <td className="py-4 px-2">Home Decor</td>

              <td className="py-4 px-2 font-semibold">₹649</td>

              <td className="py-4 px-2">12 pcs</td>

              <td className="py-4 px-2">
                <span className="px-3 py-1 text-xs bg-red-100 text-red-600 font-semibold rounded-full shadow-sm">
                  Out of Stock
                </span>
              </td>

              <td className="py-4 px-2 flex justify-center gap-6">
                <Link
                  to="/admin/products/3/edit"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEdit size={20} />
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

export default Products;
