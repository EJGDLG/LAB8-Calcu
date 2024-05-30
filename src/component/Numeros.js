class Numeros {
    constructor(display) {
        this.display = display;
    }

    agregarNumero(numero) {
        if (numero === '.' && this.display.valorActual.includes('.')) return;
        if (this.display.valorActual.includes('.') && this.display.valorActual.split('.')[1].length >= 1) return;
        if (this.display.valorActual.replace('.', '').length >= 9) return;
        this.display.valorActual = this.display.valorActual.toString() + numero.toString();
        this.display.imprimirValores();
    }

    imprimirValores() {
        if (this.display.valorActual.length > 9) {
            this.display.valorActual = 'ERROR';
        }

        this.display.displayValorActual.textContent = this.display.valorActual;

        if (this.display.valorActual === 'ERROR') {
            this.display.displayValorAnterior.textContent = '';
        } else if (this.display.tipoOperacion === 'restar' && parseFloat(this.display.valorActual) < 0) {
            this.display.displayValorActual.textContent = 'ERROR';
            this.display.displayValorAnterior.textContent = '';
        } else {
            this.display.displayValorAnterior.textContent = `${this.display.valorAnterior} ${this.display.signos[this.display.tipoOperacion] || ''}`;
        }
    }
}

export default Numeros;
