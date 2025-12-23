// import { Link } from "react-router-dom";

// const FooterCategories = () => {
//   return (
//     <div>
//       <h3 className="font-semibold text-lg mb-4">Categories</h3>
//       <ul className="space-y-3 text-sm text-gray-300">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/collection/lehenga">Lehenga</Link>
//         </li>
//         <li>
//           <Link to="/collection/kids-lehenga">Kids Lehenga</Link>
//         </li>
//         <li>
//           <Link to="/collection/gown">Gown</Link>
//         </li>
//         <li>
//           <Link to="/collection/saree">Saree</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FooterCategories;

import { Link } from "react-router-dom";

const FooterCategories = () => {
  return (
    <div>
      {/* HEADING */}
      <h3 className="text-primary font-semibold text-lg mb-4">CATEGORIES</h3>

      {/* LINKS */}
      <ul className="space-y-3 text-sm">
        <li>
          <Link to="/" className="text-white/80 hover:text-pink-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/collection/lehenga"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Lehenga
          </Link>
        </li>

        <li>
          <Link
            to="/collection/kids-lehenga"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Kids Lehenga
          </Link>
        </li>

        <li>
          <Link
            to="/collection/gown"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Gown
          </Link>
        </li>

        <li>
          <Link
            to="/collection/saree"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Saree
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCategories;
