import styled from 'styled-components';
import { StyledText } from '../text/text.styles';

export const StyledButton = styled.button<{
  $isLoading: boolean;
  $fill: boolean;
}>`
  width: ${({ $fill }) => $fill && '100%'};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #222222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledText} {
    visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  }

  &:hover {
    background-color: black;
  }

  &:active {
    background-color: #222222;
  }

  &:disabled {
    background-color: #dadada;
    cursor: default;
  }
`;

export const StyledSpinnerWrapper = styled.div<{ $isLoading: boolean }>`
  visibility: ${({ $isLoading }) => ($isLoading ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
