var dadosModel = require("../models/dadosModel");

function listar(req, res) {
    dadosModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var pergunta1 = req.body.pergunta1;
    var pergunta2 = req.body.pergunta2;
    var pergunta3 = req.body.pergunta3;
    var pergunta4 = req.body.pergunta4;
    var pergunta5 = req.body.pergunta5;
    var pergunta6 = req.body.pergunta6;
    var pergunta7 = req.body.pergunta7;

    if (pergunta1 == undefined || pergunta2 == undefined || pergunta3 == undefined || pergunta4 == undefined || pergunta5 == undefined || pergunta6 == undefined || pergunta7 == undefined) {
        res.status(400).send("As respostas estão undefined!");
    }

    dadosModel.cadastrar(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7).then(function(resposta){
        res.status(200).send("Respostas inseridas com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}