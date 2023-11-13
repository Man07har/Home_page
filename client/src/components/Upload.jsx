import React from 'react';

function Upload({ Title, Image }) {
  return (
    <>
      <div className="flex p-12 m-12">
        <h1 className="m-12">
          {Title}
          <span className="text-[#D37130] font-bold">*</span>
        </h1>
        <img src={Image} alt="image" className="cursor-pointer" />
      </div>
    </>
  );
}

export default Upload;
