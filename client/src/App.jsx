import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { ClassProvider } from "./StatsProvider";

import "./App.css";

function App() {
  return (
    <>
      <ClassProvider>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route
              exact
              path="/profile/:platform/:gamertag"
              element={<Profile />}
            />
          </Routes>
        </Router>
      </ClassProvider>
    </>
  );
}

export default App;
