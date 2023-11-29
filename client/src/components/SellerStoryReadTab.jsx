import React from 'react';
import ReadTabCard from './ReadTabCard';
import ReadImage1 from '../assets/ReadImage1.png';
import ReadImage2 from '../assets/ReadImage2.png';
import ReadImage3 from '../assets/ReadImage3.png';
import ReadImage4 from '../assets/ReadImage4.png';
function SellerStoryReadTab() {
  return (
    <>
      <div className="flex  justify-center p-4 m-4">
        <ReadTabCard
          Image={ReadImage1}
          Title="Vishnu Kumar changed himself for good!"
          Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
        />
        <div className=" p-4 flex flex-col justify-items-center">
          <ReadTabCard
            Image={ReadImage2}
            Title="Vishnu Kumar changed himself for good!"
            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
            className=""
          />
          <ReadTabCard
            Image={ReadImage3}
            Title="Vishnu Kumar changed himself for good!"
            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
            className=" m-4"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ReadTabCard
          Image={ReadImage4}
          Title="Vishnu Kumar changed himself for good!"
          Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
          className="min-w-full "
        />
      </div>
      <div className="flex  justify-center p-4 m-4">
        <ReadTabCard
          Image={ReadImage1}
          Title="Vishnu Kumar changed himself for good!"
          Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
        />
        <div className=" p-4 flex flex-col justify-items-center">
          <ReadTabCard
            Image={ReadImage2}
            Title="Vishnu Kumar changed himself for good!"
            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
            className=""
          />
          <ReadTabCard
            Image={ReadImage3}
            Title="Vishnu Kumar changed himself for good!"
            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
            className=" m-4"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ReadTabCard
          Image={ReadImage4}
          Title="Vishnu Kumar changed himself for good!"
          Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
          className="min-w-full "
        />
      </div>
    </>
  );
}

export default SellerStoryReadTab;
