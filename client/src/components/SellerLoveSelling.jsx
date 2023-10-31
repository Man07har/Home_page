import React from 'react'
import SellerLoveSellingBG from '../assets/SellerLoveSelling.png'
import { Box, Text, HStack, Button, Flex, Spacer } from '@chakra-ui/react'

const SellerCard = ({ title, description }) => {
    return (
        < Box textAlign={ 'center' } w={ "30vw" } borderRadius={ '2xl' } bg={ "#F9CFCD" } boxShadow={ '2xl' } padding={ "8" } fontWeight={ 'semibold' } >
            <Text fontSize={ '3xl' } mb={ "3" }>{ title }</Text>
            <Text fontSize={ 'xl' }>{ description }</Text>
        </Box >
    )

}

const SellerLoveSelling = () => {
    return (
        <div style={ {
            backgroundImage: `url(${SellerLoveSellingBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundColor: "white",
        } } className='w-full h-full '>

            <Flex w='100%' p={ "3em" } minH={ "100vh" } direction={ "column" } >
                <Text mb={ "6" } fontSize='6xl' fontWeight={ 'medium' } mt={ "2em" }>
                    Why do <Text color={ "#D37130" } display={ "inline" }>sellers love selling on <br />
                        KnotHastags?</Text>
                </Text>
                <Flex flexWrap={ 'wrap' } gap={ "8" } w={ "70%" }>
                    <SellerCard title="Easy  to Sell Products" description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <SellerCard title="Access to World Wide Customer Base" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <SellerCard title="Low Cost Of selling" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <SellerCard title="Easy Fulfillment by KnotHastags" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </Flex>
            </Flex>
        </div>
    )
}

export default SellerLoveSelling