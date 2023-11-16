import React from 'react';

function AddressInformation() {
  return (
    <>
      <div>
        <h1 className="mx-24 my-4 text-3xl font-bold">Address Information </h1>
        <div className="text-2xl font-semibold mx-24 border-4 border-[#D37130] p-4">
          <form className="flex flex-col">
            <div className="flex p-5 mx-5">
              <label>Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                className="bg-[#FFECE5] mx-[8.7vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
            <div className="flex p-5 mx-5">
              {' '}
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                className="bg-[#FFECE5] mx-[8.7vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
            <div className="flex p-5 mx-5">
              {' '}
              <label>City</label>
              <input
                type="text"
                name="city"
                className="bg-[#FFECE5] mx-[14vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
            <div className="flex p-5 mx-5">
              {' '}
              <label>State/Province/Region</label>
              <input
                type="text"
                name="state"
                className="bg-[#FFECE5] mx-[4vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
            <div className="flex p-5 mx-5">
              {' '}
              <label>Zip/Postal Code</label>
              <input
                type="text"
                name="zipCode"
                className="bg-[#FFECE5]  mx-[7.2vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
            <div className="flex p-5 mx-5">
              {' '}
              <label>Country</label>
              <input
                type="text"
                name="country"
                className="bg-[#FFECE5] mx-[11.3vw] border-2 w-[34vw] h-[3vw] border-black"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddressInformation;

// import React from 'react';
// import { Text, Grid, GridItem, Input } from '@chakra-ui/react';
// const AddressInformation = () => {
//   return (
//     <div className="account-information mt-4 border-2 p-5 border-[#D37130]">
//       <Text fontSize="2xl"> Account Information</Text>
//       <Grid
//         templateAreas={`
//         "full-name full-name-input"
//         "phone phone-input"
//         "email email-input"
//         "password password-input"
//         "confirm confirm-input"
//         `}
//         gap="2"
//         color="blackAlpha.700"
//         // fontWeight='bold'
//         fontSize="xl"
//         padding={'1em'}
//       >
//         <GridItem pl="2" area={'password'}>
//           <Text>
//             Password
//             <Text display={'inline'} color={'red'}>
//               *
//             </Text>
//           </Text>
//         </GridItem>
//         <GridItem pl="2" area={'password-input'}>
//           <Input
//             variant="filled"
//             type="password"
//             placeholder="Password"
//             bg="#FFECE5"
//           />
//         </GridItem>
//         <GridItem pl="2" area={'confirm'}>
//           <Text>
//             Confirm Password
//             <Text display={'inline'} color={'red'}>
//               *
//             </Text>
//           </Text>
//         </GridItem>
//         <GridItem pl="2" area={'confirm-input'}>
//           <Input
//             variant="filled"
//             type="password"
//             placeholder="Confirm Password"
//             bg="#FFECE5"
//           />
//         </GridItem>
//         <GridItem pl="2" area={'full-name'}>
//           <Text>
//             Address Line 1
//             <Text display={'inline'} color={'red'}>
//               *
//             </Text>
//           </Text>
//         </GridItem>
//         <GridItem pl="2" area={'full-name-input'}>
//           <Input
//             variant="filled"
//             type="text"
//             placeholder="Address Line 1"
//             bg="#FFECE5"
//           />
//         </GridItem>
//         <GridItem pl="2" area={'Address Line 2'}>
//           <Text>
//             Address Line 2
//             <Text display={'inline'} color={'red'}>
//               *
//             </Text>
//           </Text>
//         </GridItem>
//         <GridItem pl="2" area={'phone-input'}>
//           <Input variant="filled" type="tel" placeholder="Phone" bg="#FFECE5" />
//         </GridItem>
//         <GridItem pl="2" area={'City'}>
//           <Text>
//             City
//             <Text display={'inline'} color={'red'}>
//               *
//             </Text>
//           </Text>
//         </GridItem>
//         <GridItem pl="2" area={'email-input'}>
//           <Input
//             variant="filled"
//             type="email"
//             placeholder="Email"
//             bg="#FFECE5"
//           />
//         </GridItem>
//       </Grid>
//     </div>
//   );
// };

// export default AddressInformation;

// import React from 'react';
