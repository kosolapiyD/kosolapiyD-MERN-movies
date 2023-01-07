import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import moviesRoutes from './routes/movies.js';

const app = express();
dotenv.config();

// the limit 30mb is for the img
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/movies', moviesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(`${error.message} did not connect`));
