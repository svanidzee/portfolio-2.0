'use client';

import { Heading, Box, useHighlight, Mark } from '@chakra-ui/react';

import { roboto, aboreto, kablammo } from '../lib/fonts';

const Highlight = () => {
  const chunks = useHighlight({
    text: 'Hello, I am a Irakli, passionate about making useful, solid and usable projects. My background includes working with both Frontend and Backend technologies, giving me a diverse range of experience and skills. There are a lot of things and technologies i had not yet learned and I am motivated to learn as much aspossible',
    query: ['Irakli', 'background', 'technologies', 'learned'],
  });

  return (
    <Heading lineHeight='tall'>
      {chunks.map(({ match, text }) => {
        if (!match)
          return (
            <Box as='u' className={roboto.className}>
              {text}
            </Box>
          );

        return text === 'Irakli' ? (
          <Box as='u' className={kablammo.className}>
            {text}
          </Box>
        ) : (
          <Mark bg='black' color='white' className={aboreto.className} px='2' py='1'>
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
};

export default Highlight;
