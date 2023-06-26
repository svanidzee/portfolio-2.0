import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#101010',
        color: 'white',
      },
    },
  },
});

export default theme;
