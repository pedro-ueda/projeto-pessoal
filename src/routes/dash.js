var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/mostrarHomem", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.mostrarHomem(req, res);
});

router.get("/mostrarMulher", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.mostrarMulher(req, res);
});

router.get("/mostrarOutros", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.mostrarOutros(req, res);
});

router.get("/pegarFoco", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarFoco(req, res);
});

router.get("/pegarConcentracao", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarConcentracao(req, res);
});

router.get("/pegarContinuidade", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarContinuidade(req, res);
});

router.get("/pegarIndisposicao", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarIndisposicao(req, res);
});

router.get("/pegarAutoEstimaIdeal", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarAutoEstimaIdeal(req, res);
});

router.get("/pegarUsuarios", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.pegarUsuarios(req, res);
});

module.exports = router;