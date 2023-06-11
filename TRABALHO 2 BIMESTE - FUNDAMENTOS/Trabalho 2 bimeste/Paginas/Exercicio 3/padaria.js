let inputPao = document.querySelector("#inputPao");
let inputBroa = document.querySelector("#inputBroa");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Calcular(){
    let Vlrpao = Number(inputPao.value);
    let Vlrbroa = Number(inputBroa.value);
 
    h3Resultado.innerHTML = "Lucro do dia: R$"+ (Vlrpao * 0.12 + Vlrbroa * 1.50) + 
    "<br>" + "Valor para guardar na poupan\u00e7a : R$" + (Vlrpao * 0.12 + Vlrbroa * 1.50)/10;
}

btCalcular.onclick = function(){
    Calcular();
}