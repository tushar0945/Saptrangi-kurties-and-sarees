import React from "react";

const SizeSelector = ({
  sizes = [],
  title = "Select Size",
  showGuide = false,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Heading + Size Guide Link */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-dark text-lg">{title}</h3>

        {/* {showGuide && (
          <button className="text-primary text-sm font-medium flex items-center gap-1 hover:text-secondary transition">
            Size guide <span>›</span>
          </button>
        )} */}
      </div>

      {/* Size Buttons */}
      <div className="flex flex-wrap gap-3">
        {sizes.map((size, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(size)}
            className={`px-5 py-2 rounded-full border transition-all duration-200 font-medium
              ${
                selected === size
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "border-gray-300 text-dark hover:bg-neutral hover:border-dark"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
