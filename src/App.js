import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Teachers } from "./pages/Teachers";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/teachers" element={<Teachers/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
