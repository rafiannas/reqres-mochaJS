// Helper untuk konfigurasi environment & header
import dotenv from 'dotenv';
dotenv.config();

export const baseConfig = {
  baseURL: process.env.BASE_URL || 'https://reqres.in/api',
  token: process.env.AUTH_TOKEN || ''
};

export const createHeaders = () => ({
  Authorization: `Bearer ${baseConfig.token}`,
  'Content-Type': 'application/json'
});
