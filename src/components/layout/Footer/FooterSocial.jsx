import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";

const FooterSocial = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-1">
        CONNECT WITH US
      </h2>

      <div className="flex items-center space-x-4 text-xl mb-2">
        <FaFacebookF className="cursor-pointer hover:text-primary transition" />
        <FaInstagram className="cursor-pointer hover:text-primary transition" />
        <FaTwitter className="cursor-pointer hover:text-primary transition" />
        <FaPinterestP className="cursor-pointer hover:text-primary transition" />
        <FaSnapchatGhost className="cursor-pointer hover:text-primary transition" />
      </div>

      <p className="text-sm text-gray-300">4.7M People Like This</p>
      <p className="text-sm text-gray-300">1M Followers</p>
    </div>
  );
};

export default FooterSocial;
