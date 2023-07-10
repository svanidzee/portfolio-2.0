import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const thick = defineStyle({
  borderWidth: '2.8px',
  borderStyle: 'solid',
  // borderRadius: 5,
  borderColor: '#2a2a2a',
  // border: '10px solid',
  // borderRadius: '10px',
});

export const dividerTheme = defineStyleConfig({
  variants: { thick },
});
