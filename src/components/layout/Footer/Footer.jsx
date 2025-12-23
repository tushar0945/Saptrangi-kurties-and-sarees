// import FooterLogo from "./FooterLogo";
// import FooterCustomerService from "./FooterCustomerService";
// import FooterCompany from "./FooterCompany";
// import FooterDownload from "./FooterDownload";
// import FooterSocial from "./FooterSocial";
// import FooterNewsletter from "./FooterNewsletter";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-4 px-0 font-body">
//       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-16">
//         {/* COLUMN 1 — LOGO + CUSTOMER SERVICE */}
//         <div>
//           <FooterLogo />
//           <div className="mt-4">
//             <FooterCustomerService />
//           </div>
//         </div>

//         {/* COLUMN 2 — COMPANY */}
//         <div>
//           <FooterCompany />
//         </div>

//         {/* COLUMN 3 — DOWNLOAD APP */}
//         <div>
//           <FooterSocial />
//         </div>

//         {/* COLUMN 4 — SOCIAL + NEWSLETTER */}
//         <div>
//           <FooterNewsletter />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import FooterBrand from "./FooterBrand";
import FooterCategories from "./FooterCategories";
import FooterInformation from "./FooterInformation";
import FooterNewsletter from "./FooterNewsletter";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#031634] to-[#020c1b] text-white font-body">
//       <div className="max-w-[1550px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-14">
//         {/* COLUMN 1 — BRAND + CONTACT */}
//         <FooterBrand />

//         {/* COLUMN 2 — CATEGORIES */}
//         <FooterCategories />

//         {/* COLUMN 3 — INFORMATION */}
//         <FooterInformation />

//         {/* COLUMN 4 — NEWSLETTER + SOCIAL */}
//         <FooterNewsletter />
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <footer
      className="
      bg-dark
      text-white
      font-body
      pt-9 pb-8   /* 🔥 FIXED padding */
    "
    >
      <div
        className="
        max-w-[1550px]
        mx-auto
        px-6
        grid grid-cols-1 md:grid-cols-4
        gap-14
      "
      >
        <FooterBrand />
        <FooterCategories />
        <FooterInformation />
        <FooterNewsletter />
      </div>
    </footer>
  );
};

export default Footer;
