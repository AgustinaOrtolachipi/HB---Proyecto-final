import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResidenceDetail from './pages/ResidenceDetail';
import FavoritesPage from './pages/FavoritesPage';
import ContactUs from './pages/ContactUs';
import AddPropertyPage from './pages/AddPropertyPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residence-detail" element={<ResidenceDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/add-property" element={<AddPropertyPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer /> {}
      </div>
    </Router>
  );
}

export default App;
