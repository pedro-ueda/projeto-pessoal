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

module.exports = router;