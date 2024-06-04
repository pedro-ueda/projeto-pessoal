var database = require("../database/config");

function pegarDados() {
    var instrucao = `
    SELECT
  -- Contagem de respostas por pergunta 1
  (SUM(CASE WHEN pergunta1 = 'Homem' THEN 1 ELSE 0 END)) AS homem,
  (SUM(CASE WHEN pergunta1 = 'Mulher' THEN 1 ELSE 0 END)) AS mulher,
  (SUM(CASE WHEN pergunta1 = 'Outros' THEN 1 ELSE 0 END)) AS outros,

  -- Contagem de respostas 'Sim' por pergunta 2
  (SUM(CASE WHEN pergunta2 = 'Sim' THEN 1 ELSE 0 END)) AS desfocados,

  -- Contagem de respostas 'Sim' por pergunta 3
  (SUM(CASE WHEN pergunta3 = 'Sim' THEN 1 ELSE 0 END)) AS desconcentrados,

  -- Contagem de respostas 'Sim' por pergunta 4
  (SUM(CASE WHEN pergunta4 = 'Sim' THEN 1 ELSE 0 END)) AS descontinuos,

  -- Contagem de respostas 'Sim' por pergunta 5
  (SUM(CASE WHEN pergunta5 = 'Sim' THEN 1 ELSE 0 END)) AS indispostos,

  -- Média truncada da pergunta 7
  TRUNCATE(AVG(pergunta7), 0) AS autoEstimaIdeal,

  -- Contagem total de usuários
  COUNT(*) AS usuarios
FROM dados;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    pegarDados
}