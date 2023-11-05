import React from 'react';
import SellerQuery from '../assets/SellerQuery.png';
function QueryForm() {
  return (
    <>
      <div className=" my-7 ">
        <div className="px-[15vw]">
          <h1 className="text-[3em] font-medium ">
            Got Queries?{' '}
            <span className="text-[#D46E2F]">Lets get them Resolved!</span>
          </h1>

          <div className="bg-[#E6BEA0] mt-3 h-1 ">
            <div className="bg-[#D0732F] h-1 w-[35%] "></div>
          </div>
          <h2>Talk to our consultant and get everything resolved!</h2>
        </div>
        <div className="flex p-10 justify-center">
          <div>
            <form className="font-bold ">
              <div className="flex flex-col py-3">
                {' '}
                <label for="fname">
                  Name: <span className="text-[#D46E2F]"> *</span>
                </label>
                <input
                  type="text"
                  className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-[600px] h-[50px]"
                  placeholder="Your name.."
                />
              </div>

              <div className="flex flex-col py-3 ">
                {' '}
                <label for="fname">
                  Phone Number: <span className="text-[#D46E2F]"> *</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you number here..."
                  className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-[600px] h-[50px]"
                />
              </div>
              <div className="flex flex-col py-3 ">
                {' '}
                <label for="fname">Email:</label>
                <input
                  type="text"
                  placeholder="Enter your Email here..."
                  className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-[600px] h-[50px]"
                />
              </div>
              <div className="flex flex-col">
                {' '}
                <label for="fname">
                  Any specific stuff you want to talk about?
                </label>
                <input
                  type="text"
                  className="bg-[#FFECE5] border-2 border-[#FFECE5] p-4 w-[600px] h-[15vw] py-3"
                />
              </div>
            </form>
          </div>{' '}
          <img src={SellerQuery} alt="SellerQuery" className="mx-12" />
        </div>
      </div>
    </>
  );
}

export default QueryForm;
