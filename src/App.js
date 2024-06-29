import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PropertyDetail from './Pages/PropertyDetail';
import FavoritesPage from './Pages/FavoritesPage';
import ContactUs from './Pages/ContactUs';
import AddPropertyPage from './Pages/AddPropertyPage';
import LoginPage from './Pages/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertiesPage from './Pages/PropertiesPage';
import SearchResultsPage from './Pages/SearchResultsPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/add-property" element={<AddPropertyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/search" element={<SearchResultsPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

