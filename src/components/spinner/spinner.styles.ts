import styled from 'styled-components';

export const StyledLoadingSpinner = styled.span`
  width: 1rem;
  height: 1rem;
  border: 2px solid white;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
