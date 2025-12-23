import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold italic text-black cursor-pointer"
    >
      <span className="text-black">Saaj</span>
      <span className="text-primary">Nika</span>
    </Link>
  );
};

export default NavbarLogo;
