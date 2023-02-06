import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth';

const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

export default app;