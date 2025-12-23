// import { Search } from "lucide-react";

// const NavbarSearch = ({ onClick }) => {
//   return (
//     <div className="relative">
//       {/* 🔍 Full search bar (visible on md and larger screens) */}
//       <div className="hidden md:block">
//         <input
//           type="text"
//           placeholder="Search"
//           className="pl-4 pr-10 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-56 lg:w-72 transition-all"
//         />
//         <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />
//       </div>

//       {/* 🔍 Icon only (visible on small screens) */}
//       <button
//         onClick={onClick}
//         className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition"
//       >
//         <Search size={22} className="text-gray-700" />
//       </button>
//     </div>
//   );
// };

// export default NavbarSearch;

// import { Search } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../../api/axios";

// const NavbarSearch = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

//   /* ================= DEBOUNCED SEARCH ================= */
//   useEffect(() => {
//     if (!query.trim()) {
//       setSuggestions([]);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       try {
//         const res = await api.get(`/products/search?q=${query}&limit=5`);
//         setSuggestions(res.data);
//         setOpen(true);
//       } catch (err) {
//         console.error(err);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [query]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     setOpen(false);
//     navigate(`/search?q=${query}`);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative hidden md:block">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for products"
//         className="
//           pl-4 pr-10 py-2
//           rounded-full bg-gray-100
//           text-sm w-56 lg:w-72
//           focus:outline-none focus:ring-2 focus:ring-primary
//         "
//       />

//       <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />

//       {/* SUGGESTIONS */}
//       {open && suggestions.length > 0 && (
//         <div className="absolute left-0 top-12 w-full bg-white border rounded-lg shadow-lg z-50">
//           {suggestions.map((item) => (
//             <button
//               key={item.id}
//               type="button"
//               onClick={() => navigate(`/collection/${item.slug}`)}
//               className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
//             >
//               {item.name}
//             </button>
//           ))}

//           <button
//             type="button"
//             onClick={() => navigate(`/search?q=${query}`)}
//             className="w-full px-4 py-2 text-left text-primary font-medium text-sm border-t"
//           >
//             View all results →
//           </button>
//         </div>
//       )}
//     </form>
//   );
// };

// export default NavbarSearch;

// import { Search } from "lucide-react";
// import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// // import api from "../../api/axios";
// import api from "../../../api/axios";

// const NavbarSearch = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();
//   const wrapperRef = useRef(null);

//   /* ================= FETCH SUGGESTIONS (DEBOUNCED) ================= */
//   useEffect(() => {
//     if (!query.trim()) {
//       setSuggestions([]);
//       setOpen(false);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       try {
//         const res = await api.get(`/products/admin?search=${query}`);
//         console.log(res);
//         setSuggestions(res.data.slice(0, 5)); // safe limit
//         setOpen(true);
//       } catch (err) {
//         console.error("Search error:", err);
//         setSuggestions([]);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [query]);

//   /* ================= CLOSE ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     const handler = (e) => {
//       if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ================= SUBMIT ================= */
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setOpen(false);
//     navigate(`/search?q=${query}`);
//   };

//   return (
//     <form
//       ref={wrapperRef}
//       onSubmit={handleSubmit}
//       className="relative hidden md:block"
//     >
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for products"
//         className="
//           pl-4 pr-10 py-2
//           rounded-full bg-gray-100
//           text-sm w-56 lg:w-72
//           focus:outline-none focus:ring-2 focus:ring-primary
//         "
//       />

//       <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />

//       {/* ================= SUGGESTIONS ================= */}
//       {open && suggestions.length > 0 && (
//         <div
//           className="
//             absolute left-0 top-12 w-full
//             bg-white border border-gray-200
//             rounded-lg shadow-xl
//             z-[1000]
//           "
//         >
//           {suggestions.map((item) => (
//             <button
//               key={item.id}
//               type="button"
//               onClick={() => {
//                 setOpen(false);
//                 navigate(`/collection/${item.slug}`);
//               }}
//               className="
//                 w-full px-4 py-2 text-left text-sm
//                 hover:bg-gray-100 transition
//               "
//             >
//               {item.name}
//             </button>
//           ))}

//           <button
//             type="button"
//             onClick={() => navigate(`/search?q=${query}`)}
//             className="
//               w-full px-4 py-2 text-left
//               text-primary font-medium text-sm
//               border-t
//             "
//           >
//             View all results →
//           </button>
//         </div>
//       )}
//     </form>
//   );
// };

// export default NavbarSearch;

import { Search } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const NavbarSearch = ({ onMobileOpen }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  /* ================= FETCH SUGGESTIONS (DESKTOP ONLY) ================= */
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await api.get(`/products/admin?search=${query}`);
        setSuggestions(res.data.slice(0, 5));
        setOpen(true);
      } catch (err) {
        console.error("Search error:", err);
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setOpen(false);
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="relative">
      {/* ================= DESKTOP SEARCH ================= */}
      <form
        ref={wrapperRef}
        onSubmit={handleSubmit}
        className="relative hidden md:block"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
          className="
            pl-4 pr-10 py-2
            rounded-full bg-gray-100
            text-sm w-56 lg:w-72
            focus:outline-none focus:ring-2 focus:ring-primary
          "
        />

        <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />

        {/* ================= SUGGESTIONS ================= */}
        {open && suggestions.length > 0 && (
          <div
            className="
              absolute left-0 top-12 w-full
              bg-white border border-gray-200
              rounded-lg shadow-xl
              z-[1000]
            "
          >
            {suggestions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate(`/product/${item.slug}`);
                }}
                className="
                  w-full px-4 py-2 text-left text-sm
                  hover:bg-gray-100 transition
                "
              >
                {item.name}
              </button>
            ))}

            <button
              type="button"
              onClick={() => navigate(`/search?q=${query}`)}
              className="
                w-full px-4 py-2 text-left
                text-primary font-medium text-sm
                border-t
              "
            >
              View all results →
            </button>
          </div>
        )}
      </form>

      {/* ================= MOBILE SEARCH ICON ================= */}
      <button
        onClick={onMobileOpen}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        aria-label="Search"
      >
        <Search size={22} className="text-gray-700" />
      </button>
    </div>
  );
};

export default NavbarSearch;
