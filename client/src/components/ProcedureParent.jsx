import React from 'react';
import MobileShop from '../assets/mobileShop.png';
import macShop from '../assets/macShop.png';
import processShop from '../assets/processShop.png';
import shipShop from '../assets/shipShop.png';
import taskShop from '../assets/taskShop.png';
// import Procedure from './Procedure';

function Procedure({ image, title, description }) {
  return (
    <>
      <div className="bg-[#FAE3DA] flex justify-center">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h3>{description}</h3>
      </div>
    </>
  );
}

//   export default Procedure;

function ProcedureParent() {
  <>
    <div className="flex justify-evenly">
      <Procedure
        image={MobileShop}
        title="Mobile Shop"
        description="
Create account and complete the verification process in just 10 mins"
      />
      <Procedure
        image={MobileShop}
        title="Mobile Shop"
        description="
Create account and complete the verification process in just 10 mins"
      />
      <Procedure
        image={MobileShop}
        title="Mobile Shop"
        description="
Create account and complete the verification process in just 10 mins"
      />
      <Procedure
        image={MobileShop}
        title="Mobile Shop"
        description="
Create account and complete the verification process in just 10 mins"
      />
      <Procedure
        image={MobileShop}
        title="Mobile Shop"
        description="
Create account and complete the verification process in just 10 mins"
      />
    </div>
  </>;
}

export default ProcedureParent;
