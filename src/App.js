import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Events from "./components/Events";
import Tables from "./components/Tables";
import ManageGuest from "./components/ManageGuest";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/view_events" element={<Events />} />
          <Route path="/view_seating_charts" element={<Tables />} />
          <Route path="/manage_guests" element={<ManageGuest />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
