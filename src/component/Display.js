import Calculadora from './Calculadora';
import Borrar from './Borrar';
import Numeros from './Numeros';

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.borrar = new Borrar(this);
        this.numeros = new Numeros(this);
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        };
    }

    computar(tipo) {
        if (this.tipoOperacion !== 'igual') {
            this.calcular();
        }
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.numeros.imprimirValores();
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;

        let resultado;
        switch (this.tipoOperacion) {
            case 'sumar':
                resultado = this.calculador.sumar(valorAnterior, valorActual);
                break;
            case 'restar':
                resultado = this.calculador.restar(valorAnterior, valorActual);
                break;
            case 'multiplicar':
                resultado = this.calculador.multiplicar(valorAnterior, valorActual);
                break;
            case 'dividir':
                if (valorActual === 0) {
                    resultado = 'ERROR';
                } else {
                    resultado = this.calculador.dividir(valorAnterior, valorActual);
                }
                break;
            default:
                return;
        }

        if (resultado < 0 || resultado > 999999999 || resultado.toString().length > 9) {
            this.valorActual = 'ERROR';
        } else {
            this.valorActual = resultado.toString();
        }
    }
}

export default Display;
