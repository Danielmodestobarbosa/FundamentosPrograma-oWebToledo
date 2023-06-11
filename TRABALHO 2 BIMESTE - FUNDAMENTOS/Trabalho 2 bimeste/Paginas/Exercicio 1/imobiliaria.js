let inputLargura = document.querySelector("#inputLargura");
let inputAltura = document.querySelector("#inputAltura");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Calcular(){
    let largura = Number(inputLargura.value);
    let altura  = Number(inputAltura.value);

    h3Resultado.textContent ="A \u00e1rea do terreno \u00e9: " + (largura * altura) + "m"; 
}    

btCalcular.onclick = function(){
    Calcular();
}