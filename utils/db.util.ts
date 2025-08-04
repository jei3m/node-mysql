import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config()

export const db = mysql.createPool({
    namedPlaceholders: true,
    host: process.env.HOST,
    port: Number(process.env.PORT),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});