import usuarios from "./usuarios.js";

const table = document.getElementById("admTable");


    function renderUserTable() {

        let contador = 1;

        usuarios.forEach((element) =>{
    
        let exibicao;
    
        if(element.administrador == true){
            exibicao = "administrador"
        }else{
            exibicao = "usuario"
        }

        table.innerHTML += 
    
        `
        <tr>    
            <th scope="row">${contador}</th>
            <td>${element.nomeUsuario}</td>
            <td>${element.email}</td>
            <td>${exibicao}</td>
        </tr>
        `;

        contador++;
    })  
}

renderUserTable();





