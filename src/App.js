import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AddPage from './Pages/AddPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/add/" element={<AddPage />} />
    </Routes>
  );
}

export default App;
