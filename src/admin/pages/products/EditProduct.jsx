import { useState, useEffect } from "react";
import { FiUploadCloud, FiPlus, FiTrash2 } from "react-icons/fi";

// Same sizes as AddProduct
const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

export default function EditProduct() {
  // ---------------------
  // MOCK EXISTING PRODUCT (Replace this with API data later)
  // ---------------------
  const existingProduct = {
    title: "Peach Kurti",
    categorySlug: "designer-kurtis",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    mainImage: "https://via.placeholder.com/150",
    hoverImage: "https://via.placeholder.com/150",
    extraImages: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],

    sizes: ["S", "M", "L"],
    stock: { S: 12, M: 0, L: 6 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve" },
    ],

    description:
      "This peach kurti is crafted from breathable cotton, offering comfort and elegance.",
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
    `,

    returnPolicy: "7-day return or exchange",

    tags: ["Fabric Quality", "Comfort"],

    related: ["grey-kurti", "yellow-kurti"],
  };

  // ---------------------
  // STATES
  // ---------------------
  const [form, setForm] = useState({});
  const [extraImages, setExtraImages] = useState([]);

  // Load existing product on mount
  useEffect(() => {
    setForm(existingProduct);
    setExtraImages(existingProduct.extraImages);
  }, []);

  // Updating basic fields
  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Image handlers
  const changeMainImage = (e) => {
    updateField("mainImage", URL.createObjectURL(e.target.files[0]));
  };

  const changeHoverImage = (e) => {
    updateField("hoverImage", URL.createObjectURL(e.target.files[0]));
  };

  const addExtraImages = (e) => {
    const files = [...e.target.files];
    const previews = files.map((f) => URL.createObjectURL(f));
    setExtraImages([...extraImages, ...previews]);
  };

  // Sizes toggle
  const toggleSize = (size) => {
    const updatedSizes = form.sizes.includes(size)
      ? form.sizes.filter((s) => s !== size)
      : [...form.sizes, size];

    updateField("sizes", updatedSizes);
  };

  // Update stock
  const updateStock = (size, value) => {
    updateField("stock", { ...form.stock, [size]: value });
  };

  // Highlights
  const updateHighlight = (index, field, value) => {
    const updated = [...form.highlights];
    updated[index][field] = value;
    updateField("highlights", updated);
  };

  const addHighlight = () => {
    updateField("highlights", [...form.highlights, { label: "", value: "" }]);
  };

  const removeHighlight = (index) => {
    updateField(
      "highlights",
      form.highlights.filter((_, i) => i !== index)
    );
  };

  // Tags
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;
    updateField("tags", [...form.tags, tagInput.trim()]);
    setTagInput("");
  };

  const removeTag = (tag) => {
    updateField(
      "tags",
      form.tags.filter((t) => t !== tag)
    );
  };

  // Related products
  const [relatedInput, setRelatedInput] = useState("");

  const addRelated = () => {
    if (!relatedInput.trim()) return;
    updateField("related", [...form.related, relatedInput.trim()]);
    setRelatedInput("");
  };

  const removeRelated = (slug) => {
    updateField(
      "related",
      form.related.filter((r) => r !== slug)
    );
  };

  // ---------------------
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>

      {form.title && (
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-10">
          {/* BASIC INFO */}
          <Section title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="Product Title"
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
              />

              <Input
                label="Category Slug"
                value={form.categorySlug}
                onChange={(e) => updateField("categorySlug", e.target.value)}
              />
            </div>
          </Section>

          {/* PRICING */}
          <Section title="Pricing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Input
                label="Price (₹)"
                value={form.price}
                type="number"
                onChange={(e) => updateField("price", e.target.value)}
              />

              <Input
                label="Old Price (₹)"
                value={form.oldPrice}
                type="number"
                onChange={(e) => updateField("oldPrice", e.target.value)}
              />

              <Input
                label="Rating"
                type="number"
                step="0.1"
                value={form.rating}
                onChange={(e) => updateField("rating", e.target.value)}
              />
            </div>
          </Section>

          {/* IMAGES */}
          <Section title="Product Images">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ImageUpload
                label="Main Image"
                value={form.mainImage}
                onChange={changeMainImage}
              />

              <ImageUpload
                label="Hover Image"
                value={form.hoverImage}
                onChange={changeHoverImage}
              />
            </div>

            <div className="mt-6">
              <label className="font-medium">Extra Images</label>
              <UploadBox onChange={addExtraImages} />

              <div className="flex gap-3 flex-wrap mt-3">
                {extraImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-20 h-20 rounded-xl object-cover shadow border"
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* SIZES & STOCK */}
          <Section title="Sizes & Stock">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {ALL_SIZES.map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.sizes.includes(size)}
                    onChange={() => toggleSize(size)}
                  />
                  {size}
                </label>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              {form.sizes.map((size) => (
                <Input
                  key={size}
                  label={`${size} Stock`}
                  type="number"
                  value={form.stock[size]}
                  onChange={(e) => updateStock(size, e.target.value)}
                />
              ))}
            </div>
          </Section>

          {/* HIGHLIGHTS */}
          <Section title="Highlights">
            <div className="space-y-4">
              {form.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
                >
                  <Input
                    placeholder="Label"
                    value={item.label}
                    onChange={(e) =>
                      updateHighlight(idx, "label", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Value"
                    value={item.value}
                    onChange={(e) =>
                      updateHighlight(idx, "value", e.target.value)
                    }
                  />
                  <button
                    className="text-red-500"
                    onClick={() => removeHighlight(idx)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
            <AddButton label="Add Highlight" onClick={addHighlight} />
          </Section>

          {/* DESCRIPTION */}
          <Section title="Description">
            <Textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </Section>

          {/* DETAILS */}
          <Section title="Details">
            <Textarea
              value={form.details}
              onChange={(e) => updateField("details", e.target.value)}
            />
          </Section>

          {/* RETURN POLICY */}
          <Section title="Return Policy">
            <Input
              value={form.returnPolicy}
              onChange={(e) => updateField("returnPolicy", e.target.value)}
            />
          </Section>

          {/* TAGS */}
          <Section title="Tags">
            <TagInput
              items={form.tags}
              input={tagInput}
              setInput={setTagInput}
              addItem={addTag}
              removeItem={removeTag}
              placeholder="Fabric Quality"
            />
          </Section>

          {/* RELATED PRODUCTS */}
          <Section title="Related Products">
            <TagInput
              items={form.related}
              input={relatedInput}
              setInput={setRelatedInput}
              addItem={addRelated}
              removeItem={removeRelated}
              placeholder="grey-kurti"
            />
          </Section>

          {/* SAVE BUTTON */}
          <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-teal-500 py-4 text-white rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------
 * COMPONENTS
 * -------------------------------------------- */

const Section = ({ title, children }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold border-l-4 pl-3 border-blue-500 text-gray-800">
      {title}
    </h2>
    {children}
  </div>
);

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    {label && <label className="text-gray-700 font-medium">{label}</label>}
    <input
      {...props}
      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Textarea = (props) => (
  <textarea
    {...props}
    rows="4"
    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
  ></textarea>
);

const UploadBox = ({ onChange }) => (
  <div className="mt-2 border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
    <label className="flex flex-col items-center">
      <FiUploadCloud className="text-gray-500" size={30} />
      <p className="text-gray-600 mt-1 text-sm">Upload Images</p>
      <input type="file" className="hidden" multiple onChange={onChange} />
    </label>
  </div>
);

const ImageUpload = ({ label, value, onChange }) => (
  <div>
    <label className="font-medium text-gray-700">{label}</label>
    <UploadBox onChange={onChange} />

    {value && (
      <img
        src={value}
        className="w-32 h-32 rounded-xl mt-3 object-cover shadow"
      />
    )}
  </div>
);

const AddButton = ({ label, onClick }) => (
  <button className="text-blue-600 flex items-center gap-2" onClick={onClick}>
    <FiPlus /> {label}
  </button>
);

const TagInput = ({
  items,
  input,
  setInput,
  addItem,
  removeItem,
  placeholder,
}) => (
  <>
    <div className="flex gap-3">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-4 py-3 border rounded-xl"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="px-5 py-3 bg-blue-600 text-white rounded-xl"
        onClick={addItem}
        type="button"
      >
        Add
      </button>
    </div>

    <div className="flex gap-3 flex-wrap mt-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
        >
          {item}
          <button onClick={() => removeItem(item)} className="text-red-500">
            ✕
          </button>
        </span>
      ))}
    </div>
  </>
);
