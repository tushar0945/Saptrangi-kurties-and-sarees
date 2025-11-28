import { FiPlus, FiSearch, FiEdit, FiTrash2, FiTag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Categories</h1>

        <Link
          to="/admin/categories/add"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          <FiPlus size={20} />
          Add Category
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl flex-1 shadow-inner">
          <FiSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search categories..."
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>

        <div className="px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 shadow-sm text-sm">
          Showing 3 categories
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Slug</th>
              <th className="py-3 px-3">Products</th>
              <th className="py-3 px-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {/* Row 1 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3 font-medium">
                <FiTag className="text-purple-500" size={20} />
                Designer Kurtis
              </td>

              <td className="py-4 px-3 text-gray-600">designer-kurtis</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  12 products
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/categories/1/edit"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEdit size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3 font-medium">
                <FiTag className="text-purple-500" size={20} />
                Home Decor
              </td>

              <td className="py-4 px-3 text-gray-600">home-decor</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  8 products
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/categories/2/edit"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FiEdit size={20} />
                </Link>

                <button className="text-red-600 hover:text-red-800 transition">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-3 flex items-center gap-3 font-medium">
                <FiTag className="text-purple-500" size={20} />
                Electronics
              </td>

              <td className="py-4 px-3 text-gray-600">electronics</td>

              <td className="py-4 px-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  22 products
                </span>
              </td>

              <td className="py-4 px-3 flex justify-center gap-6">
                <Link
                  to="/admin/categories/3/edit"
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

export default Categories;
