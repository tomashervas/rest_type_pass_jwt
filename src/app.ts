import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import passport from 'passport';
import passportJwtMiddleware from './middlewares/passport';

import authRoutes from './routes/auth';
import protectedRoutes from './routes/protected';

const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passport.use(passportJwtMiddleware);


app.use(authRoutes);
app.use(protectedRoutes);

export default app;