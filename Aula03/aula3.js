const http = require('http');
const porta = 3000;
const host = '127.0.0.1';// Se não especificar fica o padrão;

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url=='/'){
        response.write('<h1>Seja Bem-Vindo</h1>');
    } else if(request.url=='/canal'){
        response.write('<h1>CFB Cursos</h1>')
    }
    else if(request.url=='/curso'){
        response.write('<h1>Conheça os cursos do nosso canal</h1>')
    }

    else if(request.url=='/curso/node'){
        response.write('<h1>Curso de Node JS</h1>')
    }
    response.end();
});
servidor.listen(porta, host,()=>{console.log('Servidor Rodando!')});