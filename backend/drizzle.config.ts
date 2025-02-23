import { defineConfig } from 'drizzle-kit';
import { env } from './src/env';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida no .env');
}

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL, // Agora é uma string garantida
  },
});