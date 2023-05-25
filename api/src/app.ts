'use strict';

const PORT = process.env.PORT || 3000;

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});