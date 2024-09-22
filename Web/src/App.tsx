import { BrowserRouter, useNavigate } from 'react-router-dom';
import RegistrationPage from './pages/registrationPage';
import AppRouter from './components/AppRouter';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
