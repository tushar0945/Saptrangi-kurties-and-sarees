import React from "react";

const FullPageLoader = () => {
  return (
    // <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
    //   <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
    //     SAAJNIKA
    //   </h1>

    //   <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
    //     <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]" />
    //   </div>
    // </div>
    <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
      <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
        SAAJNIKA
      </h1>

      <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
        <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default FullPageLoader;
