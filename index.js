const express = require('express');
const app = express();
const porta = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Seja Bem-Vindo');
    return res.end();
});

app.listen(porta || 3000,()=>{
console.log('Rodando!');
})