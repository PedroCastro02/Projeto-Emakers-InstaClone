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
test('given user clicks on register button3, then go to Login page', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    );
  
    const registerButton3 = screen.getByTestId('register-button3');
    await userEvent.click(registerButton3);
  
    expect(window.location.pathname).toEqual('/');
  });