'use client';

import { Text, TextProps } from '@chakra-ui/react';

const Paragraph = ({ children, ...rest }: TextProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default Paragraph;
