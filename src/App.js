import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Registromascota from './pages/Registromascota';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Registromascota" element={<Registromascota />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
