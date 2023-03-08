// Inputs
const inputTitulo = document.getElementById("inputTitulo");
const inputDinheiro = document.getElementById("inputDinheiro");
const inputMeta = document.getElementById("inputMeta");

const calcular = document.getElementById("calcular");


// Tabela
const conteudoTab = document.getElementById("conteudo-tabela");

 //Apertar no botão



 calcular.addEventListener("click", () => {
  let usuario = {
     titulo: inputTitulo.value,
     dinheiro:inputDinheiro.value,
     meta: inputMeta.value,
 
     
    }
    let resultado = 0;

  

    conteudoTab.innerHTML += `
    <tr>
        <td>${usuario.titulo}</td>
        <td>${usuario.dinheiro}</td>
        <td>${usuario.meta}</td>
      
    </tr>`;
    inputTitulo.value ="",
    inputDinheiro.value= "",
    inputMeta.value ="" 
    

});

