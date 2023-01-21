const form = document.getElementById('form-agenda');
const linhaExemplo = document.getElementById('linha-exemplo');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-usuario');
    const inputTelefone = document.getElementById('telefone-usuario');

    if (nomes.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(parseFloat(inputTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    linhaExemplo.style.display = 'none';
}