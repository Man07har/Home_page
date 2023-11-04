import React from 'react'
import { Card, Text, Heading, Image, Stack, ButtonGroup, Button, CardBody, CardFooter, Flex, Square, Center } from '@chakra-ui/react'
import barbaraYoung from '../assets/barbaraYoung.png'
import joeOwens from '../assets/joeOwens.png'
import billGreen from '../assets/billGreen.png'
const SuccessStoriesCard = ({ name, review, department, image }) => {
    return (<>
        <Card maxW='sm' boxShadow={ 'md' }>
            <CardBody>
                <Image
                    src={ image }
                    alt={ name }
                    width={ '20vw' }
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign={ 'center' }>{ name }</Heading>
                    <Text>
                        { review }
                    </Text>
                    <Text fontWeight='bold' fontSize='lg' fontStyle={ 'italic' } color={ 'gray.400' }>
                        { department }
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </>)
}

const SuccessStories = () => {
    return (
        <>
            <Stack>
                <Stack color={ 'gray.700' } textAlign={ 'center' } >
                    <Text fontSize='6xl' fontWeight={ 'bold' } textAlign={ 'center' } >
                        Success Stories
                    </Text>
                    <Center>
                        <Text fontSize={ '3xl' } w={ '70%' } textAlign={ 'center' }>
                            Our platform has helped businesses over the years.
                            Here are some of our top success stories and great friends and supporters:
                        </Text>
                    </Center>

                </Stack>

                <Flex justifyContent={ 'space-around' } >
                    <SuccessStoriesCard name={ `Barbara Young
` } review={ `“My decision was correct.
It is such a perfect platform for sellers like me who are just starting business. This platform has given me confidence.”` } department={ "Earth & Pots" } image={ barbaraYoung } />
                    <SuccessStoriesCard name={ `Joe Owens` } review={ `“My decision was correct.
It is such a perfect platform for sellers like me who are just starting business. This platform has given me confidence.”  ` } department={ `Ezparty` } image={ joeOwens } />
                    <SuccessStoriesCard name={ `Bill Green` } review={ `“My decision was correct.
It is such a perfect platform for sellers like me who are just starting business. This platform has given me confidence.”  ` } department={ `PersonalCare` } image={ billGreen } />
                </Flex>
                <Center>
                    <Button
                        border={ "4px" }
                        borderColor={ '#F35321' }
                        boxShadow={ 'lg' }
                        color={ '#F35321' }
                        size='lg'
                        borderRadius={ 'full' }
                        fontSize={ '2em' }
                        p={ '1em' }
                        mt={ '1em' }
                    >See More</Button>
                </Center>
            </Stack>



        </>
    )
}

export default SuccessStories