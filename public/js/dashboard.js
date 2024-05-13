// import respostasUsuarios from "./quiz.js";

function mostrarRespostasDoUsuario() {
    for (let index = 0; index < respostasUsuarios.length; index++) {
        p_respostasDosUsuario.innerHTML += `${respostasUsuarios[index]}<br>`;

    }
}


mostrarRespostasDoUsuario();