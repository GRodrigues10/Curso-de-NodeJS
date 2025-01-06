const express = require('express');
const app = express();//Retornando o express - aplicação
const porta = process.env.PORT;

app.get('/',(request, response)=>{
    response.send('Seja Bem-Vindo');
});

app.get('/canal',(request, response)=>{
    response.json({
        "canal":"CFB CURSOS"
    });
})

app.get('/sobre',(request, response)=>{
        response.json({
            "Quem Somos?":"A melhor empresa de papel do mundo!",
            "Número de Funcionários": "15 pessoas e o Toby"
        });
    });


    
app.listen(porta || 3000, ()=>console.log('Servidor Rodando!'));