const express= require('express');

const app = express();
app.set('port', 3000);
const puerto = app.get('port');
app.get('/', (req,res)=>{
    res.send('AWS EC2');
})

app.listen(puerto, ()=>{
    console.log('Server on port ' , puerto);
});
