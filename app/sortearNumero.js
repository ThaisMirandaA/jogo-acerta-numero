const menorNumero = 1; 
const maiorNumero = 100;
const gameOver = "gameover"; 

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorNumero; 

const elementoMaiorValor = document.getElementById('maior-valor'); 
elementoMaiorValor.innerHTML = maiorNumero; 

console.log(numeroSecreto); 