import React from 'react';
import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Input,
  Button,
  Circle,
} from '@chakra-ui/react';
import { SiFacebook, SiMicrosoftoutlook, SiGmail } from 'react-icons/si';
import { FaYandex } from 'react-icons/fa';
const SignUp = () => {
  return (
    <>
      <div className="irishfont">
        <Flex color="white" h="100vh">
          <Box bg="#E7E1D8" w="100%" p={4} color="white">
            <Center h="100%">
              <Flex
                direction={'column'}
                h={'100%'}
                justifyContent={'space-evenly'}
              >
                <Text
                  fontSize="6xl"
                  textAlign={'center'}
                  color="#472905"
                  textTransform={'uppercase'}
                >
                  Login
                </Text>
                <Stack spacing={3} className="latofont">
                  <input
                    type="text"
                    className="text-lg font-bold   text-black p-3 rounded-md w-[32rem]
                                    "
                    placeholder="Username"
                  />

                  <input
                    type="password"
                    className="text-lg font-bold   text-black p-3 rounded-md w-[32rem]
                                    "
                    placeholder="Password"
                  />

                  <Button
                    backgroundColor="#C95B32"
                    color="white"
                    textTransform="uppercase "
                    size="lg"
                    w="100%"
                    className="irishfont"
                    fontSize="1.5rem"
                    fontWeight="normal"
                  >
                    Login
                  </Button>
                  <Text
                    fontSize="xl"
                    textAlign={'center'}
                    fontWeight="bold"
                    color="#472905"
                  >
                    New user?
                  </Text>
                  <Text
                    fontSize="xl"
                    textAlign={'center'}
                    fontWeight="bold"
                    color="#224B99"
                  >
                    signup
                  </Text>
                </Stack>
              </Flex>
            </Center>
          </Box>
          <Box w="100%" p={4} bgGradient="linear(to-b, #E2B8A8, #CE7F62)">
            <Center h={'100%'}>
              <Flex
                direction={'column'}
                h={'100%'}
                justifyContent={'space-evenly'}
              >
                <Text
                  fontSize="6xl"
                  textAlign={'center'}
                  color="#472905"
                  textTransform={'uppercase'}
                >
                  Get in touch
                </Text>
                <Stack spacing={3}>
                  <Text
                    fontSize="xl"
                    textAlign={'center'}
                    color="#472905"
                    textTransform={'uppercase'}
                    className="irishfont"
                  >
                    Sign Up With
                  </Text>
                  <Stack
                    direction={'row'}
                    spacing={3}
                    justifyContent={'center'}
                  >
                    <Circle size="80px" bg="white" color="black">
                      <SiMicrosoftoutlook className="h-9 w-9" />
                    </Circle>
                    <Circle size="80px" bg="white" color="black">
                      <SiGmail className="h-9 w-9" />
                    </Circle>
                    <Circle size="80px" bg="white" color="black">
                      <SiFacebook className="h-9 w-9" />
                    </Circle>
                    <Circle size="80px" bg="white" color="black">
                      <FaYandex className="h-9 w-9" />
                    </Circle>
                  </Stack>
                  <Text
                    fontSize="xl"
                    textAlign={'center'}
                    color="#472905"
                    textTransform={'uppercase'}
                    className="irishfont"
                  >
                    Or
                  </Text>
                  <Stack
                    direction={'row'}
                    spacing={3}
                    justifyContent={'center'}
                  >
                    <Button
                      variant="outline"
                      color={'white '}
                      textTransform={'uppercase'}
                      fontWeight={'normal'}
                      fontSize={'1.5rem'}
                    >
                      Chat with us
                    </Button>
                    <Button
                      variant="outline"
                      color={'white '}
                      textTransform={'uppercase'}
                      fontWeight={'normal'}
                      fontSize={'1.5rem'}
                    >
                      Whatsapp
                    </Button>
                    <Button
                      variant="outline"
                      color={'white '}
                      textTransform={'uppercase'}
                      fontWeight={'normal'}
                      fontSize={'1.5rem'}
                    >
                      Contact us
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
            </Center>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default SignUp;
