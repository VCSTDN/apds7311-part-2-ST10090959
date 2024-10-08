// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "./style.scss";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
