'use client';

import { Box, Flex, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { homeNavData } from './homeNav-data';
import NextLink from 'next/link';
import { archivo } from '../../lib/fonts';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const HomeNav = () => {
  return (
    <Flex flexDir='column'>
      {homeNavData.map(({ path, label }) => (
        <Box key={label} as={NextLink} href={path} prefetch={false} className={archivo.className}>
          {/* <ChakraText
            // as={motion.p}
            whileHover={{ fontWeight: '400' }}
            whileTap={{ fontWeight: '400' }}
            style={{ fontWeight: '900' }}
            transition={{ duration: 0.1, type: 'easeInOut' }}
            // initial={{ fontWeight: '900' }}
            // animate={{ fontWeight: '400' }}
            // exit={{ fontWeight: '900' }}
            // initial='hidden'
            // animate=''
            // exit='exit'
            // variants={variants}
            // transition={{ duration: 0.1, type: 'easeInOut' }}
            // style={{ position: 'relative' }}
            // animation={animation}
            // _hover={{
            //   fontWeight: '400',
            // }}
            fontSize='190px'
            fontWeight='900'
            lineHeight='180px'
            // variant='navigation'
          >
            {label}
          </ChakraText> */}

          <ChakraBox
            // animate={{
            //   scale: [1, 2, 2, 1, 1],
            //   rotate: [0, 0, 270, 270, 0],
            //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            // }}
            whileHover={{ fontWeight: '400' }}
            whileTap={{ fontWeight: '400' }}
            style={{ fontWeight: '700' }}
            // @ts-ignore no problem in operation, although type error appears.
            // transition={{
            //   duration: 3,
            //   ease: 'easeInOut',
            //   repeat: Infinity,
            //   repeatType: 'loop',
            // }}
            transition={{ duration: 0.1, type: 'linear' }}
            fontSize='190px'
            fontWeight='700'
            lineHeight='180px'>
            {label}
          </ChakraBox>
        </Box>
      ))}
    </Flex>
  );
};

export default HomeNav;
