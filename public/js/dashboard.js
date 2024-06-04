var respostasUsuarios = window.sessionStorage.getItem("respostasUsuarios").split(",");

function mostrarRespostasDoUsuario() {
    for (let index = 0; index < respostasUsuarios.length; index++) {
        p_respostasDosUsuario.innerHTML += `Resposta ${index + 1}: ${respostasUsuarios[index]}<br>`;

    }
}

mostrarRespostasDoUsuario();


