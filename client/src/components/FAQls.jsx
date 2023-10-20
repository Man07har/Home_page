import React, { useState } from 'react'
import { AiFillGift } from 'react-icons/ai';
import './FAQls.css';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Text,
} from '@chakra-ui/react'

const faqs = [

    {
        title: "How to place an Order?",
        description: `If the seller is unable to help you, your next step is to open a case about your order. Choose your order, then select Open a case at the bottom of the page. Learn more about cases on Etsy.`
    },
    {
        title: "Status of my Order",
        description: `The shipping statuses on your Purchases page let you know where in the shipping process your order is. If the status is Not Shipped, the seller hasn’t completed the order yet or didn’t update the order on Etsy. 

        Once the seller has completed the order and is ready to ship, you can expect an email shipping notification from Etsy. On your Purchases page, your order can have one of the following statuses:` },
    {
        title: "Cancel Order",
        description: `If the seller is unable to help you, your next step is to let us know so we can resolve the issue. Choose your order, then select Open a case at the bottom of the page. Learn more about cases on Etsy.

        The option to open a case becomes available after the order’s estimated delivery date. If you don’t see the option to open a case, it may be too early. Learn how we calculate your order's estimated delivery date.
        
        For qualifying orders, if the item you ordered doesn’t arrive, arrives damaged, or doesn’t match the item description or photos, you’ll receive a full refund. Learn more about Etsy’s Purchase Protection program. 
        
        `
    },

    { title: "About our return policies", description: `Sample` },
    { title: "How to return an Item?", description: `Sample` },

    { title: "Track Your Package", description: `Sample` },
    { title: "Late Shipment", description: `Sample` },

    { title: "Change your account settings", description: `Sample` },
    { title: "Change passwords", description: `Sample` },

]

const Faqls = () => {
    const [faqn, setfaqn] = useState(0)
    return (
        <div className='font-footlight'>
            <div className='text-center mt-12 text-5xl'>
                FAQs
            </div>
            <div className="bg-[#6d6d6d] ml-[44%] mt-3 w-[12%] h-0.5 mb-8"></div>
            <div className='flex mb-16'>
                <div className='border-black border m-14 w-[23%] h-fit shadow-xl shadow-gray-500 bg-[#FFEDDA]'>
                    <div className="container mx-5">
                        <Box w="80%" bg="">
                            <Stack spacing={ 4 }>
                                <Accordion allowMultiple>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontWeight="semibold" fontSize="2xl" flex='1' textAlign='left'>
                                                    Orders
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(0) } className='cursor-pointer'>
                                            How to place an Order?
                                        </AccordionPanel>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(1) } className='cursor-pointer'>
                                            Status of my Order
                                        </AccordionPanel>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(2) } className='cursor-pointer'>
                                            Cancel Order
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontWeight="semibold" fontSize="2xl" flex='1' textAlign='left'>
                                                    Returns & Exchange
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(3) } className='cursor-pointer'>
                                            About our return policies
                                        </AccordionPanel>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(4) } className='cursor-pointer'>
                                            How to return an Item?
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontWeight="semibold" fontSize="2xl" flex='1' textAlign='left'>
                                                    Shipping Options
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(5) } className='cursor-pointer'>
                                            Track Your Package
                                        </AccordionPanel>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(6) } className='cursor-pointer'>
                                            Late Shipment
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontWeight="semibold" fontSize="2xl" flex='1' textAlign='left' >
                                                    My Account
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(7) } className='cursor-pointer'>
                                            Change your account settings
                                        </AccordionPanel>
                                        <AccordionPanel pb={ 4 } fontSize="xl" onClick={ () => setfaqn(8) } className='cursor-pointer'>
                                            Change passwords
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                            </Stack>
                        </Box>

                        <div className='ml-4 mt-4 h-32  text-2xl'>
                            <div className='text-red-600'>
                                FAQs
                            </div>
                            <div className='mt-4 flex bg-[#E6BEA0] w-[60%] h-12 text-center'>
                                <div className='mt-3 ml-3 text-[#D27C2C]'><AiFillGift /></div>
                                <div className='mt-3 ml-2 font-bold relative bottom-1 shadow-2xl'>Made For You</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-14 w-[63%] bg-[#FFEDDA] shadow-xl shadow-gray-400 border-black border'>
                    <div className='mt-2 text-3xl text-center'>
                        General topics
                    </div>
                    <div className="mt-10 text-center">
                        <input
                            type="text"
                            placeholder="Type Your Question Here"
                            className="border-2 border-gray-300 rounded-md px-2 py-1 hover:cursor-pointer w-[40em] h-[2.5em]"
                        />
                        <div className="mt-10 mb-10 latofont border-2 ml-12 bg-white border-gray-300 rounded-sm px-2  w-[50em] h-[60em]">
                            <Stack spacing={ 3 } textAlign='left' p='5'>
                                <Text
                                    fontSize='4xl'
                                    fontWeight='semibold'
                                >{ faqs[faqn].title }</Text>
                                <Text fontSize='2xl'>{ faqs[faqn].description }</Text>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Faqls