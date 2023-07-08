'use client';

import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { Works } from '../generated/schema';
import { BsArrowDownRight } from 'react-icons/bs';

type WantedKeys = 'id' | 'description' | 'githubUrl' | 'name' | 'stack' | 'bg';
type ProjectsProps = Pick<Works, WantedKeys>;

const Projects2 = ({ data }: { data: ProjectsProps[] }) => {
  return (
    <Flex flexDir='column' bg='white' color='black'>
      <Divider variant='thick' />
      {data.map((d, i) => (
        <Flex key={d.id} justifyContent='space-between' alignItems='end' gap={4} p={3}>
          <Text
            fontSize='6.66rem'
            lineHeight='1em'
            letterSpacing='-15px'
            textTransform='uppercase'
            fontWeight={500}
            fontStyle='oblique'>
            #00{i + 1}
          </Text>
          <Text
            fontSize='6.66rem'
            lineHeight='1em'
            letterSpacing='tighter'
            textTransform='uppercase'
            fontWeight={500}
            // fontStretch='extra-condensed'
            // textAlign='left'
            // justifySelf='left'
            fontStyle='oblique'>
            {d.name}
          </Text>
          <HStack as='a' href={d.githubUrl} rel='noopener' target='_blank' spacing='3'>
            <Icon
              aria-hidden
              as={BsArrowDownRight}
              // fontSize='2xl'
              // boxSize='sm'
              fontSize='4xl'

              // fontWeight='bold'
            />
            <Text
              textDecoration='underline'
              textDecorationThickness='1px'
              textUnderlineOffset='3px'>
              see case
            </Text>
          </HStack>
        </Flex>
      ))}
      <Divider variant='thick' />
    </Flex>
  );
};

export default Projects2;
