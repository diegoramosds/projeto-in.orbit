import { Pool } from 'pg';
import { config } from 'dotenv';
import fs from 'node:fs';

config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./certs/us-east-1-bundle.pem').toString(),
  },
});

export default pool;
