import { z } from 'zod';

export type FormNames<T> = {
  [name in keyof T]: name;
};

export const signUpSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters long!' }),
});

export type SignUpData = z.infer<typeof signUpSchema>;

export const signUpFieldNames: FormNames<SignUpData> = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
};
