const express= require('express');

const app = express();
app.set('port', 3000);
const puerto = app.get('port');
app.get('/', (req,res)=>
    res.send('AWS EC2')
)

app.listen(3000);

console.log('Server en puerto 3000')
