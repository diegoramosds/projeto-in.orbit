import dotenv from 'dotenv';
dotenv.config();

import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

console.log(process.env.DATABASE_URL);

export const env = envSchema.parse(process.env);
