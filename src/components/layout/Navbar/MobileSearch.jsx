// // import { Search, X } from "lucide-react";

// // const MobileSearch = ({ open, onClose }) => {
// //   return (
// //     <div
// //       className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ${
// //         open ? "translate-y-0" : "-translate-y-full"
// //       }`}
// //     >
// //       {/* Header */}
// //       <div className="flex items-center justify-between px-5 py-4 border-b shadow-sm">
// //         <h2 className="text-lg font-semibold">Search</h2>
// //         <button onClick={onClose} className="text-gray-600 hover:text-primary">
// //           <X size={22} />
// //         </button>
// //       </div>

// //       {/* Search Bar */}
// //       <div className="flex items-center gap-3 px-5 py-4">
// //         <Search size={20} className="text-gray-600" />
// //         <input
// //           type="text"
// //           placeholder="Search products, categories..."
// //           className="w-full border-none outline-none text-base text-gray-800"
// //           autoFocus
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default MobileSearch;

// import { Search, X } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../../api/axios";

// const MobileSearch = ({ open, onClose }) => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const navigate = useNavigate();
//   const inputRef = useRef(null);

//   /* ================= AUTO FOCUS ================= */
//   useEffect(() => {
//     if (open && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [open]);

//   /* ================= FETCH SUGGESTIONS ================= */
//   useEffect(() => {
//     if (!query.trim()) {
//       setSuggestions([]);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       try {
//         const res = await api.get(`/products/admin?search=${query}`);
//         setSuggestions(res.data.slice(0, 6)); // mobile-friendly
//       } catch (err) {
//         console.error("Mobile search error:", err);
//         setSuggestions([]);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [query]);

//   /* ================= SUBMIT ================= */
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     onClose();
//     navigate(`/search?q=${query}`);
//   };

//   return (
//     <div
//       className={`
//         fixed inset-0 bg-white z-[1000]
//         flex flex-col
//         transition-transform duration-300
//         ${open ? "translate-y-0" : "-translate-y-full"}
//       `}
//     >
//       {/* ===== HEADER ===== */}
//       <div className="flex items-center justify-between px-5 py-4 border-b">
//         <h2 className="text-lg font-semibold">Search</h2>
//         <button onClick={onClose} className="text-gray-600">
//           <X size={22} />
//         </button>
//       </div>

//       {/* ===== SEARCH INPUT ===== */}
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center gap-3 px-5 py-4 border-b"
//       >
//         <Search size={20} className="text-gray-600" />
//         <input
//           ref={inputRef}
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search products, categories..."
//           className="w-full border-none outline-none text-base text-gray-800"
//         />
//       </form>

//       {/* ===== SUGGESTIONS ===== */}
//       <div className="flex-1 overflow-y-auto">
//         {suggestions.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => {
//               onClose();
//               navigate(`/collection/${item.slug}`);
//             }}
//             className="
//               w-full px-5 py-3 text-left
//               text-gray-800
//               border-b
//               hover:bg-gray-50
//             "
//           >
//             {item.name}
//           </button>
//         ))}

//         {/* VIEW ALL */}
//         {query && (
//           <button
//             onClick={() => {
//               onClose();
//               navigate(`/search?q=${query}`);
//             }}
//             className="
//               w-full px-5 py-4 text-left
//               text-primary font-medium
//             "
//           >
//             View all results →
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MobileSearch;

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

import useDebounce from "../../../hooks/useDebounce";

const MobileSearch = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  /* ================= AUTO FOCUS ================= */
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  /* ================= FETCH SUGGESTIONS ================= */
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/admin?search=${debouncedQuery}`);
        setSuggestions(res.data.slice(0, 6));
      } catch (err) {
        console.error("Mobile search error:", err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    onClose();
    navigate(`/search?q=${query}`);
  };

  /* ================= UI ================= */
  return (
    <div
      className={`
        fixed inset-0 bg-white z-[1000]
        flex flex-col
        transition-transform duration-300
        ${open ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h2 className="text-lg font-semibold">Search</h2>
        <button onClick={onClose} className="text-gray-600">
          <X size={22} />
        </button>
      </div>

      {/* ===== SEARCH INPUT ===== */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 px-5 py-4 border-b"
      >
        <Search size={20} className="text-gray-600" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, categories..."
          className="w-full border-none outline-none text-base text-gray-800"
        />
      </form>

      {/* ===== SUGGESTIONS ===== */}
      <div className="flex-1 overflow-y-auto">
        {loading && (
          <p className="px-5 py-3 text-sm text-gray-500">Searching…</p>
        )}

        {!loading &&
          suggestions.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onClose();
                navigate(`/collection/${item.slug}`);
              }}
              className="
                w-full px-5 py-3 text-left
                text-gray-800
                border-b
                hover:bg-gray-50
              "
            >
              {item.name}
            </button>
          ))}

        {/* VIEW ALL */}
        {!loading && debouncedQuery && (
          <button
            onClick={() => {
              onClose();
              navigate(`/search?q=${debouncedQuery}`);
            }}
            className="
              w-full px-5 py-4 text-left
              text-primary font-medium
            "
          >
            View all results →
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileSearch;
