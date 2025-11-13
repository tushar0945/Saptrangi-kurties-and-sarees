import React from "react";

const HomeHeading = ({ title }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-800 px-4">
      {title}
    </h2>
  );
};

export default HomeHeading;
