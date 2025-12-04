// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PhoneLogin = () => {
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleSendOTP = (e) => {
//     e.preventDefault();

//     if (phone.length !== 10) {
//       alert("Please enter a valid 10-digit mobile number 💛");
//       return;
//     }

//     const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

//     localStorage.setItem("temp_phone", phone);
//     localStorage.setItem("temp_otp", generatedOTP);

//     alert(
//       "Your OTP is: " +
//         generatedOTP +
//         "\n(This is temporary — no backend API yet 🙂)"
//     );

//     navigate("/verify-otp");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center px-5 py-6 bg-gradient-to-b from-pink-50 via-rose-50 to-orange-50">
//       {/* Main Card */}
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-7 animate-fadeIn relative overflow-hidden">
//         {/* Decorative blush circles */}
//         <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
//         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>

//         {/* Header Illustration */}
//         <div className="text-center mb-4">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4727/4727424.png"
//             alt="login-illustration"
//             className="w-20 mx-auto drop-shadow-sm"
//           />
//         </div>

//         <h2 className="text-2xl font-bold text-gray-800 text-center">
//           Welcome to SaptRangi 💖
//         </h2>
//         <p className="text-gray-500 text-center mt-1">
//           Enter your mobile number to continue
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSendOTP} className="mt-6 space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Mobile Number
//             </label>

//             <div className="flex items-center gap-3 border border-pink-300 rounded-2xl p-3 bg-pink-50 focus-within:border-pink-500 transition">
//               <span className="text-pink-600 font-semibold">+91</span>
//               <input
//                 type="tel"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="Enter 10-digit mobile number"
//                 className="w-full bg-transparent outline-none text-gray-700"
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
//                 }
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
//           >
//             Send OTP ✨
//           </button>
//         </form>

//         {/* Terms */}
//         <p className="text-center text-xs text-gray-500 mt-4">
//           By continuing, you agree to our{" "}
//           <span className="text-pink-600 font-semibold">Terms</span> &{" "}
//           <span className="text-pink-600 font-semibold">Privacy Policy</span>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PhoneLogin;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number 💛");
      return;
    }

    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem("temp_phone", phone);
    localStorage.setItem("temp_otp", generatedOTP);

    alert(
      "Your OTP is: " +
        generatedOTP +
        "\n(This is temporary — no backend API yet 🙂)"
    );

    navigate("/verify-otp");
  };

  return (
    <div
      className="min-h-screen flex justify-center 
    items-start md:items-center 
    px-4 py-4 md:py-6 
    bg-gradient-to-b "
    >
      {/* Main Card */}
      <div
        className="bg-white w-full max-w-md 
      mt-6 md:mt-0 
      rounded-3xl shadow-lg p-7 animate-fadeIn relative overflow-hidden"
      >
        {/* Decorative blush circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>

        {/* Header Illustration */}
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4727/4727424.png"
            alt="login-illustration"
            className="w-20 mx-auto drop-shadow-sm"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome to SaptRangi
        </h2>
        <p className="text-gray-500 text-center mt-1">
          Enter your mobile number to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSendOTP} className="mt-6 space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number
            </label>

            <div className="flex items-center gap-3 border border-pink-300 rounded-2xl p-3 bg-pink-50 focus-within:border-pink-500 transition">
              <span className="text-pink-600 font-semibold">+91</span>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter 10-digit mobile number"
                className="w-full bg-transparent outline-none text-gray-700"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Send OTP
          </button>
        </form>

        {/* Terms */}
        <p className="text-center text-xs text-gray-500 mt-4">
          By continuing, you agree to our{" "}
          <span className="text-pink-600 font-semibold">Terms</span> &{" "}
          <span className="text-pink-600 font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default PhoneLogin;
