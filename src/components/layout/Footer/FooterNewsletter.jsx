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
