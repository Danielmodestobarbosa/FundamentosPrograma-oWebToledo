let inputCavalos = document.querySelector("#inputCavalos");
let btCalcular = document.querySelector("#btCalcular");
let h3Quantidadeferraduras = document.querySelector("#h3Quantidadeferraduras");

function Calcular(){
    let cavalos = Number(inputCavalos.value);
    
    h3Quantidadeferraduras.textContent = "A quantidade de ferraduras necess\u00e1rias s\u00e3o: " +(cavalos * 4) + " ferraduras";
}

btCalcular.onclick = function(){
    Calcular();
}