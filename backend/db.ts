import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.SUPABASE_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Caso contrário, pode ser necessário configurar SSL
  },
});

pool.connect()
  .then(() => console.log("Conexão com o banco de dados Supabase bem-sucedida!"))
  .catch((err: Error) => console.error("Erro ao conectar com o banco de dados:", err));
