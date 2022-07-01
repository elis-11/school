import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/nav/Navbar";
import { Home } from "./pages/Home";
import { Teachers } from "./pages/Teachers";
import {Courses} from "./pages/Courses"
import {Employees} from "./pages/Employees"
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/teachers" element={<Teachers/>} />
          <Route path="/funding" element={<div>Funding</div>} />
          <Route path="/career" element={<div>Career</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<div>Apply</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
