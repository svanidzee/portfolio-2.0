'use client';

import { Box, Text } from '@chakra-ui/react';

type InfoProps = {
  content1: string;
  content2: string;
};

const Info = (props: InfoProps) => {
  return (
    <Box bg='white' color='black'>
      <Text variant='content'>{props.content1}</Text>
      <Text variant='content'>{props.content2}</Text>
    </Box>
  );
};

export default Info;
