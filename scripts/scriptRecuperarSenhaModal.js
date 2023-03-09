/* Botão de recuperação de senha */
const buttonEnviar = document.getElementById("btnRecuperarSenha");

buttonEnviar.addEventListener("click", () => {
  const modalEmail = document.getElementById("recuperarEmail").value;
  const paragrafoModal = document.getElementById("paragrafoModal");
  paragrafoModal.innerText = `Verificar a caixa de entrada do ${modalEmail}`;
});
