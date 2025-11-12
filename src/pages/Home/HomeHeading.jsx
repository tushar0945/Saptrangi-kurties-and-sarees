import React from "react";

const HomeHeading = ({ title }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-6 text-gray-800">
      {title}
    </h2>
  );
};

export default HomeHeading;
