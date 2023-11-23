import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/api/register" element={<Register />} />
          <Route path="/api/login" element={<Login />} />
          <Route path="/api/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
