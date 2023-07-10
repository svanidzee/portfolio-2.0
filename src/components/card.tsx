import Image from 'next/image';
import { Card, CardBody, HStack, LinkBox, LinkOverlay, LinkBoxProps } from '@chakra-ui/react';

import { playfair_display } from '../lib/fonts';
import Paragraph from './paragraph';

type ProjectCardProps = {
  name: string;
  githubUrl: string;
  description: string;
  url: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <LinkBox cursor='pointer'>
      <Card overflow='hidden' variant='outline'>
        <HStack py={10}>
          <CardBody p={0}>
            <LinkOverlay href={props.githubUrl} target='_blank'>
              <Paragraph variant='primary'>{props.name}</Paragraph>
              <Paragraph variant='sub' className={playfair_display.className}>
                {props.description}
              </Paragraph>
            </LinkOverlay>
          </CardBody>
          <Image width={400} height={500} src={props.url} alt={props.name} priority />
        </HStack>
      </Card>
    </LinkBox>
  );
};

export default ProjectCard;
