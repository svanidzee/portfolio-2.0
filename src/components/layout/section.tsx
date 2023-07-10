import { motion, MotionProps } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children }: MotionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 0.8 }}
    // mb={10}
    // p={5}
    // paddingBlockEnd={10}
    // paddingBlockStart={10}
    // paddingEnd={10}
    paddingInlineStart={10}
    paddingInlineEnd={10}
    paddingY='5rem'
    // marginBlockStart={10}
    // marginBottom={10}
    // marginEnd={10}
    // marginBlock={10}
    // marginBlockEnd={10}
    // marginInlineStart={10}
    // marginInline={10}
    // marginStart={10}
    // marginEnd={10}
    //
  >
    {children}
  </StyledDiv>
);

export default Section;
