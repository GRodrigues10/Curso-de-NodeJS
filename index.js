const express = require('express');
const rotas = require('./rotas/rotas3');
const porta = process.env.PORT || 3000;

const app = express();

app.use('/', rotas);
app.get('*',(req, res)=>{
    res.send('Página Principal')
});

app.listen(porta, ()=>{console.log('Server Running')});


