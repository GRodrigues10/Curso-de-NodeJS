const express = require('express');
const rotas = express.Router();//Usando rotas no lugar do app.

let cursosInfo = [

    {'curso':'NodeJS', 'info':'Curso completo de Node JS'},
    {'curso':'ReactJS', 'info':'Curso completo de React JS'},
    {'curso':'Javascript', 'info':'Curso completo de Javascript'}

];

rotas.get('/',(req, res)=>{
    res.json(
        {'Ola':'Seja Bem-Vindo!'}
    )
});

rotas.get('/:cursoid',(req, res)=>{

        const curso = req.params.cursoid;
        const cursoInformacao = cursosInfo.find(i=>i.curso == curso);//Find é pesquisar
        if(!cursoInformacao){
            res.status(404).json(//Not Found
                {erro:'Curso não encontrado!', cursoPesquisado:curso}
            );
        }
        else{
            res.status(200).json(cursoInformacao);//Ok
        }
});


module.exports = rotas;