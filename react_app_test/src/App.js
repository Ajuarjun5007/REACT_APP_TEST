import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.tsx';
import LoginPage from './Pages/LoginPage.tsx'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;
