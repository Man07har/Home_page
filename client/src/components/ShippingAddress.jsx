import React from 'react';
import SellerQuery from '../assets/SellerQuery.png';
function ShippingAddress() {
  return (
    <>
      <div className="flex p-10 justify-around font-semibold text-2xl text-black">
        {/* <h1>1.Enter a new Shipping Address</h1> */}
        <div className="bg-[#D37130] p-6 w-1/2">
          <h2>Add a new Address</h2>
          <div className="bg-[#F5E0D1] flex justify-between p-4">
            {' '}
            <h2>Save time. Autofill your current Location</h2>
            <button className="bg-[#D9D9D9] p-1 rounded-md border-2 border-black ">
              Auto fill
            </button>
          </div>
          <form className="font-bold ">
            <div className="flex flex-col py-3">
              {' '}
              <label for="fname">
                Country/Region <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
                placeholder="Your name.."
              />
            </div>

            <div className="flex flex-col py-3 ">
              {' '}
              <label for="fname">
                Full Name <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter you number here..."
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
              />
            </div>
            <div className="flex flex-col py-3 ">
              {' '}
              <label for="fname">Street Number</label>
              <input
                type="text"
                placeholder="Enter your Email here..."
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
              />
            </div>
            <div className="flex flex-col py-3">
              {' '}
              <label for="fname">
                City <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
                placeholder="Your name.."
              />
            </div>
            <div className="flex flex-col py-3">
              {' '}
              <label for="fname">
                State <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
                placeholder="Your name.."
              />
            </div>
            <div className="flex flex-col py-3">
              {' '}
              <label for="fname">
                Pincode <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
                placeholder="Your name.."
              />
            </div>
            <div className="flex flex-col py-3">
              {' '}
              <label for="fname">
                Phone Number <span className="text-[#D46E2F]"> *</span>
              </label>
              <input
                type="text"
                className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-full h-[50px]"
                placeholder="Your name.."
              />
            </div>
            <h2>May be used to assist delivery</h2>
          </form>
          <div className="flex text-2xl font-semibold mt-8 p-5">
            <input type="checkbox" className="w-12" />
            <h2 className="ml-4">Use as my default Address</h2>
          </div>
          <button className="bg-[#F5E0D1] p-2 rounded-md border-2 border-black">
            Use this Address
          </button>
        </div>{' '}
        <div className="ml-12 p-8">
          <div className="bg-[#E8B491] p-4">
            <div className=" flex flex-col items-center justify-center p-8">
              <button className="bg-[#F5E0D1] p-2 rounded-md border-2 border-black">
                Use this Address
              </button>
              <h2>
                Choose a shipping address and payment method to calculate the
                shipping, handling and tax
              </h2>
              <hr className="m-4"></hr>
            </div>
            <div className="pl-8">
              <h2>Order Summary</h2>
              <h2>Items: </h2>
              <h2>Delivery: </h2>
              <hr className="m-4"></hr>
              <h2>Order Total: </h2>
              <hr className="m-4"></hr>
              <h2 className="hover:cursor-pointer">
                How are delivery cost calculated?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
