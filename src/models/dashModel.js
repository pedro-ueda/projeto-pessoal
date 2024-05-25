var database = require("../database/config");

function mostrarHomem() {
    var instrucao = `
    select count(pergunta1) as homem from dados where pergunta1 = 'Homem';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function mostrarMulher() {
    var instrucao = `
    select count(pergunta1) as mulher from dados where pergunta1 = 'Mulher';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function mostrarOutros() {
    var instrucao = `
    select count(pergunta1) as outros from dados where pergunta1 = 'Outros';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarFoco() {
    var instrucao = `
    select count(pergunta2) as desfocados from dados where pergunta2 = 'Sim';

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarConcentracao() {
    var instrucao = `
    select count(pergunta3) as desconcentrados from dados where pergunta3 = 'Sim';

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarContinuidade() {
    var instrucao = `
    select count(pergunta4) as descontinuos from dados where pergunta4 = 'Sim';

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarIndisposicao() {
    var instrucao = `
    select count(pergunta5) as indispostos from dados where pergunta5 = 'Sim';

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarAutoEstimaIdeal() {
    var instrucao = `
    select truncate(avg(pergunta7), 0) as autoEstimaIdeal from dados;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function pegarUsuarios() {
    var instrucao = `
    select count(*) as usuarios from dados;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    mostrarHomem,
    mostrarMulher,
    mostrarOutros,
    pegarFoco,
    pegarConcentracao,
    pegarContinuidade,
    pegarIndisposicao,
    pegarAutoEstimaIdeal,
    pegarUsuarios
}