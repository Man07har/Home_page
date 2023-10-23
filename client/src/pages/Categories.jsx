import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import Card from '../components/Card';
import AllPageBG from '../assets/AllPageBG.png';
const MyAccordion = ({ title, children }) => {
  return (
    <>
      <div style={ {
        backgroundImage: `url(${AllPageBG})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",

      } }>
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
      </div>
    </>
  );
};

const Categories = () => {
  return (
    <div className=" container mx-28">
      <Flex className="latofont">
        <Box w="20%" bg="">
          <Stack spacing={ 4 }>
            <Text fontSize="4xl">Filters</Text>
            <Accordion defaultIndex={ [0] } allowMultiple>
              <MyAccordion title="Musical Instruments">
                <Stack spacing={ 3 }>
                  <Text fontSize="lg">Item 1</Text>
                  <Text fontSize="lg">Item 2</Text>
                  <Text fontSize="lg">Item 3</Text>
                  <Text fontSize="lg">Item 4</Text>
                  <Text fontSize="lg">Item 5</Text>
                  <Text fontSize="lg">Item 6</Text>
                  <Text fontSize="lg">Item 7</Text>
                </Stack>
              </MyAccordion>
              <MyAccordion title=" String Instruments">
                <Stack spacing={ 3 }>
                  <Text fontSize="lg">Violins</Text>
                  <Text fontSize="lg">Ukelele</Text>
                  <Text fontSize="lg">Double Base</Text>
                  <Text fontSize="lg">Banjo</Text>
                  <Text fontSize="lg">Harp </Text>
                  <Text fontSize="lg">Item </Text>
                  <Text fontSize="lg">Item </Text>
                </Stack>
              </MyAccordion>
            </Accordion>
            <Text fontSize="4xl">Price</Text>
            <RangeSlider
              aria-label={ ['min', 'max'] }
              colorScheme="blue"
              defaultValue={ [120, 240] }
              min={ 0 }
              max={ 300 }
              step={ 30 }
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={ 0 } />
              <RangeSliderThumb index={ 1 } />
            </RangeSlider>
            <Flex align="center">
              <Select mr={ 2 } placeholder="Min">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text fontSize="lg">to</Text>
              <Select ml={ 2 } placeholder="Max   ">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
            <Accordion defaultIndex={ [0] } allowMultiple>
              <MyAccordion title={ <Text fontSize="2xl">Material</Text> }>
                <Stack spacing={ 3 }>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Search Material"
                      className="border-2 border-gray-300 rounded-lg px-2 py-1 hover:cursor-pointer w-[14em] h-[2em]"
                    />
                  </div>

                  <Checkbox>One piece black</Checkbox>
                  <Checkbox>Two piece black</Checkbox>
                  <Checkbox>Nylon string</Checkbox>
                  <Checkbox>Steel String</Checkbox>
                </Stack>
              </MyAccordion>
            </Accordion>

            <Accordion defaultIndex={ [0] } allowMultiple>
              <MyAccordion title={ <Text fontSize="2xl">Ratings</Text> }>
                <Stack spacing={ 3 }>
                  <Checkbox>Above 4 stars</Checkbox>
                  <Checkbox>Above 3 stars</Checkbox>
                  <Checkbox>Above 2 stars</Checkbox>
                  <Checkbox>Above 1 star</Checkbox>
                </Stack>
              </MyAccordion>
            </Accordion>
            <Accordion defaultIndex={ [0] } allowMultiple>
              <MyAccordion title={ <Text fontSize="4xl">Offers</Text> }>
                <Stack spacing={ 3 }>
                  <Checkbox>Special Price</Checkbox>
                  <Checkbox>Buy more save more</Checkbox>
                </Stack>
              </MyAccordion>

              <MyAccordion title={ <Text fontSize="4xl">Discount</Text> }>
                <Stack spacing={ 3 }>
                  <Checkbox>40% or more</Checkbox>
                  <Checkbox>30% or more</Checkbox>
                  <Checkbox>20% or more</Checkbox>
                  <Checkbox>10% or more</Checkbox>
                </Stack>
              </MyAccordion>
            </Accordion>
            <Accordion defaultIndex={ [0] } allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontSize="2xl" textAlign="left">
                      Availability
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={ 4 }>
                  <Checkbox>Include Out Of Stock</Checkbox>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={ [0] } allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontSize="2xl" textAlign="left">
                      Latest Products
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={ 4 }>
                  <RadioGroup defaultValue="0">
                    <Stack>
                      <Radio value="1">Newest First</Radio>
                      <Radio value="2">
                        Products launched within 20-60 days
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>
        <Box w="80%">{/* Main content */ }</Box>
        <div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
          <div className="flex">
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
            <Card
              title="Product 2"
              description="Another product description."
              price={ 75 }
              discount={ 10 }
            />
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Categories;
