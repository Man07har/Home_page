import {
  Container,
  Text,
  Heading,
  Grid,
  GridItem,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import AccountInformation from '../components/AccountInformation';
import StoreInformation from '../components/StoreInformation';
const SellerRegistrationForm = () => {
  return (
    // <div>SellerRegistrationForm</div>
    <>
      <div className="robotofont">
        <Container maxW={'3xl'}>
          <header className="mb-6">
            <Text fontSize="4xl" color={'#D37130'}>
              {' '}
              Register{' '}
              <Text color={'black'} display={'inline'}>
                Seller Account
              </Text>
            </Text>
          </header>
          <main>
            <AccountInformation />
          </main>
        </Container>
        <StoreInformation />
      </div>
    </>
  );
};

export default SellerRegistrationForm;
