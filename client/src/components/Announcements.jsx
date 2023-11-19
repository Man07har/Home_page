import React from 'react';
import AnnouncementProfile from '../assets/AnnouncementProfile.png';
function Announcements() {
  return (
    <>
      <div className="flex w-screen justify-center  my-4">
        <div classname="max-w-screen-2xl ">
          <div
            className="p-12 "
            style={{
              backgroundImage: `url(${AnnouncementProfile})`,
              backgroundRepeat: `no-repeat `,
              backgroundSize: `contain`,
            }}
          >
            <h1 className="text-2xl font-semibold">Announcements</h1>
            <ul className="text-xl">
              <li>Handmade decorative pottery items</li>
              <li>Free Shipping</li>
              <li>Message for customized products</li>
              <li>Inform 1 month prior for wholesale requests</li>
            </ul>
          </div>
          <div className="flex my-2 p-6">
            {' '}
            <button className=" bg-[#F9D6C7] rounded-full text-xl mx-4 p-4">
              Customize Your Order
            </button>
            <button className="  bg-[#F9D6C7] rounded-full p-4 mx-4 text-xl">
              Send Inquiry
            </button>
          </div>
        </div>
        <div className="mx-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F1pUDSue8mQ?si=B4tbicri42mYg-jP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Announcements;
