// const FooterCompany = () => {
//   return (
//     <div>
//       <h2 className="text-primary font-heading font-semibold text-lg mb-1">
//         COMPANY
//       </h2>

//       <ul className="space-y-2 text-sm">
//         <li className="hover:text-primary cursor-pointer transition">
//           About Us
//         </li>
//         <li className="hover:text-primary cursor-pointer transition">
//           Terms & Conditions
//         </li>
//         <li className="hover:text-primary cursor-pointer transition">
//           Privacy Policy
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FooterCompany;

import { Link } from "react-router-dom";

const FooterCompany = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-1">
        COMPANY
      </h2>

      {/* Default text color (Option B style) */}
      <ul className="space-y-2 text-sm text-gray-300">
        <li>
          <Link
            to="/about"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/terms"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Terms & Conditions
          </Link>
        </li>

        <li>
          <Link
            to="/privacy"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
