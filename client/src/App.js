import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <NavBar handleToggleDarkMode={setDarkMode} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Container />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

export default App;
