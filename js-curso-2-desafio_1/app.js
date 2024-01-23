let cidade ;
let resultado;
let primeiroNumero;
let segundoNumero;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


  function botaoClicado() {
    console.log ('botão foi clicado');
   };
  
   function alertaClicado() {
    alert('Eu amo JS!');
   };
     function escolhaCidade() {
    cidade = prompt("Informe uma cidade BR?");
    alert(`Estive em ${cidade} e lembrei de você`);
};
function somaClicado(){
    alert('informe dois numeros para serem somados.');
    primeiroNumero = prompt("primeiro numero: ");
    segundoNumero = prompt("primeiro numero: ");

    alert(`soma dos dois é: ${resultado}`);

};