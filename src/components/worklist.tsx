// 'use client';
// import { FC } from 'react';
// import { Box, Divider, Flex, Grid, Tag, Wrap } from '@chakra-ui/react';
// import { TfiArrowTopRight } from 'react-icons/tfi';
// import { Icon } from '@chakra-ui/react';
// import { RiArrowRightUpLine } from 'react-icons/ri';
// import { MdOutlineArrowOutward } from 'react-icons/md';
// import { Works } from '../generated/schema';
// import Tex from '../components/text';
// import { FiArrowUpRight } from 'react-icons/fi';

// import LinkItem from './linkitem';

// // FiArrowUpRight;
// // RiArrowRightUpLine;
// // MdOutlineArrowOutward;
// // LuArrowUpRight;
// // FiArrowUpRight;

// type PickProps = Pick<Works, 'name' | 'githubUrl' | 'description' | 'stack'>;

// // type PickProps = Pick<Works, 'name' | 'descripption'>;
// // interface WorklistProps {
// //   props: Array<PickProps> | null;
// // }

// // type WorklistProps = Array<Works>

// const Worklist = (props: PickProps) => {
//   return (
//     <>
//       <Flex flexDirection='row' justifyContent='space-around' alignItems='center'>
//         <Tex variant='woks_name'>{props.name}</Tex>
//         <Wrap gap={10}>
//           {props.stack.map((s) => (
//             <Tag key={s} size='lg' variant='outline' colorScheme='teal' px='5' py='2'>
//               {s}
//             </Tag>
//           ))}
//         </Wrap>
//         <LinkItem isExternal href={props.githubUrl as string} icon={FiArrowUpRight} />
//       </Flex>
//       <Tex variant='works_desc'>{props.description}</Tex>
//       <Divider orientation='horizontal' variant='thick' mt='20px' />
//     </>
//   );
// };

// export default Worklist;
