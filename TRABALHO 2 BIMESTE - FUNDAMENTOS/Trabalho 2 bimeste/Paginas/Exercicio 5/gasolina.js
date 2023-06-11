let inputlitro = document.querySelector("#inputlitro");
let inputPagamento = document.querySelector("#inputPagamento");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let Vlrlitro = Number(inputlitro.value);
    let Vlrpagamento = Number(inputPagamento.value);

    h3Resultado.innerHTML = "A quantidade de litros abastecidos \u00e9 : " + Math.trunc(Vlrpagamento / Vlrlitro) + " Litros de gasolina";
}

btCalcular.onclick = function(){
    Calcular();
}