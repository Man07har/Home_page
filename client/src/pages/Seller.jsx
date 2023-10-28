import React from 'react'
import SellerHero from '../components/SellerHero'
import { Box } from '@chakra-ui/react'
const Seller = () => {
    return (
        <>
            <div style={ {
                backgroundColor: "white",
            } } className='w-full h-full '>
                <SellerHero />
                <Box h={ "20vh" } />
            </div>
        </>
    )
}

export default Seller