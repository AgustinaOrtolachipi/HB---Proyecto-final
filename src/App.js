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
import ProtectedRoute from './components/ProtectedRoute';
import OwnerArea from './Pages/OwnerArea';
import TenantArea from './Pages/TenantArea';
import AdminDashboard from './Pages/AdminDashboard';

const App = () => {
  const [properties, setProperties] = useState(propertiesData);
  const isAuthenticated = false; // O true, según corresponda
  const userRole = 'guest'; // O 'admin', 'tenant', 'owner', según corresponda

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  allowedRoles={['admin']}
                  userRole={userRole}
                >
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  allowedRoles={['tenant']}
                  userRole={userRole}
                >
                  <TenantArea />
                </ProtectedRoute>
              }
            />
            <Route
              path="/owner"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  allowedRoles={['owner']}
                  userRole={userRole}
                >
                  <OwnerArea />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/residence-detail/:id" element={<ResidenceDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/add-property" element={<AddPropertyPage />} />
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
