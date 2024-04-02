import { StyledButton, StyledSpinnerWrapper } from './button.styles';
import { Spinner, Text } from '..';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isLoading?: boolean;
  fill?: boolean;
};

export const Button = ({
  children,
  isLoading,
  fill = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $isLoading={!!isLoading} $fill={fill} {...props}>
      <Text color={'white'} fontWeight={'medium'}>
        {children}
      </Text>
      {isLoading && (
        <StyledSpinnerWrapper $isLoading={isLoading}>
          <Spinner />
        </StyledSpinnerWrapper>
      )}
    </StyledButton>
  );
};
