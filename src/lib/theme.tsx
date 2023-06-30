import { extendTheme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const thick = defineStyle({
  borderWidth: '1px', // change the width of the border
  borderStyle: 'solid', // change the style of the border
  borderRadius: 10, // set border radius to 10
  borderColor: '#000',
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
      fontSize: '64',
      fontWeight: '600',
    },
    works_desc: {
      fontSize: '15',
      fontWeight: '400',
      ml: '138px',
    },
    footer: {
      fontSize: '10',
      fontWeight: '700',
      // color: 'red',
    },
    navigation: {
      // fontSize: '10',
      // fontWeight: '700',
      px: '10',
      fontSize: '50',
      fontWeight: '700',
      // lineHeight: '80',
      letterSpacing: '-1.6px',
      textTransform: 'capitalize',
      // sx:{{ wordSpacing: '0' }},
      color: '#000',
    },
  },
  // The default variant value
  // defaultProps: {
  //   variant: "",
  // },
});

const Box = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  // Two variants: rounded and smooth
  variants: {
    // woks_name: {
    //   fontSize: '64',
    //   fontWeight: '600',
    // },
    // works_desc: {
    //   fontSize: '15',
    //   fontWeight: '400',
    //   ml: '138px',
    // },
    // footer: {
    //   fontSize: '10',
    //   fontWeight: '700',
    //   // color: 'red',
    // },
    navigation: {
      width: '100%',
      marginBottom: '60px',
      background: '#fff',
      color: '#000',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
        bg: 'white',
        color: 'black',
      },
    },
  },
  components: {
    Divider: dividerTheme,
    Text,
    Box,
  },
});

export default theme;
