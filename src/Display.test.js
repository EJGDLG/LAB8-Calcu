import Display from './Display';
import Calculadora from './Calculadora';

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

    test('should add a number and display it', () => {
        display.agregarNumero('5');
        expect(displayValorActual.textContent).toBe('5');
    });

    test('should not allow more than one decimal point', () => {
        display.agregarNumero('5');
        display.agregarNumero('.');
        display.agregarNumero('.');
        expect(displayValorActual.textContent).toBe('5.');
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
