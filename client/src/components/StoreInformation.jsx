import React from 'react';
import MarkdownEditor from './MarkDownEditor';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import Upload from './Upload';
import DropStore from '../assets/DropStore.png';

function StoreInformation() {
  return (
    <>
      <h1 className="mx-24 my-4 text-3xl font-bold">Store Information</h1>
      <div className="text-2xl font-semibold mx-24 border-4 border-[#D37130] p-4">
        <MarkdownEditor />
        <Upload Title={'Product Image'} Image={DropStore} />
        <div className="">
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold text-2xl w-56"
                  >
                    Product Catogery
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
          </Accordion>
        </div>
        <form className="p-12">
          <lable className="p-12">
            Aadhaar Number<span className="text-[#D37130] font-bold">*</span>
          </lable>
          <input
            type="text"
            name="aadhaar"
            className="bg-[#FFECE5] border-2 w-[34vw] h-[3vw] border-black"
          />
        </form>
        <Upload Title={'Aadhaar Card'} Image={DropStore} />
      </div>
    </>
  );
}

export default StoreInformation;
