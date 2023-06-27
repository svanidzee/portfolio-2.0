'use client';
import { FC } from 'react';
import { Box, Divider, Flex, Grid, Tag, Wrap } from '@chakra-ui/react';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Works } from '../../generated/schema';
import Tex from '../components/text';

// FiArrowUpRight;
// RiArrowRightUpLine;
// MdOutlineArrowOutward;
// LuArrowUpRight;
// FiArrowUpRight;

// type PickProps = Pick<Works, 'name' | 'descripption'>;
type PickProps = Pick<Works, 'name' | 'description'>;
// interface WorklistProps {
//   props: Array<PickProps> | null;
// }

// type WorklistProps = Array<Works>

const Worklist = (props: PickProps) => {
  console.log(props);
  return (
    <>
      <Flex flexDirection='row' justifyContent='space-around' alignItems='center'>
        <Tex variant='woks_name'>{props.name}</Tex>

        <Wrap gap={10}>
          <Tag size='lg' variant='outline' colorScheme='teal' px='5' py='2'>
            CREATIVE
          </Tag>
          <Tag size='lg' variant='outline' colorScheme='teal' px='5' py='2'>
            ACCESSIBILITY
          </Tag>
        </Wrap>
        <Icon
          //   as={TfiArrowTopRight}
          as={FiArrowUpRight}
          //   as={RiArrowRightUpLine}
          //   fontSize='6xl'
          //   viewBox=""
          //   boxSize='42'
          fontSize='8xl'
        />
      </Flex>
      <Tex variant='works_desc'>{props.description}</Tex>
      <Divider orientation='horizontal' variant='thick' mt='20px' />
    </>
  );
};

export default Worklist;
