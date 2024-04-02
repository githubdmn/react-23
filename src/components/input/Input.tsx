import { forwardRef } from 'react';

import { Text } from '../text/Text';

import {
  ErrorWrapper,
  StyledInput,
  StyledInputContainer,
} from './input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef(
  (
    { error, ...restProps }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputContainer>
        <StyledInput ref={ref} $hasError={!!error} {...restProps} />
        <ErrorWrapper>
          {error && (
            <Text fontSize={'small'} color={'red'}>
              {error}
            </Text>
          )}
        </ErrorWrapper>
      </StyledInputContainer>
    );
  }
);
