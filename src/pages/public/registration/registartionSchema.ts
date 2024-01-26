import * as z from 'zod';

import { FormNames } from '../../../shared/types/FormNames';

export const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, { message: 'Username must be at least 2 characters long!' }),
  email: z.string().email(),
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerFormFields: FormNames<RegisterFormData> = {
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
} as const;
