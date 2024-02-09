import * as z from 'zod';

import { FormNames } from '../../../shared/types/FormNames';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginFormFields: FormNames<LoginFormData> = {
  email: 'email',
  password: 'password',
} as const;
