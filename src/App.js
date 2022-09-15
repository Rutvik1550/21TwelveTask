import { Route, Routes } from 'react-router-dom';
import './App.css';
import Album from './pages/Album';
import Home from './pages/Home';
import Photos from './pages/Photos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/albums" exact element={<Album />} />
        <Route path="/photos" exact element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
