import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

// Adiciona sslmode=require (e opcionalmente ssl=true) à URL
const dbUrl = env.DATABASE_URL;

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
    ssl: {
      rejectUnauthorized: false,
    }
  },
});

