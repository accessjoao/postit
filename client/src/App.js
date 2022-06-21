import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
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
            <Route path="/cards" element={<Container />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
