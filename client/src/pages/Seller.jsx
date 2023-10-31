import React from 'react'
import SellerHero from '../components/SellerHero'
import SellerLoveSelling from '../components/SellerLoveSelling'
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
                <SellerLoveSelling />
            </div>
        </>
    )
}

export default Seller