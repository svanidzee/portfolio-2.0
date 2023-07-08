'use client';

import { Box, Flex } from '@chakra-ui/react';

import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';

export default function Header() {
  return (
    <Box as='nav' w='100%' bg='white' color='black'>
      <Flex
        display='flex'
        maxW='full'
        justify='space-between'
        mb={{ base: '1.8rem', md: '3rem', lg: '5rem' }}>
        <MobileNav />
        <DesktopNav />
      </Flex>
    </Box>
  );
}
