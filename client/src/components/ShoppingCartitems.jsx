import React from 'react';
import DropDownMenu from './DropDownMenu';
function ShoppingCartitems({ image, title }) {
  return (
    <>
      <div className="flex mt-4">
        <img src={image} alt="product image" className="hover:cursor-pointer" />
        <div className="ml-4">
          <h1 className="hover:cursor-pointer">{title}</h1>
          <div className="flex text-xl mt-6">
            <div>{DropDownMenu()}</div>
            <div className="w-0.5 m-2 bg-black"></div>
            <h3 className="hover:cursor-pointer flex justify-center items-center">
              Delete
            </h3>
            <div className="w-0.5 m-2 bg-black"></div>
            <h3 className="hover:cursor-pointer flex justify-center items-center">
              Save for later
            </h3>
            <div className="w-0.5 m-2 bg-black"></div>
            <h3 className="hover:cursor-pointer flex justify-center items-center">
              See more like this
            </h3>
            <div className="w-0.5 m-2 bg-black"></div>
            <h3 className="hover:cursor-pointer flex justify-center items-center">
              Share
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartitems;
