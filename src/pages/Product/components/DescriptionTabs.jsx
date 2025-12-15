import React, { useState } from "react";

const DescriptionTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  // Safe values
  const description = product?.description || "No description available.";
  const details = product?.details || "";
  const returnPolicy =
    product?.returnPolicy ||
    "Easy 7-day return or exchange. Product must be unused and in original condition.";

  // Convert details string → array
  const parsedDetails = Array.isArray(details)
    ? details
    : details
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l !== "")
        .map((l) => l.replace("•", "").trim());

  return (
    <div className="mt-12 w-full text-gray-800">
      {/* ---------- TABS HEADER ---------- */}
      <div className="flex overflow-x-auto border-b border-gray-200 no-scrollbar">
        {[
          { id: "description", label: "Description" },
          { id: "details", label: "Details" },
          { id: "policy", label: "Return Policy" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-5 py-3 font-semibold text-sm md:text-base
              transition-all duration-300 whitespace-nowrap
              ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {tab.label}

            {/* Animated underline */}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-[slideIn_0.3s_ease]"></span>
            )}
          </button>
        ))}
      </div>

      {/* ---------- TAB CONTENT ---------- */}
      <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-7 leading-relaxed animate-fadeIn">
        {/* DESCRIPTION */}
        {activeTab === "description" && (
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        )}

        {/* DETAILS */}
        {activeTab === "details" && (
          <>
            {parsedDetails.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {parsedDetails.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No product details available.</p>
            )}
          </>
        )}

        {/* RETURN POLICY */}
        {activeTab === "policy" && (
          <p className="text-gray-700 whitespace-pre-line">{returnPolicy}</p>
        )}
      </div>

      {/* Small fade-in animation */}
      <style>{`
        @keyframes slideIn {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DescriptionTabs;
