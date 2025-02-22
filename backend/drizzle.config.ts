import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'
import * as fs from "node:fs";

const databaseUrl = `${process.env.DATABASE_URL}?sslmode=require`;


export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
    ssl: {
      ca: fs.readFileSync("./certs/us-east-1-bundle.pem").toString(),
      rejectUnauthorized: false,
    }
  },
});

