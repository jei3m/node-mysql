import express from 'express';
import dotenv from 'dotenv';
import testRoutes from '../routes/test.route';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at Port:${port}`)
});

app.get("/", (_req: Request, res: Response) => {
    res.send('API is Running')
});

app.use("/api/tests", testRoutes)

module.exports = app;