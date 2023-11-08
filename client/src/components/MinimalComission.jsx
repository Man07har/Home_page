import React from 'react'
import {
    Text,
    Box,
    Center,
    Flex
} from '@chakra-ui/react'
const MinimalComission = () => {
    return (
        <>
            <Center>
                <Flex
                    direction={ "column" }
                    justifyContent={ 'center' }
                    alignItems={ 'center' }
                    minHeight={ '30vh' }
                    bg={ '#FFECE5' }
                    rounded={ 'lg' }
                    width={ '90%' }
                    fontSize={ '4xl' }
                    fontWeight={ 'extrabold' }
                    marginY={ '5vh' }
                >
                    <Text >Minimal Comission</Text>
                    <Text color={ '#E19568' }>So, you can grow!</Text>

                </Flex>
            </Center >

        </>
    )
}

export default MinimalComission