import express from 'express';
import dotenv from 'dotenv';
import testRoutes from '../routes/test.route';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at Port:${port}`)
});

app.use("/api/tests", testRoutes)

module.exports = app;