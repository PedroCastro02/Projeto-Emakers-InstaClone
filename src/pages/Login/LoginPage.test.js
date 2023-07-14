import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from '../Register/RegisterPage';
import InstaClonePage from 'C:/Users/User/Desktop/projeto/src/pages/InstaClone/InstaClone.js'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('given user clicks on register button, then go to register page', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );

  const registerButton = screen.getByTestId('register-button');
  await userEvent.click(registerButton);

  expect(window.location.pathname).toEqual('/Register');
});

test('given user clicks on enter-button, then go to InstaClonePage', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/InstaClonePage" element={<InstaClonePage />} />
      </Routes>
    </BrowserRouter>
  );

  const enterButton = screen.getByTestId('enter-button');
  await userEvent.click(enterButton);

  expect(window.location.pathname).toEqual('/InstaClonePage');
});
