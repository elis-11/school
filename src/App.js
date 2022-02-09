import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

function Home() {
  return <h1>Elis</h1>;
}

function About() {
  return <h2>About</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
