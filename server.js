const express= require('express');

const app = express();

app.get('/', (req,res)=>
    res.send('<h1>Express en EC2</h1>')
)

app.listen(8080);

console.log('Server en puerto 8080')
