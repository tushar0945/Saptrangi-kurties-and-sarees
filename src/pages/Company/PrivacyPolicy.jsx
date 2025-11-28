const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6 ">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8 animate-fadeIn relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/35 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -left-10 w-44 h-44 bg-orange-200/25 rounded-full blur-xl"></div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Privacy Policy 🔒
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          Your privacy is extremely important to us. We are committed to
          safeguarding your personal information.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">1. Data We Collect</h2>
        <p className="text-gray-600 text-sm mt-1">
          We collect information such as your phone number, name, address, and
          browsing activity.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">
          2. How We Use Your Data
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          We use your data to improve your shopping experience, process orders,
          and personalize recommendations.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">3. Data Protection</h2>
        <p className="text-gray-600 text-sm mt-1">
          We use secure methods to protect your data from unauthorized access or
          misuse.
        </p>

        <h2 className="font-semibold text-gray-700 mt-4">4. Your Consent</h2>
        <p className="text-gray-600 text-sm mt-1">
          By using our platform, you consent to our privacy practices.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
