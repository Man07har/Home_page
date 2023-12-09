// // Sidebar.js
// import React, { useState } from 'react';
// import './Sidebar.css'; // Import the styles for the sidebar
// import SideBar from '../assets/SideBar.png'; // Import the sidebar image
// const Sidebar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//       {/* <button className="toggle-btn" onClick={toggleSidebar}>
//         Toggle Sidebar
//       </button> */}
//       <img
//         src={SideBar}
//         alt="SideBar"
//         className="SideBar hover:cursor-pointer toggle-btn"
//         onClick={toggleSidebar}
//       />
//       <div className="content">
//         <p>Menu Item 1</p>
//         <p>Menu Item 2</p>
//         <p>Menu Item 3</p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js
// import React, { useState } from 'react';
// import './Sidebar.css'; // Import the styles for the sidebar

// const Sidebar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//       <img
//         src="/path/to/your/image.png" // Replace with the path to your image
//         alt="Toggle Sidebar"
//         className="toggle-img"
//         onClick={toggleSidebar}
//       />
//       <div className="content">
//         {/* Your sidebar content goes here */}
//         <p>Menu Item 1</p>
//         <p>Menu Item 2</p>
//         <p>Menu Item 3</p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Import the styles for the sidebar
import SideBar from '../assets/SideBar.png'; // Import the sidebar image
import ProfileAccount from '../assets/ProfileAccount.png'; // Import the sidebar image
const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''} flex`}>
      {!isSidebarOpen && (
        <img
          src={SideBar} // Replace with the path to your image
          alt="Toggle Sidebar"
          className="toggle-img"
          onClick={toggleSidebar}
        />
      )}
      <div className="content ">
        {/* Your sidebar content goes here */}
        <div className="bg-[#D3702F] flex justify-center items-center hover:translate-x-1 px-4 hover:translate-y-1 text-white font-bold border-4 cursor-pointer  border-black  rounded-md m-4">
          <img
            src={ProfileAccount}
            alt="ProfileAccount"
            className="ProfileAccount h-12 w-12"
          />
          <h2 className="text-white">Hello, Sign in</h2>
        </div>
        <div className=" m-3 ">
          <h2 className="text-3xl font-semibold p-4">Trending</h2>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal ">
            Best Seller
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            New Releases
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Movers and Shakers
          </p>
          <hr className="m-4"></hr>
          <h2 className="text-3xl font-semibold p-4">Shop By Catogery</h2>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Best Seller
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            New Releases
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Movers and Shakers
          </p>
          <hr className="m-4"></hr>
          <h2 className="text-3xl font-semibold p-4">Features</h2>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Best Seller
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            New Releases
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Movers and Shakers
          </p>
          <hr className="m-4"></hr>
          <h2 className="text-3xl font-semibold p-4">Programs and Features</h2>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Best Seller
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            New Releases
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Movers and Shakers
          </p>
          <hr className="m-4"></hr>
          <h2 className="text-3xl font-semibold p-4">Help & Settings</h2>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Your Account
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Customer Service
          </p>
          <p className="hover:bg-[#d3712fcb] hover:cursor-pointer px-4 text-2xl font-normal">
            Sign In
          </p>
          <hr className="m-4"></hr>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// Sidebar.js
// import React, { useState, useEffect, useRef } from 'react';
// import './Sidebar.css'; // Import the styles for the sidebar

// const Sidebar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const handleOutsideClick = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
//       {!isSidebarOpen && (
//         <img
//           src="/path/to/your/image.png" // Replace with the path to your image
//           alt="Toggle Sidebar"
//           className="toggle-img"
//           onClick={toggleSidebar}
//         />
//       )}
//       <div className="content">
//         {/* Your sidebar content goes here */}
//         <p>Menu Item 1</p>
//         <p>Menu Item 2</p>
//         <p>Menu Item 3</p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
