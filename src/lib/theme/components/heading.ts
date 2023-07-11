import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
  },
  variants: {
    base: {
      // lineHeight: ['6.25rem', '6.25rem', '3.125rem', '5rem', '5rem'],
      fontSize: ['1.875rem', '1.875rem', '1.875rem', '2.625rem', '4.813rem'],
      mt: 1,
      // lineHeight: ['2.1rem', '2.1rem', '2.438rem', '2.438rem', '4.4rem'],
      // fontSize: ['1.6rem', '1.6rem', '1.875rem', '2.5rem', '4rem'],
      // letterSpacing: ['-0.02rem', '-0.02rem', '0', '0', '0rem'],
    },
  },
});
