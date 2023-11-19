import React from 'react';

function SellerProfileFilter() {
  return (
    <>
      <div className="my-4">
        <div className="bg-[#F5DBCD]  w-screen  flex h-[4em] justify-evenly py-2 font-medium">
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none  hover:text-white rounded-full text-black">
            Clothing
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Jwellery
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Home Decor
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Toys
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Ceramics
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Stationery
          </button>
          <button className="hover:bg-[#D37130] bg-[#F5DBCD] px-3 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Books
          </button>
          <button className="hover:bg-[#D37130] bg-[#E1582D] px-8 shadow-2xl  hover:border-none   hover:text-white rounded-full text-black">
            Gifts
          </button>
        </div>
      </div>
    </>
  );
}

export default SellerProfileFilter;
