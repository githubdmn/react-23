import { StyledText } from './text.styles';

type TextProps = {
  children: string;
  color?: 'black' | 'white' | 'red';
  fontWeight?: 'light' | 'medium';
  fontSize?: 'small' | 'regular';
};

export const Text = ({
  children,
  color = 'black',
  fontWeight = 'light',
  fontSize = 'regular',
}: TextProps) => {
  return (
    <StyledText $color={color} $fontWeight={fontWeight} $fontSize={fontSize}>
      {children}
    </StyledText>
  );
};
