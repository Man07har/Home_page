import React from 'react';
import Card from '../components/Card';
function YourWishList() {
  return (
    <>
      <div className="flex mx-8 text-2xl font-semibold ">
        <div className="shopping cart w-full bg-[#E8B491]  pr-2">
          <div className="m-4">
            <h1>Your WishList</h1>
            <h2 className="text-lg hover:cursor-pointer">See more </h2>
            <hr className="mt-3"></hr>
            <div>
              <div className="flex justify-evenly">
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />
              </div>
              <div className="flex justify-evenly">
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />{' '}
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />{' '}
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />{' '}
                <Card
                  title="Product 1"
                  description="This is a product description."
                  price={50}
                  discount={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourWishList;
