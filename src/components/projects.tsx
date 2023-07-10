'use client';

import { Divider, Container } from '@chakra-ui/react';

import { Works } from '../generated/schema';
import ProjectCard from './card';

type WantedKeys = 'id' | 'name' | 'githubUrl' | 'description' | 'url';
type ProjectsProps = Pick<Works, WantedKeys>;

const Projects = ({ works }: { works: ProjectsProps[] }) => {
  return (
    <Container display='flex' flexDir='column' maxW='container.xl' px={10}>
      {works &&
        works.map(({ id, name, githubUrl, description, url }, i) => (
          <>
            <ProjectCard
              key={id}
              name={name}
              githubUrl={githubUrl}
              description={description}
              url={url}
            />
            {i !== works.length - 1 && <Divider variant='thick' />}
          </>
        ))}
    </Container>
  );
};

export default Projects;
