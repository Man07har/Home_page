import React from 'react';
import { Text, Grid, GridItem, Input } from '@chakra-ui/react';
const AccountInformation = () => {
  return (
    <div className="account-information mt-4 border-2 p-5 border-[#D37130]">
      <Text fontSize="2xl"> Account Information</Text>
      <Grid
        templateAreas={`
        "full-name full-name-input"
        "phone phone-input"
        "email email-input"
        "password password-input"
        "confirm confirm-input"
        `}
        gap="2"
        color="blackAlpha.700"
        // fontWeight='bold'
        fontSize="xl"
        padding={'1em'}
      >
        <GridItem pl="2" area={'password'}>
          <Text>
            Password
            <Text display={'inline'} color={'red'}>
              *
            </Text>
          </Text>
        </GridItem>
        <GridItem pl="2" area={'password-input'}>
          <Input
            variant="filled"
            type="password"
            placeholder="Password"
            bg="#FFECE5"
          />
        </GridItem>
        <GridItem pl="2" area={'confirm'}>
          <Text>
            Confirm Password
            <Text display={'inline'} color={'red'}>
              *
            </Text>
          </Text>
        </GridItem>
        <GridItem pl="2" area={'confirm-input'}>
          <Input
            variant="filled"
            type="password"
            placeholder="Confirm Password"
            bg="#FFECE5"
          />
        </GridItem>
        <GridItem pl="2" area={'full-name'}>
          <Text>
            Full Name
            <Text display={'inline'} color={'red'}>
              *
            </Text>
          </Text>
        </GridItem>
        <GridItem pl="2" area={'full-name-input'}>
          <Input
            variant="filled"
            type="text"
            placeholder="Full Name"
            bg="#FFECE5"
          />
        </GridItem>
        <GridItem pl="2" area={'phone'}>
          <Text>
            Phone
            <Text display={'inline'} color={'red'}>
              *
            </Text>
          </Text>
        </GridItem>
        <GridItem pl="2" area={'phone-input'}>
          <Input variant="filled" type="tel" placeholder="Phone" bg="#FFECE5" />
        </GridItem>
        <GridItem pl="2" area={'email'}>
          <Text>
            Email
            <Text display={'inline'} color={'red'}>
              *
            </Text>
          </Text>
        </GridItem>
        <GridItem pl="2" area={'email-input'}>
          <Input
            variant="filled"
            type="email"
            placeholder="Email"
            bg="#FFECE5"
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default AccountInformation;
