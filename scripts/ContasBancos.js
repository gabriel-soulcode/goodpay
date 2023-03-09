// Inputs
const inputCPF = document.getElementById('inputCPF');
const inputSenha = document.getElementById('inputSenha');

// Tabela
const conteudoTab = document.getElementById('conteudo-tabela');

const consultar = document.getElementById('consultar');

//objetos

const usuarios = [
  {
    cpf: '333.444.555-66',
    senha: '12345',
    conta: 'Banco do Brasil',
    saldoAtual: 389.90,
    lancamentosFuturos: 200.50
  },
  {
    cpf: '111.222.333-44',
    senha: '67890',
    conta: 'Itau',
    saldoAtual: 580.99,
    lancamentosFuturos: 400.75
  },
  {
    cpf: '999.888.777-66',
    senha: '03568',
    conta: 'Bradesco',
    saldoAtual: 10000.0,
    lancamentosFuturos: 1250.0
  }
];

//Botão
consultar.addEventListener('click', () => {
  const cpf = inputCPF.value;
  const senha = inputSenha.value;

  //Verificar dados
  let usuarioValido = usuarios.find(usuario => usuario.cpf === cpf);

  if (usuarioValido !== undefined) {
    if (usuarioValido.senha === senha) {
      conteudoTab.innerHTML = `
    <tr>
        <td>${usuarioValido.conta}</td>
        <td>${usuarioValido.saldoAtual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        <td>${usuarioValido.lancamentosFuturos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
    </tr>`;
    } else {
      alert('Senha incorreta!');
    }
  } else {
    alert('Usuário não existe!');
  }
});


