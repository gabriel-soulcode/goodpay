import usuarios from "./usuarios.js";
// Dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// Botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

// Ouvinte de evento
const captcha = document.getElementById("resposta");
const validacao = document.getElementById("aleatorio");
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
validacao.innerHTML = (`Resolver a operação: ${num1} + ${num2} =`);
let resposta = num1 + num2;

btnEntrar.addEventListener("click", () => {
  const email = campoEmail.value;
  const senha = campoSenha.value;
  const certa = parseInt(captcha.value);

  let usuarioValido = usuarios.find((usuario) => usuario.email === email);

  if (usuarioValido !== undefined) {
    if (usuarioValido.senha === senha) {
      if (certa === resposta){
        localStorage.setItem("acesso", true);
        window.location.pathname = "/app.html"
      } else{
        alert("rever resposta")
      }
      
    } else {
      alert("Senha incorreta!");
    }
  } else {
    alert("Usuário não existe!");
  }
});
const acesso = localStorage.getItem("acesso");
if (acesso === "true") {
  window.location.pathname = "/app.html";
}
