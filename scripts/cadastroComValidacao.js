(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        const senhaUsuario = document.getElementById("password").value;
        const senhaConfirmacao = document.getElementById("passwordConf").value;
        if (senhaUsuario !== senhaConfirmacao) {
          alert("Senhas não coincidem");
          return;
        }

        usuarios.push(user);
      },
      false
    );
  });
})();
