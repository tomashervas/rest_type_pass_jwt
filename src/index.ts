import app from './app';
import './db';


app.listen(app.get('port'), () => {
    console.log('Express server listening on port'+ app.get('port'));
})