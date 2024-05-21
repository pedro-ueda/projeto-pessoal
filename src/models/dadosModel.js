var database = require("../database/config");

function listar() {
    var instrucao = `
    SELECT * FROM dados; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7) {
    var instrucao = `
        INSERT INTO dados (pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7) VALUES ('${pergunta1}, ${pergunta2}, ${pergunta3}, ${pergunta2}, ${pergunta4}, ${pergunta5}, ${pergunta6}, ${pergunta7}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};