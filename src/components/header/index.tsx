'use client';

import NextLink from 'next/link';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';
import { archivo } from '../../lib/fonts';
import { headerData } from './header-data';

export default function Header() {
  const styles = useStyleConfig('Box', { variant: 'navigation' });

  return (
    <Box as='header' aria-label='Main navigation' __css={styles}>
      {headerData.map(({ path, label }) => (
        <Box key={label} as={NextLink} href={path} prefetch={false} className={archivo.className}>
          <Text variant='navigation'>{label}</Text>
        </Box>
      ))}
    </Box>
  );
}
