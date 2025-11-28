import FooterLogo from "./FooterLogo";
import FooterCustomerService from "./FooterCustomerService";
import FooterCompany from "./FooterCompany";
import FooterDownload from "./FooterDownload";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 px-8 font-body">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
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
          {/* Add spacing just like Bewakoof */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
