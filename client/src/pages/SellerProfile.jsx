import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTruckFast, FaLocationDot, FaAward } from "react-icons/fa6";
import SellerProfileHero from '../assets/sellerProfileHero.png'
const SellerProfile = () => {
    return (<>
        <div className="robotofont">
            <Flex bg={ '#FEDAC1' } >
                <Image
                    boxSize='max'
                    objectFit='cover'
                    src={ SellerProfileHero }
                    alt='Seller'
                />
                <Box p="1em" w={ 'max' } flexGrow={ '1' }>
                    <Text textTransform={ 'uppercase' } padding={ '.8em' } fontSize={ '1.4em' } fontWeight={ 'bold' } bg={ '#F6DE8D' } width={ 'max-content' } borderRadius={ '1em' }>My profile</Text>
                    <Text padding={ '1em' }>Pottery items made by locals
                        INDIA</Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap={ 6 }>
                        <Text fontWeight={ 'bold' } fontSize={ 'xl' } padding={ '1em' }>Orders</Text>
                        <Text fontWeight={ 'bold' } fontSize={ 'xl' } padding={ '1em' }>100</Text>
                        <Text fontWeight={ 'bold' } fontSize={ 'xl' } padding={ '1em' }>My profile</Text>
                        <Text fontWeight={ 'bold' } fontSize={ 'xl' } padding={ '1em' }>★★★★★</Text>
                    </Grid>

                </Box>
                <Center padding={ '1em' }>

                    <Grid templateColumns="repeat(2, 1fr)" gap={ 3 }>
                        <FaTruckFast size={ '2em' } />
                        <Text
                            fontSize={ 'xl' }
                            bg={ '#F9D6C7' }
                            className='px-8 p-2 font-bold rounded-full'
                        >Smooth Dispatch</Text>
                        <FaAward size={ '2em' } /><Text fontSize={ 'xl' } bg={ '#F9D6C7' }
                            className='px-8 p-2 font-bold rounded-full'>Finished Products</Text>
                        <FaLocationDot size={ '2em' } /><Text fontSize={ 'xl' } bg={ '#F9D6C7' }
                            className='px-8 p-2 font-bold rounded-full'>Uttar Pradesh, India</Text>
                    </Grid>
                </Center>
            </Flex>
        </div>

    </>
    )
}

export default SellerProfile