import { motion, MotionProps } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export default function Section({ children }: MotionProps) {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      paddingInlineStart='7'
      paddingInlineEnd='7'
      paddingY='2rem'>
      {children}
    </StyledDiv>
  );
}
