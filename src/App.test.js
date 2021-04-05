import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App';

test('renders node text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Node/);
  expect(linkElement).toBeInTheDocument();
});

test('renders node text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Node/);
  expect(linkElement).toBeInTheDocument();
});
