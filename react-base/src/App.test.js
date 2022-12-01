import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smit gabani text', () => {
  render(<App />);
  const linkElement = screen.getByText(/smit gabani/i);
  expect(linkElement).toBeInTheDocument();
});
