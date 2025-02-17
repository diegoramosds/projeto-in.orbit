import dotenv from 'dotenv';
dotenv.config();

import z from 'zod';

// Validação das variáveis de ambiente
const envSchema = z.object({
  SUPABASE_DATABASE_URL: z.string().url(),
});

// Verifica se a variável de ambiente do Supabase está definida
if (!process.env.SUPABASE_DATABASE_URL) {
  throw new Error('SUPABASE_DATABASE_URL is not defined!');
}

// Log para confirmar que a variável está carregada corretamente
console.log(process.env.SUPABASE_DATABASE_URL);

// Verifica as variáveis de ambiente com Zod
export const env = envSchema.parse(process.env);
