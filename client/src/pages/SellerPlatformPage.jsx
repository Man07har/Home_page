import React from 'react';
import SellerPlatformComp from '../components/SellerPlatformComp';

import LockAccount from '../assets/LockAccount.png';
import LogoutAccount from '../assets/LogoutAccount.png';
import Newsletter from '../assets/NewsletterAccount.png';
import ProfileAccount from '../assets/ProfileAccount.png';

import CartOrder from '../assets/CartOrder.png';
import ExchangeOrder from '../assets/ExchangeOrder.png';
import ReturnOrder from '../assets/ReturnOrder.png';
import HistoryOrder from '../assets/HistoryOrder.png';

import ProfileSeller from '../assets/ProfileSeller.png';

function SellerPlatformPage() {
  return (
    <>
      <div className="flex flex-col items-stretch px-5">
        <div className="my-[1.5vw]">
          <h1 className="text-2xl font-medium px-[16vw]">
            {' '}
            Account Information{' '}
          </h1>
          <div className="flex justify-evenly my-1">
            <SellerPlatformComp image={ProfileAccount} title="Profile" />
            <SellerPlatformComp image={LogoutAccount} title="Logout" />
            <SellerPlatformComp image={LockAccount} title="Lock Account" />
            <SellerPlatformComp image={Newsletter} title="Newsletter" />
          </div>
        </div>
        <div className="my-[1.5vw]">
          <h1 className="text-2xl font-medium px-[16vw]"> My Orders </h1>
          <div className="flex justify-evenly my-1">
            <SellerPlatformComp image={CartOrder} title="Cart" />
            <SellerPlatformComp image={ExchangeOrder} title="Exchange" />
            <SellerPlatformComp image={ReturnOrder} title="Return" />
            <SellerPlatformComp image={HistoryOrder} title="History" />
          </div>
        </div>
        <div className="my-[1.5vw]">
          <h1 className="text-2xl font-medium px-[16vw]"> Seller </h1>
          <div className="flex   px-[13vw] my-1">
            <SellerPlatformComp image={ProfileSeller} title="Seller Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerPlatformPage;
