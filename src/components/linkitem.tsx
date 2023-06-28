import { Icon } from '@chakra-ui/react';
import { ElementType } from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

type LinkItemProps = {
  icon: ElementType;
  href: string;
  isExternal: boolean;
};

export default function LinkItem(props: LinkItemProps) {
  const { href, icon, isExternal } = props;
  return (
    <Link as={NextLink} href={href} isExternal={isExternal}>
      <Icon
        as={icon}
        //   as={RiArrowRightUpLine}
        //   fontSize='6xl'
        //   viewBox=""
        //   boxSize='42'
        fontSize='8xl'
      />
    </Link>
  );
}
