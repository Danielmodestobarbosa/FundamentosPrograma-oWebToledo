let inputValorTotal = document.querySelector("#inputValorTotal");
let h3ResultadoCarlos = document.querySelector("#h3ResultadoCarlos");
let h3ResultadoAndré = document.querySelector("#h3ResultadoAndré");
let h3ResultadoFelipe = document.querySelector("#h3ResultadoFelipe");
let btCalcular = document.querySelector("#btCalcular");

function CalularValoraPagar(){
    let Vlrtotal = Number(inputValorTotal.value);


    //calcular valor

let Carlos =  Math. trunc(Vlrtotal / 3);
let André =  Math. trunc(Vlrtotal / 3);
let Felipe = (Vlrtotal - 
    Carlos - André);

h3ResultadoCarlos.textContent = ( "Carlos deve pagar: R$ " + Carlos );  
h3ResultadoAndré.textContent = ("Andr\u00e9 deve pagar: R$ " + André);
h3ResultadoFelipe.textContent = ( "Felipe deve pagar: R$ " + Felipe);
                        
}




btCalcular.onclick = function(){
    CalularValoraPagar();
}