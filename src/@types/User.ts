// https://pt.stackoverflow.com/questions/484434/typescript-error-property-user-does-not-exist-on-type-requestparamsdictionar

import { z } from 'zod';

export const userSchema = z.object({

  username: 
    z.string({ // https://www.npmjs.com/package/zod#strings
      required_error: 'Username is required',
      invalid_type_error: 'Username must be a string',
    }).min(3, { message: 'Username must be longer than 2 characters' }),

  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(8, { message: 'Password must be longer than 7 characters' }),

  level: z.number({ // https://www.npmjs.com/package/zod#numbers
    required_error: 'Level is required',
    invalid_type_error: 'Level must be a number',
  }).gte(1, { message: 'Level must be greater than 0' }),

  classe: z.string({
    required_error: 'Classe is required',
    invalid_type_error: 'Classe must be a string',
  }).min(3, { message: 'Classe must be longer than 2 characters' }),

});

export const userWithIDSchema = userSchema.extend({
  id: z.number(),
});

export const loginSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  
  password: z.string({
    required_error: 'Password is required',
  }),

});

export type Token = {
  id: number;
  username: string;
};

export type User = z.infer<typeof userSchema>; // https://www.npmjs.com/package/zod#basic-usage

export type UserID = z.infer<typeof userWithIDSchema>;

export type Login = z.infer<typeof loginSchema >;