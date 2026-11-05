const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
let resultado = document.querySelector("#resposta");

seletor.addEventListener("change", calcular);
campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular(){

    if(campo1.value!='' && campo2.value!=''){ // para executar o erro só quando os 2 campos estiverem vazios. E não ou, para poder calcular automaticamente.

    /* if(campo1.value==='' || campo2.value===''){
        resposta.classList.add('problema');
        resposta.innerHTML='Campo vazio';
        setTimeout(()=>{
            resposta.classList.remove('problema');
            resposta.innerHTML='';
        },2000);

    }
    else{  */ // só serve assim se fosse para esperar, com o botão

    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    
    if (operacao==="Somar")
        resposta.innerHTML = valor1 + valor2;

    if (operacao==="Subtrair")
        resposta.innerHTML = valor1 - valor2;

    if (operacao==="Multiplicar")
        resposta.innerHTML = valor1 * valor2;

    if (operacao==="Dividir")
        resposta.innerHTML = valor1 / valor2;
    }
}