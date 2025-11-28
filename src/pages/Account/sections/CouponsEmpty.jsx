import { useNavigate } from "react-router-dom";

const CouponsEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-6 ">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
        {/* Decorative Soft Blobs */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-14 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/825/825533.png"
          alt="no-coupons"
          className="w-28 mx-auto mb-4 opacity-90"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No Coupons Available 🎀
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm px-4">
          Looks like you haven’t unlocked any coupons yet. Don’t worry, amazing
          offers are coming your way soon! 💖
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          Explore Deals ✨
        </button>

        {/* Small note */}
        <p className="text-xs text-gray-400 mt-3">
          Keep shopping to unlock exclusive rewards 🎁
        </p>
      </div>
    </div>
  );
};

export default CouponsEmpty;
