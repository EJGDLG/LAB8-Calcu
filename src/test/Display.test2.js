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
    test('should handle addition correctly', () => {
        display.agregarNumero('5');
        display.computar('sumar');
        display.agregarNumero('3');
        display.computar('igual');
        expect(displayValorActual.textContent).toBe('8');
    });

    test('should display ERROR for division by zero', () => {
        display.agregarNumero('5');
        display.computar('dividir');
        display.agregarNumero('0');
        display.computar('igual');
        expect(displayValorActual.textContent).toBe('ERROR');
    });
});
