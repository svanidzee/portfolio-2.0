import { Text, TextProps } from '@chakra-ui/react';

type TexProps = TextProps & {
  variant: string;
};

const Tex = ({ children, variant }: TexProps) => {
  return (
    <Text as='p' variant={variant}>
      {children}
    </Text>
  );
};

export default Tex;
