'use client';

import NextLink from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

import { footerItems } from './data';
import { rokkitt } from 'lib/fonts';
import Paragraph from 'components/paragraph';

export default function Footer() {
  return (
    <Flex
      justifyContent='flex-start'
      alignItems='flex-end'
      bg='black'
      color='white'
      gap={5}
      minH={{ base: 250, md: 400 }}
      px={7}>
      {footerItems.map(({ path, label, id }) => (
        <Box
          key={id}
          as={NextLink}
          href={path}
          prefetch={false}
          rel='noopener noreferrer'
          target='_blank'
          className={rokkitt.className}>
          <Paragraph variant='secondary' color='white'>
            {label},
          </Paragraph>
        </Box>
      ))}
    </Flex>
  );
}
