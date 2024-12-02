import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router Hook für die Navigation

  const handleLogin = () => {
    // Beispielhafte Login-Logik (kann durch API-Aufruf ersetzt werden)
    if (username === "testuser" && password === "password123") {
      console.log("Erfolgreich eingeloggt!");
      navigate("/dashboard"); // Leitet zur gewünschten Seite weiter
    } else {
      alert("Benutzername oder Passwort ist falsch!");
    }
  };

  return (
    <div className="login-page">
      <h2>Willkommen zurück!</h2>
      <div className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
        />
        <button onClick={handleLogin}>Anmelden</button>
      </div>
      <div className="back-button-container">
        <Link to="/" className="back-button">Zurück zur Startseite</Link>
      </div>
    </div>
  );
};

export default LoginPage;
