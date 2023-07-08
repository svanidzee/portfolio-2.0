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
    mb={10}
    p={5}>
    {children}
  </StyledDiv>
);

export default Section;
