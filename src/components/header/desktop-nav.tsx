'use client';

import NextLink from 'next/link';
import { Stack, Box } from '@chakra-ui/react';

import { desktopItems } from './data';
import { rokkitt } from 'lib/fonts';
import Paragraph from 'components/paragraph';

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
      {desktopItems.map(({ path, label }) => (
        <Box key={label} as={NextLink} href={path} prefetch={false} className={rokkitt.className}>
          <Paragraph
            variant='secondary'
            fontSize={{ base: '11rem', md: '1.8rem', lg: '2.5rem', xl: '4rem' }}
            mr={5}>
            {label}
          </Paragraph>
        </Box>
      ))}
    </Stack>
  );
}
