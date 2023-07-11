'use client';

import { Box, Container, Divider, Heading, Text } from '@chakra-ui/react';

import { Works } from '../generated/schema';
import ProjectCard from './project-card';

type WantedKeys = 'id' | 'name' | 'githubUrl' | 'description' | 'url';
type ProjectsProps = Pick<Works, WantedKeys>;

export default function Projects({ data }: { data: ProjectsProps[] }) {
  return (
    <Container
      display='flex'
      flexDir='column'
      maxW='max-content'
      paddingInlineStart='6'
      paddingInlineEnd='6'>
      <Box>
        {data &&
          data.map(({ id, name, githubUrl, description, url }, i) => (
            <>
              <ProjectCard
                key={id}
                name={name}
                githubUrl={githubUrl}
                description={description}
                url={url}
              />
              {i !== data.length - 1 && <Divider variant='thick' />}
            </>
          ))}
      </Box>
    </Container>
  );
}
