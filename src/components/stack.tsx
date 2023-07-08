'use client';

import { Heading, Wrap, WrapItem, useStyleConfig } from '@chakra-ui/react';

import { Container } from '../components/container';
import { poppins } from '../lib/fonts';
import Section from './layout/section';

type StacksProps = {
  title: string;
  stack: string[];
};

export const Stack = ({ title, stack }: StacksProps) => {
  const styles = useStyleConfig('WrapItem', { variant: 'base' });

  return (
    <Section>
      <Heading className={poppins.className} variant='base'>
        {title}
      </Heading>

      <Wrap spacing={7} maxH='auto'>
        {stack.map((s, i) => (
          <WrapItem key={i} __css={styles}>
            {s}
          </WrapItem>
        ))}
      </Wrap>
    </Section>
  );
};
