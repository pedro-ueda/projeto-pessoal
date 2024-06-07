var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/pegarDados", function (req, res) {
    dashController.pegarDados(req, res);
});

module.exports = router;