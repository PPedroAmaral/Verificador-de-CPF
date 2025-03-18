let cpf = '123.456.789-10'; //insira um CPF

function limparCPF(cpf) {
    return cpf.replace(/\D+/g, '');
}

let cpfLimpo = limparCPF(cpf);

function converterCPFParaArrayDeNumeros(cpfLimpo) {
    return Array.from(cpfLimpo).map(Number);
}

let valores = converterCPFParaArrayDeNumeros(cpfLimpo);
let multiplicadores = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function calcularDigitoVerificador(numeros, multiplicadores) {
    return numeros.map((numero, index) => numero * multiplicadores[index]);
}

let resultado1 = calcularDigitoVerificador(valores.slice(0, 9), multiplicadores);
let resultado2 = calcularDigitoVerificador(valores.slice(0, 10), multiplicadores2);

function somaArray (array) {
    return array.reduce((ac, valor) => {
        return ac + valor;
    },0)
}

let soma1 = somaArray(resultado1)
let soma2 = somaArray(resultado2)

function primerioDigito (soma) {
    let digito = 11 - (soma % 11);
    if(digito > 9){
        return 0
    } else {
        return digito
    }
}

let digito1 = primerioDigito(soma1);
let digito2 = primerioDigito(soma2);

function verificadorCPF(valores, digito1, digito2){
    const ultimoNumero = valores[valores.length -1];
    const penultimoNumero = valores[valores.length -2];

    if (penultimoNumero === digito1 && ultimoNumero === digito2){
        return "CPF Válido!"
    }else {
        return "CPF Inválido!";
      }
}

let cpfVerificado = verificadorCPF(valores, digito1, digito2);
console.log(cpfVerificado);