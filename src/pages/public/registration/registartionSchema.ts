import * as z from 'zod';

import { FormNames } from '../../../shared/types/FormNames';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerFormFields: FormNames<RegisterFormData> = {
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
} as const;
