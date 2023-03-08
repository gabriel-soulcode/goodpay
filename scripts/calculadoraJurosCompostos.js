//JS

//Tags html
function calculos() {
    const periodo = document.getElementById("periodo");
    
    const valorInicial = document.getElementById("vlr-inicial");
    const valorMensal = document.getElementById("vlr-mensal");
    let montante;
    
    const taxaJuros = document.getElementById("tx-juros");
    let taxaJurosAnual;
    
    const periodoInvestimento = document.getElementById("periodo-investimento");
    let periodoInvestimentoAnual;
    
    // const btnCalcular = document.getElementById("btn-calcular");
    
    const investimentoTotal = document.getElementById("investimento-total");
    const jurosTotal = document.getElementById("juros-total");
    const rendimentoTotal = document.getElementById("rendimento-total");
    
    // //Funções
    // function converterEmMoeda() {
        
    // }
    
    function calcularInvestimentoTotal() {
        periodoInvestimentoAnual = periodoInvestimento.value * 12;
        if (periodo.value === "anual") {
    investimentoTotal.value = parseFloat(valorInicial.value) + (parseFloat(valorMensal.value) * parseFloat(periodoInvestimentoAnual));
        } else {
        investimentoTotal.value = parseFloat(valorInicial.value) + (parseFloat(valorMensal.value) * parseFloat(periodoInvestimento.value));
    }
    }
    calcularInvestimentoTotal();
    
    function calcularRendimentoTotal() {
        montante = parseFloat(valorInicial.value);
        periodoInvestimentoAnual = periodoInvestimento.value * 12;
        taxaJurosAnual = parseFloat(taxaJuros.value) / 12;
        if (periodo.value === "anual") {
            for (let i = 0; i < periodoInvestimentoAnual; i++) {
                montante += montante * (parseFloat(taxaJurosAnual) / 100)
                montante += parseFloat(valorMensal.value);
                rendimentoTotal.value = montante.toFixed(2);
                jurosTotal.value = parseFloat(montante - investimentoTotal.value).toFixed(2);
            }
        } else {
        for (let i = 0; i < periodoInvestimento.value; i++) {
            montante += montante * (parseFloat(taxaJuros.value) / 100) + parseFloat(valorMensal.value);
            rendimentoTotal.value = montante.toFixed(2);
            jurosTotal.value = parseFloat(montante - investimentoTotal.value).toFixed(2);
        }
    }
    }
    calcularRendimentoTotal();
    }