import React from 'react';
import SellerHero from '../components/SellerHero';
import { Box } from '@chakra-ui/react';
import SellerLoveSelling from '../components/SellerLoveSelling';
import Stats from '../components/Stats';
// import ProcedureParent from '../components/ProcedureParent';
import Procedure from '../components/Procedure';
import MobileShop from '../assets/mobileShop.png';
import MacShop from '../assets/macShop.png';
import ProcessShop from '../assets/processShop.png';
import ShipShop from '../assets/shipShop.png';
import TaskShop from '../assets/taskShop.png';
import Tools from '../components/Tools';
const Seller = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
        }}
        className="w-full h-full "
      >
        <SellerHero />
        <Stats />
        <SellerLoveSelling />
        <div className="my-8 p-8">
          <h1 className="text-[3em] font-medium">Quick & Easy to follow</h1>
          <h2 className="text-[2em] font-medium">
            Start your online business with ease by following these simple
            steps.{' '}
          </h2>
          <div className="flex justify-evenly">
            <Procedure
              image={MobileShop}
              title="Mobile Shop"
              description="
Create account and complete the verification process in just 10 mins"
            />
            <Procedure
              image={MacShop}
              title="List Products"
              description="
              List the products that you want to sell"
            />
            <Procedure
              image={TaskShop}
              title="Orders"
              description="
              Keep a track of all the orders placed by customers worldwide"
            />
            <Procedure
              image={ShipShop}
              title="Shipment &Tracking"
              description="
              Our platform provides easy and stress free deliver"
            />
            <Procedure
              image={ProcessShop}
              title="Payment"
              description="
              Get payment in a matter of days"
            />
          </div>
        </div>
        <Tools />
      </div>
    </>
  );
};

export default Seller;
