import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Listening on port ' + app.get('port'));
})

export default app;