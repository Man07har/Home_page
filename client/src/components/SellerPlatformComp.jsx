import React from 'react';

function SellerPlatformComp({ image, title }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={image} alt="SellerQuery" className="mx-12" />
        <h2 className="text-xl">{title}</h2>
      </div>
    </>
  );
}

export default SellerPlatformComp;
