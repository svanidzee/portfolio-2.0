'use client';

import { Box, Container } from '@chakra-ui/react';

import { Providers } from './providers';
import { kanit, poppins, archivo, myFont } from '../lib/fonts';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <Box as='main' maxW='max-content' className={poppins.className}>
            {/* <Box as='main' maxW='max-content' className={myFont.className}> */}
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
