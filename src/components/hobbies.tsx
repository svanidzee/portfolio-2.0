'use client';

import { Box, Text } from '@chakra-ui/react';

type HobbiesProps = {
  hobbies: string;
};

const Hobbies = (props: HobbiesProps) => {
  return (
    <Box bg='black' color='white'>
      <Text variant='hobbies'>{props.hobbies}</Text>
    </Box>
  );
};

export default Hobbies;
