import React from 'react';
import Product from '../assets/Product.png';

import MyAccordion from '../components/MyAccordion';
import { Accordion } from '@chakra-ui/react';
function ProductHeroSection() {
  return (
    <>
      <div className="flex ml-24">
        <div className="flex flex-col my-18  justify-items-stretch pt-8">
          <img src={Product} alt="Product" className=" p-2 cursor-pointer" />
          <img src={Product} alt="Product" className=" p-2 cursor-pointer" />
          <img src={Product} alt="Product" className="p-2 cursor-pointer" />
          <img src={Product} alt="Product" className="p-2 cursor-pointer" />
          <img src={Product} alt="Product" className="p-2 cursor-pointer" />
          <img src={Product} alt="Product" className="p-2 cursor-pointer" />
        </div>
        <div className="flex flex-col items-start mt-12">
          <img src={Product} alt="Product" className="max-w-screen-md" />
        </div>
        <div className="mt-10 ml-10">
          <h1 className="text-3xl font-semibold">
            Royalbox Meditating Buddha Statue For Home Decor Idol/Showpiece
            Decorative Showpiece - 17 cm (Polyresin, Gold)
          </h1>
          <p className="mt-12 text-md">
            This beautiful Meditating Buddha Idol Statue Showpiece from RoyalBox
            on Flipkart is a Wonderful Gifting and Home Decor Item Which is
            Ideal to keep in your Study Room or living room, Pooja Room or in a
            showcase, This showpiece of Buddha in a meditating posture is made
            From High Quality polyresin and is handcrafted by skilled artisans
            using conventional techniques. This Buddha statue is a perfect piece
            of art for Home decoration, Office decoration, Living room
            decoration, Bedroom decoration, Kitchen decoration, Hall decoration,
            dining room decoration, dinning table decoration, balcony
            decoration, Garden Decoration. It can be a Perfect Gift and can be
            gifted as a Gift for Brother, Gift For Sister, gift for marriage
            Couple, Gift for house warming ceremony, Gift for mother, Gift for
            mom, Gift for sister, Gift for brother, Gift for girls, Gift for
            boys, Gifting Items for home decoration and Much More it can be used
            to full fill almost every Gifting and home décor Needs.
          </p>
          <div className="">
            <Accordion defaultIndex={[0]} allowMultiple>
              <MyAccordion title="Size">
                <p>Hello</p>
              </MyAccordion>
              {/* to add the accodian according to the figma file design as the page is not working when added*/}
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <MyAccordion title="Quantity">
                <p>Hello</p>
              </MyAccordion>
            </Accordion>
          </div>
        </div>

        {/* <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}
      </div>
    </>
  );
}

export default ProductHeroSection;
