import React from 'react';
import Card from './Card';
function ProductCatogery() {
  return (
    <>
      <div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Frequently Bought Together{' '}
            <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
          <div className="flex flex-col items-baseline">
            <h1 className="text-3xl font-semibold">Total Price: XXXX</h1>
            <button className="bg-[#D0732F] text-3xl p-4 rounded-md">
              Add both to Cart
            </button>
          </div>
        </div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Previously Viewed <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
        </div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Recommended <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
        </div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Newly Lanuched <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
        </div>
        <div className="font-bold text-5xl mx-28 mt-5">
          <h1>
            Most sold <span className="text-[#D46E2F]">Arts</span>
          </h1>
          <div className="bg-[#E6BEA0] mt-3 h-1">
            <div className="bg-[#D0732F] h-1 w-[35%]"></div>
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />{' '}
          <Card
            title="Product 2"
            description="Another product description."
            price={75}
            discount={10}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCatogery;
