import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const AddCategory = () => {
  const [imagePreview, setImagePreview] = useState(null);

  // CATEGORY FORM STATE
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    status: "active",
  });

  // Auto-generate slug
  const handleSlug = (value) => {
    const slugValue = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setForm({ ...form, name: value, slug: slugValue });
  };

  // Image Upload Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Add New Category</h1>
        <p className="text-gray-500 mt-1">Create a new product category.</p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
        {/* Basic Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500 text-gray-800">
            Category Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Name */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Category Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleSlug(e.target.value)}
                placeholder="Designer Kurtis"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Slug */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Category Slug</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="designer-kurtis"
                className="w-full px-4 py-3 border rounded-xl bg-gray-50 text-gray-600"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-teal-500 text-gray-800">
            Description
          </h2>
          <textarea
            rows="3"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter category description"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Category Image */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500 text-gray-800">
            Category Image
          </h2>

          <div className="border-2 border-dashed rounded-xl p-6 bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
            <label className="flex flex-col items-center">
              <FiUploadCloud size={36} className="text-gray-500" />
              <p className="text-gray-600 mt-2 text-sm">
                Upload category image
              </p>
              <input type="file" className="hidden" onChange={handleImage} />
            </label>
          </div>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-xl shadow-md"
            />
          )}
        </div>

        {/* Status */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-orange-500 text-gray-800">
            Status
          </h2>

          <select
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition">
          Save Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
