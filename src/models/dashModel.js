var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM dados;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}