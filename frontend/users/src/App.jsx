// App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TestPage from "./pages/TestPage";

/* BLOG PAGE IMPORT */

import BrandIdentityBlog
from "./components/BrandIdentityBlog";
import DesignDigitalBlog
from "./components/DesignDigitalBlog";
import DigitalMarketingBlog
from "./components/DigitalMarketingBlog";
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

      {/* BLOG PAGE ROUTE */}

      <Route
        path="/brand-identity-blog"
        element={<BrandIdentityBlog />}
      />
      <Route
      path="/design-digital-blog"
      element={<DesignDigitalBlog />}
      />
      <Route
      path="/digital-marketing-blog"
      element={<DigitalMarketingBlog />}
      />
    </Routes>

  );

}

export default App;