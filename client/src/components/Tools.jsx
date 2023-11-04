import React from 'react';
import ToolsCard from './ToolsCard';
import CoursesTools from '../assets/coursesTools.png';
import BagTools from '../assets/BagTools.png';
import AccountTools from '../assets/AccountTools.png';
import DeliveryTools from '../assets/DeliveryTools.png';
import MobileTools from '../assets/MobileTools.png';
import SponsorTools from '../assets/SponsorTools.png';

function Tools() {
  return (
    <>
      <div className="mx-12">
        <h1 className="text-[3em] font-medium">Tools for Aid</h1>
        <h2 className="text-[2em] font-medium">
          Here are few tools listed to provide additional support to the sellers
          for better understanding and growing their business at a larger scale.{' '}
        </h2>
        <div className="flex justify-evenly">
          <ToolsCard
            Image={CoursesTools}
            Title="Courses"
            Description="Well formulated courses, tutorials and experts to
aid beginners."
            More="More..."
          />
          <ToolsCard
            Image={BagTools}
            Title="Bag"
            Description="Keeping track of big festivals and deals in order."
            More="More..."
          />
          <ToolsCard
            Image={AccountTools}
            Title="Account"
            Description="Improve product selection, product pricing, business insights, & more with our expert in-house account managers."
            More="More..."
          />
        </div>
        <div className="flex justify-evenly">
          <ToolsCard
            Image={DeliveryTools}
            Title="Delivery"
            Description=" 
Fast and stress free deliveries with proper packaging."
            More="More..."
          />
          <ToolsCard
            Image={MobileTools}
            Title="Mobile"
            Description="Manage and track all the activities via KnotHastags Mobile application"
            More="More..."
          />
          <ToolsCard
            Image={SponsorTools}
            Title="Sponsor"
            Description="Curious how your products will stand out from your competitors and gain maximum visibility?"
            More="More..."
          />
        </div>
      </div>
    </>
  );
}

export default Tools;
