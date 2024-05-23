var database = require("../database/config");

function mostrarHomem() {
    var instrucao = `
    select count(pergunta1) as pergunta1 from dados where pergunta1 = 'Homem';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function mostrarMulher() {
    var instrucao = `
    select count(pergunta1) as pergunta2 from dados where pergunta1 = 'Mulher';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function mostrarOutros() {
    var instrucao = `
    select count(pergunta1) as pergunta3 from dados where pergunta1 = 'Outros';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    mostrarHomem,
    mostrarMulher,
    mostrarOutros
}