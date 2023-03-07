let campoA = document.getElementById("campoValorA");
let campoB = document.getElementById("campoValorB");
let campoC = document.getElementById("campoValorC");
let resultado = document.getElementById("campoResultado");
let botaoCalculo = document.getElementById("botaoCalculo");
let botaoLimpar = document.getElementById("botaoLimpar");

botaoCalculo.addEventListener('click',() =>{
    let valueA = campoA.value;
    let valueB = campoB.value;
    let valueC = campoC.value;
    resultado.value = ((valueB * valueC) / valueA).toFixed(2);
})

botaoLimpar.addEventListener('click',() =>{
    campoA.value  = "";
    campoB.value = "";
    campoC.value = "";
    resultado.value = "";
})