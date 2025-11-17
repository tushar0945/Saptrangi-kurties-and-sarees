import React from "react";

const HomeHeading = ({ title }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-2 sm:mt-2 mb-2 sm:mb-2 text-gray-800 px-2">
      {title}
    </h2>
  );
};

export default HomeHeading;
