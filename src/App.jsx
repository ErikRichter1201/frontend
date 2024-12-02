import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/RegisterPage";
import RoomSelectionPage from "./pages/RoomSelectionPage";
import Danke from "./pages/Danke";
import ImpressumPage from "./pages/ImpressumPage";
import LoginPage from "./pages/LoginPage"; // Importiere die Login-Seite
import CircleLayout from "./components/CircleLayout"; // Importiere CircleLayout
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <Routes>
      {/* Route für die Startseite mit CircleLayout */}
      <Route
        path="/"
        element={
          <div className="App">
            <CircleLayout /> {/* CircleLayout wird hier als Startseite verwendet */}
          </div>
        }
      />

      {/* Weitere Seiten */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/rooms" element={<RoomSelectionPage />} />
      <Route path="/danke" element={<Danke />} />
      <Route path="/impressum" element={<ImpressumPage />} />
      <Route path="/login" element={<LoginPage />} /> {/* Login-Seite */}
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
};

export default App;
