import React from 'react';

function Default() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#FFA048] text-white p-8 rounded-lg shadow-md transform rotate-12 transition-transform animate-bounce">
          <h2 className="text-4xl font-bold mb-4 ">404 - Page Not Found</h2>
          <p className="text-lg animate-pulse">
            Sorry, the page you're looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
}

export default Default;
