import * as z from 'zod';

import { FormNames } from '../types/FormNames';

export const addItemSchema = z.object({
  title: z.string().min(2),
});

export type AddItemFormData = z.infer<typeof addItemSchema>;

export const addItemFormFields: FormNames<AddItemFormData> = {
  title: 'title',
} as const;
