const campoNomes = document.getElementById("nomes");
const addBtn = document.getElementById("sortear");

addBtn.addEventListener("click", () => {
    const nome = campoNomes.value.trim().split("\n").map(nome => nome)
    const indiceSorteado = Math.floor(Math.random() * nome.length);
    const nomeSorteado = nome[indiceSorteado];
    console.log(nomeSorteado);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O nome sorteado foi: <strong>${nomeSorteado}</strong>`;
});


