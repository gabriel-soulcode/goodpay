
function countDays() {

    let date_ini = document.getElementById("inputDataInicial");
    let date_fim = document.getElementById("inputDataFinal");
    date_ini = date_ini.value;
    date_fim = date_fim.value;

    let americanaI = new Date(date_ini.split('/').reverse().join('/'));
    let americanaF = new Date(date_fim.split('/').reverse().join('/'));

    if (americanaI >= americanaF) {
        console.log("Data de início deve ser anterior à data de fim");

    } else {

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let dif = americanaF.getTime() - americanaI.getTime();
        let qtdMes = Math.floor(dif / day / 30);
        return qtdMes;
    }
}


const salario = document.getElementById("inputSalario");
const saldoAnterior = document.getElementById("inputSaldoAnterior");
function calcFgts(salario, saldoAnterior) {
    let resultado = (((Number(salario.value) * 0.08) * countDays()) + Number(saldoAnterior.value));
    console.log(salario.value);
    console.log(countDays());
    console.log(saldoAnterior.value);
    console.log(resultado);
    let result = resultado;
    resultado = 0;
    console.log(result);
    console.log(resultado);
    
    return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(result);
};


const addBtn = document.getElementById("submitBtn");

addBtn.addEventListener("click", () => {
    reload();
});

function reload() {
    swal(
        {
            title: `Seu saldo do FGTS é ${calcFgts(salario, saldoAnterior)}`,
            imageUrl:
            "https://lh5.googleusercontent.com/-WBgRIO6JI8c/UJ7jbPViVOI/AAAAAAAASOY/LTdkkoLcmKw/s191/money.gif",
            imageSize: "100x100",
            confirmButtonText: "Recalcular"
        },
        function(isConfirm) {
            if (isConfirm) {
            location.reload();
            }
        });
    };

