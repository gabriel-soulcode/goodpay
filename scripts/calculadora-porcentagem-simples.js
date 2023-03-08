const porcentagemVal1 = document.getElementById("porcentagemVal1");
const valorNumerico1 = document.getElementById("valorNumerico1");
const resultado = document.getElementById("resultadoCalc1");
const buttonCalcular1 = document.getElementById("botaoCalcular1");
const buttonCalcular2 = document.getElementById("botaoCalcular2");

/* Função da primeira calculadora */

buttonCalcular1.addEventListener("click", function () {
  let retorno = (valorNumerico1.value / 100) * porcentagemVal1.value;
  resultado.value = `R$${retorno.toFixed(2)}`;
});

/* Função da segunda calculadora */

buttonCalcular2.addEventListener("click", function () {
  var num1 = document.getElementById("valorNumeroVal2").value;
  var num2 = document.getElementById("valorNumeroVal3").value;
  document.getElementById("resultadoCalc").value = (num1 * 100) / num2 + "%";
});
