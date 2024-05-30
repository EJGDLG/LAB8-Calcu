class Borrar {
    constructor(display) {
        this.display = display;
    }

    borrar() {
        this.display.valorActual = this.display.valorActual.toString().slice(0, -1);
        this.display.imprimirValores();
    }

    borrarTodo() {
        this.display.valorActual = '';
        this.display.valorAnterior = '';
        this.display.tipoOperacion = undefined;
        this.display.imprimirValores();
    }
}

export default Borrar;
