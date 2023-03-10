let maximo = document.getElementById('maxNumber');
let minimo = document.getElementById('minNumber');
let btnSorteio = document.getElementById('btnSorteador');
let repeticao = document.getElementById('flexSwitchCheckDefault');
let numeros = [];
let listaNumeros = document.getElementById('listaSorteio');
let checked = false;

repeticao.addEventListener('change', (e) => {
  const check = e.target.checked;
  checked = check;
})

function numeroSorteado() {
  let valorMaximo = Math.ceil(maximo.value);
  let valorMinimo = Math.floor(minimo.value);
  let numeroSorteado = Math.floor(Math.random() * (valorMaximo - valorMinimo) + valorMinimo);
  return numeroSorteado;
}


btnSorteio.addEventListener('click', (e) => {
  e.preventDefault()

  let numeroGerado = numeroSorteado();

  if (checked) {
    numeros.map((number) => {
      if (number == numeroGerado) numeroGerado = numeroSorteado();
    });
    numeros.push(numeroGerado);
    numeros = numeros.filter((x, i, a) => a.indexOf(x) == i);
  } else if (!checked) numeros.push(numeroGerado);

  listaNumeros.innerHTML =
    `<li class="list-group-item list-group-item-dark">${numeros}</li>`
})





