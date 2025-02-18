import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

const dbUrl = env.SUPABASE_DATABASE_URL;

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
