import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';  // Pastikan ini mengarah ke file Home.jsx yang benar
import Sukses from './pages/Sukses';
import NavbarComponent from './component/NavbarComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          {/* Tambahkan rute untuk path root ("/") */}
          <Route path="/" element={<Home />} />  {/* Tambahkan ini untuk "/" */}
          <Route path="/sukses" element={<Sukses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
