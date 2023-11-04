import React from 'react';

function ToolsCard({ Image, Title, Description, More }) {
  return (
    <>
      <div className=" flex rounded-xl  p-8 flex-col  mx-4 my-5 border-solid border-4 border-[#FF762A] w-[30vw]">
        <div className="flex  justify-start items-center">
          <img src={Image} className=" w-[10em] h-auto" alt={Image} />
          <h3 className="text-[2em] font-medium ">{Title}</h3>
        </div>
        <h3 className="text-[1em] ">{Description}</h3>
        <button className="bg-[#FF762A] text-white rounded-full px-5 p-2 my-2 w-max">
          {More}
        </button>
      </div>
    </>
  );
}

export default ToolsCard;
