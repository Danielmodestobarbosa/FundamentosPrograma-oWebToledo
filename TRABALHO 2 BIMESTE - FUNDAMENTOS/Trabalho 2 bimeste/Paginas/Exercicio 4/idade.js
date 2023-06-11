let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function Calcular(){
    let Vlridade = Number(inputIdade.value);
    let Nome = String(inputNome.value);

    h3Resultado.textContent = (Nome)+ ", voc\u00ea j\u00e1 viveu " + Vlridade * 365 + " dias"
}

btCalcular.onclick = function(){
    Calcular();
}