import { FiTruck, FiCreditCard } from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterCustomerService = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-1">
        CUSTOMER SERVICE
      </h2>

      {/* OPTION B — Full UL gets default color */}
      <ul className="space-y-2 text-sm text-gray-300">
        <li>
          <Link
            to="/contact"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link
            to="/track-order"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Track Order
          </Link>
        </li>

        <li>
          <Link
            to="/return-order"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Return Order
          </Link>
        </li>

        <li>
          <Link
            to="/cancel-order"
            className="text-white hover:text-primary cursor-pointer transition"
          >
            Cancel Order
          </Link>
        </li>
      </ul>

      <div className="mt-3 space-y-3 text-gray-300">
        <div className="flex items-center gap-2 text-sm">
          <FiTruck className="text-gray-300 text-lg" />
          <span>15 Days Return Policy*</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <FiCreditCard className="text-gray-300 text-lg" />
          <span>Cash On Delivery*</span>
        </div>
      </div>
    </div>
  );
};

export default FooterCustomerService;
