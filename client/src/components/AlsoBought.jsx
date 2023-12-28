import React from 'react';
import FeedBackStars from '../assets/FeedBackStars.png';
function AlsoBought({ image, title }) {
  return (
    <>
      <div className="flex ">
        <img src={image} alt="Product Image" />
        <div className="ml-3">
          <h1>{title}</h1>
          <img src={FeedBackStars} alt="rating" className="w-[100px] m-2" />
          <button className="bg-white border-2 border-black p-3 text-lg rounded-md">
            Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default AlsoBought;
