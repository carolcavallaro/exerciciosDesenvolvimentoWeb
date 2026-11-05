let paragrafo = document.querySelector('#para1'); // para encontrar a id

paragrafo.addEventListener('click', trocaTexto);
paragrafo.addEventListener('mouseover', mudaCor);

function trocaTexto(){
    paragrafo.innerHTML='teste';
}

function mudaCor(){
    paragrafo.style.background='green';
}