let botao = document.querySelector("#botao");
// botao.style.background="blue";
let estaQuebrado=false;
let contaCliques=0; // variável para contar quantos cliques e só quebrar com 10

botao.addEventListener("mouseover", e => {
    if(estaQuebrado===false);{
        botao.style.background="green";
        botao.style.color="white";
    }
}); // função lâmbida

botao.addEventListener("mouseout", e => {
    if(!estaQuebrado); // ! significa não
        botao.style.background="blue";
});

botao.addEventListener("click", e => {
    // contaCliques=contaCliques+1;
    contaCliques++;
    if(contaCliques>=10){
        botao.style.background="red";
        botao.innerHTML="Quebrei!";
            estaQuebrado=true;
    }
});