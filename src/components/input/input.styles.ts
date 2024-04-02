import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'black')};
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const ErrorWrapper = styled.div`
  height: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.5rem;
`;
