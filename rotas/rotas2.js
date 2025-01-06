const express = require('express');
const route = express.Router();

let filmesInfo = [
    {'filmes':'Star Wars 3: A Vingança Dos Sith'},
    {'filmes':'Interestelar'},
    {'filmes':'O Predador - 1987'},
    {'filmes':'Alien vs Predador'},
    {'filmes':'Alien: O Oitavo Passageiro'},
    {'filmes':'Megatubarão'},
];
route.get('/',(request, response)=>{
    response.json({
        'Filmes':'Meus Filmes Preferidos'
    });
});

route.get('/:filmeId',(request, response)=>{
    const filmesLocal = request.params.filmeId;
    const filmeI = filmesInfo.find(f=>f.filmes==filmesLocal);
    if(!filmeI){
        response.status(404).json(
            {'Erro!':'Filme não Encontrado!'}
        );
    }
    else{
        response.status(200).json(
            {filmeI}
        )
    }

})

module.exports = route;