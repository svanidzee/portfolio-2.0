'use client';

import { Text } from '@chakra-ui/react';
// import { Page } from '../../generated/schema';

// type A = 'hobbiesTitle' | 'hobbies';

type PickProps = Record<string, string>;

const Hobbies = (props: PickProps) => {
  console.log(props);
  return (
    <div style={{ background: '#000', color: '#fff' }}>
      <Text
        // mt='30px'
        p='10'
        fontSize='70px'
        fontWeight='700'
        lineHeight='80px'
        letterSpacing='-1.6px'
        textTransform='capitalize'
        sx={{ wordSpacing: '0' }}>
        {props.hobbies}
      </Text>
    </div>
  );
};

export default Hobbies;
