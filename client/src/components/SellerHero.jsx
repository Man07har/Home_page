import React from 'react'
import SellerBG from '../assets/SellerBG.png'
import { Box, Text, HStack, Button, Flex, Spacer } from '@chakra-ui/react'

const SellerHero = () => {
    return (
        <div style={ {
            backgroundImage: `url(${SellerBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "white",
        } } className='w-full h-full '>

            <Flex w='100%' p={ "3em" } h={ "100vh" } direction={ "column" } >
                <Text fontSize='6xl' fontWeight={ 'bold' } mt={ "2em" }>
                    Become A <Text color={ "#D37130" } display={ "inline" }>KnotHastags</Text> Seller <br />
                    And Join Artisans All Over<br />
                    Globe
                </Text>
                <Box h={ "20%" } />
                <HStack spacing='24px'>
                    <Button colorScheme='orange' size='lg' color={ "black" } borderColor={ "black" } borderWidth={ ".15rem" }> Start Selling</Button>
                    <Button colorScheme='orange' backgroundColor={ "#FAE2DF" } color={ "black" } size='lg' borderColor={ "black" } borderWidth={ ".15rem" }> Chat with Consultant</Button>
                </HStack>
            </Flex>
        </div>
    )
}

export default SellerHero