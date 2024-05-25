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

function pegarFoco(req, res) {
    dashModel.pegarFoco().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarConcentracao(req, res) {
    dashModel.pegarConcentracao().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarContinuidade(req, res) {
    dashModel.pegarContinuidade().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarIndisposicao(req, res) {
    dashModel.pegarIndisposicao().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarAutoEstimaIdeal(req, res) {
    dashModel.pegarAutoEstimaIdeal().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarUsuarios(req, res) {
    dashModel.pegarUsuarios().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    mostrarHomem,
    mostrarMulher,
    mostrarOutros,
    pegarFoco,
    pegarConcentracao,
    pegarContinuidade,
    pegarIndisposicao,
    pegarAutoEstimaIdeal,
    pegarUsuarios
}