/*let valorPago = 80000;
let valorParcela = 0;
let qntParcelas = 0;
let anos = 5;
let kmMes = 5000;
let depreciacao = 13;
let salario = 1;
let ganhoKm = 1;
let ipva = 0;
let seguro = 0;
let valorPneu = 1500;
let kmPneu = 40000;
let valorOleo = 300;
let kmOleo = 10000;
let valorManut = 0;
let gastosMensais = 0;
let valorGasolina = 5;
let consumoGasolina = 15;
let valorEtanol = 4;
let consumoEtanol = 10;
let valorGnv = 4,80;
let consumoGnv = 22;*/

const calcular = document.getElementById('calcular');

function calc () {
    const valor = document.getElementById('valor').value.replace(",", ".");
    const km = document.getElementById('km').value.replace(",", ".");
    const resultado = document.getElementById('resultado');

    if (valor !== '' && km !== ''){
        const valorCalculado = (valor/km).toFixed(2);
        resultado.textContent = 'O valor de cada Km rodado é de: R$' + valorCalculado;
    } else {
        resultado.textContent ='Preencha todos os campos!';
    }
}

calcular.addEventListener('click', calc);