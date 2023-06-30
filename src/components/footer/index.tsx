'use client';

import { Flex, VStack, Text, Heading, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

import { archivo } from '../../lib/fonts';
import { footerData } from './footer-data';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [{ header, items }] = footerData;
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Flex
      className={archivo.className}
      direction='row'
      justifyContent='space-between'
      bg='#000'
      // padding={3}
    >
      <Text variant='footer'>{header}</Text>

      <VStack
        as='footer'
        display='flex'
        // width='full'
        height='300px'
        // spacing={4}
        alignItems='flex-end'
        // justifyContent="flex-end"
      >
        {items.map(({ path, label, id }) => (
          <Box
            key={label}
            as={NextLink}
            href={path}
            prefetch={false}
            rel='noopener noreferrer'
            target='_blank'
            className={archivo.className}>
            <Text variant='footer' key={id}>
              {label}
            </Text>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Footer;
