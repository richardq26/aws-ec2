const express= require('express');

const app = express();

app.get('/', (req,res)=>
    res.send('Hola mundo desde aws')
)

app.listen(3000);

console.log('Server en puerto 3000')
