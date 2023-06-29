'use client';

import { Text } from '@chakra-ui/react';
import { FC } from 'react';

// interface IInfoProps {
//   content1: string;
//   content2: string;
// }

type IInfoProps = Record<string, string>;

const Info: FC<IInfoProps> = (props) => {
  return (
    <div style={{ background: '#fff', color: '#000' }}>
      <Text
        // mt='30px'
        p='10'
        fontSize='70px'
        fontWeight='700'
        lineHeight='80px'
        letterSpacing='-1.6px'
        textTransform='capitalize'
        sx={{ wordSpacing: '0' }}>
        {props.content1}
      </Text>
      <Text
        p='10'
        // mt='30px'
        fontSize='70px'
        fontWeight='700'
        lineHeight='80px'
        letterSpacing='-1.6px'
        textTransform='capitalize'
        sx={{ wordSpacing: '0' }}>
        {props.content2}
      </Text>
    </div>
  );
};

export default Info;
