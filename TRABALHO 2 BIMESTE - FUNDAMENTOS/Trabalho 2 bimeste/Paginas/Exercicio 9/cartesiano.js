let inputx1 = document.querySelector("#inputx1");
let inputx2 = document.querySelector("#inputx2");
let inputy1 = document.querySelector("#inputy1");
let inputy2 = document.querySelector("#inputy2");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let Vlrx1 = Number(inputx1.value);
    let Vlrx2 = Number(inputx2.value);
    let Vlry1 = Number(inputy1.value);
    let Vlry2 = Number(inputy2.value);

//valores x,y

let Vlrx = (Vlrx2 - Vlrx1);
let Vlry = (Vlry2 - Vlry1);
let Resultx = Math. pow(Vlrx, 2);
let Resulty = Math. pow(Vlry, 2);
let Somaresultxy = Resultx + Resulty;
let raizquadradaxy = Math. sqrt(Somaresultxy);

h3Resultado.textContent = "A dist\u00e2ncia entre os dois pontos \u00e9: "+ raizquadradaxy;
}

btCalcular.onclick = function(){
    Calcular();
}