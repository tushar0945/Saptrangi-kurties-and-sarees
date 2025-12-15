import React, { useMemo, useState } from "react";

/**
 * This component contains the actual filter controls.
 * It can be used as sidebar (desktop) or inside mobile drawer.
 *
 * Props:
 * - products (array)
 * - onApplyFilter(optional): function(filters) -> filteredList
 * - setFiltered(optional): used by CategoryPage (we'll compute filter in component and call setFiltered)
 */
const CategoryFilter = ({ products = [], setFiltered }) => {
  // controlled filter values
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState(new Set());
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [selectedMaterials, setSelectedMaterials] = useState(new Set());
  const [inStockOnly, setInStockOnly] = useState(false);

  // derived lists
  const allSizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes || []))),
    [products]
  );

  const tags = useMemo(() => {
    // fallback tags if none
    const allTags = products.flatMap((p) => p.tags || []);
    return Array.from(new Set(allTags));
  }, [products]);

  const colorPalette = [
    "Black",
    "Blue",
    "Grey",
    "Brown",
    "Green",
    "White",
    "Beige",
    "Purple",
    "Maroon",
    "Pink",
    "Red",
    "Yellow",
    "Orange",
  ];

  const materials = [
    "Cotton",
    "Silk",
    "Rayon",
    "Georgette",
    "Net",
    "Chiffon",
    "Velvet",
  ];

  const toggleSet = (setFn, setRef, value) => {
    const next = new Set(setRef);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setFn(next);
  };

  const applyFilters = () => {
    let list = [...products];

    // price
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;
    list = list.filter((p) => p.price >= min && p.price <= max);

    // sizes
    if (selectedSizes.size > 0) {
      list = list.filter((p) =>
        Array.from(selectedSizes).some((s) => (p.sizes || []).includes(s))
      );
    }

    // colors (we assume product has color tag or property; fallback uses tags)
    if (selectedColors.size > 0) {
      list = list.filter((p) => {
        const lowTags = (p.tags || []).map((t) => String(t).toLowerCase());
        return Array.from(selectedColors).some((c) =>
          lowTags.includes(String(c).toLowerCase())
        );
      });
    }

    // materials
    if (selectedMaterials.size > 0) {
      list = list.filter((p) => {
        const lowDetails = String(p.details || "").toLowerCase();
        return Array.from(selectedMaterials).some((m) =>
          lowDetails.includes(String(m).toLowerCase())
        );
      });
    }

    // availability
    if (inStockOnly) {
      list = list.filter((p) => {
        // check stock object or fallback to true
        if (!p.stock) return true;
        // if any size has qty > 0
        return Object.values(p.stock).some((q) => q > 0);
      });
    }

    if (setFiltered) setFiltered(list);
    return list;
  };

  const clearAll = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedSizes(new Set());
    setSelectedColors(new Set());
    setSelectedMaterials(new Set());
    setInStockOnly(false);
    if (setFiltered) setFiltered(products);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border w-full">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Price */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Price</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 rounded w-24"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="20000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-2 rounded w-24"
          />
        </div>
        <div className="mt-3 flex gap-3">
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Apply
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 border rounded-md bg-white"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <div className="font-medium mb-2">Sizes</div>
        <div className="flex flex-wrap gap-2">
          {allSizes.length === 0 ? (
            <div className="text-sm text-gray-500">No sizes</div>
          ) : (
            allSizes.map((s) => (
              <button
                key={s}
                onClick={() => toggleSet(setSelectedSizes, selectedSizes, s)}
                className={`px-3 py-1 border rounded-full text-sm ${
                  selectedSizes.has(s)
                    ? "bg-primary text-white border-primary"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <div className="font-medium mb-2">Color</div>
        <div className="flex flex-wrap gap-3">
          {colorPalette.map((c) => (
            <button
              key={c}
              onClick={() => toggleSet(setSelectedColors, selectedColors, c)}
              className={`flex items-center gap-2 px-3 py-1 border rounded-md text-sm ${
                selectedColors.has(c)
                  ? "bg-primary text-white border-primary"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span
                className="w-4 h-4 rounded-sm border"
                style={{ backgroundColor: c.toLowerCase() }}
              />
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <div className="font-medium mb-2">Material</div>
        <div className="flex flex-col gap-2">
          {materials.map((m) => (
            <label key={m} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedMaterials.has(m)}
                onChange={() =>
                  toggleSet(setSelectedMaterials, selectedMaterials, m)
                }
                className="w-4 h-4"
              />
              <span className="text-sm">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <div className="font-medium mb-2">Availability</div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <span className="text-sm">In stock</span>
        </label>
      </div>

      {/* Quick tags (if any) */}
      {/* {tags.length > 0 && (
        <div className="mb-2">
          <div className="font-medium mb-2">What our customers felt</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white border rounded text-sm shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CategoryFilter;
