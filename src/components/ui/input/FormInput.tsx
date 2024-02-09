import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { Input, InputProps } from './Input';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  error?: FieldError;
  register: UseFormRegister<T>;
} & Omit<InputProps, 'error' | 'register'>;

export const FormInput = <T extends FieldValues>({
  name,
  error,
  register,
  ...inputProp
}: FormInputProps<T>) => {
  return (
    <Input
      error={error?.message}
      {...inputProp}
      register={() => register(name)}
    />
  );
};
