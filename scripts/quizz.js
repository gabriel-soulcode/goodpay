//Pegando os dados do HTML para manuseio aqui no JS.
const pergunta = document.getElementById("pergunta");

const resposta1 = document.getElementById("resp1");
const resposta2 = document.getElementById("resp2");
const resposta3 = document.getElementById("resp3");
const resposta4 = document.getElementById("resp4");
const resposta1p = document.getElementById("resp1p");
const resposta2p = document.getElementById("resp2p");
const resposta3p = document.getElementById("resp3p");
const resposta4p = document.getElementById("resp4p");

const divProgressoBarra = document.getElementById("divProgressBar");
const progressoBarra = document.getElementById("progressBar");
const progressoBarraPorcento = document.getElementById("progressBarPorcent");
const progressoBarraParagrafo = document.getElementById("ProgressBarP");
const divResultado = document.getElementById("divResultadoLink");
const botaoResultado = document.getElementById("botaoResultado");

let respostas = [];
let resultado = 0;

const mostrarResultado = () => {
  pergunta.innerHTML = "Resultado do Quizz foi de:";
  resposta1p.innerHTML = " ";
  resposta2p.innerHTML = " ";
  resposta3p.innerHTML = " ";
  resposta4p.innerHTML = " ";
  resposta1.style.display = "none";
  resposta2.style.display = "none";
  resposta3.style.display = "none";
  resposta4.style.display = "none";
  console.log(respostas);

  if (respostas[0] === "1") {
    resultado += 20;
  } else if (respostas[0] === "2") {
    resultado += 5;
  } else if (respostas[0] === "3") {
    resultado += 15;
  } else if (respostas[0] === "4") {
    resultado += 10;
  }
  if (respostas[1] === "1") {
    resultado += 5;
  } else if (respostas[1] === "2") {
    resultado += 10;
  } else if (respostas[1] === "3") {
    resultado += 15;
  } else if (respostas[1] === "4") {
    resultado += 20;
  }
  if (respostas[2] === "1") {
    resultado += 20;
  } else if (respostas[2] === "2") {
    resultado += 5;
  } else if (respostas[2] === "3") {
    resultado += 15;
  } else if (respostas[2] === "4") {
    resultado += 10;
  }
  if (respostas[3] === "1") {
    resultado += 10;
  } else if (respostas[3] === "2") {
    resultado += 20;
  } else if (respostas[3] === "3") {
    resultado += 5;
  } else if (respostas[3] === "4") {
    resultado += 15;
  }
  if( resultado < 40){
  progressoBarraParagrafo.innerHTML = "Você está mal, precisa poupar mais!";
  divResultado.style.display = "block";
  botaoResultado.innerHTML = "Se cadastre já na Goodpay";
  } else if( resultado < 60){
    progressoBarraParagrafo.innerHTML = "Você pode melhorar! Ainda precisa poupar um pouco mais!";
    divResultado.style.display = "block";
    botaoResultado.innerHTML = "Se cadastre já na Goodpay";
    } else if( resultado < 80){
        progressoBarraParagrafo.innerHTML = "Não perca tempo, junte-se a nós!! Conheça nossos planos e alcance sua estabilidade financeira!";
        divResultado.style.display = "block";
        botaoResultado.innerHTML = "Se cadastre já na Goodpay";
        } else if( resultado === 80){
            progressoBarraParagrafo.innerHTML = "Você já sabe administrar seu dinheiro muito bem!! Que tal fazer um curso na SoulCode agora??"
            divResultado.style.display = "block";
            botaoResultado.innerHTML = "Conheça já a SoulCode";
            botaoResultado.href = "./soulcode.html";
            }
  divProgressoBarra.style.display = "block";
  progressoBarraParagrafo.style.display = "block";
  progressoBarra.ariaValueNow = resultado;
  progressoBarraPorcento.style.width = `${resultado}%`;
  progressoBarraPorcento.innerHTML = `${resultado}%`;
  
};

resposta1.addEventListener("click", () => {
  if (respostas[0] === undefined) {
    respostas.push("1");
    pergunta.innerHTML = "Como você poupa seu dinheiro?";
    resposta1p.innerHTML = "Nunca consigo guardar nada";
    resposta2p.innerHTML = "Guardo embaixo do colchão";
    resposta3p.innerHTML = "Tenho uma poupança, guardo 10% todo mês";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[1] === undefined) {
    respostas.push("1");
    pergunta.innerHTML = "Poupar e investir pensando no longo prazo é:";
    resposta1p.innerHTML = "Atingir objetivos e ampliar meu patrimônio";
    resposta2p.innerHTML = "Não tenho tempo de pensar nesse assunto";
    resposta3p.innerHTML = "Acumular recursos para curtir a vida depois";
    resposta4p.innerHTML = "Importante, mas um sonho impossível de alcançar";
  } else if (respostas[2] === undefined) {
    respostas.push("1");
    pergunta.innerHTML =
      "Todos iremos envelhecer um dia. O que você pensa sobre aposentadoria?";
    resposta1p.innerHTML = "Sou muito novo para me preocupar com isso agora";
    resposta2p.innerHTML = "Importante ter uma estratégia garantir uma renda";
    resposta3p.innerHTML = "Conto com a sorte";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[3] === undefined) {
    respostas.push("1");
    mostrarResultado();
  }
});

resposta2.addEventListener("click", () => {
  if (respostas[0] === undefined) {
    respostas.push("2");
    pergunta.innerHTML = "Como você poupa seu dinheiro?";
    resposta1p.innerHTML = "Nunca consigo guardar nada";
    resposta2p.innerHTML = "Guardo embaixo do colchão";
    resposta3p.innerHTML = "Tenho uma poupança, guardo 10% todo mês";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[1] === undefined) {
    respostas.push("2");
    pergunta.innerHTML = "Poupar e investir pensando no longo prazo é:";
    resposta1p.innerHTML = "Atingir objetivos e ampliar meu patrimônio";
    resposta2p.innerHTML = "Não tenho tempo de pensar nesse assunto";
    resposta3p.innerHTML = "Acumular recursos para curtir a vida depois";
    resposta4p.innerHTML = "Importante, mas um sonho impossível de alcançar";
  } else if (respostas[2] === undefined) {
    respostas.push("2");
    pergunta.innerHTML =
      "Todos iremos envelhecer um dia. O que você pensa sobre aposentadoria?";
    resposta1p.innerHTML = "Sou muito novo para me preocupar com isso agora";
    resposta2p.innerHTML = "Importante ter uma estratégia garantir uma renda";
    resposta3p.innerHTML = "Conto com a sorte";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[3] === undefined) {
    respostas.push("2");
    mostrarResultado();
  }
});

resposta3.addEventListener("click", () => {
  if (respostas[0] === undefined) {
    respostas.push("3");
    pergunta.innerHTML = "Como você poupa seu dinheiro?";
    resposta1p.innerHTML = "Nunca consigo guardar nada";
    resposta2p.innerHTML = "Guardo embaixo do colchão";
    resposta3p.innerHTML = "Tenho uma poupança, guardo 10% todo mês";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[1] === undefined) {
    respostas.push("3");
    pergunta.innerHTML = "Poupar e investir pensando no longo prazo é:";
    resposta1p.innerHTML = "Atingir objetivos e ampliar meu patrimônio";
    resposta2p.innerHTML = "Não tenho tempo de pensar nesse assunto";
    resposta3p.innerHTML = "Acumular recursos para curtir a vida depois";
    resposta4p.innerHTML = "Importante, mas um sonho impossível de alcançar";
  } else if (respostas[2] === undefined) {
    respostas.push("3");
    pergunta.innerHTML =
      "Todos iremos envelhecer um dia. O que você pensa sobre aposentadoria?";
    resposta1p.innerHTML = "Sou muito novo para me preocupar com isso agora";
    resposta2p.innerHTML = "Importante ter uma estratégia garantir uma renda";
    resposta3p.innerHTML = "Conto com a sorte";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[3] === undefined) {
    respostas.push("3");
    mostrarResultado();
  }
});
resposta4.addEventListener("click", () => {
  if (respostas[0] === undefined) {
    respostas.push("4");
    pergunta.innerHTML = "Como você poupa seu dinheiro?";
    resposta1p.innerHTML = "Nunca consigo guardar nada";
    resposta2p.innerHTML = "Guardo embaixo do colchão";
    resposta3p.innerHTML = "Tenho uma poupança, guardo 10% todo mês";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[1] === undefined) {
    respostas.push("4");
    pergunta.innerHTML = "Poupar e investir pensando no longo prazo é:";
    resposta1p.innerHTML = "Atingir objetivos e ampliar meu patrimônio";
    resposta2p.innerHTML = "Não tenho tempo de pensar nesse assunto";
    resposta3p.innerHTML = "Acumular recursos para curtir a vida depois";
    resposta4p.innerHTML = "Importante, mas um sonho impossível de alcançar";
  } else if (respostas[2] === undefined) {
    respostas.push("4");
    pergunta.innerHTML =
      "Todos iremos envelhecer um dia. O que você pensa sobre aposentadoria?";
    resposta1p.innerHTML = "Sou muito novo para me preocupar com isso agora";
    resposta2p.innerHTML = "Importante ter uma estratégia garantir uma renda";
    resposta3p.innerHTML = "Conto com a sorte";
    resposta4p.innerHTML = "Possuo aplicações variadas";
  } else if (respostas[3] === undefined) {
    respostas.push("4");
    mostrarResultado();
  }
});
