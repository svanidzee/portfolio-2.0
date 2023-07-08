'use client';

import {
  Divider,
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  // Image,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  SimpleGrid,
  VStack,
  GridItem,
  Grid,
  Container,
  ScaleFade,
} from '@chakra-ui/react';
import Image from 'next/image';

import { Works, Asset } from '../generated/schema';
import Paragraph from './paragraph';
import { BsGearFill } from 'react-icons/bs';
import Link from 'next/link';

type WantedKeys = 'name' | 'githubUrl' | 'stack' | 'description' | 'bg';
type ProjectsProps = Pick<Works, WantedKeys>;

type WantedKeys2 = 'url';
type ProjectsProps2 = Pick<Asset, WantedKeys2>;

// const Projects = ({ name, githubUrl, stack, description, bg }: ProjectsProps) => {
const Projects = ({ bg }: { bg: ProjectsProps2[] }) => {
  console.log(bg);
  return (
    // <div>
    //   {bg.map((b, i) => (
    //     <Image key={i} alt='sss' src={b.url} width={300} height={300} />
    //   ))}
    // </div>
    <Stack
      bg='secondary'
      borderRadius='10px'
      minH='320px'
      maxH='500px'
      border='1px'
      borderColor={{ base: '#333', md: 'borderColor' }}>
      <Link href='/' isExternal>
        {/* <ScaleFade in={true} transition={{ duration: 1 }}> */}
        {bg.map((b, i) => (
          <Image
            key={i}
            width={1250}
            height={600}
            src={b.url}
            // transition='0.3s'
            // borderRadius='10px 10px 0px 0px'
            alt='project image'
          />
        ))}
        <Stack px={4} py={2}>
          <Stack isInline justifyContent='space-between' alignItems='center'>
            <Text fontFamily='Ubuntu' fontSize='2xl' color='displayColor'>
              csdcdcdscdsc
            </Text>
            {/* <Stack isInline justifyContent='flex-end' alignItems='center' spacing={4}>
                {githubLink && (
                  <Link
                    href={githubLink}
                    color='white'
                    isExternal>
                    <FaGithub aria-label='github' size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color='white'
                    onClick={() => handleClick(`deploylink_${title.replace('@', '-at')}`)}
                    isExternal>
                    <FaExternalLinkAlt aria-label='project link' size={20} />
                  </Link>
                )}
              </Stack> */}
          </Stack>
          {/* <Stack isInline>{Tags}</Stack> */}
          <Divider />
          <Text color='textSecondary' fontSize={['sm', 'md']}>
            csdcscsdcdc
          </Text>
        </Stack>
        {/* </ScaleFade> */}
      </Link>
    </Stack>
  );
};

export default Projects;
