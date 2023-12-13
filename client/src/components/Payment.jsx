import React from 'react';
import Product from '../assets/Product.png';
function Payment() {
  return (
    <>
      <div className="bg-[#d371308a] text-2xl font-bold p-12 w-1/2">
        <h2>Delivery Date</h2>
        <h3>Choose The Delivery Date of your Product</h3>
        <div className="flex">
          <img
            src={Product}
            alt="Product"
            className=" p-2 cursor-pointer w-1/6 h-1/6"
          />
          <div>
            <h1 className="text-3xl font-semibold mt-4">
              Royalbox Meditating Buddha Statue For Home Decor Idol/Showpiece
              Decorative Showpiece - 17 cm (Polyresin, Gold)
            </h1>
            <p className="mt-12 text-md">
              This beautiful Meditating Buddha Idol Statue Showpiece from
              RoyalBox on Flipkart is a Wonderful Gifting and Home Decor Item
              Which is Ideal to keep in your Study Room or living room, Pooja
              Room or in a showcase, This showpiece of Buddha in a meditating
              posture is made From High Quality polyresin and is handcrafted by
              skilled artisans using conventional techniques.
            </p>

            <h2 className="mt-12 ">Payment Methods</h2>
            <hr className="m-4"></hr>
            <div className="flex mt-4  items-center">
              <input type="radio" name="delivery" className="w-5 h-5" />
              <div className="flex">
                <h2 className="ml-3 font-extrabold">Saturday</h2>
                <h2> -Free Delivery On this selection</h2>
              </div>
            </div>

            <div className="flex mt-4">
              <input type="radio" name="delivery" className="w-5 h-5" />
              <div className="flex">
                <h2 className="ml-3 font-extrabold">Monday</h2>
                <h2> -Office Hours(9AM - 5PM)</h2>
              </div>
            </div>
            <div className="flex mt-4">
              <input type="radio" name="delivery" className="w-5 h-5" />
              <div className="flex">
                <h2 className="ml-3 font-extrabold">Tuesday</h2>
                <h2> -Home (8Am - 9PM)</h2>
              </div>
            </div>
            <button className="bg-[#D37130] rounded-full p-4 mt-8">
              Book Order{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
