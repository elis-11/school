import { Routes, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Todos from "./components/Todos";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
