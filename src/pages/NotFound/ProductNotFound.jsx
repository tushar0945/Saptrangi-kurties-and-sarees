const ProductNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-1 pb-10 relative bg-neutral-50 overflow-hidden">
      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/7076/7076885.png"
        alt="product-not-found"
        className="w-32 mb-6 drop-shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
        Product Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-base max-w-md text-center leading-relaxed mb-8">
        Oops! The product you're looking for isn’t available. It may have been
        removed, sold out, or the link may be incorrect.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => window.history.back()}
        className="
          px-10 py-3 
          bg-gradient-to-r from-primary to-secondary
          text-white font-semibold 
          rounded-xl 
          shadow-md 
          hover:opacity-90
          active:scale-95 
          transition-all
        "
      >
        Go Back
      </button>

      {/* Extra Note */}
      <p className="text-xs text-gray-400 mt-6">
        Try exploring our latest collections.
      </p>
    </div>
  );
};

export default ProductNotFound;
