// Banco de dados fake
const usuarios = [
  {
    nomeUsuario: "batata",
    email: "jose.almir@email.com",
    senha: "12345",
  },
  {
    nomeUsuario: "gabriel-braga",
    email: "gabriel.braga@email.com",
    senha: "12345",
  },
];

// Dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// Botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

// Ouvinte de evento
btnEntrar.addEventListener("click", () => {
  const email = campoEmail.value;
  const senha = campoSenha.value;

  let usuarioValido = usuarios.find((usuario) => usuario.email === email);

  if (usuarioValido !== undefined) {
    if (usuarioValido.senha === senha) {
      window.location.pathname = "/app.html";
    } else {
      alert("Senha incorreta!");
    }
  } else {
    alert("Usuário não existe!");
  }
});
