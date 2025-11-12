// import NavbarLogo from "./NavbarLogo";
// import NavbarMenu from "./NavbarMenu";
// import NavbarSearch from "./NavbarSearch";
// import NavbarCart from "./NavbarCart";
// import NavbarProfile from "./NavbarProfile";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Left: Logo */}
//         <NavbarLogo />

//         {/* Center: Menu */}
//         <NavbarMenu />

//         {/* Right: Search | Cart | Profile */}
//         <div className="flex items-center gap-5">
//           <NavbarSearch />
//           <NavbarCart />
//           <NavbarProfile />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import NavbarLogo from "./NavbarLogo";
// import NavbarMenu from "./NavbarMenu";
// import NavbarSearch from "./NavbarSearch";
// import NavbarCart from "./NavbarCart";
// import NavbarProfile from "./NavbarProfile";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-40">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Left: Logo */}
//         <NavbarLogo />

//         {/* Center: Desktop Menu */}
//         <div className="hidden lg:flex">
//           <NavbarMenu />
//         </div>

//         {/* Right: Search | Cart | Profile */}
//         <div className="hidden md:flex items-center gap-5">
//           <NavbarSearch />
//           <NavbarCart />
//           <NavbarProfile />
//         </div>

//         {/* Hamburger Menu (visible only on mobile) */}
//         <button
//           className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
//           onClick={() => setMobileMenuOpen((prev) => !prev)}
//         >
//           {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`lg:hidden bg-white shadow-inner border-t border-gray-200 transition-all duration-300 ${
//           mobileMenuOpen
//             ? "max-h-[400px] opacity-100 visible"
//             : "max-h-0 opacity-0 invisible"
//         } overflow-hidden`}
//       >
//         <div className="flex flex-col gap-3 p-4">
//           {/* Mobile Search */}
//           <div className="block md:hidden">
//             <NavbarSearch />
//           </div>

//           {/* Mobile Menu Links */}
//           <NavbarMenu />

//           {/* Mobile Cart & Profile */}
//           <div className="flex items-center justify-between mt-3 border-t pt-3">
//             <NavbarCart />
//             <NavbarProfile />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import NavbarLogo from "./NavbarLogo";
// import NavbarCart from "./NavbarCart";
// import NavbarProfile from "./NavbarProfile";
// import NavbarSearch from "./NavbarSearch";
// import MobileMenu from "./MobileMenu";
// import MobileSearch from "./MobileSearch";
// import ProfileOverlay from "./ProfileOverlay";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//           {/* Left: Hamburger */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//           >
//             <Menu size={22} />
//           </button>

//           {/* Center: Logo */}
//           <NavbarLogo />

//           {/* Right: Search | Cart | Profile */}
//           <div className="flex items-center gap-4">
//             <button onClick={() => setSearchOpen(true)}>
//               <NavbarSearch />
//             </button>
//             <NavbarCart />
//             <button onClick={() => setProfileOpen(true)}>
//               <NavbarProfile />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Overlays */}
//       <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
//       <MobileSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
//       <ProfileOverlay
//         open={profileOpen}
//         onClose={() => setProfileOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Menu } from "lucide-react";
// import NavbarLogo from "./NavbarLogo";
// import NavbarMenu from "./NavbarMenu"; // 👈 Add this import
// import NavbarCart from "./NavbarCart";
// import NavbarProfile from "./NavbarProfile";
// import NavbarSearch from "./NavbarSearch";
// import MobileMenu from "./MobileMenu";
// import MobileSearch from "./MobileSearch";
// import ProfileOverlay from "./ProfileOverlay";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//           {/* Left: Hamburger (mobile only) */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//           >
//             <Menu size={22} />
//           </button>

//           {/* Center: Logo + Desktop Menu */}
//           <div className="flex items-center gap-10">
//             <NavbarLogo />
//             {/* 👇 Visible only on large screens */}
//             <div className="hidden lg:flex">
//               <NavbarMenu />
//             </div>
//           </div>

//           {/* Right: Search | Cart | Profile */}
//           <div className="flex items-center gap-4">
//             <NavbarSearch onClick={() => setSearchOpen(true)} />
//             <NavbarCart />
//             <NavbarProfile onClick={() => setProfileOpen(true)} />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Overlays */}
//       <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
//       <MobileSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
//       <ProfileOverlay
//         open={profileOpen}
//         onClose={() => setProfileOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;

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
