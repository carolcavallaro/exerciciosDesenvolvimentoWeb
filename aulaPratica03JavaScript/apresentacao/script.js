var nome = "Mário"; // declaração de variável
var idade; // é possível declarar a variável e seu valor posteriormente
const palavra='Princesa Pêssego'; // opção para declarar variável que não será modificada, ou seja, uma variável constante.
let numero; // outra opção para declarar variável inconstante, ou seja, que poderá ser modificada
// Em JavaScript, se usa camelCase para as variáveis.

nome = 'Luigi'; // tanto faz as aspas
idade=41;
numero=idade+2; // dá para colocar expressões matemáticas diretamente assim

console.log(nome)
console.log("Olá, " + nome); // concatenação

let mensagem = 'Olá, ' + nome + '.'; // é possível concatenar diretamente assim
console.log(mensagem)

let texto = `Olá ${palavra}! Sua idade é: ${idade} anos.`; // outra forma de adicionar variáveis
console.log(`Olá ${palavra}! Sua idade é: ${idade} anos.`);

console.log(typeof nome); // para mostrar o tipo de variável