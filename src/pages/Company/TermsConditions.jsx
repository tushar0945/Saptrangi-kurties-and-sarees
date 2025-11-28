const TermsConditions = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6    ">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8 animate-fadeIn relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -left-10 w-44 h-44 bg-orange-200/20 rounded-full blur-xl"></div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Terms & Conditions 📜
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          By accessing or using our website, you agree to the following terms
          and conditions. Please read them carefully.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">1. Use of Platform</h2>
        <p className="text-gray-600 text-sm mt-1">
          You must use the platform responsibly and avoid any activity that may
          harm the site or other users.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">
          2. Purchases & Payments
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          All orders are subject to availability and payment confirmation.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">
          3. Cancellations & Refunds
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Refund and cancellation policies are governed by our company policies.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">
          4. Account Responsibility
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
