// import logo from "../../assets/saptrangi-logo.png";
import FooterLogo from "./FooterLogo";

import { Mail, MessageSquare } from "lucide-react";

const FooterBrand = () => {
  return (
    <div className="space-y-4">
      {/* <img src={logo} alt="Saptrangi" className="w-40" /> */}
      <FooterLogo />
      <p className="text-sm text-gray-300 leading-relaxed">
        A-36/37/38, Laxminarayan Industrial Estate,
        <br />
        B.R.C. Compound, Udhna, Surat - 394210,
        <br />
        Gujarat, INDIA
      </p>

      <p className="flex items-center gap-2 text-sm text-gray-300">
        <MessageSquare size={16} /> +91 95740 17666
      </p>

      <p className="flex items-center gap-2 text-sm text-gray-300">
        <Mail size={16} /> info@saptrangi.com
      </p>
    </div>
  );
};

export default FooterBrand;
