let inputNumero = document.querySelector("#inputNumero");
let h3Resultadocentena = document.querySelector("#h3Resultadocentena");
let h3Resultadodezena = document.querySelector("#h3Resultadodezena");
let h3Resultadounidade = document.querySelector("#h3Resultadounidade");
let btCalcukar = document.querySelector("#btCalcukar");

function CalcularNumero (){
    let Vlrnumero = Number(inputNumero.value);
    
//centena, dezena e unidade

let centena = Math. floor(Vlrnumero / 100);
let dezena =Math. floor(Vlrnumero / 10 % 10);
let unidade = (Vlrnumero % 10);

h3Resultadocentena.textContent = ("CENTENA: " + centena); 
h3Resultadodezena.textContent = ("DEZENA: " + dezena); 
h3Resultadounidade.textContent = ("UNIDADE: " + unidade);
}

btCalcukar.onclick = function(){
    CalcularNumero();
}