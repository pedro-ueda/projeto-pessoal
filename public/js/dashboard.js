var respostasUsuarios = window.sessionStorage.getItem("respostasUsuarios").split(",");

function mostrarRespostasDoUsuario() {
    for (let index = 0; index < respostasUsuarios.length; index++) {
        p_respostasDosUsuario.innerHTML += `Resposta ${index + 1}: ${respostasUsuarios[index]}<br>`;

    }
}

mostrarRespostasDoUsuario();

mostrarHomem();
mostrarMulher();
mostrarOutros();
pegarFoco();
pegarConcentracao();
pegarContinuidade();
pegarIndisposicao();
pegarAutoEstimaIdeal();
pegarUsuarios();

function mostrarHomem() {

    fetch(`/dash/mostrarHomem`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaHomem) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaHomem)}`);

                respostaHomem.reverse();

                sessionStorage.setItem('qtdHomens', `${respostaHomem[0].homem}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mostrarMulher() {

    fetch(`/dash/mostrarMulher`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaMulheres) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaMulheres)}`);

                respostaMulheres.reverse();

                sessionStorage.setItem('qtdMulheres', `${respostaMulheres[0].mulher}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mostrarOutros() {

    fetch(`/dash/mostrarOutros`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaOutros) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaOutros)}`);

                respostaOutros.reverse();

                sessionStorage.setItem('qtdOutros', `${respostaOutros[0].outros}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarFoco() {

    fetch(`/dash/pegarFoco`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaFoco) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaFoco)}`);

                respostaFoco.reverse();

                sessionStorage.setItem('usuariosDesfocados', `${respostaFoco[0].desfocados}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarConcentracao() {

    fetch(`/dash/pegarConcentracao`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaConcentracao) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaConcentracao)}`);

                respostaConcentracao.reverse();

                sessionStorage.setItem('usuariosDeconcentrados', `${respostaConcentracao[0].desconcentrados}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarContinuidade() {

    fetch(`/dash/pegarContinuidade`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaContinuidade) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaContinuidade)}`);

                respostaContinuidade.reverse();

                sessionStorage.setItem('usuariosDescontinuos', `${respostaContinuidade[0].descontinuos}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarIndisposicao() {

    fetch(`/dash/pegarIndisposicao`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaIndisposicao) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaIndisposicao)}`);

                respostaIndisposicao.reverse();

                sessionStorage.setItem('usuariosIndispostos', `${respostaIndisposicao[0].indispostos}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarAutoEstimaIdeal() {

    fetch(`/dash/pegarAutoEstimaIdeal`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaAutoEstimaIdeal) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaAutoEstimaIdeal)}`);

                respostaAutoEstimaIdeal.reverse();

                sessionStorage.setItem('autoEstimaIdeal', respostaAutoEstimaIdeal[0].autoEstimaIdeal);

                // plotarGraficoAutoEstima(respostaAutoEstimaIdeal);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarUsuarios() {

    fetch(`/dash/pegarUsuarios`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (respostaUsuarios) {
                console.log(`Dados recebidos: ${JSON.stringify(respostaUsuarios)}`);

                respostaUsuarios.reverse();

                sessionStorage.setItem('usuarios', `${respostaUsuarios[0].usuarios}`);

                // plotarGrafico(resposta, idAquario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

