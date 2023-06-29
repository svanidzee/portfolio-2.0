'use client';
import { archivo } from '../lib/fonts';
import { Flex, VStack, Text } from '@chakra-ui/react';

interface ItemsProp {
  path: string;
  label: string;
}

interface MyProps {
  header: string;
  items: Array<ItemsProp>;
}

const data: MyProps[] = [
  {
    header: 'IM HERE',
    items: [
      {
        path: '/',
        label: 'ISVANIDZE12@GMAIL.COM',
      },
      {
        path: '/',
        label: 'LINKEDIN',
      },
      {
        path: '/',
        label: 'GITHUB',
      },
    ],
  },
];

const Footer = () => {
  const [{ header, items }] = data;
  return (
    <Flex
      direction='row'
      justifyContent='space-between'
      // width='full'
      // height='max-content'
      // marginTop='auto'
      // borderTopWidth={2}
      bg='#000'
      padding={3}>
      <Text
        className={archivo.className}
        color='#fff'
        fontSize='44'
        fontWeight='500'
        // lineHeight='29px'
        // letterSpacing='tight'
      >
        {header}
      </Text>

      {/* <Container> */}
      <VStack
        as='footer'
        // width='full'
        height='300px'
        // spacing={4}
        // alignItems='center'
        // justifyContent='center'
      >
        {items.map((item) => (
          <Text
            key='ss'
            className={archivo.className}
            color='#fff'
            fontSize='36'
            fontWeight='400'
            lineHeight='29px'>
            {item.label}
          </Text>
        ))}
      </VStack>
    </Flex>
  );
};

export default Footer;
