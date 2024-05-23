var dadosModel = require("../models/dadosModel");

function cadastrar(req, res) {
    var pergunta1 = req.body.pergunta1Server;
    var pergunta2 = req.body.pergunta2Server;
    var pergunta3 = req.body.pergunta3Server;
    var pergunta4 = req.body.pergunta4Server;
    var pergunta5 = req.body.pergunta5Server;
    var pergunta6 = req.body.pergunta6Server;
    var pergunta7 = req.body.pergunta7Server;
    var idUsuario = req.body.idUsuarioServer;

    if (pergunta1 == undefined || pergunta2 == undefined || pergunta3 == undefined || pergunta4 == undefined || pergunta5 == undefined || pergunta6 == undefined || pergunta7 == undefined) {
        res.status(400).send("As respostas estão undefined!");
    }

    dadosModel.cadastrar(idUsuario, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7).then(function(resposta){
        res.status(200).send("Respostas inseridas com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}