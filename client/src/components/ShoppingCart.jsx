import React from 'react';
import ShoppingCartitems from './ShoppingCartitems';
import Ganapati from '../assets/ganapati.png';
import AlsoBought from './AlsoBought';
import YourWishList from '../components/YourWishList';

function ShoppingCart() {
  return (
    <>
      <div className="flex mx-8 text-2xl font-semibold  ">
        <div className="shopping cart w-3/4 bg-[#E8B491] pr-2">
          <div className="m-4">
            <h1>Shopping Cart</h1>
            <h2 className="text-lg hover:cursor-pointer">
              Deselect all items{' '}
            </h2>
            <hr className="mt-3"></hr>
            <div>
              <ShoppingCartitems
                image={Ganapati}
                title="Estele Zinc 24Kt Gold Plated God of Beginnings Lord Ganesha Idol
            with Standing Position for Gifts & Housewarming/Home/Office Decors."
              />
              <hr className="mt-3"></hr>
              <ShoppingCartitems
                image={Ganapati}
                title="Estele Zinc 24Kt Gold Plated God of Beginnings Lord Ganesha Idol
            with Standing Position for Gifts & Housewarming/Home/Office Decors."
              />
              <hr className="mt-3"></hr>
              <ShoppingCartitems
                image={Ganapati}
                title="Estele Zinc 24Kt Gold Plated God of Beginnings Lord Ganesha Idol
            with Standing Position for Gifts & Housewarming/Home/Office Decors."
              />
              <hr className="mt-3"></hr>
              <ShoppingCartitems
                image={Ganapati}
                title="Estele Zinc 24Kt Gold Plated God of Beginnings Lord Ganesha Idol
            with Standing Position for Gifts & Housewarming/Home/Office Decors."
              />
              <hr className="mt-3"></hr>
              <ShoppingCartitems
                image={Ganapati}
                title="Estele Zinc 24Kt Gold Plated God of Beginnings Lord Ganesha Idol
            with Standing Position for Gifts & Housewarming/Home/Office Decors."
              />
            </div>
          </div>
        </div>
        <div className="orderSummary&products w-1/3 mt-16 pl-2">
          <div className="bg-[#E8B491] p-2 ml-24 mr-24 orderSummary">
            <div className="pl-8">
              <h2>Order Summary</h2>
              <h2>Items: </h2>
              <h2>Delivery: </h2>
              <hr className="m-4"></hr>
              <h2>Order Total: </h2>
              <hr className="m-4"></hr>
            </div>
          </div>
          <div className="products bg-[#E8B491] p-2 ml-24 mr-24  mt-12 orderSummary">
            <h2 className="mb-2">Customers Who Bought the Items also Bought</h2>
            <AlsoBought
              image={Ganapati}
              title=" Estele Zinc 24Kt Gold Plated God of Beginning..."
            />
            <hr className="m-4"></hr>
            <AlsoBought
              image={Ganapati}
              title=" Estele Zinc 24Kt Gold Plated God of Beginning..."
            />
            <hr className="m-4"></hr>
            <AlsoBought
              image={Ganapati}
              title=" Estele Zinc 24Kt Gold Plated God of Beginning..."
            />
          </div>
        </div>
      </div>
      <YourWishList />
    </>
  );
}

export default ShoppingCart;
