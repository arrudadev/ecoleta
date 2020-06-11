import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (request, response) => response.json({ teste: 'teste' }));

app.listen(process.env.SERVER_PORT);
