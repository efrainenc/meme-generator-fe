import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import View from './Pages/ViewPage';
import AddPage from './Pages/AddPage';

function App() {
  return (
    <div className="meme-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add/" element={<AddPage />} />
        <Route path="/add/:imageId" element={<AddPage />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>

    </div>
  );
}

export default App;
