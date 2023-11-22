import React from 'react'
import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from "@chakra-ui/react"
const MyAccordion = ({ title, children }) => {
    return (
        <>
            <div className="robotofont">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                                <Text fontSize="xl">{ title }</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={ 4 }>{ children }</AccordionPanel>
                </AccordionItem>
            </div >
        </>
    );
};
export default MyAccordion