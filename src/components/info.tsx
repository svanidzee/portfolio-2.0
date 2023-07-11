'use client';

import Section from './layouts/section';
import Paragraph from './paragraph';

export default function Info({ about }: { about: string }) {
  return (
    <Section>
      <Paragraph variant='secondary'>{about}</Paragraph>
    </Section>
  );
}
