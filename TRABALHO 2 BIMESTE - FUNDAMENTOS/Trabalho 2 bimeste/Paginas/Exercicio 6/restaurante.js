let inputPesoprato = document.querySelector("#inputPesoprato");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let Vlrpeso = Number(inputPesoprato.value);
    
    h3Resultado.textContent = "O valor a pagar \u00e9: R$" + (Vlrpeso * 12);
}

btCalcular.onclick = function(){
    Calcular();
}