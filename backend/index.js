import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import DBconnect from './config/DBconnect.js';
import employeeRoutes from './routes/empRoutes.js';

config();
const app = express();

app.use(cors());
app.use(express.json());

// route
app.use('/employees', employeeRoutes);

// connecting to database and starting server
DBconnect()
  .then(() => {
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`Server failed to start: ${error.message}`);
    process.exit(1);
  });
