import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Card from './Card';
import Ganpati from '../assets/ganapati.png';

const Components = () => {
  return (
    <>
      <div className="m-7 p-10 text-5xl mx-[5%] font-bold">
        <div className="flex">
          Most Popular
          <div className="text-[#D46C2F] ml-2">Arts</div>
        </div>
        <div className="bg-[#E6BEA0] mt-3 h-1 mb-8">
          <div className="bg-[#D0732F] h-1 w-[35%]"></div>
        </div>
        <div className="flex flex-wrap justify-evenly">
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
          />
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
          />
        </div>
      </div>
      <div className="m-7 p-10 relative bottom-16 mx-[5%] text-5xl font-bold">
        <div className="flex">
          Most Trending
          <div className="text-[#D46C2F] ml-2">Arts</div>
        </div>
        <div className="bg-[#E6BEA0] mt-3 h-1 mb-8">
          <div className="bg-[#D0732F] h-1 w-[35%]"></div>
        </div>
        <div>
          <div className="font-bold text-5xl mx-28 mt-5"></div>
          <div className="flex justify-evenly ">
            <div>
              <div
                style={{ backgroundImage: `url(${Ganpati})` }}
                className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
              ></div>
              <h2 className="text-black font-bold text-center text-2xl my-2">
                Indian Arts
              </h2>
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${Ganpati})` }}
                className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
              ></div>
              <h2 className="text-black font-bold text-center text-2xl my-2">
                Indian Arts
              </h2>
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${Ganpati})` }}
                className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
              ></div>
              <h2 className="text-black font-bold text-center text-2xl my-2">
                Indian Arts
              </h2>
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${Ganpati})` }}
                className="rounded-full h-[30vh] w-[30vh] bg-no-repeat bg-cover bg-center"
              ></div>
              <h2 className="text-black font-bold text-center text-2xl my-2">
                Indian Arts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
