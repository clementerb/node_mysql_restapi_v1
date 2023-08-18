import { config } from 'dotenv';

config();

export const APP_NAME = process.env.APP_NAME || '[node-mysql-restapi] ';
export const APP_PORT = process.env.APP_PORT || 5000;

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;
