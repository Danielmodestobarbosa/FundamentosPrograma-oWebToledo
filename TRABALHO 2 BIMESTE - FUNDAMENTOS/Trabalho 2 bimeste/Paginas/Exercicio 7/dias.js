let inputDias = document.querySelector("#inputDias");
let inputMes = document.querySelector("#inputMes");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let Vlrdia = Number(inputDias.value);
    let Vlrmes = Number(inputMes.value);

    h3Resultado.textContent = "Se passaram: " +  (Vlrmes * 30 - (30 - Vlrdia)) + " dias";
}

btCalcular.onclick = function(){
    Calcular();
}