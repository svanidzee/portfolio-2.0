'use client';

import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

type IInfoProps = Record<string, string>;

const Info: FC<IInfoProps> = (props) => {
  return (
    <Box bg='white' color='black'>
      <Text variant='content'>{props.content1}</Text>
      <Text variant='content'>{props.content2}</Text>
    </Box>
  );
};

export default Info;
