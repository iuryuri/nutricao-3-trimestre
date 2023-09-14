//atribui o valor da tag h1 para a variavel titulo
let titulo = document.querySelector("h1").textContent;
//mostra no console do navegador a variavel titulo
console.log(titulo);
//modifica o valor do titulo para frase "Fica grandão biiiil"
document.querySelector("h1").textContent = "Fica grandão birllll";

//---------------aqui vamos mexer na tabela de imc-----
// armazena na
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
 let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informaçãoes de teto de peso e a altura//
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;


//acessa a colunaimce altera o valor  para p o resultado//
let tdImc = paciente.querySelector(".info-imc");


//validacao dos dados//

let pesoEhValido = true;
let alteraEhValido = true;

if(peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso Invalido Faça Uma Dieta "
    pesoEhValido = false;
}
    
if(altura < 0 || altura > 3){
    console.log(" altura inválido!");
    tdImc.textContent = " Altura Invalido ou ta grande de mais ou pequeno use gh "
    alteraEhValido = false;
}
if(pesoEhValido === true && alteraEhValido=== true){
    // realizar o calculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
} else{
      tdImc.textContent = "Peso e/ou altura invalido ";
}
