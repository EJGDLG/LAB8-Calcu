// App.js
import React, { useEffect, useRef } from 'react';
import './index.css';
import Display from './component/Display';
import Calculadora from './component/Calculadora';

function App() {
  const displayRef = useRef(null);
  const display = useRef(null);

  useEffect(() => {
    const displayValorAnterior = document.getElementById('valor-anterior');
    const displayValorActual = document.getElementById('valor-actual');
    display.current = new Display(displayValorAnterior, displayValorActual, new Calculadora());
  }, []);

  return (
    <div className="container">
      <div className="calculadora">
        <div className="display">
          <div id="valor-anterior"></div>
          <div id="valor-actual"></div>
        </div>
        <button className="col-2" onClick={() => display.current.borrarTodo()}>C</button>
        <button onClick={() => display.current.borrar()}>&larr;</button>
        <button className="operador" value="dividir" onClick={() => display.current.computar('dividir')}>/</button>
        <button className="numero" onClick={() => display.current.agregarNumero('7')}>7</button>
        <button className="numero" onClick={() => display.current.agregarNumero('8')}>8</button>
        <button className="numero" onClick={() => display.current.agregarNumero('9')}>9</button>
        <button className="operador" value="multiplicar" onClick={() => display.current.computar('multiplicar')}>X</button>
        <button className="numero" onClick={() => display.current.agregarNumero('4')}>4</button>
        <button className="numero" onClick={() => display.current.agregarNumero('5')}>5</button>
        <button className="numero" onClick={() => display.current.agregarNumero('6')}>6</button>
        <button className="operador" value="restar" onClick={() => display.current.computar('restar')}>-</button>
        <button className="numero" onClick={() => display.current.agregarNumero('1')}>1</button>
        <button className="numero" onClick={() => display.current.agregarNumero('2')}>2</button>
        <button className="numero" onClick={() => display.current.agregarNumero('3')}>3</button>
        <button className="operador" value="sumar" onClick={() => display.current.computar('sumar')}>+</button>
        <button className="col-2 numero" onClick={() => display.current.agregarNumero('0')}>0</button>
        <button className="numero" onClick={() => display.current.agregarNumero('.')}>.</button>
        <button className="operador" value="igual" onClick={() => display.current.computar('igual')}>=</button>
      </div>
    </div>
  );
}

export default App;