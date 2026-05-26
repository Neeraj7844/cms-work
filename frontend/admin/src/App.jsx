import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminHero from "./pages/AdminHero";
import AdminFeature from "./pages/AdminFeature";
import AdminAchievement from "./pages/AdminAchievement";
import AdminService from "./pages/AdminService";
import AdminProgress from "./pages/AdminProgress";
import AdminTestimonial from "./pages/AdminTestimonial";
import AdminAbout from "./pages/AdminAbout";
import AdminProject from "./pages/AdminProject";
import FormData from "./pages/FormData";
const App = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/hero"
        element={<AdminHero />}
      />
      <Route
      path="/features"
      element={<AdminFeature />}
    />
    <Route
      path="/achievement"
      element={<AdminAchievement />}
    />
    <Route
      path="/admin/service"
      element={<AdminService />}
    />
    <Route
      path="/admin/progress"
      element={<AdminProgress />}
    />
    <Route
      path="/testimonial"
      element={<AdminTestimonial />}
      />
      <Route
      path="/about"
      element={<AdminAbout />}
      />
      <Route
        path="/admin/project"
        element={<AdminProject />}
        />
        <Route
          path="/messages"
          element={<FormData />}
        />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;