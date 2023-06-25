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
    // <Box bg={useColorModeValue('gray.100', 'gray.900')}>
    <Box>
      <SidebarContent />
    </Box>
  );
}

const SidebarContent = ({ ...rest }: BoxProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      // pos='fixed'
      // h='full'
      {...rest}>
      <Flex h='20' flexDirection='column' mx='20' my='20'>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        // _hover={{
        //   bg: 'cyan.400',
        //   color: 'white',
        // }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
