// const FooterNewsletter = () => {
//   return (
//     <div>
//       {/* Title */}
//       <h2 className="text-yellow-400 font-semibold text-lg mb-4">
//         KEEP IN TOUCH
//       </h2>

//       {/* Description */}
//       <p className="text-sm text-gray-300 mb-4">
//         Join our newsletter for updates, discounts, and more.
//       </p>

//       {/* Input + Button */}
//       <div className="flex w-full">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="flex-1 px-3 py-2 rounded-l-md text-black text-sm outline-none"
//         />
//         <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold text-sm hover:bg-yellow-500 transition">
//           SUBSCRIBE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FooterNewsletter;

const FooterNewsletter = () => {
  return (
    <div>
      <h2 className="text-primary font-heading font-semibold text-lg mb-1">
        KEEP IN TOUCH
      </h2>

      <p className="text-sm text-gray-300 mb-2">
        Get updates on new arrivals, collections & offers.
      </p>

      <div className="flex w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 rounded-l-md text-dark text-sm outline-none"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-r-md font-semibold text-sm hover:bg-secondary transition">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
