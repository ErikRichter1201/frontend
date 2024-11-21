import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import RoomSelectionPage from './pages/RoomSelectionPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/rooms" element={<RoomSelectionPage />} />
    </Routes>
  );
}

export default App;
