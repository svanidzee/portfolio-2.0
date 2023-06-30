'use client';

import { Box, Text } from '@chakra-ui/react';

type PickProps = Record<string, string>;

const Hobbies = (props: PickProps) => {
  return (
    <Box bg='black' color='white'>
      <Text variant='hobbies'>{props.hobbies}</Text>
    </Box>
  );
};

export default Hobbies;
