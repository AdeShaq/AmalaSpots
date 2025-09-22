import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-light-beige">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className="absolute bottom-0 left-1/2 w-12 h-12 bg-black opacity-20 rounded-full blur-md transform -translate-x-1/2 translate-y-4"
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
