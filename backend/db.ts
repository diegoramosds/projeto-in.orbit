import { Pool } from 'pg';
import { config } from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
