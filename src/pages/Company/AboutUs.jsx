const AboutUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6 ">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8 animate-fadeIn relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -left-10 w-44 h-44 bg-orange-200/20 rounded-full blur-xl"></div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          About Us 🌸
        </h1>

        <p className="text-gray-600 leading-relaxed text-sm">
          Welcome to our beautiful world of fashion, elegance, and empowerment.
          We built this platform with one goal — **to make every woman feel
          special, confident, and celebrated**. From exclusive designs to
          seamless shopping experiences, everything here is crafted with love.
          💖
        </p>

        <p className="text-gray-600 leading-relaxed text-sm mt-4">
          We believe fashion should be:
        </p>

        <ul className="text-gray-600 text-sm mt-2 list-disc list-inside space-y-1">
          <li>Comfortable & expressive</li>
          <li>Affordable & inclusive</li>
          <li>Made for ALL body types</li>
          <li>Fun, colorful & full of joy</li>
        </ul>

        <p className="text-gray-600 leading-relaxed text-sm mt-4">
          Thank you for being part of our journey. Let’s continue to grow,
          shine, and celebrate womanhood together. ✨
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
