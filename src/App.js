import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="login">Login</NavLink>
        </nav>
        <h2>Manage your app</h2>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
