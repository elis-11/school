import { Routes, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
