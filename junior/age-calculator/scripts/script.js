// let dayInput = document.querySelector('#day').value
// let monthInput = document.querySelector('#month').value
// let yearInput = document.querySelector('#year').value
// const btn = document.querySelector('.btn')

// const years = document.querySelector('years-number')
// const months = document.querySelector('months-number')
// const days = document.querySelector('days-number')

// function verifyMonthDays() {
//     let monthW31days = [1, 3, 5, 7, 8, 10, 12]

//     let monthW30days = [4, 6, 9, 11];

//     if (monthW30days.includes(parseInt(monthInput))) {

//     } else if (monthW31days.includes(parseInt(monthInput))) {

//     }
// }
// btn.addEventListener('click', function () {
//     if (monthInput = monthW30days) {
//         dayInput.length = [30]
//     } else (monthInput = monthW31days){
//         dayInput.length = [31]
//     }
// })

// Função para calcular a idade
function calcularIdade() {
    // Obter os valores do formulário
    let dia = document.getElementById('#day').value;
    let mes = document.getElementById('#month').value;
    let ano = document.getElementById('#year').value;

    // Criar uma data com a data de nascimento
    let dataNascimento = new Date(ano, mes - 1, dia);

    // Obter a data atual
    let dataAtual = new Date();

    // Calcular a diferença em milissegundos entre as duas datas
    let diferencaMilissegundos = dataAtual - dataNascimento;

    // Converter a diferença de milissegundos para anos, meses e dias
    let idadeEmAnos = Math.floor(diferencaMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    let idadeEmMeses = Math.floor((diferencaMilissegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    let idadeEmDias = Math.floor((diferencaMilissegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Exibir a idade
    document.getElementById('years-number').innerText = idadeEmAnos + ' years';
    document.getElementById('months-number').innerText = idadeEmMeses + ' months';
    document.getElementById('days-number').innerText = idadeEmDias + ' days';
}

// Adicionar um ouvinte de evento ao botão
document.querySelector('.btn').addEventListener('click', calcularIdade);
