const http = require('http');
const fs = require('fs');
const porta = process.env.PORT;

const server = http.createServer((request, response)=>{
    fs.appendFile("teste.txt", 'Curso de Node - CFB CURSOS',(erro)=>{//Criando Arquivos!!
        if(erro) throw erro;
        console.log('Arquivo Criado!');
    });
    return response.end();
});
server.listen(porta || 3000, ()=>{console.log('Servidor Rodando!')});