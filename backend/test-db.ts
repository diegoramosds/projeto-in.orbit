import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  host: 'db.qofqsbwhpuitiafpkndy.supabase.co', // Força uso de IPv4
  port: 5432,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Conectado ao banco de dados!');
    client.release();
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
};

testConnection();
