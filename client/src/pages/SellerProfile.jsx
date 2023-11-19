
import { Box, Center, Flex, Grid, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTruckFast, FaLocationDot, FaAward } from "react-icons/fa6";
import SellerProfileHero from '../assets/sellerProfileHero.png'
import ganpati from '../assets/ganapati.png'
import sideImg from '../assets/image2.jpg'
import SellerProfileCatogery from '../components/SellerProfileCatogery';
import SellerProfileFilter from '../components/SellerProfileFilter';


const SellerProfile = () => {
    return (<>
        <div className="robotofont">
            <div className="seller-profile-hero">
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

            <div className="seller-reviews">
                <Flex
                    w={ '80%' }
                    mx={ 'auto' }
                    p={ '1em' }
                >
                    <Box>
                        <Text
                            textTransform={ 'uppercase' }
                            fontSize={ '1.4em' }
                            fontWeight={ 'extrabold' }
                        >
                            Reviews
                        </Text>
                    </Box>
                    <Stack>
                        <Review />
                        <Review />

                    </Stack>

                </Flex>
        <SellerProfileFilter />
        <SellerProfileCatogery />
            </div>
        </div>
    </>
  );
};
const Review = () => {
    return (
        <div><Box w={ '100%' } px='2em'>
            <Flex>
                <Box
                    backgroundImage={ ganpati }
                    h={ '5vw' }
                    w={ '5vw' }
                    borderRadius={ 'full' }
                    backgroundPosition={ 'center' }
                    backgroundSize={ 'cover' }
                >
                </Box>
                <Box
                    flexGrow={ 10 }
                    h={ '10vh' }
                    px='2em'
                >
                    <Stack>
                        <Text textDecoration={ 'underline' }><span className='font-bold'>User1 </span> 17 September 2023</Text>
                        <Text> <span className='text-2xl'>★★★★★</span> <Link ms={ ' 1em' } href='#' fontWeight={ 'bold' } color={ '#A83825' }>View Product</Link></Text>
                        <Text fontWeight={ 'bold' }>Beautiful colors</Text>
                        <Text>Purchased Item: <br />
                            Colorful Wall Art / Flower Art / Boho Decor / Bright Wall Art /
                        </Text>
                    </Stack>
                </Box>
                <Box
                    backgroundImage={ sideImg }
                    borderRadius={ '2xl' }
                    h={ '15vw' }
                    backgroundSize={ 'cover' }
                    w={ '25vw' }
                    boxShadow={ 'lg' }
                >
                </Box>
            </Flex>
        </Box></div>
    )
}

export default SellerProfile;