/* Botão de recuperação de senha */
let buttonEnviar = document.getElementById("btnRecuperarSenha");
let recuperarUsuario = document.getElementById('recuperarUsuario');
let recuperarEmail = document.getElementById('recuperarEmail');
let staticBackdrop = document.getElementById('staticBackdrop');
let fecharModal = document.getElementById('fecharModal');



buttonEnviar.addEventListener("click", () => {
  let valid = recuperarEmail.checkValidity()
  if (recuperarUsuario.value !== '' && valid === true) {
    recuperarUsuario.className = 'form-control is-valid';
    recuperarEmail.className = 'form-control is-valid';

    abrirModal();

  } else if (valid === false && recuperarUsuario.value !== '') {
    recuperarEmail.className = 'form-control is-invalid';
    recuperarUsuario.className = 'form-control is-valid';
  } else if (valid === true && recuperarUsuario.value === '') {
    recuperarEmail.className = 'form-control is-valid';
    recuperarUsuario.className = 'form-control is-invalid';
  } else {
    recuperarUsuario.className = 'form-control is-invalid';
    recuperarEmail.className = 'form-control is-invalid';
  }

});

let abrirModal = () => {
  let paragrafoModal = document.getElementById("paragrafoModal");
  paragrafoModal.innerText = `Verificar a caixa de entrada do ${recuperarEmail.value}`;
  staticBackdrop.classList.add("show");
  staticBackdrop.style.display = "block";
}

fecharModal.addEventListener("click", () => {
  staticBackdrop.classList.remove("show");
  staticBackdrop.style.display = "none";
});