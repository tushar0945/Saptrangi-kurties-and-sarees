import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-6 ">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
        {/* Soft Decorative Bubbles */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-10 w-44 h-44 bg-orange-200/30 rounded-full blur-2xl"></div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
          alt="not-found"
          className="w-32 mx-auto mb-4 drop-shadow"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found 💗
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm px-4 leading-relaxed">
          The page you’re looking for seems to be missing or moved. Don’t worry,
          let’s get you back to something lovely! 🌸
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          Go Back Home ✨
        </button>

        {/* Small note */}
        <p className="text-xs text-gray-400 mt-3">
          Still lost? We're here to help anytime 💕
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
