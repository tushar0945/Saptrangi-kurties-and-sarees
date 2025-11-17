// const FooterCompany = () => {
//   return (
//     <div>
//       {/* Title */}
//       <h2 className="text-yellow-400 font-semibold text-lg mb-4">COMPANY</h2>

//       {/* Links */}
//       <ul className="space-y-2 text-sm">
//         <li className="hover:underline cursor-pointer">About Us</li>
//         <li className="hover:underline cursor-pointer">Terms & Conditions</li>
//         <li className="hover:underline cursor-pointer">Privacy Policy</li>
//         <li className="hover:underline cursor-pointer">We are Hiring</li>
//       </ul>
//     </div>
//   );
// };

// export default FooterCompany;

const FooterCompany = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-1">
        COMPANY
      </h2>

      <ul className="space-y-2 text-sm">
        <li className="hover:text-primary cursor-pointer transition">
          About Us
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          Terms & Conditions
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
