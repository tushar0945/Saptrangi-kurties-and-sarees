// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { AuthService } from "../../services/authService";

// const OtpVerify = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // refs for 6 inputs
//   const inputRefs = useRef([]);

//   // ===========================
//   // VERIFY OTP
//   // ===========================
//   const handleVerify = (e) => {
//     e.preventDefault();

//     const enteredOTP = otp.join("");
//     const storedOTP = localStorage.getItem("temp_otp");
//     const phone = localStorage.getItem("temp_phone");

//     if (enteredOTP.length !== 6) {
//       setError("Please enter the complete 6-digit OTP 💗");
//       return;
//     }

//     if (enteredOTP !== storedOTP) {
//       setError("The OTP you entered is incorrect. Please try again 💗");
//       return;
//     }

//     // Create or fetch user
//     const user = AuthService.registerOrGetUser(phone);

//     // Fake JWT
//     const token = AuthService.generateToken(user.id);

//     // Save login session
//     login(user, token);

//     // Cleanup
//     localStorage.removeItem("temp_otp");
//     localStorage.removeItem("temp_phone");

//     navigate("/myaccount"); // Redirect
//   };

//   // ===========================
//   // RESEND OTP
//   // ===========================
//   const handleResendOtp = () => {
//     const phone = localStorage.getItem("temp_phone");

//     if (!phone) {
//       setError("Phone number missing. Please go back and enter again.");
//       return;
//     }

//     const newOTP = AuthService.generateOTP();
//     localStorage.setItem("temp_otp", newOTP);

//     alert(`New OTP sent: ${newOTP}`);

//     setOtp(["", "", "", "", "", ""]);
//     inputRefs.current[0].focus(); // focus first box
//     setError("");
//   };

//   // ===========================
//   // INPUT HANDLING
//   // ===========================
//   const handleInput = (value, index) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const updated = [...otp];
//     updated[index] = value;
//     setOtp(updated);

//     if (value && inputRefs.current[index + 1]) {
//       inputRefs.current[index + 1].focus();
//     }

//     setError("");
//   };

//   const handleBackspace = (value, index) => {
//     if (!value && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center px-5 py-6 bg-gradient-to-b from-pink-50 via-rose-50 to-orange-50">
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-7 animate-fadeIn relative overflow-hidden">
//         {/* Decorative UI */}
//         <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
//         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>

//         <div className="text-center mb-4">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
//             alt="otp-illustration"
//             className="w-20 mx-auto drop-shadow"
//           />
//         </div>

//         <h2 className="text-2xl font-bold text-gray-800 text-center">
//           Verify Your OTP 🔐
//         </h2>

//         <p className="text-gray-500 text-center mt-1">
//           Enter the 6-digit code sent to your mobile number
//         </p>

//         <form onSubmit={handleVerify} className="mt-6 space-y-6">
//           {/* OTP Input Boxes */}
//           <div className="flex justify-center gap-3">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 className="w-12 h-12 text-center border border-pink-300 bg-pink-50 rounded-xl text-lg font-semibold text-gray-700
//                 focus:border-pink-500 outline-none transition"
//                 onChange={(e) => handleInput(e.target.value, index)}
//                 onKeyDown={(e) =>
//                   e.key === "Backspace" &&
//                   handleBackspace(e.target.value, index)
//                 }
//               />
//             ))}
//           </div>

//           {/* Error */}
//           {error && (
//             <p className="text-red-500 text-center text-sm font-medium bg-red-50 py-2 rounded-xl border border-red-200 animate-fadeIn">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-2xl shadow-md
//             hover:shadow-lg active:scale-95 transition-all duration-200"
//           >
//             Verify OTP ✨
//           </button>
//         </form>

//         {/* Resend OTP */}
//         <p className="text-center text-xs text-gray-500 mt-4">
//           Didn’t receive the OTP?{" "}
//           <span
//             onClick={handleResendOtp}
//             className="text-pink-600 font-semibold cursor-pointer hover:underline"
//           >
//             Resend
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OtpVerify;

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { AuthService } from "../../services/authService";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const inputRefs = useRef([]);

  // ===========================
  // VERIFY OTP
  // ===========================
  const handleVerify = (e) => {
    e.preventDefault();

    const enteredOTP = otp.join("");
    const storedOTP = localStorage.getItem("temp_otp");
    const phone = localStorage.getItem("temp_phone");

    if (enteredOTP.length !== 6) {
      setError("Please enter the complete 6-digit OTP 💗");
      return;
    }

    if (enteredOTP !== storedOTP) {
      setError("The OTP you entered is incorrect. Please try again 💗");
      return;
    }

    const user = AuthService.registerOrGetUser(phone);
    const token = AuthService.generateToken(user.id);

    login(user, token);

    localStorage.removeItem("temp_otp");
    localStorage.removeItem("temp_phone");

    navigate("/account/profile");
  };

  // ===========================
  // RESEND OTP
  // ===========================
  const handleResendOtp = () => {
    const phone = localStorage.getItem("temp_phone");

    if (!phone) {
      setError("Phone number missing. Please go back and enter again.");
      return;
    }

    const newOTP = AuthService.generateOTP();
    localStorage.setItem("temp_otp", newOTP);

    alert(`New OTP sent: ${newOTP}`);

    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
    setError("");
  };

  // ===========================
  // INPUT HANDLING
  // ===========================
  const handleInput = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    setError("");
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center 
    items-start md:items-center 
    px-4 py-4 md:py-6 
    "
    >
      <div
        className="bg-white w-full max-w-md 
      mt-6 md:mt-0 
      rounded-3xl shadow-lg p-7 animate-fadeIn relative overflow-hidden"
      >
        {/* Decorative UI */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>

        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="otp-illustration"
            className="w-20 mx-auto drop-shadow"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Verify Your OTP 🔐
        </h2>

        <p className="text-gray-500 text-center mt-1">
          Enter the 6-digit code sent to your mobile number
        </p>

        <form onSubmit={handleVerify} className="mt-6 space-y-6">
          {/* OTP Boxes */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center border border-pink-300 bg-pink-50 
                rounded-xl text-lg font-semibold text-gray-700 
                focus:border-pink-500 outline-none transition"
                onChange={(e) => handleInput(e.target.value, index)}
                onKeyDown={(e) =>
                  e.key === "Backspace" &&
                  handleBackspace(e.target.value, index)
                }
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm font-medium bg-red-50 py-2 rounded-xl border border-red-200 animate-fadeIn">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-2xl shadow-md 
            hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Verify OTP
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          Didn’t receive the OTP?{" "}
          <span
            onClick={handleResendOtp}
            className="text-pink-600 font-semibold cursor-pointer hover:underline"
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
