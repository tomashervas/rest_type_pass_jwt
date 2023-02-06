import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/prueba');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

connection.on('error', err => { throw err; });

