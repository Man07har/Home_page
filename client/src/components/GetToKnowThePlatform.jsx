import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'
import bgCarousel from '../assets/bgCarousel.png'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import easydashboard from '../assets/easydashboard.png'
const GetToKnowThePlatform = () => {
    return (
        <>
            <div className="header">
                <div className="font-bold text-5xl mx-28 my-5 mb-7 ">
                    <h1>
                        Most sold <span className="text-[#D46E2F]">Arts</span>
                    </h1>
                    <div className="bg-[#E6BEA0] mt-3 h-1">
                        <div className="bg-[#D0732F] h-1 w-[35%]"></div>
                    </div>
                </div>
                <Box maxWidth={ '90%' } marginX={ "auto" } marginBottom={ '3em' } >
                    <Carousel
                        renderCenterLeftControls={ ({ previousSlide }) => (
                            <button onClick={ previousSlide }>
                                <div className="bg-white p-2 -ml-5 rounded-full border-4 border-[#F2E7D8]">
                                    <GrFormPrevious className="h-12 w-12 svgs" />
                                </div>
                            </button>
                        ) }
                        renderCenterRightControls={ ({ nextSlide }) => (
                            <button onClick={ nextSlide }>
                                <div className=" bg-white -mr-5 p-2 rounded-full border-4 border-[#F2E7D8]">
                                    <GrFormNext className="h-12 w-12 " style={ { fill: 'blue' } } />
                                </div>
                            </button>
                        ) }
                    >
                        <div key="slide1" >

                            <Flex
                                justifyContent={ 'space-around' }
                                bg={ '#FFECE5' }
                                rounded={ 'lg' }
                                padding={ '4rem' }

                            >
                                <Box >
                                    <Text fontSize={ '4xl' } >Easy to use Dashboard</Text>
                                    <Text width={ '70%' }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect</Text>
                                </Box>
                                <Box  >
                                    <Image src={ easydashboard } width={ '80vw' }></Image>
                                </Box>
                            </Flex>


                        </div>
                        <div id="slide2">
                            <Flex
                                justifyContent={ 'space-around' }
                                bg={ '#FFECE5' }
                                rounded={ 'lg' }
                                padding={ '4rem' }


                            >
                                <Box >
                                    <Text fontSize={ '4xl' } >Easy to use Dashboard</Text>
                                    <Text width={ '70%' }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect</Text>
                                </Box>
                                <Box  >
                                    <Image src={ easydashboard } width={ '80vw' }></Image>
                                </Box>
                            </Flex>
                        </div>

                    </Carousel>
                </Box>

            </div>
        </>
    )
}

export default GetToKnowThePlatform