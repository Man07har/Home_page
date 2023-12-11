import React from 'react';
import ShippingAddress from '../components/ShippingAddress';
import PaymentMethod from '../components/PaymentMethod';
import Payment from '../components/Payment';
import MyAccordion from '../components/MyAccordion';
import { Accordion } from '@chakra-ui/react';
const PaymentPage = () => {
  return (
    <>
      <div>
        <div className="">
          <Accordion defaultIndex={[0]} allowMultiple>
            <MyAccordion
              title="1. Enter a new Shipping Address"
              className="text-2xl font-bold"
            >
              <ShippingAddress />
            </MyAccordion>
            {/* to add the accodian according to the figma file design as the page is not working when added*/}
          </Accordion>
          <Accordion defaultIndex={[0]} allowMultiple>
            <MyAccordion title="2. Items and Delivery">
              <PaymentMethod />
            </MyAccordion>
          </Accordion>
          <Accordion defaultIndex={[0]} allowMultiple>
            <MyAccordion title="3. Payment">
              <Payment />
            </MyAccordion>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default PaymentPage;
