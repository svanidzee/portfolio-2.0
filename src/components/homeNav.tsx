'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IhomeNavProps {}

const HomeNav: FC<IhomeNavProps> = ({}) => {
  return (
    <Flex flexDir='column'>
      {/* <Box> */}
      <Text>IS</Text>
      {/* </Box> */}
      <Flex flexDir='column'>
        <Text fontSize='190px' fontWeight='700' lineHeight='180px'>
          ABOUT
        </Text>
        <Text fontSize='190px' fontWeight='700' lineHeight='180px'>
          WORK
        </Text>
        <Text fontSize='190px' fontWeight='700' lineHeight='180px'>
          RESUME
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeNav;
