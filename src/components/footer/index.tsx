'use client';

import { Flex, VStack, Text, Heading } from '@chakra-ui/react';

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
        // width='full'
        height='300px'
        // spacing={4}
        // alignItems='center'
        // justifyContent='center'
      >
        {items.map((item) => (
          <Text variant='footer' key={item.id}>
            {item.label}
          </Text>
        ))}
      </VStack>
    </Flex>
  );
};

export default Footer;
