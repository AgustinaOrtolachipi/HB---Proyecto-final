import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ResidenceDetail from './Pages/ResidenceDetail';
import FavoritesPage from './Pages/FavoritesPage';
import ContactUs from './Pages/ContactUs';
import AddPropertyPage from './Pages/AddPropertiesPage';
import LoginPage from './Pages/LoginPage';
import PropertiesPage from './Pages/PropertiesPage';
import SearchResultsPage from './Pages/SearchResultsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import propertiesData from './propertiesData';

const App = () => {
  const [properties, setProperties] = React.useState(propertiesData);

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
            <Route path="/add-property" element={<AddPropertyPage />} />
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