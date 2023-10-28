import React from 'react'
import SellerHero from '../components/SellerHero'
import { Box } from '@chakra-ui/react'
import Stats from '../components/Stats';
const Seller = () => {
    return (
        <>
            <div style={ {
                backgroundColor: "white",
            } } className='w-full h-full '>
                <SellerHero />
                <Stats />

            </div>
        </>
    )
}

export default Seller