// import React, { useState } from "react";
// import { Calendar } from "lucide-react";
// import { useAuth } from "../../../context/AuthContext";
// import { AuthService } from "../../../services/authService";
// import { useNavigate } from "react-router-dom";

// import VerifyEmailModal from "./VerifyEmailModal";
// import VerifyEmailOTPModal from "./VerifyEmailOTPModal";
// import VerifyMobileModal from "./VerifyMobileModal";
// import VerifyMobileOTPModal from "./VerifyMobileOTPModal";
// import SuccessModal from "./SuccessModal";

// const Profile = () => {
//   const { user, token, login } = useAuth();
//   const navigate = useNavigate();

//   // Load initial data from logged-in user
//   const [email, setEmail] = useState(user?.email || "");
//   const [mobile, setMobile] = useState(user?.phone || "");

//   const [initialProfile, setInitialProfile] = useState({
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     gender: user?.gender || "",
//     dob: user?.dob || "",
//   });

//   const [profile, setProfile] = useState(initialProfile);

//   const handleChange = (field, value) => {
//     setProfile((prev) => ({ ...prev, [field]: value }));
//   };

//   // FIRST-TIME CHECK
//   const isFirstTime =
//     !initialProfile.firstName ||
//     !initialProfile.gender ||
//     !email ||
//     email.trim() === "";

//   // NORMAL MODE CHANGE
//   const isChanged =
//     !isFirstTime && JSON.stringify(profile) !== JSON.stringify(initialProfile);

//   // ================================
//   // SAVE PROFILE — UPDATED VERSION
//   // ================================
//   const handleSaveProfile = () => {
//     if (!profile.firstName || !email || !profile.gender) {
//       alert("Please fill all required fields");
//       return;
//     }

//     console.log("submited");

//     // 1) Update LOCAL DB
//     const updatedUser = AuthService.updateUserProfile(user.id, {
//       firstName: profile.firstName,
//       lastName: profile.lastName,
//       gender: profile.gender,
//       dob: profile.dob,
//       email: email,
//       phone: mobile,
//     });

//     // 2) Fetch fresh user (guaranteed latest)
//     const freshUser = AuthService.registerOrGetUser(updatedUser.phone);

//     // 3) Update session
//     login(freshUser, token);

//     // 4) Reset UI states with fresh updated data
//     setInitialProfile({
//       firstName: freshUser.firstName,
//       lastName: freshUser.lastName,
//       gender: freshUser.gender,
//       dob: freshUser.dob,
//     });

//     setProfile({
//       firstName: freshUser.firstName,
//       lastName: freshUser.lastName,
//       gender: freshUser.gender,
//       dob: freshUser.dob,
//     });

//     setEmail(freshUser.email);
//     setMobile(freshUser.phone);

//     setShowSuccess(true);
//   };

//   // ================================
//   // MODAL STATES
//   // ================================
//   const [openEmailModal, setOpenEmailModal] = useState(false);
//   const [openEmailOtpModal, setOpenEmailOtpModal] = useState(false);
//   const [openMobileModal, setOpenMobileModal] = useState(false);
//   const [openMobileOtpModal, setOpenMobileOtpModal] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const [pendingNewMobile, setPendingNewMobile] = useState("");
//   const [simulatedOtp, setSimulatedOtp] = useState("");

//   // ================================
//   // EMAIL FLOW
//   // ================================
//   const handleStartEmailVerify = () => {
//     if (!isFirstTime) setOpenEmailModal(true);
//   };

//   const handleGetEmailOtp = () => {
//     const generated = String(Math.floor(1000 + Math.random() * 9000));
//     setSimulatedOtp(generated);

//     setOpenEmailModal(false);
//     setOpenEmailOtpModal(true);
//   };

//   const handleSubmitEmailOtp = (code) => {
//     if (code === simulatedOtp) {
//       setOpenEmailOtpModal(false);
//       setOpenMobileModal(true);
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   // ================================
//   // MOBILE FLOW
//   // ================================
//   const handleGetMobileOtp = (newMobile) => {
//     setPendingNewMobile(newMobile);

//     const generated = String(Math.floor(1000 + Math.random() * 9000));
//     setSimulatedOtp(generated);

//     setOpenMobileModal(false);
//     setOpenMobileOtpModal(true);
//   };

//   const handleSubmitMobileOtp = (code) => {
//     if (code !== simulatedOtp) {
//       alert("Wrong OTP");
//       return;
//     }

//     const updatedPhone = "+91" + pendingNewMobile;
//     setMobile(updatedPhone);

//     // Update DB also
//     const updatedUser = AuthService.updateUserProfile(user.id, {
//       phone: updatedPhone,
//     });

//     login(updatedUser, token);

//     setOpenMobileOtpModal(false);
//     setPendingNewMobile("");
//     setShowSuccess(true);
//   };

//   // ================================
//   // UI
//   // ================================
//   return (
//     <div className="bg-white p-6 rounded-xl border border-neutral shadow-sm w-full">
//       <h1 className="text-xl font-bold text-dark mb-6">
//         {isFirstTime ? "Complete Your Profile" : "My Profile"}
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* FIRST NAME */}
//         <div>
//           <label className="block text-[13px] text-dark/70 mb-1">
//             First Name *
//           </label>
//           <input
//             type="text"
//             value={profile.firstName}
//             onChange={(e) => handleChange("firstName", e.target.value)}
//             placeholder="Enter first name"
//             className="w-full border border-neutral rounded-lg px-4 py-3 text-dark outline-none"
//           />
//         </div>

//         {/* LAST NAME */}
//         <div>
//           <label className="block text-[13px] text-dark/70 mb-1">
//             Last Name
//           </label>
//           <input
//             type="text"
//             value={profile.lastName}
//             onChange={(e) => handleChange("lastName", e.target.value)}
//             placeholder="Enter last name"
//             className="w-full border border-neutral rounded-lg px-4 py-3 text-dark outline-none"
//           />
//         </div>

//         {/* EMAIL */}
//         <div className="md:col-span-2">
//           <label className="block text-[13px] text-dark/70 mb-1">
//             Email Id *
//           </label>
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={(e) => isFirstTime && setEmail(e.target.value)}
//             readOnly={!isFirstTime}
//             className="w-full border border-neutral rounded-lg px-4 py-3 text-dark bg-white"
//           />
//         </div>

//         {/* MOBILE */}
//         <div className="md:col-span-2 flex items-center justify-between gap-4">
//           <div className="w-full">
//             <label className="block text-[13px] text-dark/70 mb-1">
//               Mobile Number *
//             </label>
//             <input
//               value={mobile}
//               readOnly
//               className="w-full border border-neutral rounded-lg px-4 py-3 text-dark bg-white"
//             />
//           </div>

//           {!isFirstTime && (
//             <button
//               onClick={handleStartEmailVerify}
//               className="text-primary font-medium hover:underline"
//             >
//               CHANGE
//             </button>
//           )}
//         </div>

//         {/* DOB */}
//         <div className="md:col-span-2 relative">
//           <label className="block text-[13px] text-dark/70 mb-1">DOB</label>
//           <input
//             type="date"
//             value={profile.dob}
//             onChange={(e) => handleChange("dob", e.target.value)}
//             className="w-full border border-neutral rounded-lg px-4 py-3 text-dark outline-none"
//           />
//           <Calendar
//             className="absolute right-3 top-10 text-dark/50 pointer-events-none"
//             size={20}
//           />
//         </div>
//       </div>

//       {/* GENDER */}
//       <div className="mt-6">
//         <h3 className="text-[16px] font-semibold mb-3 text-dark">Gender *</h3>

//         <div className="flex gap-4 flex-wrap">
//           {["Male", "Female", "Other"].map((g) => (
//             <button
//               key={g}
//               onClick={() => handleChange("gender", g)}
//               className={`w-[140px] py-3 rounded-lg border transition ${
//                 profile.gender === g
//                   ? "bg-primary text-white border-primary"
//                   : "border-dark/30 text-dark hover:bg-neutral"
//               }`}
//             >
//               {g}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* SAVE */}
//       <div className="mt-8 flex justify-center">
//         <button
//           disabled={!isFirstTime && !isChanged}
//           onClick={handleSaveProfile}
//           className={`px-12 py-3 rounded-lg font-semibold transition ${
//             isFirstTime || isChanged
//               ? "bg-primary hover:bg-secondary text-white"
//               : "bg-neutral text-dark/40 cursor-not-allowed"
//           }`}
//         >
//           {isFirstTime ? "SAVE PROFILE" : "SAVE CHANGES"}
//         </button>
//       </div>

//       {/* MODALS */}
//       <VerifyEmailModal
//         open={openEmailModal}
//         email={email}
//         onClose={() => setOpenEmailModal(false)}
//         onGetOtp={handleGetEmailOtp}
//       />

//       <VerifyEmailOTPModal
//         open={openEmailOtpModal}
//         email={email}
//         onClose={() => setOpenEmailOtpModal(false)}
//         onSubmitOtp={handleSubmitEmailOtp}
//         onResend={() => alert("Resend OTP")}
//       />

//       <VerifyMobileModal
//         open={openMobileModal}
//         onClose={() => setOpenMobileModal(false)}
//         onGetOtp={(m) => handleGetMobileOtp(m)}
//       />

//       <VerifyMobileOTPModal
//         open={openMobileOtpModal}
//         mobile={pendingNewMobile}
//         onClose={() => setOpenMobileOtpModal(false)}
//         onSubmitOtp={handleSubmitMobileOtp}
//         onResend={() => alert("Resend OTP")}
//       />

//       <SuccessModal
//         open={showSuccess}
//         message={isFirstTime ? "Profile Saved!" : "Changes Saved Successfully!"}
//         onClose={() => {
//           setShowSuccess(false);
//           navigate("/"); // redirect to home
//         }}
//       />
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import { useAuth } from "../../../context/AuthContext";

import SuccessModal from "./SuccessModal";

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  // ================================
  // LOCAL FORM STATE (FROM CONTEXT)
  // ================================
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
  });

  const [initialProfile, setInitialProfile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  // ================================
  // LOAD USER INTO FORM
  // ================================
  useEffect(() => {
    if (!user) return;

    const data = {
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      gender: user.gender || "",
      dob: user.dob || "",
      email: user.email || "",
      mobile: user.mobile || "",
    };

    setProfile(data);
    setInitialProfile(data);
  }, [user]);

  // ================================
  // HELPERS
  // ================================
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const isFirstTime =
    !initialProfile?.first_name ||
    !initialProfile?.gender ||
    !initialProfile?.email;

  const isChanged =
    initialProfile &&
    JSON.stringify(profile) !== JSON.stringify(initialProfile);

  // ================================
  // SAVE PROFILE (BACKEND)
  // ================================
  const handleSaveProfile = async () => {
    if (!profile.first_name || !profile.gender || !profile.email) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setSaving(true);

      const res = await api.put("auth/profile/update/", {
        first_name: profile.first_name,
        last_name: profile.last_name,
        gender: profile.gender,
        dob: profile.dob,
        email: profile.email,
      });
      console.log(res);
      // ✅ Update AuthContext + localStorage
      updateUser(res.data.data);

      setInitialProfile(profile);
      setShowSuccess(true);
    } catch (err) {
      console.error("Profile update failed:", err);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  // ================================
  // UI
  // ================================
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm w-full">
      <h1 className="text-xl font-bold mb-6">
        {isFirstTime ? "Complete Your Profile" : "My Profile"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FIRST NAME */}
        <div>
          <label className="text-sm">First Name *</label>
          <input
            value={profile.first_name}
            onChange={(e) => handleChange("first_name", e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* LAST NAME */}
        <div>
          <label className="text-sm">Last Name</label>
          <input
            value={profile.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* EMAIL */}
        <div className="md:col-span-2">
          <label className="text-sm">Email *</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* MOBILE (READ ONLY) */}
        <div className="md:col-span-2">
          <label className="text-sm">Mobile</label>
          <input
            value={profile.mobile}
            readOnly
            className="w-full border rounded-lg px-4 py-3 bg-gray-50"
          />
        </div>

        {/* DOB */}
        <div className="md:col-span-2 relative">
          <label className="text-sm">DOB</label>
          <input
            type="date"
            value={profile.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
          <Calendar className="absolute right-3 top-10 text-gray-400" />
        </div>
      </div>

      {/* GENDER */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">Gender *</h3>
        <div className="flex gap-4">
          {["Male", "Female", "Other"].map((g) => (
            <button
              key={g}
              onClick={() => handleChange("gender", g)}
              className={`px-6 py-3 rounded-lg border ${
                profile.gender === g
                  ? "bg-primary text-white"
                  : "border-gray-300"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* SAVE */}
      <div className="mt-8 flex justify-center">
        <button
          disabled={saving || (!isFirstTime && !isChanged)}
          onClick={handleSaveProfile}
          className="px-12 py-3 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          {saving ? "SAVING..." : isFirstTime ? "SAVE PROFILE" : "SAVE CHANGES"}
        </button>
      </div>

      {/* SUCCESS */}
      <SuccessModal
        open={showSuccess}
        message="Profile Updated Successfully!"
        onClose={() => {
          setShowSuccess(false);
          navigate("/");
        }}
      />
    </div>
  );
};

export default Profile;
