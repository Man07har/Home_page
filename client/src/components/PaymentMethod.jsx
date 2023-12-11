import React from 'react';
import Banks from '../assets/Banks.png';
function PaymentMethod() {
  return (
    <>
      <div className="bg-[#D37130] text-2xl font-bold p-12 w-1/2">
        <h2>Your Available balance</h2>
        <hr className="m-4"></hr>
        <div className="flex">
          <input type="text" />
          <button className="mx-12 bg-[#d6d93c] rounded-md p-4 ">Apply</button>
        </div>
        <h2>Another Payment Method</h2>
        <hr className="m-4"></hr>
        <div className="flex">
          <input type="radio" />
          <h2>Credit or Debit Card</h2>
        </div>
        <img src={Banks} alt="Banks" />
        <div className="flex">
          <input type="radio" />
          <h2>Net Banking</h2>
        </div>
        <div className="flex">
          <input type="radio" />
          <h2>Other UPI Apps</h2>
        </div>
        <div className="flex">
          <input type="radio" />
          <h2>Cash on Delivery</h2>
        </div>
        <div className="bg-[#]">
          <button className="bg-[#d6d93c] rounded-full p-4">
            Use this payment method{' '}
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
