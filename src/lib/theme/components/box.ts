import { defineStyleConfig } from '@chakra-ui/react';

export const Box = defineStyleConfig({
  variants: {
    navigation: {
      width: '100%',
      marginBottom: '3.75rem',
      background: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
    },
  },
});
