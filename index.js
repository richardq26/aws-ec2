const app = require('./app');
const port = app.get('port');

app.listen(app.get('port'),()=>{
    console.log('Server on', port)
})