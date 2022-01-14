import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
