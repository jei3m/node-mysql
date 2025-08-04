import {Request, Response} from 'express';
const {db} = require('../utils/db.util.ts'),
    sql = require('../sql/test.sql.ts');

export const createTest = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body.payload,
        actionType = 'create';

    await db.query(
        sql.createTest(), 
        {
            actionType,
            name,
            description
        }
    );

    const [result] = await db.query(
        sql.returnResponse()
    );

    res.json
    ({ 
        success: true, 
        response: JSON.parse(result[0].response)
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to Create Test';
    res.status(500).json({
        success: false,
        message,
    }); 
  };
};

export const getTests = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query(
            sql.getTests()
        )
        res.status(201).json({
            success: true, 
            data: rows
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to Get Tests';
        res.status(500).json({
            success: false,
            message,
        });
    }
};

export const updateTest = async (req: Request, res: Response) => {
    try {
        const id = req.params.id,
            {name, description} = req.body.payload,
            actionType = 'update';

        await db.query(
            sql.updateTest(),
            {
                actionType,
                id,
                name,
                description
            }
        );

        const [result] = await db.query(
            sql.returnResponse()
        );

        res.json({
            success: true,
            response: JSON.parse(result[0].response)
        });
        
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to Update Test';
        res.status(500).json({
            success: false,
            message,
        });
    };
};

export const deletetest = async (req: Request, res: Response) => {
    try {
        const id = req.params.id,
            actionType = 'delete';
        
        await db.query(
            sql.deleteTest(),
            {
                actionType,
                id
            }
        );

        const [result] = await db.query(
            sql.returnResponse()
        );

        res.json({
            success: true,
            response: JSON.parse(result[0].response)
        });

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to Delete Test';
        res.status(500).json({
            success: false,
            message,
        });
    };
};
