'use client';
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
      marginTop='auto'
      // borderTopWidth={2}
      bg='#ffffff'
      padding={8}>
      <Text color='#000000'>{header}</Text>

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
          <Text color='red' key='ss'>
            {item.label}
          </Text>
        ))}
      </VStack>
    </Flex>
  );
};

export default Footer;
