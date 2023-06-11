let inputSalario = document.querySelector("#inputSalario");
let h3Resultado1 = document.querySelector("#h3Resultado1");
let h3Resultado2 = document.querySelector("#h3Resultado2");
let h3Salarioinicial = document.querySelector("#h3Salarioinicial");
let btCalcular = document.querySelector("#btCalcular");

function CalcularReajuste(){
    let Vlrsalario = Number(inputSalario.value);

//desconto

let salario = Vlrsalario;
let aumento = (Vlrsalario * 0.15);
let salariocomaumento = salario + aumento;

let desconto = (salariocomaumento * 0.08);
let salariodescontado = (salariocomaumento - desconto);

h3Salarioinicial.textContent = "Sal\u00e1rio inicial: R$" + Vlrsalario;
h3Resultado1.textContent = ("Sal\u00e1rio com reajuste de 15%: R$ " + salariocomaumento);
h3Resultado2.textContent = ("Sal\u00e1rio reajustado com desconto de 8%: R$ " + salariodescontado);


}

btCalcular.onclick = function(){
    CalcularReajuste();
}

