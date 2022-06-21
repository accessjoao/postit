import { useState } from "react";
import Container from "./components/Container";
import NavBar from "./components/NavBar";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="container">
      <NavBar handleToggleDarkMode={setDarkMode}/>
      <Container />
    </div>
    </div>
  );
}

export default App;
