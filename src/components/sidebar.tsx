'use client';

import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Container,
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'home', icon: TfiArrowTopRight },
  { name: 'about', icon: TfiArrowTopRight },
  { name: 'projects', icon: TfiArrowTopRight },
  { name: 'resume', icon: TfiArrowTopRight },
];

// export default function SimpleSidebar({ children }: { children: ReactNode }) {
export default function SimpleSidebar() {
  return (
    <Box
      as='header'
      aria-label='Main navigation'
      position='fixed'
      w='100%'
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      // {...props}
    >
      <Box display='flex' justifyContent='space-between' w='full'>
        <Text
          // mt='30px'
          px='5'
          fontSize='70px'
          fontWeight='700'
          lineHeight='80px'
          letterSpacing='-1.6px'
          textTransform='capitalize'
          sx={{ wordSpacing: '0' }}
          color='#000'>
          Irakli Svanidze
        </Text>
        <Text
          // mt='30px'
          // p='10'
          fontSize='70px'
          fontWeight='700'
          lineHeight='80px'
          letterSpacing='-1.6px'
          textTransform='capitalize'
          sx={{ wordSpacing: '0' }}
          color='#000'>
          About
        </Text>
        <Text
          // mt='30px'
          px='5'
          fontSize='70px'
          fontWeight='700'
          lineHeight='80px'
          letterSpacing='-1.6px'
          textTransform='capitalize'
          sx={{ wordSpacing: '0' }}
          color='#000'>
          Works
        </Text>
      </Box>
    </Box>
  );
}
