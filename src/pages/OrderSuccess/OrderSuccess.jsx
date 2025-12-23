// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { CheckCircle } from "lucide-react";

// const OrderSuccess = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
//       <div className="bg-white max-w-md w-full rounded-2xl shadow-md p-8 text-center">
//         {/* ✅ Success Icon */}
//         <div className="flex justify-center mb-4">
//           <CheckCircle size={72} className="text-green-500" />
//         </div>

//         {/* 🎉 Heading */}
//         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
//           Order Placed Successfully!
//         </h1>

//         {/* 📦 Message */}
//         <p className="text-gray-600 mb-6">
//           Thank you for shopping with{" "}
//           <span className="font-medium">SaajNika</span>.
//           <br />
//           Your payment has been confirmed and your order is being processed.
//         </p>

//         {/* 🚚 Info Box */}
//         <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 text-sm text-green-700">
//           You will receive order and delivery updates via SMS / Email.
//         </div>

//         {/* 🔘 Actions */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={() => navigate("/account/orders")}
//             className="w-full bg-[#0f766e] text-white py-2.5 rounded-lg font-medium hover:bg-[#0d6b63] transition"
//           >
//             View My Orders
//           </button>

//           <button
//             onClick={() => navigate("/")}
//             className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;

import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdfa] to-[#f5f5f5] flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 text-center border border-[#ccfbf1]">
        {/* ✅ Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#ccfbf1] p-4 rounded-full">
            <CheckCircle size={64} className="text-[#0f766e]" />
          </div>
        </div>

        {/* 🎉 Heading */}
        <h1 className="text-2xl font-semibold text-[#0f766e] mb-2">
          Order Placed Successfully!
        </h1>

        {/* 📦 Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for shopping with{" "}
          <span className="font-semibold text-[#0f766e]">SaajNika</span>.
          <br />
          Your payment has been confirmed and your order is being processed.
        </p>

        {/* 🚚 Info Box */}
        <div className="bg-[#f0fdfa] border border-[#ccfbf1] rounded-lg p-4 mb-6 text-sm text-[#115e59]">
          You will receive order and delivery updates via SMS / Email.
        </div>

        {/* 🔘 Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/account/orders")}
            className="w-full bg-[#0f766e] text-white py-2.5 rounded-lg font-medium 
                       hover:bg-[#115e59] transition-all duration-200 shadow-sm"
          >
            View My Orders
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full border border-[#0f766e] text-[#0f766e] py-2.5 rounded-lg font-medium 
                       hover:bg-[#f0fdfa] transition-all duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
