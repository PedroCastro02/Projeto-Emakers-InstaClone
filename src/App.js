
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import InstaClonePage from './pages/InstaClone/InstaClone';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/InstaClonePage' element={<InstaClonePage />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
