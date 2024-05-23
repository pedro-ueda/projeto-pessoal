var dashModel = require("../models/dashModel");

function mostrarHomem(req, res) {
    dashModel.mostrarHomem().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrarMulher(req, res) {
    dashModel.mostrarMulher().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrarOutros(req, res) {
    dashModel.mostrarOutros().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    mostrarHomem,
    mostrarMulher,
    mostrarOutros
}