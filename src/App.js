import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/nav/Navbar";
import { Home } from "./components/home/Home";
import { Teachers } from "./components/teachers/Teachers";
import { Users } from "./components/users/Users";
import { Members } from "./components/members/Members";
import { Courses } from "../src/components/courses/Courses";
import { Employees } from "../src/components/employees/Employees";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Projects } from "./components/projects/Projects";
import { ProtectedRoute } from "./components/nav/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<div>Apply</div>} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <Members />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            className="not-exist"
            element={<div>Page does not exist</div>}
          />
          {/* <Route path="/career" element={<div>Career</div>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
