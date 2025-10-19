// src/App.jsx (Revised)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header'; 
// import Footer from './components/Footer'; // Keep this placeholder for later

// Import Pages
  import HomePage from './Pages/HomePage';
//  import SearchPage from './pages/SearchPage';
// //  import LoginPage from './pages/LoginPage';
//  import SignupPage from './pages/SignupPage'; 
// Create a basic placeholder for DashboardPage too
// import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      {/* HEADER component is placed outside Routes to show on every page */}
      <Header /> 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> */}
        
      </Routes>

      {/* Footer component would go here */}
    </BrowserRouter>
  );
}

export default App;