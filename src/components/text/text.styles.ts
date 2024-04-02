import { styled } from 'styled-components';

type StyledTextProps = {
  $color: 'black' | 'white' | 'red';
  $fontWeight: 'light' | 'medium';
  $fontSize: 'small' | 'regular';
};

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ $fontSize }) =>
    $fontSize === 'regular' ? '1rem' : '0.75rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: 1.5;
  color: ${({ $color }) => $color};
`;
