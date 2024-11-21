import React from 'react';
import './StartPage.css'; // Importiert die CSS-Datei
import { useNavigate } from 'react-router-dom'; // Für die Navigation

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <h1>Willkommen auf der Startseite</h1>
      <p>Wähle eine der Optionen, um fortzufahren:</p>
      
      <div className="buttons-container">
        <button 
          className="start-button" 
          onClick={() => navigate('/register')}
        >
          Zur Anmeldung
        </button>
      </div>
    </div>
  );
};

export default StartPage;
