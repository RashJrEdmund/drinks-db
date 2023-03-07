/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
