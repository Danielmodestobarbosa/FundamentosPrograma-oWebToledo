let inputRaio = document.querySelector("#inputRaio");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function CalcularAreaPizza(){
    let VlrRaio = Number(inputRaio.value);

    h3Resultado.textContent = "A \u00e1rea da pizza \u00e9: " + (Math. pow(VlrRaio, 2) * 3.14);
}   

btCalcular.onclick = function(){
    CalcularAreaPizza();
}