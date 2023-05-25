'use strict';

const PORT = process.env.PORT || 5000;

import express from 'express';
import cors from 'cors';
import trainsRouter from './routes/Trains';

const app = express();

app.use(cors());
app.use('/trains', express.json(), trainsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});