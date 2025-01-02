import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-100">
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-full h-full bg-blue-500 animate-progress"></div>
      </div>
      <p className="mt-4 text-blue-500 font-bold">Loading...</p>
    </div>
  );
};

export default Preloader;
