var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /dados/cadastrar
    dadosController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /dados/listar
    dadosController.listar(req, res);
});

module.exports = router;