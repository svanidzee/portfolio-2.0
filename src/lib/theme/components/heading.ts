import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
  variants: {
    base: {
      lineHeight: ['6.25rem', '6.25rem', '3.125rem', '5rem', '5rem'],
      fontSize: ['1.875rem', '1.875rem', '1.875rem', '2.625rem', '4.813rem'],
    },
  },
});
