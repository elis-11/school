import { Routes, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import PageHome from "./components/PageHome";
import PageProjects from "./components/PageProjects";
import PageSkills from "./components/PageSkills";
import PageAbout from "./components/PageAbout";
import Contact from "./components/PageContact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/skills" element={<PageSkills />} />
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/" element={<PageHome />} />
      </Routes>
    </div>
  );
}

export default App;
