// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import api from "../../api/axios";

// const OtpVerify = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const inputRefs = useRef([]);

//   // ===========================
//   // VERIFY OTP (BACKEND)
//   // ===========================
//   const handleVerify = async (e) => {
//     e.preventDefault();

//     const enteredOTP = otp.join("");
//     // const phone = localStorage.getItem("temp_phone");
//     const phone = "8999197992";

//     if (!phone) {
//       setError("Phone number missing. Please login again.");
//       return;
//     }

//     if (enteredOTP.length !== 6) {
//       setError("Please enter the complete 6-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await api.post("auth/auth/verify-otp/", {
//         mobile: phone,
//         otp: enteredOTP,
//       });

//       console.log("OTP Verify Response:", res.data);

//       // ✅ SUCCESS → backend returns { access, refresh, user }
//       if (res.status === 200 && res.data?.access && res.data?.user) {
//         login({
//           user: res.data.user,
//           accessToken: res.data.access,
//         });

//         localStorage.removeItem("temp_phone");

//         navigate("/account/profile", { replace: true });
//       } else {
//         setError(res.data?.message || "Invalid OTP. Please try again.");
//       }
//     } catch (err) {
//       console.error("Verify OTP Error:", err);
//       setError(
//         err.response?.data?.message ||
//           "Invalid or expired OTP. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ===========================
//   // RESEND OTP (BACKEND)
//   // ===========================
//   const handleResendOtp = async () => {
//     const phone = localStorage.getItem("temp_phone");

//     if (!phone) {
//       setError("Phone number missing. Please login again.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       await api.post("/auth/send-otp/", {
//         mobile: phone,
//       });

//       setOtp(["", "", "", "", "", ""]);
//       inputRefs.current[0]?.focus();
//     } catch (err) {
//       console.error("Resend OTP Error:", err);
//       setError("Failed to resend OTP. Please try again.");
//     } finally {
//       setLoading(false);
//     }
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
//     <div className="min-h-screen flex justify-center items-start px-4 pt-16 pb-4">
//       <div className="bg-white w-full max-w-md mt-2 rounded-3xl shadow-lg p-7 animate-fadeIn">
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
//           <div className="flex justify-center gap-3">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 className="w-12 h-12 text-center border border-primary/40 bg-primary/5 rounded-xl text-lg font-semibold"
//                 onChange={(e) => handleInput(e.target.value, index)}
//                 onKeyDown={(e) =>
//                   e.key === "Backspace" &&
//                   handleBackspace(e.target.value, index)
//                 }
//               />
//             ))}
//           </div>

//           {error && (
//             <p className="text-red-500 text-center text-sm font-medium bg-red-50 py-2 rounded-xl border border-red-200">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-2xl shadow-md disabled:opacity-60"
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </form>

//         <p className="text-center text-xs text-gray-500 mt-4">
//           Didn’t receive the OTP?{" "}
//           <span
//             onClick={handleResendOtp}
//             className="text-primary font-semibold cursor-pointer hover:underline"
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
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const inputRefs = useRef([]);

  // 📍 where user came from (default "/")
  const from = location.state?.from || "/";

  // ===========================
  // VERIFY OTP (BACKEND)
  // ===========================
  const handleVerify = async (e) => {
    e.preventDefault();

    const enteredOTP = otp.join("");
    const phone = "8999197992"; // ✅ use stored phone
    // const phone = localStorage.getItem("temp_phone"); // ✅ use stored phone

    if (!phone) {
      setError("Phone number missing. Please login again.");
      return;
    }

    if (enteredOTP.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/verify-otp/", {
        mobile: phone,
        otp: enteredOTP,
      });
      console.log(res);

      // ✅ SUCCESS
      if (res.status === 200 && res.data?.accessToken && res.data?.user) {
        const user = res.data.user;

        login({
          user,
          accessToken: res.data.accessToken,
        });

        localStorage.removeItem("temp_phone");

        if (!user.first_name) {
          navigate("/cart", { replace: true });
          // navigate("/account/profile", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } else {
        setError(res.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("Verify OTP Error:", err);
      setError(
        err.response?.data?.message ||
          "Invalid or expired OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // RESEND OTP
  // ===========================
  const handleResendOtp = async () => {
    const phone = localStorage.getItem("temp_phone");

    if (!phone) {
      setError("Phone number missing. Please login again.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/send-otp/", {
        mobile: phone,
      });

      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err) {
      console.error("Resend OTP Error:", err);
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen flex justify-center items-start px-4 pt-16 pb-4">
      <div className="bg-white w-full max-w-md mt-2 rounded-3xl shadow-lg p-7">
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="otp"
            className="w-20 mx-auto"
          />
        </div>

        <h2 className="text-2xl font-bold text-center">Verify Your OTP 🔐</h2>

        <p className="text-gray-500 text-center mt-1">
          Enter the 6-digit code sent to your mobile number
        </p>

        <form onSubmit={handleVerify} className="mt-6 space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center border rounded-xl text-lg"
                onChange={(e) => handleInput(e.target.value, index)}
                onKeyDown={(e) =>
                  e.key === "Backspace" &&
                  handleBackspace(e.target.value, index)
                }
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-xl"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-center text-xs mt-4">
          Didn’t receive the OTP?{" "}
          <span
            onClick={handleResendOtp}
            className="text-primary cursor-pointer font-semibold"
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
