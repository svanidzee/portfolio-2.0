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

import { archivo } from '../lib/fonts';
import { Box, Heading, Wrap, WrapItem, useStyleConfig } from '@chakra-ui/react';

type StacksProps = {
  title: string;
  data: string[];
};

const Stack = (props: StacksProps) => {
  const styles = useStyleConfig('WrapItem', { variant: 'base' });

  return (
    <Box as='section' py='vGutter'>
      <Box marginBottom='16'>
        <Heading className={archivo.className} variant='base'>
          Tools &amp; Softwares
        </Heading>
      </Box>

      <Wrap spacing='10'>
        {props.data.map((s) => (
          <WrapItem key={s} __css={styles}>
            {s}
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Stack;
