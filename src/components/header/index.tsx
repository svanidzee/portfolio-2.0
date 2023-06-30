'use client';

import NextLink from 'next/link';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';
import { archivo } from '../../lib/fonts';
import { headerData } from './header-data';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const styles = useStyleConfig('Box', { variant: 'navigation' });

  if (pathname === '/') {
    return null;
  }

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
