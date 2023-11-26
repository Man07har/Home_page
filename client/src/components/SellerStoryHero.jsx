import React from 'react';
import Gift from '../assets/GiftBox.svg'; // Path: client/src/assets/GiftBox.png
import SellerStory from '../assets/SellerStory.png'; // Path: client/src/assets/SellerStory.png
function SellerStoryHero() {
  return (
    <>
      <div className="bg-[#FEDAC1] flex justify-between text-2xl font-semibold px-12 py-6">
        <div className="flex  ">
          <h1 className="flex text-[rgb(179,72,6)] justify-center items-center cursor-pointer">
            Know Your <br />
            Vendors
          </h1>
          <img
            src={Gift}
            alt="Gift_Imag"
            className="flex justify-center items-center font-bold text-4xl text-black mx-4 cursor-pointer"
          />
        </div>

        <button className="bg-[#F6DE8D] p-2 px-8  rounded-full">
          Specials
        </button>
        <button className="bg-[#F6DE8D]  px-8 rounded-full">Stories</button>
        <button className="bg-[#F6DE8D] px-8 flex justify-center rounded-full items-center">
          Share Your <br />
          Story
        </button>
        <button className="bg-[#B34806] px-12 rounded-full py-2">
          Become a <br /> Vendor
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img src={SellerStory} alt="SellerStory_Image" className="w-full" />
      </div>
    </>
  );
}

export default SellerStoryHero;
