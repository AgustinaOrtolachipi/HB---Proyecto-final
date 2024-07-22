import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResidenceDetail from './pages/ResidenceDetail';
import FavoritesPage from './pages/FavoritesPage';
import ContactUs from './pages/ContactUs';
import AddPropertyPage from './pages/AddPropertiesPage';
import LoginPage from './pages/LoginPage';
import PropertiesPage from './pages/PropertiesPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import propertiesData from './propertiesData';

const App = () => {
  const [properties, setProperties] = useState(propertiesData);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residence-detail" element={<ResidenceDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/add-property" element={<AddPropertyPage addProperty={addProperty} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/properties" element={<PropertiesPage properties={properties} />} />
            <Route path="/search-results" element={<SearchResultsPage properties={properties} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;