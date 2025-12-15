// import { Link } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import { useCart } from "../../../context/CartContext"; // ⭐ added

// const NavbarCart = () => {
//   const { cart } = useCart(); // ⭐ get cart items
//   const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <Link to="/cart" className="relative">
//       {/* Desktop */}
//       <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-primary transition">
//         <ShoppingCart size={20} />
//         <span className="text-sm font-medium">Cart</span>
//       </div>

//       {/* Mobile */}
//       <button className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition">
//         <ShoppingCart size={22} className="text-gray-700" />
//       </button>

//       {/* Dynamic Badge */}
//       {totalQty > 0 && (
//         <span className="absolute -top-2 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
//           {totalQty}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default NavbarCart;

import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const NavbarCart = () => {
  const { cart } = useCart();

  // ✅ Ensure cart is always an array
  const items = Array.isArray(cart)
    ? cart
    : Array.isArray(cart?.items)
    ? cart.items
    : [];

  const totalQty = items.reduce(
    (sum, item) => sum + (item.qty || item.quantity || 0),
    0
  );

  return (
    <Link to="/cart" className="relative">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-primary transition">
        <ShoppingCart size={20} />
        <span className="text-sm font-medium">Cart</span>
      </div>

      {/* Mobile */}
      <button className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition">
        <ShoppingCart size={22} className="text-gray-700" />
      </button>

      {/* Badge */}
      {totalQty > 0 && (
        <span className="absolute -top-2 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
          {totalQty}
        </span>
      )}
    </Link>
  );
};

export default NavbarCart;
