import React from 'react';
import Banks from '../assets/Banks.png';
function PaymentMethod() {
  return (
    <>
      <div className="bg-[#d371308a] text-2xl font-bold p-12 w-1/2">
        <h2>Your Available balance</h2>
        <hr className="m-4"></hr>
        <div className="flex">
          <input type="text" />
          <button className="mx-12 bg-[#D37130] rounded-md p-4 ">Apply</button>
        </div>
        <h2 className="mt-12 ">Payment Methods</h2>
        <hr className="m-4"></hr>
        <div className="flex mt-4  items-center">
          <input type="radio" name="payment" className="w-5 h-5" />
          <h2 className="ml-3">Credit or Debit Card</h2>
        </div>
        <img src={Banks} alt="Banks" className="h-8 ml-8" />
        <div className="flex mt-4">
          <input type="radio" name="payment" className="w-5 h-5" />
          <h2 className="ml-3">Net Banking</h2>
        </div>
        <div className="flex mt-4">
          <input type="radio" name="payment" className="w-5 h-5" />
          <h2 className="ml-3">Other UPI Apps</h2>
        </div>
        <div className="flex mt-4">
          <input type="radio" name="payment" className="w-5 h-5" />
          <h2 className="ml-3">Cash on Delivery</h2>
        </div>
        {/* <div>
          <form>
            <label>
              {' '}
              <input type="radio" name="payment" /> Credit or Debit Card
            </label>
            <img src={Banks} alt="Banks" />
            <label>
              {' '}
              <input type="radio" name="payment" /> Net Banking
            </label>
            <label>
              {' '}
              <input type="radio" name="payment" /> Other UPI Apps
            </label>
            <label>
              {' '}
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>
          </form>
        </div> */}
        <div className=" mt-8">
          <button className="bg-[#D37130] rounded-full p-4">
            Use this payment method{' '}
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
