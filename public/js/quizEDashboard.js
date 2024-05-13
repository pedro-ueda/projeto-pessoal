var respostasUsuarios = [];
    var praticaMusculacao;

    function mostrarQuiz() {

        div_msg.innerHTML = "";

        div_msg.innerHTML = `<div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">1. Pergunta</h1>
        </div>

        <p class="inter-p">Como você se identifica?</p>

        <select id="sl_genero" class="sombra">
            <option value="#">Selecione seu gênero</option>
            <option value="homem">Homem</option>
            <option value="mulher">Mulher</option>
        </select>

        <button class="enviar sombra inter-titulo" onclick="pergunta2()">Enviar</button>
    </div>`;


    }

    function pergunta2() {

        if (sl_genero.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_genero.value);

            div_msg.innerHTML = `<div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">2. Pergunta</h1>
        </div>

        <p class="inter-p">Você pratica musculação?</p>

        <select id="sl_praticaMusculacao" class="sombra">
            <option value="#">Selecione uma opção</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
        </select>

        <button class="enviar sombra inter-titulo" onclick="pergunta3()">Enviar</button>
    </div>`;
        }
    }

    function pergunta3() {
        praticaMusculacao = sl_praticaMusculacao.value;

        if (praticaMusculacao == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else if(praticaMusculacao == "sim"){
            respostasUsuarios.push(praticaMusculacao);

            div_msg.innerHTML = `<div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">3. Pergunta</h1>
        </div>

        <p class="inter-p">Há quanto tempo você treina?</p>

        <select id="sl_tempoDePratica" class="sombra">
            <option value="#">Selecione uma opção</option>
            <option>Menos de 1 ano</option>
            <option>Entre 1 ano e 3 anos</option>
            <option>4 anos ou mais</option>
        </select>

        <button class="enviar sombra inter-titulo" onclick="pergunta4()">Enviar</button>
    </div>`;

        }else mandarParaDash();


    }

    function pergunta4() {

        if (sl_tempoDePratica.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
                respostasUsuarios.push(sl_tempoDePratica.value);

                div_msg.innerHTML = `
            <div class="box-titulo flex">
                <h1 class="inter-titulo titulo-quiz">4. Pergunta</h1>
            </div>

            <p class="inter-p">Por que você começou a treinar?</p>

            <select id="sl_motivo" class="sombra">
                <option value="#">Selecione uma opção</option>
                <option>Saúde</option>
                <option>Estética</option>
                <option>Outros</option>
            </select>

            <button class="enviar sombra inter-titulo" onclick="pergunta5()">Enviar</button>
        </div>`;
                
        }
    }

    function pergunta5() {

        if (sl_motivo.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_motivo.value);

            div_msg.innerHTML = `
        <div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">5. Pergunta</h1>
        </div>

        <p class="inter-p">Qual membro você prefere treinar?</p>

        <select id="sl_membro" class="sombra">
            <option value="#">Selecione uma opção</option>
            <option>Inferiores</option>
            <option>Superiores</option>
        </select>

        <button class="enviar sombra inter-titulo" onclick="pergunta6()">Enviar</button>
    </div>`;

        }

    }

    var autoEstimaAntes;

    function pergunta6() {

        if (sl_membro.value == "#") {
            div_msg.innerHTML += `<br> <span class="inter-p">Esta não é uma opção válida!</span>`;
        } else {
            respostasUsuarios.push(sl_membro.value);

            div_msg.innerHTML = `
            <div class="box-titulo flex">
            <h1 class="inter-titulo titulo-quiz">6. Pergunta</h1>
            </div>

            <p class="inter-p">Qual nota você daria para sua saúde mental (autoestima, disposição, etc) <b>antes</b> de começar a treinar?</p>

            <input id="input_autoEstimaAntes" class="input-questionario sombra" type="number" placeholder="Insira aqui sua nota">

            <button class="enviar sombra inter-titulo" onclick="pergunta7()">Enviar</button>`;

        }
    }

    function pergunta7() {

            if(input_autoEstimaAntes.value == "") {
                div_msg.innerHTML += `<br> <span class="inter-p">É necessário inserir algum valor para prosseguir!</span>`;
            }else { 
                respostasUsuarios.push(autoEstimaAntes);

                div_msg.innerHTML = `
                    <div class="box-titulo flex">
                    <h1 class="inter-titulo titulo-quiz">7. Pergunta</h1>
                    </div>

                    <p class="inter-p">Qual nota você daria para sua saúde mental (autoestima, disposição, etc) <b>depois</b> de começar a treinar?</p>

                    <input id="input_autoEstimaDepois" class="input-questionario sombra" type="number" placeholder="Insira aqui sua nota">

                    <button class="enviar sombra inter-titulo" onclick="mostrarDashboard()">Enviar</button>`;
            }
    }

    function mostrarDashboard() {
        if(input_autoEstimaDepois.value == "") {
                div_msg.innerHTML += `<br> <span class="inter-p">É necessário inserir algum valor para prosseguir!</span>`;
            }else mandarParaDash()
    }

    function mandarParaDash() {
        window.location.href = 'dashboard.html';
    }