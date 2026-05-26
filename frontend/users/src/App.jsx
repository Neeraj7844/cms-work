// App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TestPage from "./pages/TestPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/project"
        element={<Project />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
  <Route 
    path="/testpage"
    element={<TestPage/>}
    />
    </Routes>

  );

}

export default App;