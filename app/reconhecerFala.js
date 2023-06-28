const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', (escreveSom));

function escreveSom(e) {
    let chute = e.results[0][0].transcript.toLowerCase().replaceAll(" ", "");

    const numerosPorExtenso = {
        'zero': 0,
        'um': 1,
        'dois': 2,
        'três': 3,
        'quatro': 4,
        'cinco': 5,
        'seis': 6,
        'sete': 7,
        'oito': 8,
        'nove': 9,
        'dez': 10
    }

    for (let [nome, numero] of Object.entries(numerosPorExtenso)) {
        if (chute.includes(nome)) {
            chute = chute.replace(nome, numero);
            break;
        }
    }

    if (chute.startsWith("menos")) {
        chute = chute.replace(/menos/g, "-", chute);
    }

    exibeChuteNaTela(chute);
    verficaSeOValorEValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `<div> Você disse: </div> <span class='box'>${chute}</span>`;
}

recognition.addEventListener('end', () => {
    recognition.start(); 
}); 

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload(); 
    }
})


