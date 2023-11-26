import React from 'react';
import Product from '../assets/Product.png';

import MyAccordion from '../components/MyAccordion';
import { Accordion } from '@chakra-ui/react';
function ProductHeroSection() {
  return (
    <>
      <div className="flex ml-24">
        <div className="flex flex-col my-18">
          <img src={Product} alt="Product" className="w-1/2 p-2" />
          <img src={Product} alt="Product" className="w-1/2 p-2" />
          <img src={Product} alt="Product" className="w-1/2 p-2" />
          <img src={Product} alt="Product" className="w-1/2 p-2" />
          <img src={Product} alt="Product" className="w-1/2 p-2" />
        </div>
        <div className="flex flex-col items-start mt-12">
          <img src={Product} alt="Product" className="max-w-screen-md" />
        </div>
        <div className="mt-10 ml-10">
          <h1 className="text-3xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>
          <p className="mt-12 text-md">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
