class CPFValidador {
    constructor(cpf) {
        this.cpf = cpf;
        this.cpfLimpo = this.limparCPF();
        this.valores = this.converterCPFParaArray();
    }

    limparCPF() {
        return this.cpf.replace(/\D+/g, '');
    }

    converterCPFParaArray(){
        return Array.from(this.cpfLimpo).map(Number); 
    }

    calcularDigitoVerificador(numeros, multiplicadores) {
        return numeros.map((numero, index) => numero * multiplicadores[index]);
    }

    somaArray(array) {
        return array.reduce((acumulador, valor) => acumulador + valor, 0);
    }

    primeiroDigito(soma) {
        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
        
    }

    validarCPF() {
        if (this.cpfLimpo.length !== 11) {
            return "CPF Inválido!";
        }

        const multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

        const resultado1 = this.calcularDigitoVerificador(this.valores.slice(0,9),multiplicadores1);
        const soma1 = this.somaArray(resultado1);
        const digito1 = this.primeiroDigito(soma1);

        const resultado2 = this.calcularDigitoVerificador(this.valores.slice(0,10),multiplicadores2);
        const soma2 = this.somaArray(resultado2);
        const digito2 = this.primeiroDigito(soma2); 

        const penultimoNumero = this.valores[this.valores.length - 2];
        const ultimoNumero = this.valores[this.valores.length - 1];
        
        if (penultimoNumero === digito1 && ultimoNumero === digito2) {
            return "CPF Válido!";
          } else {
            return "CPF Inválido!";
          }
    }

}

let cpf = '123.456.789-10';  // insira o cpf
const validador = new CPFValidador(cpf);
const resultadoVadidacao = validador.validarCPF();
console.log(resultadoVadidacao);
