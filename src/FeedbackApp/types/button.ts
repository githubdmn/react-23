

export type ButtonProps = {
  children: React.ReactNode;
  version?: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};