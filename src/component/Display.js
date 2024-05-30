import './index.css';
import Calculadora from './Calculadora';

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
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

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        if (this.tipoOperacion !== 'igual') {
            this.calcular();
        }
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        if (this.valorActual.includes('.') && this.valorActual.split('.')[1].length >= 1) return; // Permitir solo un punto decimal
        if (this.valorActual.replace('.', '').length >= 9) return; // Limitar a 9 caracteres excluyendo el punto decimal
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        if (this.valorActual.length > 9) {
            this.valorActual = 'ERROR';
        }

        this.displayValorActual.textContent = this.valorActual;

        if (this.valorActual === 'ERROR') {
            this.displayValorAnterior.textContent = '';
        } else if (this.tipoOperacion === 'restar' && parseFloat(this.valorActual) < 0) {
            this.displayValorActual.textContent = 'ERROR';
            this.displayValorAnterior.textContent = '';
        } else {
            this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        }
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
