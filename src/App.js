import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <h2>IGNITE YOUR CAREER IN TECH</h2>
        <h4>kip years of studying and become a Web Developer, Data Scientist or Digital Product Designer from scratch… or level up your current career with new, future-proof tech skills.</h4>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/teachers" element={<div>Teachers</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
