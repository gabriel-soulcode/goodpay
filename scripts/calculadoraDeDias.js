function calcularDias() {
  let datas = document.getElementById("datas").value;
  if (datas === "") {
    alert("Selecione uma data");
    return;
  }

  let mesDia = datas.split("/");
  let mes = mesDia[0];
  let dia = mesDia[1];
  let dataEscolhida = new Date(new Date().getFullYear(), mes - 1, dia);
  let dataAtual = new Date();
  let diferenca = Math.abs(dataEscolhida.getTime() - dataAtual.getTime());
  let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

  if (dataEscolhida.getMonth() < dataAtual.getMonth()) {
    dias = (365 - dias);
  }
  else if (dataEscolhida.getMonth() == dataAtual.getMonth()) {
    if (dataEscolhida.getDay() < dataAtual.getDay()) {
      dias = (365 - dias);
    }
  }
  document.getElementById("resultado1").innerHTML = `Faltam ${dias} dias para ${datas}`;
}

function calcularDias2() {
  if (document.getElementById("data").value === "") {
    alert("Selecione uma data");
    return;
  }
  let dataAtual = new Date();
  let data = new Date(document.getElementById("data").value);
  let diferenca = data.getTime() - dataAtual.getTime();
  let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
  document.getElementById("resultado2").innerHTML = `Faltam ${dias} dias para data selecionada!`
}