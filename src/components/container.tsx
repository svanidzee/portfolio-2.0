'use client';

import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <ChakraContainer maxW='max-content' {...rest}>
      {children}
    </ChakraContainer>
  );
}
