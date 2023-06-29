function verficaSeOValorEValido(chute) {
    const numero = +chute;
    if (verificaSeENumero(numero)) {
        if (chute.toUpperCase() === 'GAMEOVER') {
            document.body.classList.add('game-over-screen');
            document.body.innerHTML = `<h1 class="game-over-titulo"> GAME OVER </h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
        } else {
            elementoChute.innerHTML += "<div> Valor inválido! </div>";
            return;
        }
    }

    if (verificaSeEMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: fale um número entre ${menorNumero} e ${maiorNumero} </div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.classList.add('venceu-screen');
        document.body.innerHTML = `<h2> Você venceu!</h2> <h3>O número secreto era ${numeroSecreto}! </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }

}

function verificaSeENumero(numero) {
    return Number.isNaN(numero);
}

function verificaSeEMaiorOuMenorQueOPermitido(numero) {
    return numero < menorNumero || numero > maiorNumero;
}


