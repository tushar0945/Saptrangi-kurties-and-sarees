// import { FiTruck, FiCreditCard } from "react-icons/fi";

// const FooterCustomerService = () => {
//   return (
//     <div>
//       {/* Title */}
//       <h2 className="text-yellow-400 font-semibold text-lg mb-4">
//         CUSTOMER SERVICE
//       </h2>

//       {/* Links */}
//       <ul className="space-y-2 text-sm">
//         <li className="hover:underline cursor-pointer">Contact Us</li>
//         <li className="hover:underline cursor-pointer">Track Order</li>
//         <li className="hover:underline cursor-pointer">Return Order</li>
//         <li className="hover:underline cursor-pointer">Cancel Order</li>
//       </ul>

//       {/* Policy Icons */}
//       <div className="mt-6 space-y-3">
//         <div className="flex items-center gap-2 text-sm">
//           <FiTruck className="text-yellow-400 text-lg" />
//           <span>15 Days Return Policy*</span>
//         </div>

//         <div className="flex items-center gap-2 text-sm">
//           <FiCreditCard className="text-yellow-400 text-lg" />
//           <span>Cash On Delivery*</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterCustomerService;

import { FiTruck, FiCreditCard } from "react-icons/fi";

const FooterCustomerService = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-4">
        CUSTOMER SERVICE
      </h2>

      <ul className="space-y-2 text-sm">
        <li className="hover:text-primary cursor-pointer transition">
          Contact Us
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          Track Order
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          Return Order
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          Cancel Order
        </li>
      </ul>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <FiTruck className="text-primary text-lg" />
          <span>15 Days Return Policy*</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <FiCreditCard className="text-primary text-lg" />
          <span>Cash On Delivery*</span>
        </div>
      </div>
    </div>
  );
};

export default FooterCustomerService;
