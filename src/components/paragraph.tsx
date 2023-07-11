'use client';

import { Text, TextProps } from '@chakra-ui/react';

export default function Paragraph({ children, ...rest }: TextProps) {
  return <Text {...rest}>{children}</Text>;
}
