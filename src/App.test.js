import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main section heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /오늘부터 시작하는 신상 건강 아이템/,
  });
  expect(headingElement).toBeInTheDocument();
});
