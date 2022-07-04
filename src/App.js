import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Header />
      <div className="app_body">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/view_events" element={<Welcome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
