let inputCamisetasP = document.querySelector("#inputCamisetasP");
let inputCamisetasM = document.querySelector("#inputCamisetasM");
let inputCamisetasG = document.querySelector("#inputCamisetasG");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let VlrcamisetaP = Number(inputCamisetasP.value);
    let VlrcamisetaM = Number(inputCamisetasM.value);
    let VlrcamisetaG = Number(inputCamisetasG.value);

    h3Resultado.textContent = "O valor arrecadado \u00e9: R$ " + (VlrcamisetaP * 10 + VlrcamisetaM * 12 + VlrcamisetaG * 15);
}

btCalcular.onclick = function(){
    Calcular();
}