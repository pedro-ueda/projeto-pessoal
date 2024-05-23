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

function mostrarHomem() {

    fetch(`/dash/mostrarHomem`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('qtdHomens', `${resposta[0].homem}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('qtdMulheres', `${resposta[0].mulher}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('qtdOutros', `${resposta[0].outros}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('usuariosDesfocados', `${resposta[0].desfocados}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('usuariosDeconcentrados', `${resposta[0].desfocados}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('usuariosDescontinuos', `${resposta[0].descontinuos}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('usuariosIndispostos', `${resposta[0].indispostos}`);

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
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('autoEstimaIdeal', `${resposta[0].autoEstimaIdeal}`);

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