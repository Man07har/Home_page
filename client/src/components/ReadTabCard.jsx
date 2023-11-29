import React from 'react';
import './ReadTabCard.css'; // Import the generated CSS file

const ReadTabCard = ({ Image, Desc, Title }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={Image} alt="Card Image" className="cursor-pointer" />
        <div className="overlay p-8">
          <h1 className="text-4xl m-8 font-semibold text-[#A83825] ">
            {Title}
          </h1>
          <p className="text-white text-2xl">{Desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadTabCard;
