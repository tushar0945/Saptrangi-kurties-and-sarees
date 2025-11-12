// import { ShoppingCart } from "lucide-react";

// const NavbarCart = () => {
//   return (
//     <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
//       <ShoppingCart size={20} />
//       <span className="text-sm font-medium">Cart</span>
//     </div>
//   );
// };

// export default NavbarCart;

import { ShoppingCart } from "lucide-react";

const NavbarCart = ({ onClick }) => {
  return (
    <div className="relative">
      {/* 🛒 Full (visible on md and larger) */}
      <div
        className="hidden md:flex items-center gap-1 cursor-pointer hover:text-primary transition"
        onClick={onClick}
      >
        <ShoppingCart size={20} />
        <span className="text-sm font-medium">Cart</span>
      </div>

      {/* 🛒 Icon only (visible on small screens) */}
      <button
        onClick={onClick}
        className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition"
      >
        <ShoppingCart size={22} className="text-gray-700" />
      </button>

      {/* 🛍️ Optional Cart Badge */}
      <span className="absolute -top-2 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
        2
      </span>
    </div>
  );
};

export default NavbarCart;
