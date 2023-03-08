
let titulo;
let total;
let tipo;
let btnControleFinanceiro;
let uldashboard;

titulo = document.getElementById('titulo');
total = document.getElementById('total');
tipo = document.getElementById('tipo');
btnControleFinanceiro = document.getElementById('btnControleFinanceiro');
uldashboard = document.getElementById('dashboard');

total.addEventListener("input", () => {
    if (total.value < 0){
        alert(`O valor informado não precisa ser negativo para representar uma despesa.\n Informe um valor maior que zero.`);
        total.value = '';
    }
});

/* Adiciona o evento clique no botão Adicionar */
btnControleFinanceiro.addEventListener("click", () => {
    /*  */
    if (titulo.value === '' || tipo.value === 'Selecione' || total.value === ''){
        alert(`Existem campos não preenchidos.`);
    } else {
        if (tipo.value === "Receita") {
            uldashboard.innerHTML += 
            `
            <li>${titulo.value.capitalize()}</li>
            <li id="receita">+ R$ ${total.value}</li>
            `
            limpar();
        } else {
            uldashboard.innerHTML +=
            `
            <li>${titulo.value.capitalize()}</li>
            <li id="despesa">- R$ ${total.value}</li>
            `
            limpar();
        }
    }
});

function limpar() {
    titulo.value = '';
    total.value = '';
    tipo.value = 'Selecione';
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}