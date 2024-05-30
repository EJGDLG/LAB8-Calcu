import Display from '../component/Display';


// Mock the Calculadora class
jest.mock('./Calculadora');

describe('Display', () => {
    let displayValorAnterior, displayValorActual, display;

    beforeEach(() => {
        displayValorAnterior = { textContent: '' };
        displayValorActual = { textContent: '' };
        display = new Display(displayValorAnterior, displayValorActual);
        display.calculador.sumar = jest.fn((a, b) => a + b);
        display.calculador.restar = jest.fn((a, b) => a - b);
        display.calculador.multiplicar = jest.fn((a, b) => a * b);
        display.calculador.dividir = jest.fn((a, b) => a / b);
    });
     
    test('should display ERROR for result exceeding 999999999', () => {
        display.agregarNumero('999999999');
        display.computar('sumar');
        display.agregarNumero('1');
        display.computar('igual');
        expect(displayValorActual.textContent).toBe('ERROR');
    });

    test('should display ERROR for negative results', () => {
        display.agregarNumero('5');
        display.computar('restar');
        display.agregarNumero('10');
        display.computar('igual');
        expect(displayValorActual.textContent).toBe('ERROR');
    });
});
