import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number 💛");
      return;
    }

    // ✅ ADD COUNTRY CODE HERE
    const mobileWithCountryCode = `${phone}`;

    try {
      setLoading(true);
      console.log(mobileWithCountryCode);
      const res = await api.post("auth/auth/send-otp/", {
        mobile: mobileWithCountryCode,
      });

      if (res.status === 200 && res.data?.success === true) {
        // store phone WITH country code
        localStorage.setItem("temp_phone", mobileWithCountryCode);

        navigate("/verify-otp", { replace: true });
      } else {
        alert(res.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Send OTP Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-4 pt-16 pb-4 bg-gradient-to-b">
      <div className="bg-white w-full max-w-md mt-2 rounded-3xl shadow-lg p-7 animate-fadeIn relative overflow-hidden">
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
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-2xl shadow-md hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

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
