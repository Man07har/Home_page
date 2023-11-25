import React from 'react'
import AddToCartAndReviews from '../components/AddToCartAndReviews'
import MyAccordion from '../components/MyAccordion'
import { Accordion } from "@chakra-ui/react"
const Product = () => {
    return (<>
        <div className="robotofont">
            <AddToCartAndReviews />

            <Accordion defaultIndex={ [0] } allowMultiple>
                <MyAccordion title="Product Description">
                    <p>Hello</p>
                </MyAccordion>
            </Accordion>

        </div >

    </>
    )
}

export default Product