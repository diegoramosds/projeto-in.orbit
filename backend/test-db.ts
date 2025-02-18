import { Pool } from 'pg';
import { config } from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
config();

// Obter a URL do banco de dados do arquivo .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected successfully:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();
