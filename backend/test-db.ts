import { Pool } from 'pg';
import dotenv from 'dotenv';
import * as fs from 'node:fs';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false,
  ca: fs.readFileSync('./certs/us-east-1-bundle.pem').toString(),
   } // Necessário para o Heroku
});

pool.connect()
  .then(() => console.log('✅ Conectado ao banco de dados'))
  .catch(err => console.error('❌ Erro ao conectar com o banco de dados:', err));

export default pool;
