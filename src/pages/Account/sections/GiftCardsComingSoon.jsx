import { useNavigate } from "react-router-dom";

const GiftCardsComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-6 ">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
        {/* Soft Decorative Blobs */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-12 w-44 h-44 bg-orange-200/20 rounded-full blur-2xl"></div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7650/7650334.png"
          alt="gift-cards"
          className="w-28 mx-auto mb-4 drop-shadow"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Gift Cards Are Coming Soon 🎁💖
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm px-4 leading-relaxed">
          We’re preparing something special just for you! Beautiful,
          customizable gift cards that will make gifting even more fun and
          personal.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          Back to Home ✨
        </button>

        {/* Small note */}
        <p className="text-xs text-gray-400 mt-3">
          Stay tuned for some delightful surprises 🎀
        </p>
      </div>
    </div>
  );
};

export default GiftCardsComingSoon;
