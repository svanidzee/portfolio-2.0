'use client';

import NextLink from 'next/link';
import { Flex, VStack, Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { archivo, poppins, rokkitt } from '../../lib/fonts';
import { data } from './data';
import Paragraph from '../paragraph';
import { Container } from '../container';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Section from '../layout/section';

const Footer = () => {
  const [{ header, items }] = data;
  const pathname = usePathname();

  return (
    <Flex
      // className={poppins.className}
      justifyContent='flex-start'
      alignItems='flex-end'
      bg='black'
      color='white'
      gap={5}
      minH={400}
      // px={6}
      paddingInlineStart={10}
      // paddingInlineEnd={10}
    >
      {items.map(({ path, label, id }) => (
        <Box
          key={id}
          as={NextLink}
          href={path}
          prefetch={false}
          rel='noopener noreferrer'
          target='_blank'
          className={rokkitt.className}
          //  h='200'
        >
          <Paragraph variant='secondary'>{label},</Paragraph>
        </Box>
      ))}
      {/* <Paragraph variant='secondary'>11jckjdkjsjdkjskjdsjkdskj,</Paragraph> */}
    </Flex>
  );
};

export default Footer;
