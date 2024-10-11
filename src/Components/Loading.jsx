import React from "react";

// Loading.jsx
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-blue-500"></div>
    </div>
  );
};

export default Loading;
