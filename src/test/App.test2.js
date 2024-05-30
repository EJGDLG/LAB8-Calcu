import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Display from '../component/Display';

test('suma dos números correctamente', () => {
  const { getByText, getByTestId } = render(<App display={new Display()} />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('valor-actual')).toHaveTextContent('5');
});

test('resta dos números correctamente', () => {
  const { getByText, getByTestId } = render(<App display={new Display()} />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('valor-actual')).toHaveTextContent('3');
});
