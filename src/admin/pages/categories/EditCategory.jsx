import { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();

  // -----------------------------
  // MOCK CATEGORY (replace with API later)
  // -----------------------------
  const mockCategory = {
    name: "Designer Kurtis",
    slug: "designer-kurtis",
    description: "Beautiful designer kurtis for women.",
    status: "active",
    image: "https://via.placeholder.com/150", // preview image
  };

  const [form, setForm] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  // Load existing category
  useEffect(() => {
    setForm(mockCategory);
    setImagePreview(mockCategory.image);
  }, []);

  // Auto-slug logic
  const updateName = (value) => {
    const newSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setForm({ ...form, name: value, slug: newSlug });
  };

  // Image handler
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Edit Category</h1>
        <p className="text-gray-500 mt-1">Modify category details below.</p>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
        {/* Category Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500 text-gray-800">
            Category Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Category Name</label>
              <input
                type="text"
                value={form.name || ""}
                onChange={(e) => updateName(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Slug */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Category Slug</label>
              <input
                type="text"
                value={form.slug || ""}
                readOnly
                className="w-full px-4 py-3 border rounded-xl bg-gray-100 text-gray-600"
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
            value={form.description || ""}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Write about this category..."
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-l-4 pl-3 border-purple-500 text-gray-800">
            Category Image
          </h2>

          <div className="border-2 border-dashed rounded-xl p-6 bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
            <label className="flex flex-col items-center">
              <FiUploadCloud size={36} className="text-gray-500" />
              <p className="text-gray-600 mt-2 text-sm">
                Upload new category image
              </p>
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Preview */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Category Preview"
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
            value={form.status || "active"}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Save */}
        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
