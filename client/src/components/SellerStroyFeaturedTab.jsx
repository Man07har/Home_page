import React from 'react'
import ReadTabCard from './ReadTabCard'
import ReadImage2 from '../assets/ReadImage2.png';
import ReadImage3 from '../assets/ReadImage3.png';
const SellerStoryFeaturedTab = () => {
    return (
        <>
            <div className="flex  justify-center p-5 m-4">
                <div className="">
                    <div className=" grid gap-4 grid-cols-2">
                        <iframe width="600vw" height="300vw" src="https://www.youtube.com/embed/EOI2vH54OmI" title="Top 15 LETHAL Little Known Ninja Weapons" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <ReadTabCard
                            Image={ ReadImage2 }
                            Title="Vishnu Kumar changed himself for good!"
                            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
                            className=""
                        />
                        <ReadTabCard
                            Image={ ReadImage3 }
                            Title="Vishnu Kumar changed himself for good!"
                            Desc="Vishnu Kumar recalls his younger days spent along the river Ganga in Varanasi. A dreamer at heart, he credits the many poets that the city was and is home to for his love for words. As a Flipkart Wishmaster, Vishnu aims to make the city more of a home for himself and his family by building a house. Read on as he shares his #OneInABillion story."
                            className=" m-4"
                        />
                        <iframe width="600vw" height="300vw" src="https://www.youtube.com/embed/EOI2vH54OmI" title="Top 15 LETHAL Little Known Ninja Weapons" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SellerStoryFeaturedTab