const http = require('http');
const porta = process.env.PORT;//Serve para caso eu não saiba qual porta minha plicação esteja usando

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Curso');
});

server.listen(porta || 3000, ()=>console.log('Servidor Rodando!'))