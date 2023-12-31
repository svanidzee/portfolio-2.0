'use client';

import NextLink from 'next/link';
import { Box, Menu, MenuItem, MenuList, MenuButton, Button } from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';

import { rokkitt } from 'lib/fonts';
import { mobileItems } from './data';

export default function MobileNav() {
  return (
    <Box flex={1} ml={3}>
      <Box display={{ base: 'inline-block', md: 'none' }}>
        <Menu isLazy id='navbar-menu' variant='roundLeft'>
          <MenuButton
            as={Button}
            rightIcon={<BsArrowRightShort size='30px' />}
            iconSpacing='-1.2'
            variant='ghost'
            color='black'
            fontSize='1.6rem'
            mt={1}
            fontWeight={700}
            className={rokkitt.className}>
            Menu
          </MenuButton>

          <MenuList transition='all 0.2s' className={rokkitt.className}>
            {mobileItems.map(({ label, href }, i) => (
              <NextLink key={i} href={href} passHref prefetch={false}>
                <MenuItem as='a'>{label}</MenuItem>
              </NextLink>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
