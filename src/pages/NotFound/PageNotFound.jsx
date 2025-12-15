import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 pb-10 relative bg-neutral-50 overflow-hidden">
      {/* Soft Background Bubbles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
        alt="not-found"
        className="w-32 mb-6 drop-shadow"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-3 text-center">
        Oops! Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-base max-w-md text-center leading-relaxed mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to something beautiful!
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/")}
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
        Go Back Home
      </button>

      {/* Extra Note */}
      <p className="text-xs text-gray-400 mt-6">
        Need help? We're always here for you.
      </p>
    </div>
  );
};

export default PageNotFound;
