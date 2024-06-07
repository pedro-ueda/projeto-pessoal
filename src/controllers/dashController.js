var dashModel = require("../models/dashModel");

function pegarDados(req, res) {
    dashModel.pegarDados().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    pegarDados,
}