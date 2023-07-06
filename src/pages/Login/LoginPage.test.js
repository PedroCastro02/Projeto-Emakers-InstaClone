import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import RegisterPage from '../Register/RegisterPage';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><LoginPage /></BrowserRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('given user clicks on register button, then go to register page', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/Register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );

  const registerButton = screen.getByTestId('register-button');
  await userEvent.click(registerButton);

  expect(window.location.pathname).toEqual('/Register');
});
