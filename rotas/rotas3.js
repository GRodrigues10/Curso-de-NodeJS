const express = require('express');
const route3 = express.Router();

let seriesName = [
    {'series':'round6'},
    {'series':'theoffice'},
    {'series':'supernatural'},
    {'series':'gameofthrones'},
];

route3.get('/',(request, response)=>{
    response.json(
        {"Página incial":'Séries do Balacobaco'}
    )
});

route3.get('/:seriesId',(request, response)=>{
    const serie = request.params.seriesId;
    const serieI = seriesName.find(s=>s.series == serie);
    if(!serieI){
        response.status(400).json(
            {'ERROR!':'Série não encontrada!'}
        )
    }
    else{
        response.status(200).json({serieI})
    }
})

module.exports = route3;