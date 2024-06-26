var email = window.sessionStorage.getItem('EMAIL_USUARIO');
var idUsuario;


if (email == null) {
    div_msg.innerHTML = `<p class="inter-p">Você deve ter um login para ter acesso ao questionário!</p>`;
} else {
    var respostasUsuarios = [];
    var sentePerdido;

    function mostrarQuiz() {

        div_msg.innerHTML = "";

        div_msg.innerHTML = `<div class="box-titulo flex">
    <h1 class="inter-titulo titulo-quiz">1. Pergunta</h1>
    </div>
    
    <p class="inter-p">Como você se identifica?</p>
    
    <select id="sl_genero" class="sombra">
    <option value="#">Selecione seu gênero</option>
    <option value="Homem">Homem</option>
    <option value="Mulher">Mulher</option>
    <option value="Outros">Outros</option>
    </select>
    
    <button class="enviar sombra inter-titulo" onclick="pergunta2()">Enviar</button>
    </div>`;


    }

    function pergunta2() {

        if (sl_genero.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            pergunta1 = sl_genero.value;

            respostasUsuarios.push(sl_genero.value);

            div_msg.innerHTML = `<div class="box-titulo flex">
        <h1 class="inter-titulo titulo-quiz">2. Pergunta</h1>
        </div>
        
        <p class="inter-p">Você se sente meio perdido, ou fora do contexto em alguns momentos do seu dia a dia?</p>
            
        <select id="sl_sentePerdido" class="sombra">
        <option value="#">Selecione uma opção</option>
        <option>Sim</option>
        <option>Não</option>
        </select>
        
        <button class="enviar sombra inter-titulo" onclick="pergunta3()">Enviar</button>
        </div>`;
        }
    }

    function pergunta3() {
        sentePerdido = sl_sentePerdido.value;

        pergunta2 = sentePerdido;

        if (sentePerdido == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sentePerdido);

            div_msg.innerHTML = `<div class="box-titulo flex">
        <h1 class="inter-titulo titulo-quiz">3. Pergunta</h1>
        </div>
        
        <p class="inter-p">Você acha que não consegue se concentrar nas suas atividades?</p>
        
        <select id="sl_concentrado" class="sombra">
        <option value="#">Selecione uma opção</option>
        <option>Sim</option>
        <option>Não</option>
        </select>
        
        <button class="enviar sombra inter-titulo" onclick="pergunta4()">Enviar</button>
        </div>`;

        }


    }

    function pergunta4() {

        if (sl_concentrado.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_concentrado.value);

            pergunta3 = sl_concentrado.value;

            div_msg.innerHTML = `
        <div class="box-titulo flex">
        <h1 class="inter-titulo titulo-quiz">4. Pergunta</h1>
        </div>
        
        <p class="inter-p">Você geralmente passa por momentos de indisposião ao longo do seu cotidiano?</p>
        
        <select id="sl_indisposicao" class="sombra">
        <option value="#">Selecione uma opção</option>
        <option>Sim</option>
        <option>Não</option>
        </select>
        
        <button class="enviar sombra inter-titulo" onclick="pergunta5()">Enviar</button>
        </div>`;

        }
    }

    function pergunta5() {

        if (sl_indisposicao.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_indisposicao.value);

            div_msg.innerHTML = `
        <div class="box-titulo flex">
        <h1 class="inter-titulo titulo-quiz">5. Pergunta</h1>
        </div>
        
            <p class="inter-p">Você acredita que seu foco poderia ser melhor?</p>
            
            <select id="sl_focado" class="sombra">
            <option value="#">Selecione uma opção</option>
            <option>Sim</option>
            <option>Não</option>
            </select>
            
            <button class="enviar sombra inter-titulo" onclick="pergunta6()">Enviar</button>
            </div>`;

        }

    }

    var autoEstimaAntes;

    function pergunta6() {

        if (sl_focado.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_focado.value);

            div_msg.innerHTML = `
            <div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">6. Pergunta</h1>
            </div>
            
            <p class="inter-p">Qual nota você daria para sua saúde mental (autoestima, disposição, etc)? (de 0 a 10)</p>
            
            <input id="input_autoEstimaAntes" class="input-questionario sombra" type="number" placeholder="Insira aqui sua nota">
            
            <button class="enviar sombra inter-titulo" onclick="pergunta7()">Enviar</button>`;

        }
    }

    function pergunta7() {

        if (input_autoEstimaAntes.value == "") {
            div_msg.innerHTML += `<br> <span class="inter-p">É necessário inserir algum valor para prosseguir!</span>`;
        } else if (input_autoEstimaAntes.value >= 0 && input_autoEstimaAntes.value <= 10) {
            autoEstimaAntes = input_autoEstimaAntes.value;

            respostasUsuarios.push(autoEstimaAntes);

            div_msg.innerHTML = `
            <div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">7. Pergunta</h1>
            </div>
            
            <p class="inter-p">Qual nota você daria para uma saúde mental boa?(autoestima, disposição, etc)  (de 0 a 10)</p>
            
            <input id="input_autoEstimaDepois" class="input-questionario sombra" type="number" placeholder="Insira aqui sua nota">
            
                <button class="enviar sombra inter-titulo" onclick="mostrarDashboard()">Enviar</button>`;
        } else {
            div_msg.innerHTML += `<br> <span class="inter-p">Este valor não é válido!</span>`;
        }
    }

    var autoEstimaDepois;
    function mostrarDashboard() {
        if (input_autoEstimaDepois.value == "") {
            div_msg.innerHTML += `<br> <span class="inter-p">É necessário inserir algum valor para prosseguir!</span>`;
        } else if (input_autoEstimaDepois.value >= 0 && input_autoEstimaDepois.value <= 10) {
            autoEstimaDepois = input_autoEstimaDepois.value;

            respostasUsuarios.push(autoEstimaDepois);

             idUsuario = sessionStorage.getItem('ID_USUARIO');

            mandarParaDash()

        } else {
            div_msg.innerHTML += `<br> <span class="inter-p">Este valor não é válido!</span>`;
        }
    }


    function mandarParaDash() {
        fetch("/dados/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pergunta1Server: respostasUsuarios[0],
                pergunta2Server: respostasUsuarios[1],
                pergunta3Server: respostasUsuarios[2],
                pergunta4Server: respostasUsuarios[3],
                pergunta5Server: respostasUsuarios[4],
                pergunta6Server: respostasUsuarios[5],
                pergunta7Server: respostasUsuarios[6],
                idUsuarioServer: idUsuario
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    cardErro.style.display = "block";

                    mensagem_erro.innerHTML =
                        "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");

                    limparFormulario();
                    finalizarAguardar();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
            });


        window.sessionStorage.setItem('respostasUsuarios', respostasUsuarios);
        window.location.href = 'dashboard.html';
    }
}