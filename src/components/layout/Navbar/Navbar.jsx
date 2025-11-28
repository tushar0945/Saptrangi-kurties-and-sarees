import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";
import NavbarSearch from "./NavbarSearch";
import MobileMenu from "./MobileMenu";
import MobileSearch from "./MobileSearch";
import ProfileOverlay from "./ProfileOverlay";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // optional: close all overlays if one opens
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
    setProfileOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Hamburger (mobile only) */}
          <button
            onClick={handleToggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center: Logo + Desktop Menu */}
          <div className="flex items-center gap-10">
            <NavbarLogo />
            {/* 👇 Visible only on large screens */}
            <div className="hidden lg:flex">
              <NavbarMenu />
            </div>
          </div>

          {/* Right: Search | Cart | Profile */}
          <div className="flex items-center gap-4">
            <NavbarSearch onClick={() => setSearchOpen(true)} />
            <NavbarCart />
            <NavbarProfile onClick={() => setProfileOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Overlays */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProfileOverlay
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
};

export default Navbar;
