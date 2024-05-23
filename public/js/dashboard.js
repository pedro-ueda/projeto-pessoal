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

function mostrarHomem() {

    fetch(`/dash/mostrarHomem`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                sessionStorage.setItem('qtdHomens', `${resposta[0].pergunta1}`);

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

                sessionStorage.setItem('qtdMulheres', `${resposta[0].pergunta2}`);
                
                var qtdMulheres = sessionStorage.getItem('qtdMulheres');

                console.log(qtdMulheres);

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

                sessionStorage.setItem('qtdOutros', `${resposta[0].pergunta3}`);

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