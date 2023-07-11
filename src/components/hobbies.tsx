'use client';

import { Box } from '@chakra-ui/react';

import Section from './layouts/section';
import Paragraph from './paragraph';

export default function Hobbies({ hobbies }: { hobbies: string }) {
  return (
    <Box bg='black' color='white'>
      <Section>
        <Paragraph variant='secondary'>{hobbies}</Paragraph>
      </Section>
    </Box>
  );
}
