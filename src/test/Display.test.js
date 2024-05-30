import Display from '../component/Display';
import Calculadora from '../component/Calculadora';

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

});
