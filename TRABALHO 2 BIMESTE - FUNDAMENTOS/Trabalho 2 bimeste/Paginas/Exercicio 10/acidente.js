let inputDias = document.querySelector("#inputDias");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calular(){
    let Vlrdias = Number(inputDias.value);

// anos, meses e dias

let anos = Math.round (Vlrdias / 365);
let meses =(Vlrdias % 365) / 30;
let dias = (Vlrdias % 365) % 30;

h3Resultado.textContent = "Tempo: " + (anos) + " anos, " + meses + "meses, " + dias + "dias";
}

btCalcular.onclick = function(){
    Calular();
}