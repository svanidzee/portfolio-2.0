// 'use client';

// import { FC } from 'react';
// import { Stack } from '../generated/schema';
// import { Box, Flex, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';

// type PickProps = Pick<Stack, 'title' | 'skills' | 'tools'>;

// const Stacks = (props: PickProps) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       Skills:
//       <ul>
//         {props.skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>
//       Tools:
//       <ul>
//         {props.tools.map((tool) => (
//           <li key={tool}>{tool}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Stacks;

'use client';

import { Flex, Text } from '@chakra-ui/react';

type StacksProps = {
  title: string;
  data: string[];
};

const Stacks = (props: StacksProps) => {
  return (
    <Flex
      flexDir='column'
      justifyContent='space-between'
      style={{ background: '#fff', color: '#000' }}
      background='#fff'
      color='#000'>
      <Text
        // mt='30px'
        // p='10'
        fontSize='70px'
        fontWeight='700'
        lineHeight='80px'
        letterSpacing='-1.6px'
        textTransform='capitalize'
        sx={{ wordSpacing: '0' }}>
        {props.title}
      </Text>
      <div>
        {props.data.map((s) => (
          <Text
            // mt='30px'
            key={s}
            px='10'
            fontSize='50px'
            fontWeight='700'
            lineHeight='80px'
            letterSpacing='-1.6px'
            textTransform='capitalize'
            sx={{ wordSpacing: '0' }}>
            {s}
          </Text>
        ))}
      </div>
    </Flex>
  );
};

export default Stacks;
