'use client';

import { Box } from '@chakra-ui/react';
import { Providers } from './providers';
import { rokkitt } from 'lib/fonts';

import Header from 'components/header';
import Footer from 'components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <Box as='main' maxW='max-content' className={rokkitt.className}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
