import { extendTheme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const thick = defineStyle({
  borderWidth: '1px', // change the width of the border
  borderStyle: 'solid', // change the style of the border
  borderRadius: 10, // set border radius to 10
  borderColor: '#f1f1f1',
});

const dividerTheme = defineStyleConfig({
  variants: { thick },
});

const Text = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  // Two variants: rounded and smooth
  variants: {
    woks_name: {
      fontSize: '70',
      fontWeight: '700',
    },
    works_desc: {
      fontSize: '15',
      fontWeight: '400',
      ml: '138px',
    },
    footer: {
      fontSize: '10',
      fontWeight: '700',
      color: 'red',
    },
  },
  // The default variant value
  // defaultProps: {
  //   variant: "",
  // },
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#151515',
        color: 'white',
      },
    },
  },
  components: {
    Divider: dividerTheme,
    Text,
  },
});

export default theme;
