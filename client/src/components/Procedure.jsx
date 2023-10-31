import React from 'react';

function Procedure({ image, title, description }) {
  return (
    <>
      <div className="bg-[#FAE3DA] flex rounded-md mx-10 p-4 flex-col justify-center mx-4 my-5">
        <img src={image} className="h-[20em] w-[45em]" alt={title} />
        <h3 className="text-[2em] font-medium">{title}</h3>
        <h3 className="text-[1em]">{description}</h3>
      </div>
    </>
  );
}

export default Procedure;
