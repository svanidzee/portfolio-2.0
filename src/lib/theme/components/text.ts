import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
  },
  variants: {
    primary: {
      fontSize: '176px',
      lineHeight: '160px',
      fontWeight: '900',
      textIndent: '1em',
    },
    secondary: {
      lineHeight: ['2.438rem', '2.438rem', '2.438rem', '2.438rem', '4.4rem'],
      fontSize: ['1.563rem', '1.563rem', '1.875rem', '2.5rem', '4rem'],
      letterSpacing: ['-0.125rem', '-0.125rem', '0', '0', '0rem'],
    },
  },
});
