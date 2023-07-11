import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
  },
  variants: {
    primary: {
      lineHeight: ['2.1rem', '2.1rem', '2.438rem', '2.438rem', '4.4rem'],
      fontSize: ['1.6rem', '1.6rem', '1.875rem', '2.5rem', '4rem'],
      letterSpacing: ['-0.02rem', '-0.02rem', '0', '0', '0rem'],
    },
    secondary: {
      lineHeight: ['2.1rem', '2.1rem', '2.438rem', '2.438rem', '4.4rem'],
      fontSize: ['1.6rem', '1.6rem', '1.875rem', '2.5rem', '4rem'],
      letterSpacing: ['-0.02rem', '-0.02rem', '0', '0', '0rem'],
    },
    tertiary: {
      color: '#312a2a',
      fontSize: ['1.4rem', '1.2rem', '1.275rem', '2.5rem', '2rem'],
      fontStyle: 'italic',
      fontWeight: 500,
    },
  },
});
