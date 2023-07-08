'use client';

import Paragraph from './paragraph';
import { Container } from '../components/container';
import { Text } from '@chakra-ui/react';
import Section from './layout/section';

export const Info = ({ about }: { about: string }) => {
  return (
    <Section>
      <Paragraph variant='secondary'>{about}</Paragraph>
    </Section>
  );
};
