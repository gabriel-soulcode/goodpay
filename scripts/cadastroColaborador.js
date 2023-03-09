const form = document.querySelector("#myForm");
const name2 = document.getElementById("validationTooltip01");
const email = document.getElementById("validationTooltipUsername");
const telefone = document.getElementById("validationTooltip05");
const especialidadeDoc = document.getElementById("validationTooltip04");
const textAreaDoc = document.getElementById("validationTextarea");

(() => {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
         form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  
form.addEventListener("submit", function (event) {

    const modal1 = document.getElementById('modalFormFalse');
    const modal2 = document.getElementById('modalFormTrue');

event.preventDefault();

  if (
    name2.value === "" ||
    email.value === "" ||
    telefone.value === "" ||
    especialidadeDoc.value === "" ||
    textAreaDoc.value === ""
  ) {
    let myModal = new bootstrap.Modal(modal1).show();
    myModal;

  } else {
    let myModal = new bootstrap.Modal(modal2).show();
    myModal;
  }

});

let btnClose = document.getElementById('closeModal');

btnClose.addEventListener('click', () => {
    
    form.classList.remove('was-validated');
    name2.value = "" ;
    email.value = "" ;
    telefone.value = "" ;
    especialidadeDoc.value = "" ;
    textAreaDoc.value = "";
})