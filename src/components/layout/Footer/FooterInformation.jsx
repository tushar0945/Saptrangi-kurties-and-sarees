// import { Link } from "react-router-dom";

// const FooterInformation = () => {
//   return (
//     <div>
//       <h3 className="font-semibold text-lg mb-4">Information</h3>
//       <ul className="space-y-3 text-sm text-gray-300">
//         <li>
//           <Link to="/privacy-policy">Privacy Policy</Link>
//         </li>
//         <li>
//           <Link to="/refund-policy">Refund Policy</Link>
//         </li>
//         <li>
//           <Link to="/shipping-policy">Shipping Policy</Link>
//         </li>
//         <li>
//           <Link to="/terms">Terms Of Service</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact Us</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FooterInformation;

import { Link } from "react-router-dom";

const FooterInformation = () => {
  return (
    <div>
      {/* HEADING */}
      <h3 className="text-primary font-semibold text-lg mb-4">INFORMATION</h3>

      {/* LINKS */}
      <ul className="space-y-3 text-sm">
        <li>
          <Link
            to="/privacy-policy"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link
            to="/refund-policy"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Refund Policy
          </Link>
        </li>

        <li>
          <Link
            to="/shipping-policy"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Shipping Policy
          </Link>
        </li>

        <li>
          <Link
            to="/terms"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Terms Of Service
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="text-white/80 hover:text-pink-400 transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterInformation;
