// https://pt.stackoverflow.com/questions/484434/typescript-error-property-user-does-not-exist-on-type-requestparamsdictionar

import { z } from 'zod';

export const productSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(3, { message: 'Name must be longer than 2 characters' }),

  amount: z.string({
    required_error: 'Amount is required',
    invalid_type_error: 'Amount must be a string',
  }).min(3, { message: 'Amount must be longer than 2 characters' }),

});

export type Product = z.infer<typeof productSchema>;

export type ProductObj = {
  item: {
    id: number,
    name: string, 
    amount: string
  }
};