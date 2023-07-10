import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
  },
  variants: {
    primary: {
      fontSize: '4.5rem',
      lineHeight: 1,
      color: '#2a2a2a',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '-3px',
    },
    secondary: {
      lineHeight: ['2.438rem', '2.438rem', '2.438rem', '2.438rem', '4.4rem'],
      fontSize: ['1.563rem', '1.563rem', '1.875rem', '2.5rem', '4rem'],
      letterSpacing: ['-0.125rem', '-0.125rem', '0', '0', '0rem'],
    },
    sub: {
      color: '#312a2a',
      fontSize: '28px',
      fontStyle: 'italic',
      fontWeight: 500,
    },
  },
});
