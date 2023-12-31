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
import SellerStoryWatchTab from '../components/SellerStoryWatchTab';
import SellerStroyHighlightsTab from '../components/SellerStroyHighlightsTab';
import SellerStoryFeaturedTab from '../components/SellerStroyFeaturedTab';
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
                Featured
              </Text>{' '}
            </Tab>
            <Tab>
              {' '}
              <Text fontSize={'5xl '} color={'#B34806'}>
                Highlights
              </Text>{' '}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SellerStroyReadTab />
            </TabPanel>
            <TabPanel>
              <SellerStoryWatchTab />
            </TabPanel>
            <TabPanel>
              <SellerStoryFeaturedTab />
            </TabPanel>
            <TabPanel>
              <SellerStroyHighlightsTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}

export default SellerStory;
