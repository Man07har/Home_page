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
      <div className="content">
        {/* Your sidebar content goes here */}
        <div className="bg-[#D3702F] flex justify-center items-center p-3 text-white font-bold border-4 cursor-pointer  border-black  rounded-md m-4">
          <img
            src={ProfileAccount}
            alt="ProfileAccount"
            className="ProfileAccount h-12 w-12"
          />
          <h2 className="text-white">Hello, Sign in</h2>
        </div>
        <div className="flex flex-col m-4 left-0 items-center text-2xl align-mid cursor-pointer">
          <p>Trending</p>
          <p>Best Seller</p>
          <p>New Releases</p>
          <p>Menu Items</p>
          <p>Menu Items</p>
          <p>Menu Items</p>
          <p>Menu Items</p>
          <p>Menu Items</p>
          <p>Menu Items</p>
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
