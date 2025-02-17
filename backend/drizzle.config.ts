import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

const dbUrl = env.SUPABASE_DATABASE_URL.includes('?')
  ? `${env.SUPABASE_DATABASE_URL}&ssl=true&sslmode=require`
  : `${env.SUPABASE_DATABASE_URL}?ssl=true&sslmode=require`;

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
