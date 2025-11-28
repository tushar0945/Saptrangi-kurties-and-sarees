import { Search } from "lucide-react";

const NavbarSearch = ({ onClick }) => {
  return (
    <div className="relative">
      {/* 🔍 Full search bar (visible on md and larger screens) */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="pl-4 pr-10 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-56 lg:w-72 transition-all"
        />
        <Search className="absolute right-3 top-2.5 text-gray-600" size={18} />
      </div>

      {/* 🔍 Icon only (visible on small screens) */}
      <button
        onClick={onClick}
        className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition"
      >
        <Search size={22} className="text-gray-700" />
      </button>
    </div>
  );
};

export default NavbarSearch;
