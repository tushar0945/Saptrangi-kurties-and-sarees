// // import { useState } from "react";
// // import { Calendar } from "lucide-react";

// // const Profile = () => {
// //   const [gender, setGender] = useState("Male");

// //   return (
// //     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
// //       {/* TITLE */}
// //       <h1 className="text-xl font-bold text-[#222] mb-6">My Profile</h1>

// //       <div className="grid grid-cols-2 gap-6">
// //         {/* FIRST NAME */}
// //         <div>
// //           <label className="text-[13px] text-gray-600 font-medium">
// //             First Name *
// //           </label>
// //           <input
// //             type="text"
// //             defaultValue="Tushar"
// //             className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none"
// //           />
// //         </div>

// //         {/* LAST NAME */}
// //         <div>
// //           <label className="text-[13px] text-gray-600 font-medium">
// //             Last Name
// //           </label>
// //           <input
// //             type="text"
// //             defaultValue="Patil"
// //             className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none"
// //           />
// //         </div>

// //         {/* EMAIL */}
// //         <div className="col-span-2">
// //           <label className="text-[13px] text-gray-600 font-medium">
// //             Email Id *
// //           </label>
// //           <input
// //             type="text"
// //             defaultValue="tp909580@gmail.com"
// //             className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none"
// //           />
// //         </div>

// //         {/* MOBILE NUMBER */}
// //         <div className="col-span-2">
// //           <label className="text-[13px] text-gray-600 font-medium">
// //             Mobile Number *
// //           </label>

// //           <div className="flex items-center gap-3 mt-1">
// //             <input
// //               type="text"
// //               defaultValue="+918999197992"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none"
// //             />
// //             <button className="text-[#2874f0] text-[14px] font-semibold hover:underline">
// //               CHANGE
// //             </button>
// //           </div>
// //         </div>

// //         {/* DOB */}
// //         <div className="col-span-2">
// //           <label className="text-[13px] text-gray-600 font-medium">DOB</label>

// //           <div className="relative mt-1">
// //             <input
// //               type="text"
// //               placeholder="mm/dd/yyyy"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none"
// //             />

// //             <Calendar
// //               className="absolute right-3 top-3 text-gray-500"
// //               size={20}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* HINT */}
// //       <p className="text-[13px] text-gray-500 mt-3 mb-4">
// //         Share your DOB to get special gifts on the 1st day of your birthday
// //         month.
// //       </p>

// //       {/* GENDER */}
// //       <label className="text-[13px] text-gray-600 font-medium">Gender</label>
// //       <div className="flex gap-3 mt-2">
// //         <button
// //           onClick={() => setGender("Male")}
// //           className={`px-8 py-3 rounded-lg border text-[15px] font-medium
// //             ${
// //               gender === "Male"
// //                 ? "bg-yellow-400 border-yellow-500"
// //                 : "border-gray-300"
// //             }
// //           `}
// //         >
// //           Male
// //         </button>

// //         <button
// //           onClick={() => setGender("Female")}
// //           className={`px-8 py-3 rounded-lg border text-[15px] font-medium
// //             ${
// //               gender === "Female"
// //                 ? "bg-yellow-400 border-yellow-500"
// //                 : "border-gray-300"
// //             }
// //           `}
// //         >
// //           Female
// //         </button>

// //         <button
// //           onClick={() => setGender("Other")}
// //           className={`px-8 py-3 rounded-lg border text-[15px] font-medium
// //             ${
// //               gender === "Other"
// //                 ? "bg-yellow-400 border-yellow-500"
// //                 : "border-gray-300"
// //             }
// //           `}
// //         >
// //           Other
// //         </button>
// //       </div>

// //       {/* SAVE BUTTON */}
// //       <button
// //         disabled
// //         className="w-full mt-8 bg-gray-200 text-gray-500 py-4 rounded-lg font-semibold cursor-not-allowed"
// //       >
// //         SAVE CHANGES
// //       </button>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useState } from "react";
// import { Calendar } from "lucide-react";

// const Profile = () => {
//   const [gender, setGender] = useState("Male");

//   return (
//     <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
//       {/* PAGE TITLE */}
//       <h1 className="text-xl font-bold text-[#222] mb-8">My Profile</h1>

//       {/* ----------------------------- */}
//       {/* FORM GRID */}
//       {/* ----------------------------- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* FIRST NAME */}
//         <div>
//           <label className="block text-[14px] text-gray-600 mb-1">
//             First Name *
//           </label>
//           <input
//             type="text"
//             defaultValue="Tushar"
//             className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 outline-none focus:border-[#2874f0]"
//           />
//         </div>

//         {/* LAST NAME */}
//         <div>
//           <label className="block text-[14px] text-gray-600 mb-1">
//             Last Name
//           </label>
//           <input
//             type="text"
//             defaultValue="Patil"
//             className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 outline-none focus:border-[#2874f0]"
//           />
//         </div>

//         {/* EMAIL */}
//         <div className="md:col-span-2">
//           <label className="block text-[14px] text-gray-600 mb-1">
//             Email Id *
//           </label>
//           <input
//             type="email"
//             defaultValue="tp909580@gmail.com"
//             className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 outline-none focus:border-[#2874f0]"
//           />
//         </div>

//         {/* MOBILE NUMBER */}
//         <div className="md:col-span-2 flex items-center justify-between">
//           <div className="w-full">
//             <label className="block text-[14px] text-gray-600 mb-1">
//               Mobile Number *
//             </label>
//             <input
//               type="text"
//               defaultValue="+918999197992"
//               className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 outline-none focus:border-[#2874f0]"
//             />
//           </div>

//           <button className="ml-4 text-[#2874f0] font-medium hover:underline">
//             CHANGE
//           </button>
//         </div>

//         {/* DOB */}
//         <div className="md:col-span-2 relative">
//           <label className="block text-[14px] text-gray-600 mb-1">DOB</label>
//           <input
//             type="text"
//             placeholder="mm/dd/yyyy"
//             className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 outline-none focus:border-[#2874f0]"
//           />

//           <Calendar
//             className="absolute right-3 top-10 text-gray-500"
//             size={20}
//           />

//           <p className="text-gray-500 text-[13px] mt-2">
//             Share your DOB to get special gifts on the 1st day of your birthday
//             month
//           </p>
//         </div>
//       </div>

//       {/* ----------------------------- */}
//       {/* GENDER SECTION */}
//       {/* ----------------------------- */}
//       <div className="mt-8">
//         <h3 className="text-[16px] font-semibold mb-3">Gender</h3>

//         <div className="flex gap-4">
//           {/* Male */}
//           <button
//             onClick={() => setGender("Male")}
//             className={`w-[140px] py-3 rounded-lg font-medium border
//             ${
//               gender === "Male"
//                 ? "bg-[#ffd333] border-yellow-300"
//                 : "border-gray-300"
//             }`}
//           >
//             Male
//           </button>

//           {/* Female */}
//           <button
//             onClick={() => setGender("Female")}
//             className={`w-[140px] py-3 rounded-lg font-medium border
//             ${
//               gender === "Female"
//                 ? "bg-[#ffd333] border-yellow-300"
//                 : "border-gray-300"
//             }`}
//           >
//             Female
//           </button>

//           {/* Other */}
//           <button
//             onClick={() => setGender("Other")}
//             className={`w-[140px] py-3 rounded-lg font-medium border
//             ${
//               gender === "Other"
//                 ? "bg-[#ffd333] border-yellow-300"
//                 : "border-gray-300"
//             }`}
//           >
//             Other
//           </button>
//         </div>
//       </div>

//       {/* SAVE BUTTON */}
//       <div className="mt-10 flex justify-center">
//         <button className="bg-[#ffd333] hover:bg-[#ffca1e] text-black font-semibold px-12 py-4 rounded-lg text-[16px]">
//           SAVE CHANGES
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// sections/Profile.jsx
import React, { useState } from "react";
import { Calendar } from "lucide-react";

import VerifyEmailModal from "./VerifyEmailModal";
import VerifyEmailOTPModal from "./VerifyEmailOTPModal";
import VerifyMobileModal from "./VerifyMobileModal";
import VerifyMobileOTPModal from "./VerifyMobileOTPModal";

const Profile = () => {
  // user data (in real app load from API)
  const [email, setEmail] = useState("tp909580@gmail.com");
  const [mobile, setMobile] = useState("+918999197992");
  const [gender, setGender] = useState("Male");

  // modal states
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [openEmailOtpModal, setOpenEmailOtpModal] = useState(false);
  const [openMobileModal, setOpenMobileModal] = useState(false);
  const [openMobileOtpModal, setOpenMobileOtpModal] = useState(false);

  // temporary trackers
  const [pendingNewMobile, setPendingNewMobile] = useState("");
  const [simulatedOtp, setSimulatedOtp] = useState(""); // used only for local demo

  // --------------- Email flow ---------------
  const handleStartEmailVerify = () => {
    // open initial modal
    setOpenEmailModal(true);
  };

  const handleGetEmailOtp = (emailToSend) => {
    // simulate sending OTP
    const generated = String(Math.floor(1000 + Math.random() * 9000));
    setSimulatedOtp(generated);
    console.log("Simulated email OTP:", generated);
    setOpenEmailModal(false);
    setOpenEmailOtpModal(true);
    // in real app: call backend -> send OTP to emailToSend
  };

  const handleSubmitEmailOtp = (code) => {
    if (code === simulatedOtp) {
      // successful verify
      setOpenEmailOtpModal(false);
      // now allow mobile change flow
      setOpenMobileModal(true);
    } else {
      alert("Invalid OTP (demo). Try again. (Console shows simulated OTP.)");
    }
  };

  // --------------- Mobile flow ---------------
  const handleGetMobileOtp = (newMobile) => {
    // store pending mobile
    setPendingNewMobile(newMobile);
    // simulate sending OTP
    const generated = String(Math.floor(1000 + Math.random() * 9000));
    setSimulatedOtp(generated);
    console.log("Simulated mobile OTP:", generated);
    setOpenMobileModal(false);
    setOpenMobileOtpModal(true);
  };

  const handleSubmitMobileOtp = (code) => {
    if (code === simulatedOtp) {
      // update mobile
      setMobile("+91" + pendingNewMobile);
      setOpenMobileOtpModal(false);
      setPendingNewMobile("");
      alert("Mobile updated (demo).");
    } else {
      alert(
        "Invalid OTP (demo). Try again. (Check console for simulated OTP.)"
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm w-full">
      <h1 className="text-xl font-bold text-[#222] mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[13px] text-gray-600 mb-1">
            First Name *
          </label>
          <input
            type="text"
            defaultValue="Tushar"
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-[13px] text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Patil"
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-[13px] text-gray-600 mb-1">
            Email Id *
          </label>
          <input
            value={email}
            readOnly
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 bg-white"
          />
        </div>

        <div className="md:col-span-2 flex items-center justify-between">
          <div className="w-full">
            <label className="block text-[13px] text-gray-600 mb-1">
              Mobile Number *
            </label>
            <input
              value={mobile}
              readOnly
              className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 bg-white"
            />
          </div>

          <button
            onClick={handleStartEmailVerify}
            className="ml-4 text-[#2874f0] font-medium"
          >
            CHANGE
          </button>
        </div>
        {/* 
        <div className="md:col-span-2 relative">
          <label className="block text-[13px] text-gray-600 mb-1">DOB</label>
          <input
            placeholder="mm/dd/yyyy"
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3"
          />
          <Calendar
            className="absolute right-3 top-10 text-gray-500"
            size={20}
          />

          <p className="text-gray-500 text-[13px] mt-2">
            Share your DOB to get special gifts on the 1st day of your birthday
            month
          </p>
        </div> */}

        <div className="md:col-span-2 relative">
          <label className="block text-[13px] text-gray-600 mb-1">DOB</label>

          <input
            type="date"
            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3"
          />

          <Calendar
            className="absolute right-3 top-10 text-gray-500 pointer-events-none"
            size={20}
          />

          <p className="text-gray-500 text-[13px] mt-2">
            Share your DOB to get special gifts on the 1st day of your birthday
            month
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[16px] font-semibold mb-3">Gender</h3>

        <div className="flex gap-4">
          <button
            onClick={() => setGender("Male")}
            className={`w-[140px] py-3 rounded-lg ${
              gender === "Male" ? "bg-[#ffd333]" : "border border-gray-300"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setGender("Female")}
            className={`w-[140px] py-3 rounded-lg ${
              gender === "Female" ? "bg-[#ffd333]" : "border border-gray-300"
            }`}
          >
            Female
          </button>
          <button
            onClick={() => setGender("Other")}
            className={`w-[140px] py-3 rounded-lg ${
              gender === "Other" ? "bg-[#ffd333]" : "border border-gray-300"
            }`}
          >
            Other
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-[#ffd333] px-12 py-3 rounded-lg font-semibold">
          SAVE CHANGES
        </button>
      </div>

      {/* MODALS */}
      <VerifyEmailModal
        open={openEmailModal}
        email={email}
        onClose={() => setOpenEmailModal(false)}
        onGetOtp={handleGetEmailOtp}
      />
      <VerifyEmailOTPModal
        open={openEmailOtpModal}
        email={email}
        onClose={() => setOpenEmailOtpModal(false)}
        onSubmitOtp={handleSubmitEmailOtp}
        onResend={() => alert("Resend (demo)")}
      />

      {/* mobile modals */}
      <VerifyMobileModal
        open={openMobileModal}
        onClose={() => setOpenMobileModal(false)}
        onGetOtp={(m) => handleGetMobileOtp(m)}
      />
      <VerifyMobileOTPModal
        open={openMobileOtpModal}
        mobile={pendingNewMobile}
        onClose={() => setOpenMobileOtpModal(false)}
        onSubmitOtp={handleSubmitMobileOtp}
        onResend={() => alert("Resend (demo)")}
      />
    </div>
  );
};

export default Profile;
