import FooterLogo from "./FooterLogo";
import FooterCustomerService from "./FooterCustomerService";
import FooterCompany from "./FooterCompany";
import FooterDownload from "./FooterDownload";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 px-0 font-body">
      <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* COLUMN 1 — LOGO + CUSTOMER SERVICE */}
        <div>
          <FooterLogo />
          <div className="mt-4">
            <FooterCustomerService />
          </div>
        </div>

        {/* COLUMN 2 — COMPANY */}
        <div>
          <FooterCompany />
        </div>

        {/* COLUMN 3 — DOWNLOAD APP */}
        <div>
          <FooterSocial />
        </div>

        {/* COLUMN 4 — SOCIAL + NEWSLETTER */}
        <div>
          <FooterNewsletter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
