var database = require("../database/config");

function pegarDados() {
    var instrucao = `
    SELECT
  (SUM(CASE WHEN pergunta1 = 'Homem' THEN 1 ELSE 0 END)) AS homem,
  (SUM(CASE WHEN pergunta1 = 'Mulher' THEN 1 ELSE 0 END)) AS mulher,
  (SUM(CASE WHEN pergunta1 = 'Outros' THEN 1 ELSE 0 END)) AS outros,

  (SUM(CASE WHEN pergunta2 = 'Sim' THEN 1 ELSE 0 END)) AS desfocados,

  (SUM(CASE WHEN pergunta3 = 'Sim' THEN 1 ELSE 0 END)) AS desconcentrados,

  (SUM(CASE WHEN pergunta4 = 'Sim' THEN 1 ELSE 0 END)) AS descontinuos,

  (SUM(CASE WHEN pergunta5 = 'Sim' THEN 1 ELSE 0 END)) AS indispostos,

  TRUNCATE(AVG(pergunta7), 0) AS autoEstimaIdeal,

  COUNT(*) AS usuarios FROM dados;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    pegarDados
}