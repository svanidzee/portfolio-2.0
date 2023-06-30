'use client';

import { FC } from 'react';
import { Box, Divider, Flex, Grid, Tag, Wrap, Text } from '@chakra-ui/react';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Icon } from '@chakra-ui/react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Works } from '../generated/schema';
import Tex from '../components/text';
import { FiArrowUpRight } from 'react-icons/fi';
import LinkItem from './linkitem';

type PickProps = Pick<Works, 'description' | 'githubUrl' | 'name' | 'stack'>;

const Worklist2 = (props: PickProps) => {
  console.log(props);
  return (
    <>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        px={10}
        // py={5}
      >
        <Flex flexDir='column'>
          <Text
            //   variant='woks_name'
            fontSize='50px'
            fontWeight='700'
            lineHeight='80px'
            letterSpacing='-1.6px'
            textTransform='capitalize'
            sx={{ wordSpacing: '0' }}>
            {props.name}
          </Text>
          <Text
            //   variant='woks_name'
            fontSize='20px'
            fontWeight='400'
            lineHeight='80px'
            letterSpacing='-1.6px'
            textTransform='capitalize'
            sx={{ wordSpacing: '0' }}>
            {props.description}
          </Text>
        </Flex>

        <Flex gap={5} justifyContent='center' alignItems='center' mb={20}>
          <Divider variant='thick' />
          <div style={{ width: '400px' }}>
            <Text
              as='span'
              display='inline'
              fontSize='13px'
              fontWeight='700'
              // justifySelf='baseline'
              //   justifyItems=""
            >
              VIEW PROJECT
            </Text>
          </div>
        </Flex>

        {/* <Wrap gap={10}>
          {props.stack.map((s) => (
            <Tag key={s} size='lg' variant='outline' colorScheme='teal' px='5' py='2'>
              {s}
            </Tag>
          ))}
        </Wrap> */}
        {/* <LinkItem isExternal href={props.githubUrl as string} icon={FiArrowUpRight} /> */}
      </Flex>
      {/* <Tex variant='works_desc'>{props.description}</Tex> */}
      <Divider orientation='horizontal' variant='thick' mt='20px' />
    </>
  );
};

export default Worklist2;
