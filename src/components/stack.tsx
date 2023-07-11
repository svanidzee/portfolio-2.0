'use client';

import { useStyleConfig, Heading, Wrap, WrapItem } from '@chakra-ui/react';

import { rokkitt } from '../lib/fonts';
import Section from './layouts/section';

type StacksProps = {
  title: string;
  stack: string[];
};

export default function Stack({ title, stack }: StacksProps) {
  const styles = useStyleConfig('WrapItem', { variant: 'base' });

  return (
    <Section>
      <Heading className={rokkitt.className} variant='base'>
        {title}
      </Heading>

      <Wrap spacing={6} maxH='auto' paddingY={5}>
        {stack.map((s, i) => (
          <WrapItem key={i} __css={styles}>
            {s}
          </WrapItem>
        ))}
      </Wrap>
    </Section>
  );
}
