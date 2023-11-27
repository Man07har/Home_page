import React from 'react'
import ganapati from '../assets/ganapati.png'
import { TfiGift } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa";


const ProductReview = () => {
    return (
        <>
            <div className="review-component">
                <hr />
                <div className="p-4">
                    <p>★★★★★</p>
                    <p>Beautiful colors</p>
                    <p>Purchased item: </p>
                    <p>Colorful Wall Art / Flower Art / Boho Decor / Bright Wall Art /</p>
                    <div className="flex justify-around items-center w-2/6 mt-3">
                        <div className=" w-12 h-12 rounded-full" style={ {
                            backgroundImage: `url(${ganapati})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        } }></div>
                        <p className="underline font-bold">User07  30 August 2023</p>
                    </div>
                </div>

            </div>
        </>
    )
}
const AddToCartAndReviews = () => {
    return (
        <>
            <div className="flex w-screen justify-evenly ">
                <div className="reviews w-3/6 font-bold ">
                    <ProductReview />
                    <ProductReview />
                    <ProductReview />
                </div>
                <div className="side w-2/6">
                    <div className="flex justify-center items-center h-24">
                        <button className='text-2xl font-black mx-auto'>Add to cart</button>
                    </div>
                    <div className="bg-[#F9D2CF] rounded-xl p-4" >
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            <br />
                            Read More.
                        </p>
                    </div>
                    <div className="flex justify-evenly items-center bg-[#F4F4F4] rounded-lg my-4">
                        <div className="flex items-center justify-center">
                            <div className=" w-20 h-24 rounded-lg m-4"
                                style={ {
                                    backgroundImage: `url(${ganapati})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                } }
                            ></div>
                        </div>
                        <div className="  p-3 text-xl">
                            <p>
                                By: Mohan Lal
                                <br />
                                Speciality in Pottery And Handicrafts
                                <br />
                                <a href="/seller-profile">
                                    Check Profile

                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex p-4 bg-[#FFF1E6] justify-evenly items-center text-xl font-bold" >
                        <div className="icon text-4xl text-[#D27C2C]">
                            <TfiGift />
                        </div>
                        <div className="flex flex-col items-center ">
                            <p>Made for you</p>
                            <p className='font-normal text-md'>(Customise your product)</p>
                        </div>
                        <div className="icon">
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCartAndReviews