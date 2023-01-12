import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AddPage from './Pages/AddPage';

function App() {
  return (
    <div className="meme-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add/:imageId" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
