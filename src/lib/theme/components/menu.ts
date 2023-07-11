import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { menuAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);

///////////////////////////////
const baseStyle = definePartsStyle({
  button: {
    // MenuButton component
    fontWeight: 700,
    // fontSize: '110',
    bg: 'white',
    color: 'black',
    _hover: {
      bg: 'red',
      color: 'red',
    },
  },
  list: {
    // MenuList component
    py: '4',
    borderRadius: 'xl',
    border: 'none',
    bg: 'white',
    color: 'black',
    marginLeft: '12px',
  },
  item: {
    // MenuItem and MenuItemOption components
    // color: 'gray.200',
    bg: 'white',
    color: 'black',
    fontWeight: '600',
    _hover: {
      // bg: 'teal.600',
    },
    _focus: {
      // bg: 'teal.600',
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'red',
    borderBottom: '2px dotted',
  },
});

// define custom styles
const lg = defineStyle({
  fontSize: 'lg',
  my: '1',
});

const xl = defineStyle({
  fontWeight: '600',
  lineHeight: '2.138rem',
  fontSize: '1.363rem',
  letterSpacing: '-0.125rem',
  px: '4',
  py: '2',
});

// define custom sizes
const sizes = {
  // apply custom styles to parts
  xl: definePartsStyle({
    button: xl,
    item: xl,
    groupTitle: lg,
    command: xl,
  }),
};

// define custom variants
const variants = {
  roundLeft: definePartsStyle({
    button: {
      borderLeftRadius: 'full',
      pl: '6',
    },
  }),
  roundRight: definePartsStyle({
    button: {
      borderRightRadius: 'full',
      pr: '6',
    },
    divider: {
      color: 'red',
      borderColor: 'red',
      borderBottom: '2px dotted',
    },
  }),
};

// export the component theme
export const menuTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size is applied by default
    size: 'xl',
  },
});
