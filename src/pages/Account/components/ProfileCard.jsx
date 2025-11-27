// import { Link } from "react-router-dom";
// const ProfileCard = () => {
//   return (
//     <div className="bg-[#FFF8C4] border border-[#f5e28d] p-6 rounded-xl shadow-sm flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <div className="w-16 h-16 bg-[#FDD835] rounded-full flex items-center justify-center text-2xl font-bold text-gray-800">
//           T
//         </div>

//         <div>
//           <h2 className="text-xl font-bold text-gray-900">Tushar</h2>
//           <p className="text-gray-700">tp909580@gmail.com</p>
//           <p className="text-gray-700">8999197992</p>
//         </div>
//       </div>

//       <Link
//         to="/myaccount/profile"
//         className="bg-[#FDD835] px-6 py-2 rounded-md text-sm font-bold hover:bg-[#f3c91e]"
//       >
//         EDIT PROFILE
//       </Link>
//     </div>
//   );
// };

// export default ProfileCard;

import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div
      className="
        bg-[#FFF8C4] border border-[#f5e28d] p-6 rounded-xl shadow-sm 
        flex flex-col md:flex-row md:items-center md:justify-between gap-5
      "
    >
      {/* LEFT USER INFO */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Avatar */}
        <div
          className="
            w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
            bg-[#FDD835] rounded-full flex items-center justify-center 
            text-xl sm:text-2xl md:text-3xl font-bold text-gray-800
          "
        >
          T
        </div>

        {/* Text */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Tushar
          </h2>

          <p className="text-gray-700 text-sm sm:text-base">
            tp909580@gmail.com
          </p>

          <p className="text-gray-700 text-sm sm:text-base">8999197992</p>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        to="/myaccount/profile"
        className="
          bg-[#FDD835] px-5 py-2 sm:px-6 sm:py-2.5 
          rounded-md text-[13px] sm:text-sm md:text-base font-bold 
          hover:bg-[#f3c91e] text-center w-full md:w-auto
        "
      >
        EDIT PROFILE
      </Link>
    </div>
  );
};

export default ProfileCard;
