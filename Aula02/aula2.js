 //Criar servidor

const http = require('http'); //Usar o módulo http, criando um objeto http. Faz uma requisição e retorna uma resposta.

http.createServer((requisicao, resposta)=>{//nessa ordem!
    resposta.writeHead(200,{'Content-Type': 'Text/plain'});//Escrevendo no cabeçalho do arquivo, tipo de conteúdo: texto comum!


resposta.write('Meu Servidor\n');//Escrevendo
resposta.end();//Final da resposta
}).listen(2264);//Criando uma porta!