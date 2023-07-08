'use client';

import Paragraph from './paragraph';
import { Container } from '../components/container';
import { Box, Text } from '@chakra-ui/react';
import Section from './layout/section';

export const Hobbies = ({ hobbies }: { hobbies: string }) => {
  return (
    <Box bg='black' color='white'>
      <Section>
        <Paragraph variant='secondary'>{hobbies}</Paragraph>
      </Section>
    </Box>
  );
};
