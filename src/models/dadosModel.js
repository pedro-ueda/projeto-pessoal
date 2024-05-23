var database = require("../database/config");

function cadastrar(idUsuario, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7) {
    var instrucao = `
    INSERT INTO dados (fkUsuario, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7) 
    VALUES ('${idUsuario}', '${pergunta1}', '${pergunta2}', '${pergunta3}', '${pergunta4}', '${pergunta5}', '${pergunta6}', '${pergunta7}');
`;
    console.log("Executando a instrução SQL: \n" + instrucao + 'Acabou a instrução!');

    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};