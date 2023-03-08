const dataAtual = document.querySelector('.data-atual'),
diasMes = document.querySelector('.dias');//mostrando os dias no calendário
anterProxBotoes = document.querySelectorAll('.icons span'); //pegando tds ícones

//usando new date, pegando ano e mês atual
let data = new Date(),
currYear = data.getFullYear(), //variáveis usadas p/ armazenar mês e ano atual;
currMonth = data.getMonth();

//console.log(data, currYear, currMonth);

//fazendo um array com os meses
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const usarCalendario = () => {
    let primeiroDiaMes = new Date(currYear, currMonth, 1).getDay();//pegando primeiro dia do mes (metodo que retorna o dia da semana de 0 a 6)
    let ultimaDataMes = new Date(currYear, currMonth + 1, 0).getDate(); //pegando a ultima data do mes 
    let ultimoDiaMes = new Date(currYear, currMonth + ultimaDataMes).getDay();//pegando ultimo dia do mes
    let ultimaDataMesAnterior = new Date(currYear, currMonth, 0).getDate();//pegando ultimo dia mes anterior
    //console.log(ultimoDiaMes);
    let listaDias = "";

    for(let i = primeiroDiaMes; i > 0; i--){
        listaDias += `<li class="inactive">${ultimaDataMesAnterior - i + 1}</li>`;
    }

    for(let i = 1; i <= ultimaDataMes; i++){
        let hoje = "";
    if (i === data.getDate() && currMonth === new Date().getMonth()
    && currYear === new Date().getFullYear()) {
    hoje = "active";
}
        listaDias += `<li class="${hoje}">${i}</li>`; //dia de hoje
    }

    for(let i = ultimoDiaMes; i < 6; i++){
        listaDias += `<li class="inactive">${i - ultimoDiaMes + 1}</li>`;
    }

    dataAtual.innerText = `${meses[currMonth]} ${currYear}`; //pegar do array o mês atual
    diasMes.innerHTML = listaDias;
}

usarCalendario();

anterProxBotoes.forEach(botao => {
    botao.addEventListener("click", ()=> { //add evento clique nos botoes de passar
        //se o ícone clicado for o ícone anterior, diminua o mês atual em 1 caso contrário, aumente em 1
        if (botao.id === "anterior") {
            currMonth--;
          } else {
            currMonth++;
          }
        if(currMonth < 0 || currMonth > 11){
            data = new Date(currYear, currMonth);
            currYear = data.getFullYear(); //atualização do ano atual
            currMonth = data.getMonth(); //atualização do mes atual
        } else {
            data = new Date(); // se não passa new date com valor de data
        }
        
        usarCalendario();
    })

});

function showtime(){
    let d = new Date()
    let h = d.getHours().toString().padStart(2, "0")
    let m = d.getMinutes().toString().padStart(2, "0")
    let s = d.getSeconds().toString().padStart(2, "0")
    let txt = h+":"+m+":"+s

    document.querySelector("#time").innerHTML = txt
}
setInterval(showtime, 1000); 
