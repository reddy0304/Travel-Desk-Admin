import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShuttlePage from "./pages/shuttle";
import DriversPage from "./pages/drivers";
import UsersPage from "./pages/user";
import CarsPage from "./pages/cars";
import Dashboard from "./pages/dashboard";
import BookingsPage from "./pages/bookings";
import AlertsPage from "./pages/alerts";
import LoginPage from "./pages/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication logic
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} {/* Show Navbar only if authenticated */}
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/shuttle"
          element={
            isAuthenticated ? <ShuttlePage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/drivers"
          element={
            isAuthenticated ? <DriversPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/user"
          element={
            isAuthenticated ? <UsersPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/cars"
          element={
            isAuthenticated ? <CarsPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/bookings"
          element={
            isAuthenticated ? <BookingsPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/alerts"
          element={
            isAuthenticated ? <AlertsPage /> : <Navigate to="/" />
          }
        />
        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
