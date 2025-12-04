import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div
      className="
        bg-white border border-secondary/40 
        p-6 rounded-xl shadow-sm 
        flex flex-col md:flex-row md:items-center md:justify-between 
        gap-5
      "
    >
      {/* LEFT USER INFO */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Avatar */}
        <div
          className="
            w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
            bg-primary 
            rounded-full flex items-center justify-center 
            text-xl sm:text-2xl md:text-3xl 
            font-bold text-white
          "
        >
          U
        </div>

        {/* Text */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark font-heading">
            User
          </h2>

          <p className="text-dark/70 text-sm sm:text-base font-body">
            user234@gmail.com
          </p>

          <p className="text-dark/70 text-sm sm:text-base font-body">
            ****197992
          </p>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        to="/account/profile"
        className="
          bg-primary hover:bg-secondary 
          px-5 py-2 sm:px-6 sm:py-2.5 
          rounded-md 
          text-[13px] sm:text-sm md:text-base 
          font-bold text-white 
          text-center 
          w-full md:w-auto 
          transition
        "
      >
        EDIT PROFILE
      </Link>
    </div>
  );
};

export default ProfileCard;
