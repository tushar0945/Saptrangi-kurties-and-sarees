const Wallet = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6 ">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
        {/* Decorative Soft Blobs */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-14 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="wallet-empty"
          className="w-28 mx-auto mb-4 drop-shadow"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Wallet Service Unavailable 💼✨
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm px-4 leading-relaxed">
          Currently, we don’t provide wallet services.
          <br />
          But don’t worry — we're working hard to bring it soon just for you! 💖
        </p>

        {/* Note */}
        <p className="text-xs text-gray-400 mt-4">
          Stay tuned for exciting wallet cashback & reward features 🎀
        </p>
      </div>
    </div>
  );
};

export default Wallet;
