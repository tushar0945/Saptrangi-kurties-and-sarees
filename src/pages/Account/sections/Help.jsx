const Help = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6 b">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 animate-fadeIn relative overflow-hidden">
        {/* Decorative Soft Blobs */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-14 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
          alt="help"
          className="w-28 mx-auto mb-4 drop-shadow"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Help & Support 💗
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
          We're here for you anytime. Reach out to us through the following:
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="border border-pink-200 bg-pink-50 rounded-xl p-4">
            <p className="text-gray-700 font-medium text-lg">
              📞 Contact Number
            </p>
            <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
          </div>

          <div className="border border-rose-200 bg-rose-50 rounded-xl p-4">
            <p className="text-gray-700 font-medium text-lg">✉️ Email</p>
            <p className="text-gray-600 text-sm mt-1">support@saptrangi.com</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Our team responds within 24 hours 🌼
        </p>
      </div>
    </div>
  );
};

export default Help;
