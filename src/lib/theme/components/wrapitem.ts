import { defineStyleConfig } from '@chakra-ui/react';

export const WrapItem = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
  variants: {
    base: {
      lineHeight: ['1.25rem', '1.25rem', '3.125rem', '5rem', '5rem'],
      fontSize: ['1.375rem', '1.375rem', '1.875rem', '2.625rem', '3.75rem'],
    },
  },
});
