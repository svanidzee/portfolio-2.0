'use client';

import {
  Divider,
  Flex,
  Card,
  Text,
  CardBody,
  HStack,
  LinkBox,
  LinkOverlay,
  Container,
} from '@chakra-ui/react';

import { Works } from '../generated/schema';
import Paragraph from './paragraph';
import Link from 'next/link';
import { playfair_display, rokkitt } from '../lib/fonts';
import Image from 'next/image';
import Section from './layout/section';

type WantedKeys = 'name' | 'githubUrl' | 'description' | 'url';
type ProjectsProps = Pick<Works, WantedKeys>;

const Projects = ({ name, githubUrl, description, url }: ProjectsProps) => {
  return (
    <Container
      display='flex'
      flexDir='column'
      maxW='container.xl'
      px={10}
      // alignItems='flex-start'
      // justifyContent='center'
      // bg='white'
      // maxW='8
      // maxW='8xl'
      // paddingInlineStart={10}
    >
      <LinkBox cursor='pointer'>
        <Card overflow='hidden' variant='outline'>
          <HStack py={5}>
            <CardBody p={0}>
              <LinkOverlay href={githubUrl} target='_blank'>
                <Text
                  fontSize='4.5rem'
                  lineHeight={1}
                  color='#2a2a2a'
                  fontWeight='bold'
                  textTransform='uppercase'
                  letterSpacing='-3px'
                  // size='md'
                  className={rokkitt.className}>
                  {name}
                </Text>

                <Text
                  // py='4'
                  color='#312a2a'
                  fontSize='28px'
                  fontStyle='italic'
                  fontWeight={500}
                  className={playfair_display.className}
                  // marginBlockStart='1em'
                  // marginBlockEnd='1em'
                  // marginInlineStart='0px'
                  // marginInlineEnd='0px'
                >
                  {description}
                </Text>
              </LinkOverlay>
            </CardBody>
            <Image width={400} height={500} src={url} alt={name} />
          </HStack>
          <Divider variant='thick' />
        </Card>
      </LinkBox>
    </Container>
  );
};

export default Projects;
