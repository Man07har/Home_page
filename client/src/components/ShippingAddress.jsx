import React from 'react';
import SellerQuery from '../assets/SellerQuery.png';
import Coin from '../assets/Coin.png';
import Offer from '../assets/Bxs_offer.png';
function ShippingAddress() {
  return (
    <>
      <div className="flex p-10 justify-around font-semibold text-2xl text-black">
        {/* <h1>1.Enter a new Shipping Address</h1> */}
        <div className="bg-[#d37130a4] p-6 w-1/2">
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
          <div className="bg-[#E8B491] flex mt-10 items-center rounded-md px-14 py-4">
            {' '}
            {/* The point where coins section starts */}
            <img src={Coin} alt="coin" className="w-48" />
            <div>
              <h2>For Every $100 spent You earn 2 offer Coins</h2>
              <h2>Max 50 Per Order</h2>
            </div>
          </div>
          <div className="bg-[#FFEEE2] mt-10 items-center rounded-md px-14 py-4">
            <h2>Available Offers</h2>
            <div className="flex">
              <img src={Offer} alt="Offer" className="w-24 h-12" />
              <h2 className="ml-6">
                Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3
                months EMI Txns, Min Txn Value ₹10,000 T&C
              </h2>
            </div>
            <div className="flex">
              <img src={Offer} alt="Offer" className="w-24 h-12" />
              <h2 className="ml-6">
                Bank Offer10% Instant Discount on ICICI Bank Credit Card Txns,
                up to ₹1250, on orders of ₹5000 and aboveT&C
              </h2>
            </div>
            <div className="flex">
              <img src={Offer} alt="Offer" className="w-24 h-12" />
              <h2 className="ml-6">
                Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6
                months EMI Txns, Min Txn Value ₹10,000 T&C
              </h2>
            </div>
            <div className="flex">
              <img src={Offer} alt="Offer" className="w-24 h-12" />
              <h2 className="ml-6">
                Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6
                months EMI Txns, Min Txn Value ₹10,000 T&C
              </h2>
            </div>
            <h2 className="hover:cursor-pointer ml-24 mt-4">
              {' '}
              View 25 more offers
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
