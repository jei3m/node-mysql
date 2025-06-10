import {Request, Response} from 'express';
import dotenv from "dotenv";
const mysql = require('mysql');

dotenv.config();

const conn = mysql.createPool({
  connectionLimit: process.env.CONNECTION_LIMIT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

export const createTest = (req: Request, res: Response): void => {
    const {name, description} = req.body;
    
    conn.query('INSERT INTO test (name, description) VALUES (?, ?)', [name, description], (err: string) => {
        try {
            if (err) throw err;
            res.status(201).json({success: true, message:"Successfully inserted to table"});
        } catch (err) {
            res.status(500).json({success: false, message: "Internal Server Error: Create Test"});
        }
    });
};

export const getTests = (req: Request, res: Response): void => {
    conn.query('SELECT * FROM test', (err: string, rows: []): void => {
        if (err) throw err;
        try {
            res.status(201).json({success: true, data: rows});
        } catch (err) {
            res.status(500).json({success: false, message: "Internal Server Error: Get Tests"});
        }
    });
}

export const updateTest = (req: Request, res: Response): void => {
    const testId = req.params.id;
    const {name, description} = req.body;

    conn.query('UPDATE test set name = ?, description = ? WHERE id = ?', [name, description, testId], (err:string) => {
        try {
            if (err) throw err;
            res.status(201).json({success: true, message: "Test updated successfully"});
        } catch (err) {
            res.status(500).json({success: false, message: "Internal Server Error: Edit Test"});
        }
    });
};

export const deletetest = (req: Request, res: Response): void => {
    const testId = req.params.id;
    conn.query('DELETE FROM test WHERE id = ?', testId, (err:string) => {
        try {
            if (err) throw err;
            res.status(201).json({success: true, message: "Test deleted succesfully"});
        } catch (err) {
            res.status(500).json({success: false, message: "Internal Server Error: Delete Test"});
        }
    });
};
