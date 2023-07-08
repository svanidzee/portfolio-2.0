'use client';

import NextLink from 'next/link';
import { Box, Stack } from '@chakra-ui/react';

import { poppins } from '../../lib/fonts';
import { desktop_items } from './data';
import Paragraph from '../paragraph';

export default function DesktopNav() {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems='center'
      flexGrow={1}
      justifyContent='right'
      mt={{ base: 4, md: 0 }}>
      {desktop_items.map(({ path, label }) => (
        <Box key={label} as={NextLink} href={path} prefetch={false} className={poppins.className}>
          <Paragraph variant='secondary' fontSize={55} mr={5}>
            {label}
          </Paragraph>
        </Box>
      ))}
    </Stack>
  );
}
