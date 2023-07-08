'use client';

import NextLink from 'next/link';
import { Flex, VStack, Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { archivo, poppins } from '../../lib/fonts';
import { data } from './data';
import Paragraph from '../paragraph';
import { Container } from '../container';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

const Footer = () => {
  const [{ header, items }] = data;
  const pathname = usePathname();

  // if (pathname === '/') {
  //   return null;
  // }

  return (
    <Flex
      // className={poppins.className}
      alignItems='end'
      bg='black'
      color='white'
      gap={5}
      // px={6}
      h={{ base: 200, md: 300, lg: 300 }}>
      {items.map(({ path, label, id }) => (
        <Box
          key={id}
          as={NextLink}
          href={path}
          prefetch={false}
          rel='noopener noreferrer'
          target='_blank'
          className={poppins.className}>
          <Paragraph variant='secondary'>{label},</Paragraph>
        </Box>
      ))}
    </Flex>
  );
};

export default Footer;
