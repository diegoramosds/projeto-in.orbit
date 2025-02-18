// test-db.ts
import { pool } from './db';
import dotenv from 'dotenv';
dotenv.config();

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected successfully:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();
