import Image from 'next/image';
import { LinkBox, Card, CardBody, LinkOverlay, Stack } from '@chakra-ui/react';

import { playfair_display } from '../lib/fonts';
import Paragraph from './paragraph';

type ProjectCardProps = {
  name: string;
  githubUrl: string;
  description: string;
  url: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <LinkBox cursor='pointer'>
      <Card
        overflow='hidden'
        variant='outline'
        direction={{ sm: 'column', md: 'column', lg: 'row' }}
        py={10}>
        <CardBody px={0} maxW='auto' py={5}>
          <LinkOverlay href={props.githubUrl} target='_blank'>
            <Paragraph variant='primary' textAlign='left'>
              {props.name}
            </Paragraph>
            <Paragraph variant='tertiary' className={playfair_display.className}>
              {props.description}
            </Paragraph>
          </LinkOverlay>
        </CardBody>
        <Image src={props.url} alt={props.name} width={400} height={500} priority />
      </Card>
    </LinkBox>
  );
}
