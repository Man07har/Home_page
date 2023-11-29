import React from 'react';
import SellerStoryHero from '../components/SellerStoryHero';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import SellerStroyReadTab from '../components/SellerStoryReadTab';
function SellerStory() {
  return (
    <>
      <div className="robotofont">
        <SellerStoryHero />
        <Tabs isFitted size={'lg'} colorScheme="orange">
          <TabList mb="1em">
            <Tab>
              {' '}
              <Text fontSize={'5xl '} color={'#B34806'}>
                Read
              </Text>{' '}
            </Tab>
            <Tab>
              {' '}
              <Text fontSize={'5xl '} color={'#B34806'}>
                Watch
              </Text>{' '}
            </Tab>
            <Tab>
              {' '}
              <Text fontSize={'5xl '} color={'#B34806'}>
                Engage
              </Text>{' '}
            </Tab>
            <Tab>
              {' '}
              <Text fontSize={'5xl '} color={'#B34806'}>
                Featured
              </Text>{' '}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SellerStroyReadTab />
            </TabPanel>
            <TabPanel>
              <p>Watch</p>
            </TabPanel>
            <TabPanel>
              <p>Engage</p>
            </TabPanel>
            <TabPanel>
              <p>Featured</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}

export default SellerStory;
