const http = require('http');
const url = require('url');
const porta = 3001;
const host = '127.0.0.1';// Se não especificar fica o padrão;

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(request.url);
    const params = url.parse(request.url, true).query;
    response.write('<br/>' + params.nome);
    response.write('<br/>' + params.curso);
    response.end();
});
servidor.listen(porta, host,()=>{console.log('Servidor Rodando!')});